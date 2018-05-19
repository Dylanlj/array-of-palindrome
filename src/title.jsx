import React, { Component } from 'react';

class Title extends Component  {
  render () {

    let classNames = {
      vertical: ["p-one", "l-one", "i-one", "n-one", "n-two", "d-one", "r-one", "m-one", "m-two", "e-one", "o-one"]
      ,
      horizontal: ["p-top", "p-bottom", "a-top", "l-top", "d-top", "d-bottom", "r-top", "r-bottom", "e-top", "e-middle", "e-bottom"]
      ,
      diagonal: ["a-one", "a-two", "n-one", "r-one", "m-one", "m-two", "s-one"]
    }
    let titleDivs = []
    for (let orientation in classNames) {
      for(let name of classNames[orientation]) {
        titleDivs.push(<div key={orientation + name} className={orientation + " " + name}/>)
      }
    }

    return (
      <div className="moving-title">
        {titleDivs}

        <div className="p-top container">
          <div className="hide-animation p-top"/>
          <div className="circle p-top"/>
        </div>
        <div className="d-top container">
          <div className="circle d-top"/>
        </div>
        <div className="hide-animation d-top"/>

        <div className="r-top container">
          <div className="circle r-top"/>
        </div>
        <div className="hide-animation r-top"/>
        <div className="circle o-top"/>
        <div className="o-top container">
          <div className="hide-animation o-top"/>
        </div>
        <div className="hide-animation o-bottom"/>

        <div className="s-top container">
          <div className="circle s-top"/>
          <div className="hide-animation s-top"/>
        </div>
        <div className="s-bottom container">
          <div className="circle s-bottom"/>
        </div>
        <div className="hide-animation s-bottom"/>

      </div>

    )
  }
}

export default Title
