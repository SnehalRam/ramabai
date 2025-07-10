import React from 'react';
import './App.css';
import schoolEntry from './assets/schoolLogo/SchoolEntry.jpeg';
import flagEvent from './assets/schoolLogo/FlagEvent.jpeg';
import teachersGetTogether from './assets/teachers/TeachersGetTogether.jpeg';
import schoolCulturalActivity from './assets/studentsActivity/SchoolCulturalActivity.jpeg';
import studentAppreciation from './assets/studentsActivity/StudentAppreciation.jpeg';
import studentsCulturalActivity from './assets/studentsActivity/StudentsCulturalActivity.jpeg';

interface AboutProps {
  language: 'en' | 'mr';
}

const content = {
  en: {
    title: 'About Our Institution',
    subtitle: 'Building Future Leaders Since 1986',
    history: {
      title: 'Our History',
      content: 'Founded in 1986, our institution has grown from a small school to a comprehensive educational center. We have been serving the community of Saoli and surrounding areas for over 37 years, providing quality education and shaping the future of thousands of students.',
    },
    vision: {
      title: 'Our Vision',
      content: 'To be a leading educational institution that nurtures academic excellence, character development, and social responsibility, preparing students to become confident, compassionate, and successful global citizens.',
    },
    mission: {
      title: 'Our Mission',
      content: 'To provide holistic education that combines academic rigor with character building, fostering critical thinking, creativity, and leadership skills in a supportive and inclusive environment.',
    },
    achievements: {
      title: 'Key Achievements',
      items: [
        '37+ years of educational excellence',
        'Consistent academic performance',
        'Strong alumni network',
        'Community engagement programs',
        'Digital learning integration',
        'Sports and cultural achievements',
      ],
    },
    facilities: {
      title: 'Modern Facilities',
      items: [
        'Well-equipped science laboratories',
        'Digital classrooms with smart boards',
        'Computer lab with latest technology',
        'Library with extensive book collection',
        'Sports ground and indoor facilities',
        'CCTV surveillance for safety',
        'Separate sanitation facilities',
        'Clean and green campus environment',
      ],
    },
    staff: {
      title: 'Our Dedicated Staff',
      content: 'Our team of experienced and qualified teachers is committed to providing the best education to our students. They continuously update their skills and use innovative teaching methods to ensure effective learning.',
    },
    values: {
      title: 'Core Values',
      items: [
        'Excellence in Education',
        'Integrity and Ethics',
        'Respect for Diversity',
        'Innovation and Creativity',
        'Community Service',
        'Lifelong Learning',
      ],
    },
  },
  mr: {
    title: 'आमच्या संस्थेबद्दल',
    subtitle: '१९८६ पासून भविष्यातील नेते तयार करत आहोत',
    history: {
      title: 'आमचा इतिहास',
      content: '१९८६ मध्ये स्थापन झालेली आमची संस्था एका लहान शाळेतून व्यापक शैक्षणिक केंद्रात विकसित झाली आहे. आम्ही ३७ वर्षांपासून साओली आणि आसपासच्या समुदायाला सेवा देत आहोत, गुणवत्तापूर्ण शिक्षण देऊन हजारो विद्यार्थ्यांचे भविष्य घडवत आहोत.',
    },
    vision: {
      title: 'आमचे ध्येय',
      content: 'शैक्षणिक उत्कृष्टता, चारित्र्य विकास आणि सामाजिक जबाबदारी वाढवणारी अग्रगण्य शैक्षणिक संस्था बनणे, विद्यार्थ्यांना आत्मविश्वासू, करुणामय आणि यशस्वी जागतिक नागरिक बनवणे.',
    },
    mission: {
      title: 'आमचे ध्येय',
      content: 'शैक्षणिक कठोरता आणि चारित्र्य निर्मिती एकत्र करणारे सर्वांगीण शिक्षण देणे, सहायक आणि समावेशक वातावरणात चिकित्सक विचार, सर्जनशीलता आणि नेतृत्व कौशल्ये वाढवणे.',
    },
    achievements: {
      title: 'महत्वाची यशे',
      items: [
        '३७+ वर्षांची शैक्षणिक उत्कृष्टता',
        'सातत्यशील शैक्षणिक कामगिरी',
        'मजबूत पूर्वविद्यार्थी नेटवर्क',
        'समुदाय सहभाग कार्यक्रम',
        'डिजिटल शिक्षण एकात्मता',
        'क्रीडा आणि सांस्कृतिक यशे',
      ],
    },
    facilities: {
      title: 'आधुनिक सुविधा',
      items: [
        'सुसज्ज विज्ञान प्रयोगशाळा',
        'स्मार्ट बोर्डसह डिजिटल वर्गखोल्या',
        'नवीनतम तंत्रज्ञानासह संगणक प्रयोगशाळा',
        'विस्तृत पुस्तक संग्रहासह ग्रंथालय',
        'क्रीडा मैदान आणि घरगुती सुविधा',
        'सुरक्षेसाठी सीसीटीव्ही देखरेख',
        'स्वतंत्र स्वच्छतागृहे',
        'स्वच्छ आणि हिरवेगार कॅम्पस',
      ],
    },
    staff: {
      title: 'आमचे समर्पित कर्मचारी',
      content: 'आमच्या अनुभवी आणि पात्र शिक्षकांची टीम आमच्या विद्यार्थ्यांना सर्वोत्तम शिक्षण देण्यास वचनबद्ध आहे. त्यांचे कौशल्ये सतत अद्ययावत करतात आणि प्रभावी शिक्षणासाठी नाविन्यपूर्ण शिकवण्याच्या पद्धती वापरतात.',
    },
    values: {
      title: 'मूलभूत मूल्ये',
      items: [
        'शिक्षणात उत्कृष्टता',
        'सचोटी आणि नैतिकता',
        'विविधतेसाठी आदर',
        'नावीन्य आणि सर्जनशीलता',
        'समुदाय सेवा',
        'आजीवन शिक्षण',
      ],
    },
  },
};

const About: React.FC<AboutProps> = ({ language }) => {
  const c = content[language];
  return (
    <>
      <section className="about-hero">
        <img src={schoolEntry} alt="School Entry" className="about-hero-img" />
        <div className="about-hero-content">
          <h1>{c.title}</h1>
          <p className="subtitle">{c.subtitle}</p>
        </div>
      </section>
      <main className="about-content">
        <section className="about-section">
          <div className="about-grid">
            <div className="about-text">
              <h2>{c.history.title}</h2>
              <p>{c.history.content}</p>
            </div>
            <div className="about-image">
              <img src={flagEvent} alt="Flag Event" />
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="vision-mission">
            <div className="vm-card">
              <h3>{c.vision.title}</h3>
              <p>{c.vision.content}</p>
            </div>
            <div className="vm-card">
              <h3>{c.mission.title}</h3>
              <p>{c.mission.content}</p>
            </div>
          </div>
        </section>
        <section className="about-section">
          <h2>{c.achievements.title}</h2>
          <div className="achievements-grid">
            {c.achievements.items.map((item: string, i: number) => (
              <div className="achievement-card" key={i}>
                <div className="achievement-icon">🏆</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="about-section">
          <h2>{c.facilities.title}</h2>
          <div className="facilities-showcase">
            <img src={teachersGetTogether} alt="Teachers and Facilities" className="facilities-img" />
          </div>
          <div className="facilities-grid">
            {c.facilities.items.map((item: string, i: number) => (
              <div className="facility-item" key={i}>
                <span className="facility-icon">✅</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="about-section">
          <h2>{c.staff.title}</h2>
          <div className="staff-content">
            <img src={schoolCulturalActivity} alt="Staff and Cultural Activities" className="staff-img" />
            <p>{c.staff.content}</p>
          </div>
        </section>
        <section className="about-section">
          <h2>{c.values.title}</h2>
          <div className="values-showcase">
            <img src={studentAppreciation} alt="Student Appreciation" className="values-img" />
          </div>
          <div className="values-grid">
            {c.values.items.map((item: string, i: number) => (
              <div className="value-card" key={i}>
                <div className="value-icon">💎</div>
                <h4>{item}</h4>
              </div>
            ))}
          </div>
        </section>
        <section className="about-section">
          <div className="cultural-highlight">
            <img src={studentsCulturalActivity} alt="Cultural Activities" className="cultural-img" />
            <div className="cultural-text">
              <h3>{language === 'en' ? 'Cultural Excellence' : 'सांस्कृतिक उत्कृष्टता'}</h3>
              <p>
                {language === 'en' 
                  ? 'Our students excel not only in academics but also in cultural activities, showcasing their talents through various performances and competitions.'
                  : 'आमचे विद्यार्थी केवळ शिक्षणातच नव्हे तर सांस्कृतिक उपक्रमांमध्येही उत्कृष्ट कामगिरी करतात, विविध कार्यक्रम आणि स्पर्धांद्वारे त्यांची प्रतिभा दाखवतात.'
                }
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About; 