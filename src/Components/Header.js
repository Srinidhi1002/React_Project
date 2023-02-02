import './css/header.css'
function Header(){
    return(
        <div class='header-right'>
            <div class="right-nav">
                
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>
            <div className='left-nav'>
               
                <a href="#">Challenges</a>
                <a href="#">Scoreboard</a>
                <a href="#">Users</a>
                <a href="#"><strong>HeroVired DevOps</strong></a>

            </div>
     
           
        </div>

    )
}
export default Header;