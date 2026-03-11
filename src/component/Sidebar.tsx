import styles from './Sidebar.module.css'; 
  
interface Project { id: string; name: string; color: string; } 
interface SidebarProps { projects: Project[]; isOpen: boolean; } 
  
export default function Sidebar({ projects, isOpen }: SidebarProps) { 
  return ( 
    <aside className={`${styles.sidebar} ${isOpen ? styles.visible : styles.hidden}`}> 
      <h2 style={{ marginBottom: '20px', fontSize: '18px', color: '#333' }}>Mes Projets</h2> 
      <div className={styles.projectList}> 
        {projects.map(p => ( 
          <div key={p.id} className={styles.projectItem}> 
            <span className={styles.projectColor} style={{ backgroundColor: p.color }} /> 
            <span className={styles.projectName}>{p.name}</span>
          </div> 
        ))} 
      </div>     
    </aside> 
  ); 
} 