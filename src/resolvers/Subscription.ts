
export const Subscription={
    CvAdded:{
        subscribe:(parent,args,{Db,pubSub})=>pubSub.subscribe("Cv"),
        resolve: ( cv) => { return cv;},
    },
    cvDeleted:{
        subscribe:(parent,args,{Db,pubSub})=>pubSub.subscribe("CvDeleted"),
        resolve: ( cv) => { return cv;},
    },
    cvUpdated:{
        subscribe:(parent,args,{Db,pubSub})=>pubSub.subscribe("CvUpdated"),
        resolve: ( cv) => { return cv;},
    }

}