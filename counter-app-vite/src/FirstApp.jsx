import PropTypes from "prop-types" //yarn add prop-types
const saludo = (nombre)=>{
    return (`Hola ${nombre}`)
}

export const FirstApp = ({title, subTitle}) => {
  return (
    <>
    <h1>{saludo("fernando")}</h1>
    <h2>{title}</h2>
    <h3>{subTitle}</h3>
    </>
    /* Para mostrar un objeto <code>{JSON.stringify(newMessage)}</code> */
  )
}

FirstApp.propTypes={
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.string
}


//En caso de no recibir props, lo inserta por defecto
FirstApp.defaultProps={
  subTitle:"No hay subtitulo",
  name: "No aparezco pero si me requieres, estoy"
}
