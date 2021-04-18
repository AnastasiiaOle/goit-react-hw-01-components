import React from 'react';
import PropTypes from 'prop-types';



const Stats = ({title, stats}) => {
    return (
<section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
      {stats.map(stat =>{
          return(
    <li class="item"  key = {stat.id}>
      <span class="label">{stat.label}</span>
      <span class="percentage">{stat.percentage}%</span>
    </li>
          )
      })}
  </ul>
</section>

    )

}

Stats.defaultProps ={
    title: '',
}


Stats.propTypes ={
    title: PropTypes.string, 
    stats: PropTypes.arrayOf(
        PropTypes.exact(
            {
                id: PropTypes.string,
                label: PropTypes.string,
                percentage: PropTypes.number,
            }),
        ).isRequired,
};

export default Stats;