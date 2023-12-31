import { Dashboard,Reservations,Detail,AddRoomType,EditRoomType,RoomType,AllRooms,OccupiedRooms,OccupationHistory, AddRoom } from '../Pages';
import { useRoutes } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';

const AppContent = () => {
  let elements = useRoutes([
      { path: "/",element : <Dashboard/> },
      { path: "add-room-type",element: <AddRoomType /> },
      { path: "edit-room-type/:id",element: <EditRoomType /> },
      { path: "room-type",element: <RoomType /> },
      { path: "add-room",element: <AddRoom /> },
      { path: "rooms",element: <AllRooms /> },
      { path: "reservations",element: <Reservations /> },
      { path: "reservation-detail/:id",element: <Detail/> },
      { path: "occupation-history",element: <OccupationHistory /> },
      { path: "occupied-rooms",element: <OccupiedRooms /> },
])

console.log("Elements in AppContent:", elements);

  return (
    <Content style={{margin: "25px 30px"}}>
      {
        elements
      }
    </Content>
  )
};

export default AppContent;
