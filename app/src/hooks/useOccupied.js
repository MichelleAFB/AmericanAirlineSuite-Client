import { useSelector } from 'react-redux'

export const useOccupied = () => {

    const occupied = useSelector(state => state.selectedEventRedux.occupied)

    return occupied
}

export default useOccupied