fetch(' https://buttercup-island.glitch.me/latest').then(res=>res.json()).then(i=>{
    //console.log(i.topic_list.topics[1])
    let ref=i.users
    let arr=i.topic_list.topics
    arr.map((j,k)=>{
        let bb=document.getElementById('root')
        let users=j.posters.map(l=>{
            return l.user_id
        })
        var tim1=new Date(j.bumped_at).getTime()
        var tim2=new Date().getTime()
        var time=Math.round((tim2-tim1)/(60000)) <60? Math.round((tim2-tim1)/(60000))+'mins': Math.round((tim2-tim1)/(60000*60))+'hrs'
        //console.log(time)
        //console.log(users)
        bb.innerHTML+="<div class='card'><div class='no'>"+(k+1)+"</div><div class='main'><a target='_blank' href="+'https://forum.freecodecamp.org/t/'+j.slug+">"+j.title+"</a></div><div class='profiles'>"+users.map(p=>{
            let use=ref.find(i=>i.id==p)
            use.avatar_template=use.avatar_template.replace('{size}',50)
            //console.log(use)
            return "<a target='_blank' href='https://www.freecodecamp.org/forum/u/"+use.username+"' title="+use.username+"><img src='https://www.freecodecamp.org/forum"+use.avatar_template +"'></a>"
            }).slice(0,5)+"</div><div class='replies'>"+j.reply_count+"</div><div class='view'>"+j.views+"</div><div class='time'>"+time+"</div></div><br>"
    })
})
