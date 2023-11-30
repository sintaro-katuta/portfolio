export default function Language(props) {
    return(
        <div className="w-full h-full flex items-center gap-4">
            {props.language.map((item, i) =>(
                <img src={item} key={i} alt="" className="pc:w-1/12 iphone:w-1/6 h-5" />
            ))}
        </div>
    )
}