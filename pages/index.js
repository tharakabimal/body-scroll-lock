import React from 'react';
import SlidingModal from '../components/slidingModal';


class Index extends React.Component {
    render() {
        return (
            <div className="wrapper">            

            <SlidingModal>
                <button className="button">Open Slider</button>
            </SlidingModal>
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium, enim quis ultrices ornare, elit quam interdum quam, sit amet elementum felis ligula sit amet lacus. Vivamus et ornare dolor. Aliquam dictum rhoncus erat, cursus lacinia augue gravida vitae. Nunc rhoncus, lacus id aliquet cursus, nisl elit sodales sapien, sed elementum dolor risus ut velit. Pellentesque orci metus, ultrices nec neque vitae, facilisis commodo justo. Curabitur pharetra eget felis a lacinia. Nulla venenatis velit neque, quis tincidunt diam faucibus eu. Cras posuere, turpis in porttitor euismod, risus dui efficitur magna, a porta neque arcu ac ligula. Phasellus ut neque venenatis, eleifend risus at, rutrum neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non congue quam, sit amet elementum quam. Vestibulum sed vulputate nisi, nec malesuada turpis. Mauris vitae cursus nisl. Nulla id metus facilisis, bibendum erat non, elementum nibh.
            </p>
            <p>
                Cras dignissim arcu et neque iaculis, imperdiet maximus dolor mollis. Pellentesque vestibulum, ex id efficitur porta, lacus metus cursus velit, et placerat elit urna nec enim. Phasellus vehicula magna ac diam finibus molestie. Donec in ante urna. Proin vulputate, purus sit amet gravida dictum, nibh odio placerat est, eget gravida odio libero nec quam. Aenean ut arcu ipsum. In ultricies lorem augue. Vivamus porta vulputate ligula vel imperdiet. Integer vel ante commodo, malesuada orci sed, lacinia lacus. In a maximus ligula, in ultrices augue. Phasellus faucibus eget lectus in lacinia. Donec id mattis sem, et efficitur augue. Morbi eget turpis ut dolor porta malesuada sed eu odio. Ut id lobortis dolor, eu mattis est.
            </p>

            <p>
                Donec pulvinar condimentum neque, ac suscipit tellus aliquam sit amet. Ut imperdiet gravida lectus malesuada aliquam. Phasellus ac nunc id lacus sollicitudin pulvinar a id tortor. Suspendisse porta eros ac sem placerat, et luctus risus porttitor. Donec pellentesque euismod leo. Integer convallis metus at congue pharetra. Nullam imperdiet ex ac suscipit condimentum. Quisque fringilla interdum ex, id dictum ex hendrerit vel. Maecenas ullamcorper elementum consequat. Ut at lorem quis ex dignissim laoreet et a risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In non magna sem. Cras suscipit ut dolor id semper. Donec commodo sit amet nunc sed molestie.
            </p>

            <p>
                Morbi non vehicula leo. Integer ac fermentum ex. Duis eros libero, porttitor ac dui nec, congue mollis libero. Donec non urna blandit, euismod arcu sed, varius neque. Integer et hendrerit est, ac condimentum orci. Suspendisse potenti. Vivamus ornare fringilla ligula. Nullam luctus, diam sit amet convallis mattis, sapien mauris vulputate ipsum, quis convallis lectus ipsum vel urna. Sed non lacus non neque blandit vestibulum at ac sem. Vestibulum euismod, nisl id facilisis pellentesque, nulla est mollis dui, in convallis urna felis quis lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis et egestas urna.
            </p>

            <p>
                Praesent sem dui, mollis nec ornare non, vestibulum sed lorem. Quisque ullamcorper iaculis sodales. Praesent in diam augue. Aliquam erat volutpat. Vivamus ac tortor libero. Pellentesque massa nulla, aliquam eu mi ac, ultrices euismod ipsum. Suspendisse tincidunt felis sit amet ligula sagittis feugiat. Sed erat nisi, tristique nec nisi vel, rhoncus semper ipsum. Donec pulvinar tellus vitae ligula venenatis, non accumsan sem posuere. Aenean eleifend a magna eu elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>

            <style jsx>{`
                p {
                    color: blue;
                }

                .button {
                    height: 80px;
                    width: 100%;
                    background-color: #4CAF50;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 1.0833333rem;
                    margin: 4px 2px;
                    cursor: pointer;
                }

                .wrapper {
                    padding: 30px;
                }
            `}</style>

            <style global jsx>{`
                html {
                    font-size: 50px;
                }
            `}</style>

            </div>
        )
    }
};

export default Index;