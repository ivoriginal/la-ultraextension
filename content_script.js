walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea'
			|| (node.classList && node.classList.contains('ace_editor'))) {
			return;
	}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bVox\b/g, "los putos nazis");
	v = v.replace(/\bvox\b/g, "los putos nazis");
	v = v.replace(/\bVOX\b/g, "los putos nazis");
	v = v.replace(/\bVOx\b/g, "los putos nazis");
	v = v.replace(/\bV0X\b/g, "los putos nazis");
	v = v.replace(/\bv0x\b/g, "los putos nazis");
	v = v.replace(/\bV0x\b/g, "los putos nazis");
	v = v.replace(/\blos putos nazis Media\b/g, "Vox Media");
	v = v.replace(/\bvoxespana\b/g, "losputosnazisespaña");

	textNode.nodeValue = v;
}
