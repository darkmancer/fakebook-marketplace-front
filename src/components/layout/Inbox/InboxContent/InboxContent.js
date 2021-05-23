import React, { useState, useEffect, useContext } from 'react'
import axios from '../../../../config/axios'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  Box,
  Divider,
  MenuItem,
  FormControl,
  Select,
  Typography
} from '@material-ui/core'
import SellItemModal from '../SellItemModal/SellItemModal'
import { useStyles } from './StylesInboxContent'
import SellStep from './SellStep'
import MessageBox from '../../Messenger/MessageBox'
import SellItem from './SellIem'
import BuyItem from './BuyItem'
import { AuthContext } from '../../../../context/AuthContextProvider'

function InboxContent() {
  const classes = useStyles()
  const history = useHistory()
  const [value, setValue] = React.useState('')
  const [showSell, setShowSell] = useState(false)
  const [showBuy, setShowBuy] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)
  const [openChat, setOpenChat] = useState(false)
  const [showStep, setShowStep] = useState(false)
  const [seller, setSeller] = useState(null)
  const { user } = useContext(AuthContext)
  const [talksUser, setTalksUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [chatUser, setChatUser] = useState([])

  const getArrOfProductIncUserId = async () => {
    try {
      const res = await axios.get(`/message/getTalkAndProduct`)

      console.log('data', res.data)
      setChatUser(res.data.arr)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getArrOfProductIncUserId()
  }, [])

  const arrOfUserProductSelling = chatUser.filter(
    (i) => i.Product.userId === user?.id
  )
  console.log('arr', arrOfUserProductSelling)

  let mems = {}
  let productSelling = []
  for (let item of arrOfUserProductSelling) {
    const { chatId } = item
    if (typeof mems[chatId] === 'undefined') {
      productSelling.push(item)
      mems[chatId] = true
    }
  }
  console.log(productSelling)

  const arrOfUserProductBuying = chatUser.filter(
    (i) => i.Product.userId !== user?.id
  )

  let obj = {}
  let productBuying = []
  for (let item of arrOfUserProductBuying) {
    const { chatId } = SellItem
    if (typeof obj[chatId] === 'undefined') {
      productBuying.push(item)
      obj[chatId] = true
    }
  }
  console.log('productBuying', productBuying)

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleShowBuy = () => {
    setShowBuy(true)
    setShowSell(false)
  }
  const handleShowSell = () => {
    setShowSell(true)
    setShowBuy(false)
  }

  if (isLoading) return <p>Loading</p>
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="stretch"
      height={100}
    >
      <Grid className={classes.root} style={{ minHeight: '100vh' }}>
        <Box className={classes.paper}>
          <Button color="primary" onClick={() => handleShowSell()}>
            Selling
          </Button>
          <Button color="primary" onClick={() => handleShowBuy()}>
            Buying
          </Button>
          {showSell && (
            <Box>
              <Divider className={classes.dividerLine} />
              <Box>
                <Typography variant="body1" className={classes.fontColor}>
                  View Chats
                </Typography>

                <FormControl variant="filled" className={classes.formControl}>
                  <Select
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.fontColor}
                  >
                    <MenuItem value={'listing'}>
                      <em>Grouped by listing</em>
                    </MenuItem>
                    <MenuItem value={'chart'}>Individual Charts</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {value === 'chart' ? (
                <>
                  <Divider className={classes.dividerLine} />
                  <Box>
                    <Typography variant="body1" className={classes.fontColor}>
                      Filter by label
                    </Typography>

                    <Button className={classes.buttonColor}>All</Button>
                    <Button className={classes.buttonColor}>
                      Pending Payment
                    </Button>
                    <Button className={classes.buttonColor}>Paid</Button>
                    <Button className={classes.buttonColor}>
                      To Be shipped
                    </Button>
                    <Button className={classes.buttonColor}>Shipped</Button>
                    <Button className={classes.buttonColor}>
                      Cash on delivery
                    </Button>
                    <Button className={classes.buttonColor}>Complete</Button>
                  </Box>
                </>
              ) : (
                <>
                  <Divider className={classes.dividerLine} />
                  <Box>
                    <SellItem
                      user={user}
                      seller={seller}
                      talksUser={talksUser}
                      setOpenPopup={setOpenPopup}
                      setOpenChat={setOpenChat}
                      productSelling={productSelling}
                    />
                  </Box>
                </>
              )}
              <SellItemModal
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              />
            </Box>
          )}
          {showBuy && (
            <Box>
              <BuyItem
                user={user}
                seller={seller}
                talksUser={talksUser}
                setOpenPopup={setOpenPopup}
                setOpenChat={setOpenChat}
                productBuying={productBuying}
              />

              <Box>{showStep && <SellStep />}</Box>
            </Box>
          )}
        </Box>
      </Grid>

      <MessageBox
        openChat={openChat}
        setOpenChat={setOpenChat}
        productBuying={productBuying}
        productSelling={productSelling}
      />
    </Grid>
  )
}
export default InboxContent
