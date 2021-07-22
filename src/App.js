import './App.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import axios from 'axios';
import {Movie, Movie_c} from './Movie.js';
const logoImage = '/images/wlogo.png';
const barImage = '/images/bar.png'; 


function createRandomNumbers(highest){
  var arr = [];
  var randomNum = 0;
  var arrLength = 3;

  for (var i=0;i<arrLength;i++){
    randomNum = Math.floor(Math.random() * (highest-1))+1;
    if (arr.indexOf(randomNum) === -1){
      arr.push(randomNum);
    }
    else{
      arrLength += 1;
    }

  }
  return arr; 
}

class App extends React.Component{

    state = {
       isLoading: true,
       movies: []
    }
    
    getMovies = async() => {
        const {data:{data: {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        this.setState({movies:movies, isLoading: false});
        console.log({movies});        
        
    }
    componentDidMount(){
        this.getMovies();
      
    }
    render(){
      const { movies } = this.state;
      const { isLoading } = this.state;

      const movie_c_numbers = createRandomNumbers(20);  
      const movie_c = this.state.movies;

      function moveToSlide(slideNum) {
        
      }

      //this.state.isLoading = this.state.isLoading;
      return ( <section>{ isLoading ? 
        (<div className='loader'>
          <img className='loader__text' src='/images/wlogo.png' alt='logo' title='logo'/>
          </div>
          ) : (
            
            <div className='all'>

              <nav className="navbar navbar-expand-lg fixed-top">
              <div className="container-fluid">
    
              <a className='navbar-brand' href='#'>
              <img src={logoImage} alt='website logo' id='logo' title='website logo' height='30px' weight='60px'/>
              </a>

              <button className="navbar-toggler Btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
              </button>
            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className='navbar-nav'>
                      <a className='genres nav-link' id ='action'>Action</a>

                      <a className='genres nav-link' id ='comedy'>Comedy</a>

                      <a className='genres nav-link' id ='documentary'>Documentary</a>

                      <a className='genres nav-link' id ='drama'>Drama</a>

                      <a className='genres nav-link' id ='horror'>Horror</a>
                  </div>
                </div>
              </div>
            </nav>

            <div id='carousel_top'>

            <i className="Btn fas fa-2x fa-chevron-left preBtn"></i>

            <div id='carousels'>

            <div className='None' style={{display:'none'}}></div>
            
            <div className='carousel__movie'>
                <Movie_c 
                  key={movie_c[movie_c_numbers[0]].id}
                  id={movie_c[movie_c_numbers[0]].id} 
                  year={movie_c[movie_c_numbers[0]].year} 
                  title={movie_c[movie_c_numbers[0]].title} 
                  summary={movie_c[movie_c_numbers[0]].summary} 
                  runtime={movie_c[movie_c_numbers[0]].runtime}
                  genres={movie_c[movie_c_numbers[0]].genres}
                  poster={movie_c[movie_c_numbers[0]].medium_cover_image}
                  rating={movie_c[movie_c_numbers[0].rating]}
                  yt_trailer_code={movie_c[movie_c_numbers[0]].yt_trailer_code} />
            </div>

            <div className='carousel__movie '>
                <Movie_c 
                  key={movie_c[movie_c_numbers[1]].id}
                  id={movie_c[movie_c_numbers[1]].id} 
                  year={movie_c[movie_c_numbers[1]].year} 
                  title={movie_c[movie_c_numbers[1]].title} 
                  summary={movie_c[movie_c_numbers[1]].summary} 
                  runtime={movie_c[movie_c_numbers[1]].runtime}
                  genres={movie_c[movie_c_numbers[1]].genres}
                  poster={movie_c[movie_c_numbers[1]].medium_cover_image}
                  rating={movie_c[movie_c_numbers[1].rating]}
                  yt_trailer_code={movie_c[movie_c_numbers[0]].yt_trailer_code} />
            </div>

            <div className='carousel__movie'>
                <Movie_c 
                  key={movie_c[movie_c_numbers[2]].id}
                  id={movie_c[movie_c_numbers[2]].id} 
                  year={movie_c[movie_c_numbers[2]].year} 
                  title={movie_c[movie_c_numbers[2]].title} 
                  summary={movie_c[movie_c_numbers[2]].summary} 
                  runtime={movie_c[movie_c_numbers[2]].runtime}
                  genres={movie_c[movie_c_numbers[2]].genres}
                  poster={movie_c[movie_c_numbers[2]].medium_cover_image}
                  rating={movie_c[movie_c_numbers[2].rating]}
                  yt_trailer_code={movie_c[movie_c_numbers[0]].yt_trailer_code} />
            </div>

            <div className='None' style={{display:'none'}}></div>

            </div>

            <i className="Btn fas fa-2x fa-chevron-right nextBtn"></i>

            </div>

            
            
            <div className='movies container'>
              {movies.map(movie => (               
                <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                runtime={movie.runtime}
                genres={movie.genres}
                poster={movie.medium_cover_image}
                rating={movie.rating}
                yt_trailer_code={movie.yt_trailer_code} />
            ))}
        
            </div>
            
            </div>
          )
      }</section>
      );

      
      
    }

    componentDidUpdate(){

      const preBtn = document.querySelector('.preBtn');
      const nextBtn = document.querySelector('.nextBtn');

      function changeContentsAuto() {

        const firstSlide = document.querySelectorAll('.carousel__movie')[0];
        const currentSlide = document.querySelector('.showing');

        if(currentSlide){ //만약 현재 슬라이드가 존재한다면

          const nextSlide = currentSlide.nextElementSibling;// 다음 슬라이드 지정

          currentSlide.classList.add('disappearAni');//현재 슬라이드 페이드아웃 애니메이션 시작

          setTimeout(function() { //애니매이션 종료 후 

            currentSlide.classList.remove('showing'); //안보이게 하기

            currentSlide.classList.remove('disappearAni'); //페이드 아웃 애니메이션 삭제 (중복 방지용)

            if(nextSlide.classList.contains('carousel__movie')){// 만약 다음 슬라이드가 존재한다면
                
              nextSlide.classList.add('showing');//다음슬라이드 페이드인 후 보이게 하기
            
              }

            else{//없다면

              firstSlide.classList.add('showing');//첫번째 슬라이드 페이드인 후 보이게하기
              
            
          }
          },801);

        }
        else{ //없으면 첫번째 슬라이드 시작

          firstSlide.classList.add('showing'); 

        }
        }

      function changeContentsReverse() {

        const lastSlide = document.querySelectorAll('.carousel__movie')[2];
        const currentSlide = document.querySelector('.showing');

        const preSlide = currentSlide.previousElementSibling;

        currentSlide.classList.add('disappearAni');

        setTimeout(function(){

          currentSlide.classList.remove('showing'); //안보이게 하기

          currentSlide.classList.remove('disappearAni');
          
          if (preSlide.classList.contains('carousel__movie')){
          
            preSlide.classList.add('showing');
  
          }else{
            lastSlide.classList.add('showing');
          }   

        },801);
      }
      
      
      changeContentsAuto();
      var autoChanger = setInterval(changeContentsAuto, 6600);
      var delay;
      
      nextBtn.addEventListener('click', function() {  
        
        clearTimeout(delay);
        changeContentsAuto();
        clearInterval(autoChanger);
        
        delay = setTimeout(function(){
          autoChanger = setInterval(changeContentsAuto, 6600);
        },7000);

    });

      preBtn.addEventListener('click', function(){

        clearTimeout(delay);
        changeContentsReverse();
        

      clearInterval(autoChanger);

          clearTimeout(delay);
          changeContentsReverse();
          clearInterval(autoChanger);

          delay = setTimeout(function(){
            autoChanger = setInterval(changeContentsAuto, 6600);
          },7000);

      });

      var c_posterDivs = document.querySelectorAll('.c_posterDiv');

      var movie_posterDivs = document.querySelectorAll('.movie_posterDiv');

      var body = document.querySelector('body');
      
      var i = 0;

      var a = 0;

      var b = 0;

      while(b < c_posterDivs.length){
        
        c_posterDivs[b].addEventListener('click', function() {

          clearTimeout(delay);
          clearInterval(autoChanger);

          var currentModalBg = this.parentNode.childNodes[2];
          var currentModal = currentModalBg.childNodes[0];
          var currentIframe = currentModal.childNodes[0].childNodes[0];
          var body = document.querySelector('body');

          currentModalBg.classList.add('showing_modal');
          currentModal.classList.add('showing_modal');
          currentModalBg.style.display='block';
          currentModal.style.display='block';
          setTimeout(()=>{
            currentModalBg.classList.remove('showing_modal');
            currentModal.classList.remove('showing_modal');
          },801);
          
          body.style.overflow = 'hidden';  

          currentModalBg.addEventListener('click', ()=>{
            delay = setTimeout(function(){
              autoChanger = setInterval(changeContentsAuto, 6600);
            },7000);
            currentIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            currentModalBg.classList.add('disappearAni');
            currentModal.classList.add('disappearAni');
            setTimeout(()=>{  
              currentModalBg.style.display='none';
              currentModal.style.display='none';
              currentModalBg.classList.remove('disappearAni');
              currentModal.classList.remove('disappearAni');
            },801);
            body.style.overflow='auto';
          });

        });

        b++
      }
      
      while(i < c_posterDivs.length){
          
          c_posterDivs[i].addEventListener('mouseover', function(){  
              
              var currentImg = this.children[0];
              var currentTxt = this.children[1];

              currentImg.style.filter = 'brightness(27%)';
              currentTxt.style.filter = 'brightness(65%)';
              currentTxt.style.zIndex = '2';
              currentTxt.style.opacity = '1';
            
          });

         c_posterDivs[i].addEventListener('mouseout', function(){

              var currentImg = this.children[0];
              var currentTxt = this.children[1];

              currentImg.style.filter = 'brightness(100%)';
              currentTxt.style.zIndex = '0';
              currentTxt.style.opacity = '0';
         });
         i++;
      }

      var movie_modals = document.querySelectorAll('.movie_modal');
        
      while(a < movie_posterDivs.length){

        movie_posterDivs[a].addEventListener('click', function() {

          var currentModalBg = this.parentNode.childNodes[2];
          var currentModal = currentModalBg.childNodes[0];
          var currentIframe = currentModal.childNodes[0].childNodes[0];
          var movies = document.querySelector('.movies');

          movies.style.zIndex = '2';

          currentModalBg.classList.add('showing_modal');  
          currentModal.classList.add('showing_modal');
          currentModalBg.style.display='block';
          currentModal.style.display='block';
          setTimeout(()=>{
            currentModalBg.classList.remove('showing_modal');
            currentModal.classList.remove('showing_modal');
          },801);
          
          body.style.overflow = 'hidden';  

          currentModalBg.addEventListener('click', ()=>{
            movies.style.zIndex = '0';
            currentIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
            currentModalBg.classList.add('disappearAni');
            currentModal.classList.add('disappearAni');
            setTimeout(()=>{  
              currentModalBg.style.display='none';
              currentModal.style.display='none';
              currentModalBg.classList.remove('disappearAni');
              currentModal.classList.remove('disappearAni');
            },801);
            body.style.overflow='auto';
          });
        });
        
        movie_posterDivs[a].addEventListener('mouseover', function(){  
          
          var currentImg = this.children[0];
          var currentTxt = this.children[1];
          
          currentImg.style.filter = 'brightness(27%)';
          currentTxt.style.filter = 'brightness(65%)';
          currentTxt.style.zIndex = '2';
          currentTxt.style.opacity = '1';
        
      });

        movie_posterDivs[a].addEventListener('mouseout', function(){

          var currentImg = this.children[0];
          var currentTxt = this.children[1];

          currentImg.style.filter = 'brightness(100%)';
          currentTxt.style.zIndex = '0';
          currentTxt.style.opacity = '0';
      });

      a++
      
    }
    }
  
    
    /*state = {
      count: 0
    };
    add = () => {
      this.setState(current => ({count: this.state.count + 1}));
    };
    render(){
      console.log('Component Rendered')
      return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>+</button>
      </div>
    );
    }
    componentDidMount(){
        console.log('Component Loaded')
    }
    componentDidUpdate(){
      console.log('Ccomponent Updated')
    } */
}



/*function Food({ name, from, rating }) {
  return <h1>I like { name } from { from }, rating: { rating.toFixed(1) }/5.0</h1>
}

const foods = [
  {
    key:1,
    name: "Kimchi",
    from: 'Korea',
    rating:5.0
  },
  {
    key:2,
    name: 'Hamburger',
    from: 'USA',
    rating: 4.9
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {foods.map(dish => {
        return <Food key = {dish.key} name = {dish.name} from = {dish.from} rating = {dish.rating}/>
      })}
    </div>
   
  );
} */

export default App;

/* <input onKeyUp = {onKeyUp} />
      <button onClick={onSubmit}>submit</button>
      <br/>
      <span>{text}</span>
      <button onClick = {updateText}>Button</button>*/