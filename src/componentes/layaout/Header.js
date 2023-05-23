import React from 'react'


export const Header = () => {
    return (
        <div>
            <header className='header'>

                <div className='logo'>
                    <span>M</span>
                    <h3>Maximiliano Jesús Guerzoni</h3>
                    <div className='redes'>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i><img src='./images/facebook-icon.png' alt='facebook-icon' /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i><img src='./images/instagram-icon.png' alt='instagram-icon' /></a>
                    <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i><img src='./images/git-icon.png' alt='git-icon' /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i><img src='./images/linkedin-icon.png' alt='linkedin-icon' /></a>
                </div>
                </div>
            </header>
        </div>
    )
}
