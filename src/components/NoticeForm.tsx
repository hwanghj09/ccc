import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const NoticeForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert('로그인이 필요합니다.');
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('notices')
      .insert([{ title, content, user_id: user.id }])
      .select();

    if (error) {
      alert('공지 작성 중 오류가 발생했습니다: ' + error.message);
    } else {
      alert('공지가 성공적으로 작성되었습니다!');
      setTitle('');
      setContent('');
      // Optionally, you might want to refresh the notice list here
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="notice-form">
      <h3>새 공지 작성</h3>
      <div>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <button type="submit" disabled={loading}>
          {loading ? '작성 중...' : '공지 작성'}
        </button>
      </div>
    </form>
  );
};

export default NoticeForm;
