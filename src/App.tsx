import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css'; // Import the CSS
import { supabase } from './supabaseClient';
import Auth from './components/Auth';
import NoticeForm from './components/NoticeForm';

interface SupabaseSession {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at: number;
  token_type: string;
  user: {
    id: string;
    aud: string;
    email: string;
    // 필요한 경우 다른 사용자 속성 추가
  };
}

// Define page titles and background images
const pageTitles: { [key: string]: string } = {
  home: '문화창작부',
  members: '문화창작부',
  museum: '문화창작부',
  notice: '문화창작부',
};

const backgroundImages: { [key: string]: string } = {
  home: '/images/홈/홈_배경.jpg',
  members: '/images/멤버/멤버_배경.jpg',
  museum: '/images/박물관/박물관_배경.jpg',
  notice: '/images/공지/공지_배경.jpg',
};

// Navigation component
const Navigation: React.FC<{ session: SupabaseSession | null }> = ({ session }) => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1) || 'home'; // Get current page from URL

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="nav">
      <Link to="/" className={currentPage === 'home' ? 'active' : ''}>Home</Link>
      <Link to="/members" className={currentPage === 'members' ? 'active' : ''}>Members</Link>
      <Link to="/museum" className={currentPage === 'museum' ? 'active' : ''}>Museum</Link>
      <Link to="/notice" className={currentPage === 'notice' ? 'active' : ''}>Notice</Link>
      {session && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

// Home Page Component
const HomePage: React.FC = () => {
  return (
    <>
      <div className="header">
        <img src="images/홈/소개글.png" alt="title" style={{ width: '20%', height: '20%' }} /><br />
        <img src="images/홈/제목.png" alt="title" style={{ width: '20%', height: '20%' }} />
      </div>
      <div className="character-container">
        <img src="images/홈/캐릭터.png" alt="Main Characters" style={{ width: '50%', height: '50%' }} />
      </div>
    </>
  );
};

// Members Page Component
const MembersPage: React.FC = () => {
  return (
    <div id="members" className="content-section">
      <div className="character-profiles">
        <div className="profile">
          <img src="images/멤버/문화창작부프로필.png" alt="문화창작부" />
          <h3>문화창작부</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/culture_creating_club?igsh=MWIyYTRnNjRuZGRxZQ%3D%3D&utm_source=qr"><img src="images/멤버/인스타 로고.png" alt="Instagram" /></a>
            <a href="https://youtube.com/channel/UC1-qO1S6v3jpyIF_MdmsIEQ?si=9mAaM5jNI4h2PS8w"><img src="images/멤버/유튜브 로고.png" alt="YouTube" /></a>
            <a href="https://x.com/imsi657719?s=21"><img src="images/멤버/X 로고.png" alt="Twitter" /></a>
          </div>
        </div>
        <div className="profile">
          <img src="images/멤버/상시프로필.png" alt="부장 / 상시" />
          <h3>부장 / 상시</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/sangsi3679/?utm_source=ig_web_button_share_sheet"><img src="images/멤버/인스타 로고.png" alt="Instagram" /></a>
            <a href="https://www.youtube.com/@asr-t3z6m"><img src="images/멤버/유튜브 로고.png" alt="YouTube" /></a>
            <a href="https://x.com/aga04743744264?s=21&fbclid=PAZXh0bgNhZW0CMTEAAaeuIqNO6lunb3A2khlAmsqnFeU7B4x9HExlzzK_0WD8624BzctPN4NE09oxzQ_aem_722XsFPQHpRA8-VkhGvuSA"><img src="images/멤버/X 로고.png" alt="Twitter" /></a>
          </div>
        </div>
        <div className="profile">
          <img src="images/멤버/양고기프로필.png" alt="개발자 / 잔고기" />
          <h3>개발자 / 양고기</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/sheep._.meat/?utm_source=ig_web_button_share_sheet"><img src="images/멤버/인스타 로고.png" alt="Instagram" /></a>
          </div>
        </div>
        <div className="profile">
          <img src="images/멤버/소고기프로필.png" alt="기획자 / 소고기" />
          <h3>기획자 / 소고기</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/sogogi09?utm_source=ig_web_button_share_sheet"><img src="images/멤버/인스타 로고.png" alt="Instagram" /></a>
            <a href="https://x.com/sogogiu76125?s=21"><img src="images/멤버/X 로고.png" alt="Twitter" /></a>
          </div>
        </div>
        <div className="profile">
          <img src="images/멤버/안개꽃프로필.png" alt="작가 / 전계곡" />
          <h3>작가 / 안개꽃</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/angae_flower_/?utm_source=ig_web_button_share_sheet"><img src="images/멤버/인스타 로고.png" alt="Instagram" /></a>
            <a href="https://x.com/meolwing129?s=21"><img src="images/멤버/X 로고.png" alt="Twitter" /></a>
          </div>
        </div>
        <div className="profile">
          <img src="images/멤버/앵프로필.png" alt="디자이너 / 램" />
          <h3>디자이너 / 앵</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/aeng_uoi4/?utm_source=ig_web_button_share_sheet"><img src="images/멤버/인스타 로고.png" alt="Instagram" /></a>
            <a href="https://x.com/angae_flower_?s=21"><img src="images/멤버/X 로고.png" alt="YouTube" /></a>
          </div>
        </div>
        <div className="profile">
          <img src="images/멤버/토욥일프로필.png" alt="디자이너 / 토끼일" />
          <h3>디자이너 / 토욥일</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/toyob00/?utm_source=ig_web_button_share_sheet"><img src="images/멤버/인스타 로고.png" alt="Instagram" /></a>
            <a href="#"><img src="images/멤버/X 로고.png" alt="Twitter" /></a>
          </div>
        </div>
        <div className="profile">
          <img src="images/멤버/폐인귄프로필.png" alt="매니저 / 레인건" />
          <h3>매니저 / 폐인귄</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/pyeingwin/?utm_source=ig_web_button_share_sheet"><img src="images/멤버/인스타 로고.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Museum Page Component
const MuseumPage: React.FC = () => {
  return (
    <div id="museum" className="content-section">
      <img src='images/박물관/문화창작부 박물관 글씨.png' alt="Museum Title" />
      <div className="question-mark-container">
        <div className="question-box"><img src="images/박물관/외계인.jpg" alt="외계인" /></div>
        <div className="question-box">
          <a href="https://drive.google.com/uc?export=download&id=1V55bURIG3W_iloZHK8XpMGUl2liBWuA_" target="_blank" rel="noopener noreferrer">
            <img src="images/박물관/버추얼외계인.jpg" alt="버추얼외계인" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Notice Page Component
const NoticePage: React.FC<{ session: SupabaseSession | null }> = ({ session }) => {
  const [notices, setNotices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotices();
    const subscription = supabase
      .channel('public:notices')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'notices' }, payload => {
        fetchNotices(); // Refetch notices on any change
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchNotices = async () => {
    setLoading(true);
    console.log('공지 불러오기 시작...');
    const { data, error } = await supabase
      .from('notices')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('공지 불러오기 오류:', error.message);
      console.log('에러 발생!', error);
    } else {
      console.log('공지 불러오기 성공:', data);
      setNotices(data || []);
    }
    setLoading(false);
  };

  return (
    <div id="notice" className="content-section">
      <h2>공지</h2>
      {session && <NoticeForm />}
      {loading ? (
        <p>공지 불러오는 중...</p>
      ) : (
        <div className="notice-list">
          {notices.length > 0 ? (
            notices.map((notice) => (
              <div key={notice.id} className="notice-item">
                <h3>{notice.title}</h3>
                <p>{notice.content}</p>
                <p className="notice-date">{new Date(notice.created_at).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>등록된 공지가 없습니다.</p>
          )}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [session, setSession] = useState<SupabaseSession | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoadingSession(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const location = useLocation(); // use useLocation hook here
  const currentPage = location.pathname.substring(1) || 'home';

  useEffect(() => {
    document.title = pageTitles[currentPage];
    document.body.style.backgroundImage = `url(${backgroundImages[currentPage]})`;
    document.body.style.backgroundSize = 'cover'; // Add this for better background image display
    document.body.style.backgroundAttachment = 'fixed'; // Keep background fixed
  }, [currentPage]);

  if (loadingSession) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {!session ? (
        <Auth />
      ) : (
        <>
          <Navigation session={session} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/museum" element={<MuseumPage />} />
            <Route path="/notice" element={<NoticePage session={session} />} />
          </Routes>
        </>
      )}
    </div>
  );
};

const AppWrapper: React.FC = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
