import Post from "./components/Post"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import './global.css';

import styles from './App.module.css';

const posts=[
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/IgorBarcelo.png',
      name: 'Igor Barcelo',
      role: 'Developer Master',
    },
    content: [
      {type: 'paragraph', content: 'Fala pessoal,'},
      {type: 'paragraph', content: 'Meu primeiro projeto em ReactJS.',},
      {type: 'paragraph', content: 'Primeiro de muitos!!!!'},
      {type: 'paragraph', content: 'illum labore error sint laborum rerum alias exercitationem ducimus consectetur.'},
      {type: 'link', content: '#react#show#js#novoprojeto'},
    ],
    publishedAt: new Date('2024-03-24 17:02:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/frohlich71.png',
      name: 'Victor Frohlich',
      role: 'Developer',
    },
    content: [
      {type: 'paragraph', content: 'Aeee rapaz',},
      {type: 'paragraph', content: 'Meus parabéns irmao!! Ótimo trabalho'},
    ],
    publishedAt: new Date('2024-03-25 20:02:00'),
  }
]

function App() {
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
