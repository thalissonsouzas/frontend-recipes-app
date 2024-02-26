import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Recommended() {
  const history = useHistory();
  const [datas, setDatas] = useState(undefined);
  const linkAtual = history.location.pathname;

  useEffect(() => {
    const requestApi = () => {
      let url;
      if ((linkAtual).includes('meals')) {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      } else {
        url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      }
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setDatas(data);
        });
    };

    requestApi();
  }, [history, linkAtual]);

  if (datas === undefined) return (<p>Loading...</p>);

  return (
    <section>
      <h2>Recommended</h2>
      {linkAtual.includes('meals') ? (
        <Carousel slidesToShow={ 2 } slidesToScroll={ 2 }>
          {datas.drinks.slice(0, Number('6')).map((drink, index) => (
            <Carousel.Item key={ index } data-testid={ `${index}-recommendation-card` }>
              <img src={ drink.strDrinkThumb } alt={ drink.strDrink } />
              <Carousel.Caption>
                <p data-testid={ `${index}-recommendation-title` }>{drink.strDrink}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Carousel slidesToShow={ 2 } slidesToScroll={ 2 }>
          {datas.meals.slice(0, Number('6')).map((meal, index) => (
            <Carousel.Item key={ index } data-testid={ `${index}-recommendation-card` }>
              <img src={ meal.strMealThumb } alt={ meal.strMeal } />
              <Carousel.Caption>
                <p data-testid={ `${index}-recommendation-title` }>{meal.strMeal}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )}

    </section>
  );
}

export default Recommended;
