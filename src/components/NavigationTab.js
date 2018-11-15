import React from 'react';

const NavigationTab = (props) => {
  return (
    <div className="py-4 border-bottom border-black border-solid border-b-4">
      <a href="#" onClick={props.onSetContent.bind(this, 'best_practices')} className={props.linkClasses('best_practices')}> 
        Best Practices 
      </a>

      <a href="#" onClick={props.onSetContent.bind(this, 'code_review')} className={props.linkClasses('code_review')}> 
        Code Review Tips
      </a>
    </div>
  )
}

export default NavigationTab
