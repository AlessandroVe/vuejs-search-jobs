Vue.config.devtools = true;

new Vue(
    {
        el: '#jobs-page',
        data: {
            myProfile: {
                details: {
                    name: 'Pierfilippo',
                    surname: 'Baudo',
                    pic: 'https://www.focus.it/site_stored/imgs/0003/042/nerd2.1020x680.jpg',
                },
            },    
            jobs: [
                {
                  id: 1,
                  itsPrefer:"",  
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i-yDM1ODYHMtDk5swksL2d8H3vegbCMf6g&usqp=CAU',
                  city: 'Roma',
                  contract: 'Full Time'
                },
                {
                  id: 2,
                  itsPrefer:"",  
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'data:image/jpeg;base64,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',
                  city: 'Napoli',
                  contract: 'Full Time'
                },
                {
                  id: 5,
                  itsPrefer:"",  
                  company: 'Perferendis',
                  position: 'Developer',
                  description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                  created_at: '5/22/2021',
                  logo: 'data:image/jpeg;base64,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',
                  city: 'Palermo',
                  contract: 'Full Time'
                }    
            ],
            starred: [1, 2, 3],
            applied: [4, 5]
            
        },
        created(){
            this.IdentifyPreferred();
            console.log(this.starred)

        },
        mounted(){
            
        },
        computed: {
            
        },
        methods:{
            removeEl : function(el,array) {    
                this.array.splice(array.indexOf(el), 1);
            },
            IdentifyPreferred:function () {
                this.jobs.forEach((element)  => {
                    if(this.starred.includes(element.id)){
                        element.itsPrefer="fas fa-star"
                    }else{
                        element.itsPrefer="far fa-star"
                    }
                }); 
            },
            addPostToFavorites:function (post) {
                if(this.starred.includes(post.id)){
                    this.removeEl(post.id,this.starred)
                    console.log(this.starred)
                }else{
                    this.starred.push(post.id)
                    console.log(this.starred)
                }
                this.IdentifyPreferred();

            }
            
        }
    
    }
);