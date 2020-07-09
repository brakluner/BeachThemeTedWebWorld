import Layout from "../components/layout";
import Error from "./_error"
import { Component } from 'react';

export default class About extends Component {


    render() {

        const { statusCode } = this.props;

    if (statusCode) {
        return <Error statusCode={statusCode} />
    }

    return (
    <Layout title="About Us">
<div>
    <p>Hey</p>
</div>

<div className = "outer-shell">
    <div className = "inner-shell">
    <div className = "text-container text-container-b">
    <div className="jumbotron transparent">
  <h1 className="display-4 red">TED WEB WORLD!</h1>
  <p className="lead">I look forward towards doing your web work on your next project.</p>
  <hr className="my-4" />
  <p>Leader in full stack web development and delivering customer satisfaction.</p>
  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
{/* <h1 className = "section-text red">Welcome to MainSource!</h1> */}
    </div>

      <div>
      <img src="/static/sand.jpg" alt="hot dogs"/>


     </div> 
   

     </div>

     </div> 





         {/* <p>We provide technical services and business solutions.</p>
        <div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
        <ul>
            <li>Mobile applications</li>
            <li>Websites</li>
            <li>Analytics</li>
            <li>UX Design</li>
            <li>Graphic Design</li>
            <li>Brand Marketing</li>
            <li>Cloud Services</li>
        </ul> */}
        <img src="/static/hotDogTrophy.png" alt="hot dogs"/>
        <style jsx>
    {`
    .main-images{
  
  position: absolute;
  max-height: 1200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: -1;
} 
.outer-shell{
    position: relative;
    width: 100%;
    height: 800px;
    background-color: #fff2bc;
  }
  .inner-shell{
    position: absolute;
    width: 300%;
    height: 780px;
    background-color: #FA8C3C!important;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
     border-top: 20px solid #00ff92;
     border-bottom: 20px solid #00ff92;
     overflow: hidden;
  }.over-layer{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.23);
  }
  .over-layer2{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.4);
  }
  .text-container{
    position: absolute;
    width: 95%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
    color: #333;
  }
  .text-container-b{
    width: 90vw;
  }
  .section-text{
    font-size: 108px!important;
    font-weight: 800!important;
    margin: .65em 0em!important;
    z-index: 19;
  }
  .red {
      color: #FF0059;
  }
  .transparent {
      background: rgba(10, 175, 175, 0.5);
  }
  html, body {
    max-width: 100%;
    overflow-x: hidden;
}
  `}
</style>
        </Layout>
    )}
}