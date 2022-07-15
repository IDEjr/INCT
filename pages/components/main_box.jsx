
export default function Main_Box(props) {

    let child;
    if(!props.children) child = <></>;
    else child = props.children;

    let style;

    if(!props.invert)
    {
        style = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",

            minHeight: "35vw",

            marginTop: "10px",
            marginBottom: "10px"
        }

    }else
    {
        style = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",

            minHeight: "35vw",

            marginTop: "10px",
            marginBottom: "10px"
        }
    }   

    return(        
        
        <div style={style}>
            {child}
        </div>        
    )
}