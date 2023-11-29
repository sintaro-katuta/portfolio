export default function Language(props) {
    return(
        <div className="w-full h-full flex gap-2">
            {props.language.map((item, i) =>(
                <img src={item} key={i} alt="" className="w-1/6" />
            ))}
        </div>
    )
}