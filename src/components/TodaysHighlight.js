import React from 'react'

const TodaysHighlight = () => {
  return (
    <>
   <div className="mainDiv space-y-4 m-2 mt-6">
    <div className="topHeading h-8 bg-lime-300">
      <h2>Today's Highlight</h2>
    </div>
    <div className="bottomMainDiv space-y-8 ">
      <div className="bigDivs space-y-3">
        <div className="div1 h-64 bg-slate-400 rounded-2xl">
          div1
        </div>
        <div className="div1 h-64 bg-slate-500 rounded-2xl">
          div1
        </div>
        <div className="div1 h-64 bg-slate-600 rounded-2xl">
          div1
        </div>

      </div>
      <div className="smallDivs space-y-3">
        <div className="div1 h-32 bg-fuchsia-300 rounded-2xl">
          div1
        </div>
        <div className="div1 h-32 bg-fuchsia-400 rounded-2xl">
          div2
        </div>
        <div className="div1 h-32 bg-fuchsia-500 rounded-2xl">
          div3
        </div>

      </div>
    </div>
   </div>
    </>
  )
}

export default TodaysHighlight