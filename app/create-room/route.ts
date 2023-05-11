export async function POST(req) {
    const response = await fetch(`${process.env.LP_HOST}/api/room`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.LP_AUTH}`,
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    console.log(data)

    return new Response(JSON.stringify(data), {
        status: 200
    })
}
