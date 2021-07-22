import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import { getByDisplayValue } from "@testing-library/react";

function Movie({id, year, title, summary, poster, runtime, genres, rating, yt_trailer_code}) {
    var yt_trailer_address = 'https://www.youtube.com/embed/'+yt_trailer_code+'?enablejsapi=1';

    console.log(yt_trailer_address);
    return(<div className='movie col-lg-6'>

        <div className='movie_posterDiv'>
        <img className='movie_poster'src={poster} alt={title} title={title} />
        <h5 className='movie_details'>View More</h5>
        </div>
            <div className='movie_data col-lg-6 col-sm-6 col-xs-8'>

                <h3 className='movie_title'>{title}</h3>
                <h5 className='movie_year'>{(year===0)?'unknown':year} <span className='divider'>|</span></h5>
                <h5 className='movie_runtime'> {runtime} min <span className='divider'>|</span></h5>
                <h5 className='movie_genres'> {genres[0]} <span className='divider'>|</span></h5>
                <h5 className='movie_rating'> {(rating === 0) ? rating ='unknown': '★ '+rating}</h5>
                <p className='movie_summary'>{summary.slice(0,130)}...</p>

            </div>

        <div className='movie_modal_bg'>
        <div className='movie_modal col-lg-6 col-sm-8 col-8'>

            <div className='iframebox'>
            <iframe src={yt_trailer_address} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=''></iframe>
            </div>
            <div className='container movie_modal_data'>
            <h2 className='movie_modal_title'>{title}</h2>
            <h5 className='movie_modal_year'>{(year===0)?'unknown':year} <span className='movie_modal_divider'>|</span></h5>
            <h5 className='movie_modal_runtime'> {runtime} min <span className='movie_modal_divider'>|</span></h5>
            <h5 className='movie_modal_genres'> {genres[0]} <span className='movie_modal_divider'>|</span></h5>
            <h5 className='movie_modal_rating'> {(rating === 0) ? rating ='unknown': '★ '+rating}</h5>
            <p className='movie_modal_summary'>{summary.slice(0,1500)}</p>
            </div>

        </div>
        </div>
        
        
          </div>
    );
}

function Movie_c({id, year, title, summary, poster, runtime, genres, rating, yt_trailer_code}) {
    var yt_trailer_address = 'https://www.youtube.com/embed/'+yt_trailer_code+'?enablejsapi=1';
    return(<div className='c_movie container'>

                <div className='c_posterDiv'>
                <img className='c_poster'src={poster} alt={title} />
                <h5 className='details'>View More</h5>
                </div>

                <div className='c_data col-lg-8 col-sm-12'>
                <h1 className='c_title'>{(title.length >= 30)?title.slice(0,29)+'...':title}</h1>
                <h5 className='c_year'>{(year===0)?'unknown':year} <span className='c_divider'>|</span></h5>
                <h5 className='c_runtime'> {runtime} min <span className='c_divider'>|</span></h5>
                <h5 className='c_genres'> {genres[0]}</h5>
                <p className='c_summary'>{summary.slice(0,850)}...</p>

                </div>

                <div className='movie_modal_bg'>
                <div className='movie_modal col-lg-6 col-sm-8 col-8'>

                <div className='iframebox'>
                <iframe src={yt_trailer_address} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=''></iframe>
                </div>
                <div className='container movie_modal_data'>
                <h2 className='movie_modal_title'>{title}</h2>
                <h5 className='movie_modal_year'>{(year===0)?'unknown':year} <span className='movie_modal_divider'>|</span></h5>
                <h5 className='movie_modal_runtime'> {runtime} min <span className='movie_modal_divider'>|</span></h5>
                <h5 className='movie_modal_genres'> {genres[0]} <span className='movie_modal_divider'>|</span></h5>
                <h5 className='movie_modal_rating'> {(rating === 0) ? rating ='unknown': '★ '+rating}</h5>
                <p className='movie_modal_summary'>{summary.slice(0,1500)}</p>
                </div>

                </div>
                </div>

          </div>
    );
    
}




Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    runtime : PropTypes.number.isRequired,
    genres : PropTypes.array.isRequired,
    yt_trailer_code : PropTypes.string.isRequired
}

Movie_c.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    runtime : PropTypes.number.isRequired,
    genres : PropTypes.array.isRequired,
    rating : PropTypes.number.isRequired
}

export {Movie, Movie_c};