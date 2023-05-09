export async function POST(req) {
    const post = await req.json();
    console.log(post)
    const response = await fetch(`${process.env.LP_HOST}/api/room/${post.roomID}/user`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.LP_AUTH}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: post.name
        }),
    });

    const data = await response.json();

    console.log(data)

    return new Response(JSON.stringify(data), {
        status: 200
    })
}
