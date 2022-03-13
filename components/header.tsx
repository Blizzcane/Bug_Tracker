import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={headerStyles.headerBar}>
      <h1 className={headerStyles.title}>
        Hey there, <span>User</span>!
          </h1>  
    </div>
  );
}