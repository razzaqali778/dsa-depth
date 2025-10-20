const allTreePaths=(root)=>{
   const paths = helper(root)

   for(let path of paths){
    path.reverse()
   }
   return paths
}


function helper (root){
 if(!root) return []

   if(root.left === null && root.right === null){
    return [[root.val]]
   }

   const allPaths = []

   const leftSubPaths = helper(root.left)

   for(let path of leftSubPaths){
    path.push(root.val)
    allPaths.push(path)
   }

    const rightSubPaths = helper(root.left)

   for(let path of rightSubPaths){
    path.push(root.val)
    allPaths.push(path)
   }

   return allPaths
}