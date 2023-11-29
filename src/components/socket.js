import io from 'socket.io-client'

// export default io("https://vamp-api.herokuapp.com/", { transports: ["websocket"] })
export default io("https://alpha-vamp-api.onrender.com:3000/", { transports: ["websocket"] })