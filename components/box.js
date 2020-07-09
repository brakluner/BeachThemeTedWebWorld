export default () => (
<div className = "outer-shell">
    <div className = "inner-shell">
    <div className = "text-container text-container-b">
    
    </div>
    </div>
<style jsx>{`
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
      
    
`}</style>
    </div>
);