function main()
{
	var tree=[];
	var input=[7,6,5,4,3,2,1];
	for(var i=0;i<input.length;i++)
		tree=avlInsert(tree,input[i]);
	var s=max(tree[2],tree[3])+1;
	console.log('\nHeight of the tree is : '+s);
	console.log('\navlTree in array : ')
	console.log(tree)
	console.log('\navlTree is : ')
	printTree(tree);

	
}

function rightRotate(tree)
{
	var newList=[];
	newList=tree[2];
	tree[2]=newList[3];
	newList[3]=tree;
	tree[1]=1+max(tree[2],tree[3]);
	newList[1]=1+max(newList[2],newList[3]);
	return newList;
}

function leftRotate(tree)
{
	newList=[];
	newList=tree[3];
	tree[3]=newList[2];
	newList[2]=tree;
	tree[1]=1+max(tree[2],tree[3]);
	newList[1]=1+max(newList[2],newList[3]);
	return newList;

}

function max(tree1,tree2)
{
	if(height(tree1)>height(tree2))
		return height(tree1);
	else
		return height(tree2);

}

function height(tree)
{
	if(tree.length==0)
		return 0;
	else{
		var lh=height(tree[2]);
		var rh=height(tree[3]);
		if(lh > rh)
			return lh+1;
		else
			return rh+1;
	}
}

function printTree(tree)
{
	if(tree.length!=0){
		printTree(tree[2]);
		console.log(tree[0]);
		printTree(tree[3]);
	
	}

}

function avlInsert(tree,data)
{
	if(tree.length==0)
		return [data,0,[],[]];
	else{
		if(data <= tree[0])
			tree[2]=avlInsert(tree[2],data);
		else
			tree[3]=avlInsert(tree[3],data);
	}
	var balance=height(tree[2])-height(tree[3]);

	if(balance > 1)
		if(height(tree[2][2]) >= height(tree[2][3]))
			return rightRotate(tree);
		else{
			tree[2]=leftRotate(tree[2]);
			return rightRotate(tree);
		}
	if(balance < -1)
	{
		if(height(tree[3][3]) >= height(tree[3][2]))
			return leftRotate(tree);
		else{
			tree[3]=rightRotate(tree[3]);
			return leftRotate(tree);
		}
	}
	tree[1]=1+max(tree[2],tree[3]);
	return tree;

}

main()
