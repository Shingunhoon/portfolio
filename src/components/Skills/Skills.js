import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
const stackList = [
  { img: 'HTML.png', name: 'HTML' },
  { img: '/CSS.png', name: 'CSS' },
  { img: '/JAVASCRIPT.png', name: 'JavaScript' },
  { img: 'REACT.png', name: 'React' },
  { img: 'NEXTJS.png', name: 'Next.js' },
  { img: 'NODEJS.png', name: 'Node.js' },
  { img: 'MONGODB.png', name: 'MongoDB' },
  { img: 'TYPESCRIPT.png', name: 'TypeScript' },
]

function CodingLanguages() {
  return (
    <div className="Container">
      <div className="SectionTitle">Skills</div>
      <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <div style={styles.container}>
            {stackList.map((stack, index) => (
              <div key={index} style={styles.card}>
                <img src={stack.img} alt={stack.name} style={styles.icon} />
                <p style={styles.name}>{stack.name}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

const styles = {
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100px',
  },
  icon: {
    width: '60px',
    height: '60px',
    objectFit: 'contain',
  },
  name: {
    marginTop: '8px',
    fontSize: '14px',
    color: '#333',
  },
}

export default CodingLanguages
