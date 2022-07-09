
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

            //minHeight: "30vw",

            //marginTop: "10px",
            marginBottom: "20px"
        }

    }else
    {
        style = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",

            //minHeight: "30vw",

            //marginTop: "10px",
            marginBottom: "5vw"
        }
    }   

    return(        
        
        <div style={style}>
            {child}
        </div>        
    )
}