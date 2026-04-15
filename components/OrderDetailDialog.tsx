import { MY_ORDERS_QUERY_RESULT } from '@/sanity.types'
import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';


interface OrderDetailsDialogProps{
  order: MY_ORDERS_QUERY_RESULT[number] | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({
  order, isOpen, onClose
}) => {
  if(!order)return null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order Detailes - {order?.orderNumber}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default OrderDetailDialog