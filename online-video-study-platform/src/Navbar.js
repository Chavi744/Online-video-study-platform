const  Navbar= () => {
    return ( 

    <nav className="Navbar">
        <h1>Online-video-study-platform</h1>
        <div className="links"> 
        <a href="/">Home </a>
        <a href="/create" style={{
            color:"white",
            backgroundColor: '#f1356d',
            borderRadius:'200px' 
            }}> 
                new blog</a>            
        </div>
    </nav>
     );
}
 
export default Navbar;