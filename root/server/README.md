# camp-pizza

Endpoints

Products: (for created category)
    Get all products        ->  /api/products
    Get by name of product  ->  /api/products/browserName/:name

    Post product            ->  /api/products/

        body {
            name: String,
            category: String,
            price: number,
            size: number, (required for pizzas)
            isVegan: boolean,   (default = false)
            isSpicy: boolean,   (default = false)
            ingredients: Array
        }

Categories:
    Get all categories      -> /api/categories 
    Get by name of category -> /api/categories/browserName/:name

    Post category           -> /api/categories

        body {
            name: String
        }

Addresses:
    Get all addresses       -> /api/addresses 
    Get address by property -> /api/addresses/browserAddress/:country/:city/:street/:houseNumber
    Get address by id       -> /api/addresses/:id

    Post addresses          -> /api/addresses

        body {
            street: String,
            houseNumber: Number,
            apartmentNumber: Number,  (optional)
            city: String,           
            country: String           (optional)
        }

Customers:         (for created address)
    Get all customers       -> /api/customers 
    Get customers by email  -> /api/customers/browserEmail/:email
    Get customers by id     -> /api/customers/:id

    Post customer           -> /api/customers/

        body {
            name: String,
            phone: String,
            addressId: objectId,
            email: String,
            password: String,           (required for isRegistered)
            isAdmin: boolean,           (default false)
            isRegistered: boolean,      (default false)
        }
Orders:             (for created customer and product)
    Get all orders          -> /api/orders
    Get order by id         -> /api/orders/:id

    Post order              -> /api/orders

        body {
            productId: objectId,
            customerId: objectId,
            dateOrder: date     (optional)
            status: String      (default = "is being prepered")
        }
    
    Put odrer by id         -> /api/orders/:id

    body{
        (optional)
    }

    Put order as ended by id  -> /api/orders/completeOrder/:id

            Set:
            isEnded = true,
            status  = "complete",
            orderDeliveryDate = Date.now
    






