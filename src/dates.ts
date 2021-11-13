
export const nowDate = new Date()

// if (!inDate) {
//   inDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 2).toISOString().slice(0,10)
// } 

// if (!outDate) {
//   outDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 4).toISOString().slice(0,10)
// } 

export const checkDate = (date: string,  period: number): Date => {
	
	if (!date) {
		// console.log(new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + period));
		
		return new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + period)
	}
	// console.log(`Old ${new Date(date)}`);
	
	return new Date(date)
}
// .toISOString().slice(0,10)