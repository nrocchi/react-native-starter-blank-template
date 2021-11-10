import React, {useState, useContext} from 'react'
import {Text} from 'react-native-elements'

import {AuthContext} from '../../../api/contexts/AuthContext'
import theme from '../../../theme/index'
import LayoutModal from '../layouts/LayoutModal'

const ErrorModal = ({title}) => {
  const {clearErrors: clearErrorsAuth} = useContext(AuthContext)
  const [visible, setVisible] = useState(true)

  // Gestion de la fermeture de la modal
  const handleCloseModal = () => {
    setVisible(false)
    clearErrorsAuth()
  }

  return (
    <LayoutModal
      title={
        <Text h4 style={{...theme.grid.textCenter}}>
          {title}
        </Text>
      }
      visible={visible}
      onClose={() => handleCloseModal()}
      buttons={[
        {
          color: theme.colors.green,
        },
        // {
        //   title: 'Annuler',
        //   loading: loading,
        //   marginTop: 20,
        //   color: theme.colors.purple,
        //   height: 60,
        //   fontSize: 18,
        //   onPress: () => console.log('test'),
        // },
      ]}
    />
  )
}

export default ErrorModal
