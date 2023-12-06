import io from 'socket.io-client'

export default io("https://alpha-vamp-api.onrender.com/", { transports: ["websocket"] })
// export default io("http://localhost:3000/", { transports: ["websocket"] })