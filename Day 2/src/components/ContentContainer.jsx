import PropsComponent from "./PropsComponent.jsx";
import '../styles/ContentContainer.css'

function ContentContainer(){

    return(
        <div className="content">
            <PropsComponent name="Alice" />
            <PropsComponent name="Random" />
            <PropsComponent name="123" />
        </div>
    )
}

export default ContentContainer;