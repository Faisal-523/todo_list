
    let allProjects = [];

    const addProject = (name, description) =>{
        clearActiveProjects();
        allProjects.push({
            name,
            description,
            todoList:[],
            active:true,
        });
    };

    const clearActiveProjects = ()=>{
        allProjects.forEach(project => project.active = false);
    };

    const deleteActiveProject = ()=>{
        let index;
        allProjects.forEach((item,i)=>{allProjects.splice(i,1);
        });
    }

    const getActiveProject = ()=>{
        let activeArray =  allProjects.filter(project => project.active == true);
        return activeArray[0];
    };

    const setActiveProject = (index) =>{
        clearActiveProjects();
        allProjects[index].active = true;
    }

    const createTask = function(name, description, dueDate){
        getActiveProject().todoList.push({
            name,
            description,
            dueDate,
            completion:false,
        });
    };

    const clearCompletedTasks = function(){
        getActiveProject().todoList.forEach((item,i)=>{
            if(item.completion){
                getActiveProject().todoList.splice(i,1);
            }
        });
    };

    const displayProjects = ()=>{
        allProjects.forEach(project => console.log(project));
    }

    const displayTasks = ()=>{
        getActiveProject().todoList.forEach(item=>console.log(item));
    }

    export {allProjects, addProject,setActiveProject,getActiveProject,clearActiveProjects,deleteActiveProject,createTask,displayProjects,displayTasks, clearCompletedTasks};

