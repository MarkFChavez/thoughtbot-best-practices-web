import React from 'react';

const NavigationTab = (props) => {
  return (
    <div className="py-4 border-bottom border-black border-solid border-b-4">
      <a href="#" onClick={props.onSetContent.bind(this, 'best_practices')} className={props.linkClasses('best_practices')}> 
        Coding 
      </a>

      <a href="#" onClick={props.onSetContent.bind(this, 'code_review')} className={props.linkClasses('code_review')}> 
        Reviewing
      </a>

      <a href="#" onClick={props.onSetContent.bind(this, 'pair_programming')} className={props.linkClasses('pair_programming')}> 
        Pairing
      </a>
    </div>
  )
}

export default NavigationTab
