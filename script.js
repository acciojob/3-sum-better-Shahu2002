function threeSumClosest(nums, target) {
	let size = nums.length;
	for(let i=0; i<size-2)
		{
			for(let j=1; j<size-1; j++){
				for(let k=2; k<size; k++){
					if(k===target){
						return i+j+k;
					}
				}
			}
		}
}

