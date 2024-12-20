import React from 'react';
import './RightSidebar.css';
import comment from '../../Assets/comment-alt-solid.svg';
import pen from '../../Assets/pen-solid.svg';
import blackLogo from '../../Assets/blacklogo.svg';

const Widget = () => {
    return (
        <div className="widget">
            <h4 className="widget-heading">The Overflow Blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2 hoverable">
                    <img src={pen} alt="pen" width="18" />
                    <p>Observability is key to the future of software (and your DevOps career)</p>
                </div>
                <div className="right-sidebar-div-2 hoverable">
                    <img src={pen} alt="pen" width="18" />
                    <p>Podcast 374: How valuable is your screen name?</p>
                </div>
            </div>
            <h4 className="widget-heading">Featured on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2 hoverable">
                    <img src={comment} alt="comment" width="18" />
                    <p>Review queue workflows - Final release....</p>
                </div>
                <div className="right-sidebar-div-2 hoverable">
                    <img src={comment} alt="comment" width="18" />
                    <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
                </div>
                <div className="right-sidebar-div-2 hoverable">
                    <img src={blackLogo} alt="black logo" width="18" />
                    <p>Outdated Answers: accepted answer is now unpinned on SolveHub</p>
                </div>
            </div>
            <h4 className="widget-heading">Hot Meta Posts</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2 hoverable">
                    <p className="meta-score">38</p>
                    <p>Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className="right-sidebar-div-2 hoverable">
                    <p className="meta-score">20</p>
                    <p>What is the best course of action when a user has high enough rep to...</p>
                </div>
                <div className="right-sidebar-div-2 hoverable">
                    <p className="meta-score">14</p>
                    <p>Is a link to the "How to ask" help page a useful comment?</p>
                </div>
            </div>
        </div>
    );
};

export default Widget;
