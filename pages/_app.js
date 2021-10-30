import App, { Container } from "next/app";
import 'react-h5-audio-player/lib/styles.css';



class MyApp extends App {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        // Remove the server-side injected CSS.
        document.addEventListener('play', function(e){
        var audios = document.getElementsByTagName('audio');
        for(var i = 0, len = audios.length; i < len;i++){
            if(audios[i] != e.target){
                audios[i].pause();
            }
        }
    }, true);
    }
    
    render() {
        const { Component, pageProps } = this.props;
    
        return (
            <Component {...pageProps} />
        )
    }
}
  
  export default MyApp;