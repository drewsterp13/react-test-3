const token = "d7f437ab938b8c129bf82b254b5aadee1b76b45a7815f3b7"
const link = "https://my-flask-car-collection.onrender.com/api/carinventory"

export const server_calls = {
    get: async () => {
        const response = await fetch(`${link}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`,
                }
            })

        if (!response.ok) {
            throw new Error("Sorry, failed to fatch data from the server")
        }

        return await response.json()
    },
    add: async (data: any = {}) => {
        const response = await fetch(link,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`,
                },
                body: JSON.stringify(data)
            })
        
        if (!response.ok) {
            throw new Error("Sorry, invalid data to add")
        }

        return await response.json()
    },
    update: async (id: string, data:any = {}) => {
        const response = await fetch(`${link}/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`,
                },
                body: JSON.stringify(data)
            })
        
        if (!response.ok) {
            throw new Error("Sorry, invalid data to add")
        }

        return await response.json()
    },
    delete: async (id: string) => {
        const response = await fetch(`${link}/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`,
                }
            })
        
        if (!response.ok) {
            throw new Error("Sorry, invalid data to add")
        }

        return;
    }
}