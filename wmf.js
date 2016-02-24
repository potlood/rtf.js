/*

The MIT License (MIT)

Copyright (c) 2015 Thomas Bluemel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

if (typeof WMFJS === 'undefined') {
	(typeof window !== 'undefined' ? window : this).WMFJS = {
		Error: function(message) {
			this.message = message;
		},
		GDI: {
			METAHEADER_SIZE: 18,
			BITMAPINFOHEADER_SIZE: 40,
			BITMAPCOREHEADER_SIZE: 12,
			MetafileType: {
				MEMORYMETAFILE: 1,
				DISKMETAFILE: 2
			},
			MetafileVersion: {
				METAVERSION100: 0x100,
				METAVERSION300: 0x300
			},
			RecordType: {
				META_EOF: 0x0000,
				META_REALIZEPALETTE: 0x0035,
				META_SETPALENTRIES: 0x0037,
				META_SETBKMODE: 0x0102,
				META_SETMAPMODE: 0x0103,
				META_SETROP2: 0x0104,
				META_SETRELABS: 0x0105,
				META_SETPOLYFILLMODE: 0x0106,
				META_SETSTRETCHBLTMODE: 0x0107,
				META_SETTEXTCHAREXTRA: 0x0108,
				META_RESTOREDC: 0x0127,
				META_RESIZEPALETTE: 0x0139,
				META_DIBCREATEPATTERNBRUSH: 0x0142,
				META_SETLAYOUT: 0x0149,
				META_SETBKCOLOR: 0x0201,
				META_SETTEXTCOLOR: 0x0209,
				META_OFFSETVIEWPORTORG: 0x0211,
				META_LINETO: 0x0213,
				META_MOVETO: 0x0214,
				META_OFFSETCLIPRGN: 0x0220,
				META_FILLREGION: 0x0228,
				META_SETMAPPERFLAGS: 0x0231,
				META_SELECTPALETTE: 0x0234,
				META_POLYGON: 0x0324,
				META_POLYLINE: 0x0325,
				META_SETTEXTJUSTIFICATION: 0x020a,
				META_SETWINDOWORG: 0x020b,
				META_SETWINDOWEXT: 0x020c,
				META_SETVIEWPORTORG: 0x020d,
				META_SETVIEWPORTEXT: 0x020e,
				META_OFFSETWINDOWORG: 0x020f,
				META_SCALEWINDOWEXT: 0x0410,
				META_SCALEVIEWPORTEXT: 0x0412,
				META_EXCLUDECLIPRECT: 0x0415,
				META_INTERSECTCLIPRECT: 0x0416,
				META_ELLIPSE: 0x0418,
				META_FLOODFILL: 0x0419,
				META_FRAMEREGION: 0x0429,
				META_ANIMATEPALETTE: 0x0436,
				META_TEXTOUT: 0x0521,
				META_POLYPOLYGON: 0x0538,
				META_EXTFLOODFILL: 0x0548,
				META_RECTANGLE: 0x041b,
				META_SETPIXEL: 0x041f,
				META_ROUNDRECT: 0x061c,
				META_PATBLT: 0x061d,
				META_SAVEDC: 0x001e,
				META_PIE: 0x081a,
				META_STRETCHBLT: 0x0b23,
				META_ESCAPE: 0x0626,
				META_INVERTREGION: 0x012a,
				META_PAINTREGION: 0x012b,
				META_SELECTCLIPREGION: 0x012c,
				META_SELECTOBJECT: 0x012d,
				META_SETTEXTALIGN: 0x012e,
				META_ARC: 0x0817,
				META_CHORD: 0x0830,
				META_BITBLT: 0x0922,
				META_EXTTEXTOUT: 0x0a32,
				META_SETDIBTODEV: 0x0d33,
				META_DIBBITBLT: 0x0940,
				META_DIBSTRETCHBLT: 0x0b41,
				META_STRETCHDIB: 0x0f43,
				META_DELETEOBJECT: 0x01f0,
				META_CREATEPALETTE: 0x00f7,
				META_CREATEPATTERNBRUSH: 0x01f9,
				META_CREATEPENINDIRECT: 0x02fa,
				META_CREATEFONTINDIRECT: 0x02fb,
				META_CREATEBRUSHINDIRECT: 0x02fc,
				META_CREATEREGION: 0x06ff
			},
			MetafileEscapes: {
				NEWFRAME: 0x0001,
				ABORTDOC: 0x0002,
				NEXTBAND: 0x0003,
				SETCOLORTABLE: 0x0004,
				GETCOLORTABLE: 0x0005,
				FLUSHOUT: 0x0006,
				DRAFTMODE: 0x0007,
				QUERYESCSUPPORT: 0x0008,
				SETABORTPROC: 0x0009,
				STARTDOC: 0x000a,
				ENDDOC: 0x000b,
				GETPHYSPAGESIZE: 0x000c,
				GETPRINTINGOFFSET: 0x000d,
				GETSCALINGFACTOR: 0x000e,
				META_ESCAPE_ENHANCED_METAFILE: 0x000f,
				SETPENWIDTH: 0x0010,
				SETCOPYCOUNT: 0x0011,
				SETPAPERSOURCE: 0x0012,
				PASSTHROUGH: 0x0013,
				GETTECHNOLOGY: 0x0014,
				SETLINECAP: 0x0015,
				SETLINEJOIN: 0x0016,
				SETMITERLIMIT: 0x0017,
				BANDINFO: 0x0018,
				DRAWPATTERNRECT: 0x0019,
				GETVECTORPENSIZE: 0x001a,
				GETVECTORBRUSHSIZE: 0x001b,
				ENABLEDUPLEX: 0x001c,
				GETSETPAPERBINS: 0x001d,
				GETSETPRINTORIENT: 0x001e,
				ENUMPAPERBINS: 0x001f,
				SETDIBSCALING: 0x0020,
				EPSPRINTING: 0x0021,
				ENUMPAPERMETRICS: 0x0022,
				GETSETPAPERMETRICS: 0x0023,
				POSTSCRIPT_DATA: 0x0025,
				POSTSCRIPT_IGNORE: 0x0026,
				GETDEVICEUNITS: 0x002a,
				GETEXTENDEDTEXTMETRICS: 0x0100,
				GETPAIRKERNTABLE: 0x0102,
				EXTTEXTOUT: 0x0200,
				GETFACENAME: 0x0201,
				DOWNLOADFACE: 0x0202,
				METAFILE_DRIVER: 0x0801,
				QUERYDIBSUPPORT: 0x0c01,
				BEGIN_PATH: 0x1000,
				CLIP_TO_PATH: 0x1001,
				END_PATH: 0x1002,
				OPEN_CHANNEL: 0x100e,
				DOWNLOADHEADER: 0x100f,
				CLOSE_CHANNEL: 0x1010,
				POSTSCRIPT_PASSTHROUGH: 0x1013,
				ENCAPSULATED_POSTSCRIPT: 0x1014,
				POSTSCRIPT_IDENTIFY: 0x1015,
				POSTSCRIPT_INJECTION: 0x1016,
				CHECKJPEGFORMAT: 0x1017,
				CHECKPNGFORMAT: 0x1018,
				GET_PS_FEATURESETTING: 0x1019,
				MXDC_ESCAPE: 0x101a,
				SPCLPASSTHROUGH2: 0x11d8
			},
			MapMode: {
				MM_TEXT: 1,
				MM_LOMETRIC: 2,
				MM_HIMETRIC: 3,
				MM_LOENGLISH: 4,
				MM_HIENGLISH: 5,
				MM_TWIPS: 6,
				MM_ISOTROPIC: 7,
				MM_ANISOTROPIC: 8
			},
			StretchMode: {
				BLACKONWHITE: 1,
				WHITEONBLACK: 2,
				COLORONCOLOR: 3,
				HALFTONE: 4
			},
			TextAlignmentMode: {
				TA_UPDATECP: 1,
				TA_RIGHT: 2,
				TA_CENTER: 6,
				TA_BOTTOM: 8,
				TA_BASELINE: 24,
				TA_RTLREADING: 256
			},
			MixMode: {
				TRANSPARENT: 1,
				OPAQUE: 2
			},
			VerticalTextAlignmentMode: {
				VTA_BOTTOM: 2,
				VTA_CENTER: 6,
				VTA_LEFT: 8,
				VTA_BASELINE: 24
			},
			BitmapCompression: {
				BI_RGB: 0,
				BI_RLE8: 1,
				BI_RLE4: 2,
				BI_BITFIELDS: 3,
				BI_JPEG: 4,
				BI_PNG: 5
			},
		},
		_uniqueId: 0,
		_makeUniqueId: function(prefix) {
			return prefix + (this._uniqueId++);
		},
		_writeUint32Val: function(uint8arr, pos, val) {
			uint8arr[pos++] = val & 0xff;
			uint8arr[pos++] = (val >>> 8) & 0xff;
			uint8arr[pos++] = (val >>> 16) & 0xff;
			uint8arr[pos++] = (val >>> 24) & 0xff;
		},
		_blobToBinary: function(blob) {
			var ret = "";
			var len = blob.length;
			for (var i = 0; i < len; i++)
				ret += String.fromCharCode(blob[i]);
			return ret;
		},
	};
}

WMFJS.Blob = function(blob, offset) {
	if (blob instanceof WMFJS.Blob) {
		this.blob = blob.blob;
		this.data = blob.data;
		this.pos =  offset || blob.pos;
	} else {
		this.blob = blob;
		this.data = new Uint8Array(blob);
		this.pos =  offset || 0;
	}
};

WMFJS.Blob.prototype.eof = function() {
	return this.pos >= this.data.length;
};

WMFJS.Blob.prototype.seek = function(newpos) {
	if (newpos < 0 || newpos > this.data.length)
		throw new WMFJS.Error("Invalid seek position");
	this.pos = newpos;
};

WMFJS.Blob.prototype.skip = function(cnt) {
	var newPos = this.pos + cnt;
	if (newPos > this.data.length)
		throw new WMFJS.Error("Unexpected end of file");
	this.pos = newPos;
};

WMFJS.Blob.prototype.readBinary = function(cnt) {
	var end = this.pos + cnt;
	if (end > this.data.length)
		throw new WMFJS.Error("Unexpected end of file");
	var ret = "";
	while (cnt-- > 0)
		ret += String.fromCharCode(this.data[this.pos++]);
	return ret;
};

WMFJS.Blob.prototype.readInt8 = function() {
	if (this.pos + 1 > this.data.length)
		throw new WMFJS.Error("Unexpected end of file");
	return this.data[this.pos++];
};

WMFJS.Blob.prototype.readUint8 = function() {
	return this.readInt8() >>> 0;
};

WMFJS.Blob.prototype.readInt32 = function() {
	if (this.pos + 4 > this.data.length)
		throw new WMFJS.Error("Unexpected end of file");
	var val = this.data[this.pos++];
	val |= this.data[this.pos++] << 8;
	val |= this.data[this.pos++] << 16;
	val |= this.data[this.pos++] << 24;
	return val;
};

WMFJS.Blob.prototype.readUint32 = function() {
	return this.readInt32() >>> 0;
};

WMFJS.Blob.prototype.readUint16 = function() {
	if (this.pos + 2 > this.data.length)
		throw new WMFJS.Error("Unexpected end of file");
	var val = this.data[this.pos++];
	val |= this.data[this.pos++] << 8;
	return val;
};

WMFJS.Blob.prototype.readInt16 = function() {
	var val = this.readUint16();
	if (val > 32767)
		val -= 65536;
	return val;
};

WMFJS.ColorRef = function(reader, r, g, b) {
	if (reader != null) {
		this.r = reader.readUint8();
		this.g = reader.readUint8();
		this.b = reader.readUint8();
	} else {
		this.r = r;
		this.g = g;
		this.b = b;
	}
};

WMFJS.ColorRef.prototype.clone = function() {
	return new WMFJS.ColorRef(null, this.r, this.g, this.b);
};

WMFJS.ColorRef.prototype.toString = function() {
	return "{r: " + this.r + ", g: " + this.g + ", b: " + this.b + "}";
};

WMFJS.PointS = function(reader, x, y) {
	if (reader != null) {
		this.x = reader.readInt16();
		this.y = reader.readInt16();
	} else {
		this.x =  x;
		this.y = y;
	}
};

WMFJS.PointS.prototype.clone = function() {
	return new WMFJS.PointS(null, this.x, this.y);
};

WMFJS.PointS.prototype.toString = function() {
	return "{x: " + this.x + ", y: " + this.y + "}";
};

WMFJS.Obj = function() {
}

WMFJS.Obj.prototype.clone = function() {
	throw new WMFJS.Error("clone not implemented");
}

WMFJS.Obj.prototype.toString = function() {
	throw new WMFJS.Error("toString not implemented");
}

WMFJS.Brush = function(reader, style, color, hatch) {
	if (reader != null) {
		this.style = reader.readUint16();
		this.color = new WMFJS.ColorRef(reader);
		this.hatch = reader.readUint16();
	} else {
		this.style = style;
		this.color = color;
		this.hatch = hatch;
	}
};
WMFJS.Brush.prototype = Object.create(WMFJS.Obj.prototype);

WMFJS.Brush.prototype.clone = function() {
	return new WMFJS.Brush(null, this.style, this.color.clone(), this.hatch);
};

WMFJS.Brush.prototype.toString = function() {
	return "{style: " + this.style + ", color: " + this.color.toString() + ", hatch: " + this.hatch + "}";
};

WMFJS.Pen = function(reader, style, width, color) {
	if (reader != null) {
		this.style = reader.readUint16();
		this.width = new WMFJS.PointS(reader);
		this.color = new WMFJS.ColorRef(reader);
	} else {
		this.style = style;
		this.width = width;
		this.color = color;
	}
};
WMFJS.Pen.prototype = Object.create(WMFJS.Obj.prototype);

WMFJS.Pen.prototype.clone = function() {
	return new WMFJS.Pen(null, this.style, this.width.clone(), this.color.clone());
};

WMFJS.Pen.prototype.toString = function() {
	return "{syle: " + this.style + ", width: " + this.width.toString() + ", color: " + this.color.toString() + "}";
};

WMFJS.BitmapCoreHeader = function(reader, skipsize) {
	if (skipsize)
		reader.skip(4);
	this.width = reader.readUint16();
	this.height = reader.readUint16();
	this.planes = reader.readUint16();
	this.bitcount = reader.readUint16();
}

WMFJS.BitmapCoreHeader.prototype.colors = function() {
	return this.bitcount <= 8 ? 1 << this.bitcount : 0;
};

WMFJS.BitmapInfoHeader = function(reader, skipsize) {
	if (skipsize)
		reader.skip(4);
	this.width = reader.readInt32();
	this.height = reader.readInt32();
	this.planes = reader.readUint16();
	this.bitcount = reader.readUint16();
	this.compression = reader.readUint32();
	this.sizeimage = reader.readUint32();
	this.xpelspermeter = reader.readInt32();
	this.ypelspermeter = reader.readInt32();
	this.clrused = reader.readUint32();
	this.clrimportant = reader.readUint32();
};

WMFJS.BitmapInfoHeader.prototype.colors = function() {
	if (this.clrused != 0)
		return this.clrused < 256 ? this.clrused : 256;
	else
		return this.bitcount > 8 ? 0 : 1 << this.bitcount;
};

WMFJS.BitmapInfo = function(reader, usergb) {
	this._reader = reader;
	this._offset = reader.pos;
	this._usergb = usergb;
	var hdrsize = reader.readUint32();
	this._infosize = hdrsize;
	if (hdrsize == WMFJS.GDI.BITMAPCOREHEADER_SIZE) {
		this._header = new WMFJS.BitmapCoreHeader(reader, false);
		this._infosize += this._header.colors() * (usergb ? 3 : 2);
	}
	else {
		this._header = new WMFJS.BitmapInfoHeader(reader, false);
		var masks = this._header.compression == WMFJS.GDI.BitmapCompression.BI_BITFIELDS ? 3 : 0;
		if (hdrsize <= WMFJS.GDI.BITMAPINFOHEADER_SIZE + (masks * 4))
			this._infosize = WMFJS.GDI.BITMAPINFOHEADER_SIZE + (masks * 4);
		this._infosize += this._header.colors() * (usergb ? 4 : 2);
	}
};

WMFJS.BitmapInfo.prototype.infosize = function() {
	return this._infosize;
};

WMFJS.BitmapInfo.prototype.header = function() {
	return this._header;
};

WMFJS.DIBitmap = function(reader, size) {
	this._reader = reader;
	this._offset = reader.pos;
	this._size = size;
	this._info = new WMFJS.BitmapInfo(reader, true);
};

WMFJS.DIBitmap.prototype.makeBitmapFileHeader = function() {
	var buf = new ArrayBuffer(14);
	var view = new Uint8Array(buf);
	view[0] = 0x42;
	view[1] = 0x4d;
	WMFJS._writeUint32Val(view, 2, this._size + 14);
	WMFJS._writeUint32Val(view, 10, this._info.infosize() + 14);
	return WMFJS._blobToBinary(view);
};

WMFJS.DIBitmap.prototype.base64ref = function() {
	var prevpos = this._reader.pos;
	this._reader.seek(this._offset);
	var mime = "image/bmp";
	var header = this._info.header();
	var data;
	if (header.compression != null) {
		switch (header.compression) {
			case WMFJS.GDI.BitmapCompression.BI_JPEG:
				mime = "data:image/jpeg";
				break;
			case WMFJS.GDI.BitmapCompression.BI_PNG:
				mime = "data:image/png";
				break;
			default:
				data = this.makeBitmapFileHeader();
				break;
		}
	} else {
		data = this.makeBitmapFileHeader();
	}
	
	if (data != null)
		data += this._reader.readBinary(this._size);
	else
		data = this._reader.readBinary(this._size);
	
	var ref = "data:" + mime + ";base64," + btoa(data);
	this._reader.seek(prevpos);
	return ref;
};

WMFJS.GDIContextState = function(copy) {
	if (copy != null) {
		this._svggroup = copy._svggroup;
		this.mapmode = copy.mapmode;
		this.stretchmode = copy.stretchmode;
		this.textalign = copy.textalign;
		this.bkmode = copy.bkmode;
		this.textcolor = copy.textcolor.clone();
		this.bkcolor = copy.bkcolor.clone();
		this.wx = copy.wx;
		this.wy = copy.wy;
		this.ww = copy.ww;
		this.wh = copy.wh;
		this.vx = copy.vx;
		this.vy = copy.vy;
		this.vw = copy.vw;
		this.vh = copy.vh;
		
		this.selected = copy.selected;
	} else {
		this._svggroup = null;
		this.mapmode = WMFJS.GDI.MapMode.MM_ANISOTROPIC;
		this.stretchmode = WMFJS.GDI.StretchMode.COLORONCOLOR;
		this.textalign = 0; // TA_LEFT | TA_TOP | TA_NOUPDATECP
		this.bkmode = WMFJS.GDI.MixMode.OPAQUE;
		this.textcolor = new WMFJS.ColorRef(null, 0, 0, 0);
		this.bkcolor = new WMFJS.ColorRef(null, 255, 255, 255);
		this.wx = 0;
		this.wy = 0;
		this.ww = 0;
		this.wh = 0;
		this.vx = 0;
		this.vy = 0;
		this.vw = 0;
		this.vh = 0;
		
		this.selected = null;
	}
}

WMFJS.GDIContext = function(svg) {
	this._svg = svg;
	this.state = new WMFJS.GDIContextState(null);
	this.statestack = [this.state];
	this.objects = {};
};

WMFJS.GDIContext.prototype._pushGroup = function() {
	if (this.state._svggroup == null) {
		var settings = {
			viewBox: [this.state.vx + this._todevX(0), this.state.vy + this._todevY(0), this.state.vw, this.state.vh].join(" "),
			preserveAspectRatio: "none"
		};
		//this.state._svggroup = this._svg.group(WMFJS._makeUniqueId("wmfjs_grp"), settings);
		this.state._svggroup = this._svg.svg(this.state._svggroup,
			this.state.vx, this.state.vy, this.state.vw, this.state.vh, this.state.vx, this.state.vy, this.state.vw, this.state.vh, settings);
	}
};

WMFJS.GDIContext.prototype._storeObject = function(obj) {
	var i = 0;
	while (this.objects[i.toString()] != null && i <= 65535)
		i++;
	if (i > 65535) {
		console.log("[gdi] Too many objects!");
		return -1;
	}
	
	this.objects[i.toString()] = obj;
	return i;
};

WMFJS.GDIContext.prototype._getObject = function(objIdx) {
	var obj = this.objects[objIdx.toString()];
	if (obj == null)
		console.log("[gdi] No object with handle " + objIdx);
	return obj;
}

WMFJS.GDIContext.prototype._deleteObject = function(objIdx) {
	var obj = this.objects[objIdx.toString()];
	if (obj != null) {
		for (var i = 0; i < this.statestack.length; i++) {
			var state = this.statestack[i];
			if (state.selected == obj)
				state.selected = null;
		}
		delete this.objects[objIdx.toString()];
		return true;
	}
	
	console.log("[gdi] Cannot delete object with invalid handle " + objIdx);
	return false;
};

WMFJS.GDIContext.prototype._todevX = function(val) {
	// http://wvware.sourceforge.net/caolan/mapmode.html
	// logical -> device
	return Math.floor((val - this.state.wx) * (this.state.vw / this.state.ww)) + this.state.vx;
};

WMFJS.GDIContext.prototype._todevY = function(val) {
	// http://wvware.sourceforge.net/caolan/mapmode.html
	// logical -> device
	return Math.floor((val - this.state.wy) * (this.state.vh / this.state.wh)) + this.state.vy;
};

WMFJS.GDIContext.prototype._todevW = function(val) {
	// http://wvware.sourceforge.net/caolan/mapmode.html
	// logical -> device
	return Math.floor(val * (this.state.vw / this.state.ww)) + this.state.vx;
};

WMFJS.GDIContext.prototype._todevH = function(val) {
	// http://wvware.sourceforge.net/caolan/mapmode.html
	// logical -> device
	return Math.floor(val * (this.state.vh / this.state.wh)) + this.state.vy;
};

WMFJS.GDIContext.prototype._tologicalX = function(val) {
	// http://wvware.sourceforge.net/caolan/mapmode.html
	// logical -> device
	return Math.floor((val - this.state.vx) / (this.state.vw / this.state.ww)) + this.state.wx;
};

WMFJS.GDIContext.prototype._tologicalY = function(val) {
	// http://wvware.sourceforge.net/caolan/mapmode.html
	// logical -> device
	return Math.floor((val - this.state.vy) / (this.state.vh / this.state.wh)) + this.state.wy;
};

WMFJS.GDIContext.prototype._tologicalW = function(val) {
	// http://wvware.sourceforge.net/caolan/mapmode.html
	// logical -> device
	return Math.floor(val / (this.state.vw / this.state.ww)) + this.state.wx;
};

WMFJS.GDIContext.prototype._tologicalH = function(val) {
	// http://wvware.sourceforge.net/caolan/mapmode.html
	// logical -> device
	return Math.floor(val / (this.state.vh / this.state.wh)) + this.state.wy;
};

WMFJS.GDIContext.prototype.setMapMode = function(mode) {
	console.log("[gdi] setMapMode: mode=" + mode);
	this.state.mapmode = mode;
	this.state._svggroup = null;
};

WMFJS.GDIContext.prototype.setWindowOrg = function(x, y) {
	console.log("[gdi] setWindowOrg: x=" + x + " y=" + y);
	this.state.wx = x;
	this.state.wy = y;
	this.state._svggroup = null;
};

WMFJS.GDIContext.prototype.setWindowExt = function(x, y) {
	console.log("[gdi] setWindowExt: x=" + x + " y=" + y);
	this.state.ww = x;
	this.state.wh = y;
	this.state._svggroup = null;
};

WMFJS.GDIContext.prototype.setViewportOrg = function(x, y) {
	console.log("[gdi] setViewportOrg: x=" + x + " y=" + y);
	this.state.vx = x;
	this.state.vy = y;
	this.state._svggroup = null;
};

WMFJS.GDIContext.prototype.setViewportExt = function(x, y) {
	console.log("[gdi] setViewportExt: x=" + x + " y=" + y);
	this.state.vw = x;
	this.state.vh = y;
	this.state._svggroup = null;
};

WMFJS.GDIContext.prototype.saveDC = function() {
	console.log("[gdi] saveDC");
	var prevstate = this.state;
	this.state = new WMFJS.GDIContextState(this.state);
	this.statestack.push(prevstate);
	this.state._svggroup = null;
};

WMFJS.GDIContext.prototype.restoreDC = function(saved) {
	console.log("[gdi] restoreDC: saved=" + saved);
	if (this.statestack.length > 1) {
		if (saved == -1) {
			this.state = this.statestack.pop();
		} else if (saved < -1) {
			throw new WMFJS.Error("restoreDC: relative restore not implemented");
		} else if (saved > 1) {
			throw new WMFJS.Error("restoreDC: absolute restore not implemented");
		}
	} else {
		throw new WMFJS.Error("No saved contexts");
	}
	
	this.state._svggroup = null;
};

WMFJS.GDIContext.prototype.escape = function(func, blob, offset, count) {
	console.log("[gdi] escape: func=" + func + " offset=" + offset + " count=" + count);
};

WMFJS.GDIContext.prototype.setStretchBltMode = function(stretchMode) {
	console.log("[gdi] setStretchBltMode: stretchMode=" + stretchMode);
};

WMFJS.GDIContext.prototype.stretchDib = function(srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH, rasterOp, colorUsage, dib) {
	console.log("[gdi] stretchDibBits: srcX=" + srcX + " srcY=" + srcY + " srcW=" + srcW + " srcH=" + srcH + " dstX=" + dstX + " dstY=" + dstY + " dstW=" + dstW + " dstH=" + dstH + " rasterOp=0x" + rasterOp.toString(16));
	srcX = this._todevX(srcX);
	srcY = this._todevY(srcY);
	srcW = this._todevW(srcW);
	srcH = this._todevH(srcH);
	dstX = this._todevX(dstX);
	dstY = this._todevY(dstY);
	dstW = this._todevW(dstW);
	dstH = this._todevH(dstH);
	console.log("[gdi] stretchDib: TRANSLATED: srcX=" + srcX + " srcY=" + srcY + " srcW=" + srcW + " srcH=" + srcH + " dstX=" + dstX + " dstY=" + dstY + " dstW=" + dstW + " dstH=" + dstH + " rasterOp=0x" + rasterOp.toString(16) + " colorUsage=0x" + colorUsage.toString(16));
	this._pushGroup();
	this._svg.image(this.state._svggroup, dstX, dstY, dstW, dstH, dib.base64ref());
};

WMFJS.GDIContext.prototype.stretchDibBits = function(srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH, rasterOp, dib) {
	console.log("[gdi] stretchDibBits: srcX=" + srcX + " srcY=" + srcY + " srcW=" + srcW + " srcH=" + srcH + " dstX=" + dstX + " dstY=" + dstY + " dstW=" + dstW + " dstH=" + dstH + " rasterOp=0x" + rasterOp.toString(16));
	srcX = this._todevX(srcX);
	srcY = this._todevY(srcY);
	srcW = this._todevW(srcW);
	srcH = this._todevH(srcH);
	dstX = this._todevX(dstX);
	dstY = this._todevY(dstY);
	dstW = this._todevW(dstW);
	dstH = this._todevH(dstH);
	console.log("[gdi] stretchDibBits: TRANSLATED: srcX=" + srcX + " srcY=" + srcY + " srcW=" + srcW + " srcH=" + srcH + " dstX=" + dstX + " dstY=" + dstY + " dstW=" + dstW + " dstH=" + dstH + " rasterOp=0x" + rasterOp.toString(16));
	this._pushGroup();
	this._svg.image(this.state._svggroup, dstX, dstY, dstW, dstH, dib.base64ref());
};

WMFJS.GDIContext.prototype.setTextAlign = function(textAlignmentMode) {
	console.log("[gdi] setTextAlign: textAlignmentMode=0x" + textAlignmentMode.toString(16));
	this.state.textalign = textAlignmentMode;
};

WMFJS.GDIContext.prototype.setBkMode = function(bkMode) {
	console.log("[gdi] setBkMode: bkMode=0x" + bkMode.toString(16));
	this.state.bkmode = bkMode;
};

WMFJS.GDIContext.prototype.setTextColor = function(textColor) {
	console.log("[gdi] setTextColor: textColor=" + textColor.toString());
	this.state.textcolor = textColor;
};

WMFJS.GDIContext.prototype.setBkColor = function(bkColor) {
	console.log("[gdi] setBkColor: bkColor=" + bkColor.toString());
	this.state.bkcolor = bkColor;
};

WMFJS.GDIContext.prototype.createBrush = function(brush) {
	var idx = this._storeObject(brush);
	console.log("[gdi] createBrush: brush=" + brush.toString() + " with handle " + idx);
};

WMFJS.GDIContext.prototype.createPen = function(pen) {
	var idx = this._storeObject(pen);
	console.log("[gdi] createPen: pen=" + pen.toString() + " width handle " + idx);
};

WMFJS.GDIContext.prototype.selectObject = function(objIdx) {
	this.state.selected = this._getObject(objIdx);
	console.log("[gdi] selectObject: objIdx=" + objIdx + " selected: " + (this.state.selected != null ? this.state.toString() : "[invalid index]"));
};

WMFJS.GDIContext.prototype.deleteObject = function(objIdx) {
	var ret = this._deleteObject(objIdx);
	console.log("[gdi] deleteObject: objIdx=" + objIdx + (ret ? " deleted object" : "[invalid index]"));
};

WMFJS.WMFRect16 = function(reader) {
	this.left = reader.readInt16();
	this.top = reader.readInt16();
	this.right = reader.readInt16();
	this.bottom = reader.readInt16();
};

WMFJS.WMFRect16.prototype.toString = function() {
	return "{left: " + this.left + ", top: " + this.top + ", right: " + this.right + ", bottom: " + this.bottom + "}";
};

WMFJS.WMFRecords = function(reader, first) {
	this._records = [];
	
	var all = false;
	var curpos = first;
	main_loop: while (!all) {
		reader.seek(curpos);
		var size = reader.readUint32();
		if (size < 3)
			throw new WMFJS.Error("Invalid record size");
		var type = reader.readUint16();
		switch (type) {
			case WMFJS.GDI.RecordType.META_EOF:
				all = true;
				break main_loop;
			case WMFJS.GDI.RecordType.META_SETMAPMODE:
				var mapMode = reader.readUint16();
				this._records.push(function(gdi) {
					gdi.setMapMode(mapMode);
				});
				break;
			case WMFJS.GDI.RecordType.META_SETWINDOWORG:
				var y = reader.readInt16();
				var x = reader.readInt16();
				this._records.push(function(gdi) {
					gdi.setWindowOrg(x, y);
				});
				break;
			case WMFJS.GDI.RecordType.META_SETWINDOWEXT:
				var y = reader.readInt16();
				var x = reader.readInt16();
				this._records.push(function(gdi) {
					gdi.setWindowExt(x, y);
				});
				break;
			case WMFJS.GDI.RecordType.META_SAVEDC:
				this._records.push(function(gdi) {
					gdi.saveDC();
				});
				break;
			case WMFJS.GDI.RecordType.META_RESTOREDC:
				var saved = reader.readInt16();
				this._records.push(function(gdi) {
					gdi.restoreDC(saved);
				});
				break;
			case WMFJS.GDI.RecordType.META_SETSTRETCHBLTMODE:
				var stretchMode = reader.readUint16();
				this._records.push(function(gdi) {
					gdi.setStretchBltMode(stretchMode);
				});
				break;
			case WMFJS.GDI.RecordType.META_DIBSTRETCHBLT:
				var haveSrcDib = ((type >> 8) + 3 != size);
				var rasterOp = reader.readUint16() | (reader.readUint16() << 16);
				var srcH = reader.readInt16();
				var srcW = reader.readInt16();
				var srcY = reader.readInt16();
				var srcX = reader.readInt16();
				var destH = reader.readInt16();
				var destW = reader.readInt16();
				var destY = reader.readInt16();
				var destX = reader.readInt16();
				var datalength = size * 2 - (reader.pos - curpos);
				var dib = new WMFJS.DIBitmap(reader, datalength);
				this._records.push(function(gdi) {
					gdi.stretchDibBits(srcX, srcY, srcW, srcH, destX, destY, destW, destH, rasterOp, dib);
				});
				break;
			case WMFJS.GDI.RecordType.META_STRETCHDIB:
				var rasterOp = reader.readUint16() | (reader.readUint16() << 16);
				var colorUsage = reader.readInt16();
				var srcH = reader.readInt16();
				var srcW = reader.readInt16();
				var srcY = reader.readInt16();
				var srcX = reader.readInt16();
				var destH = reader.readInt16();
				var destW = reader.readInt16();
				var destY = reader.readInt16();
				var destX = reader.readInt16();
				var datalength = size * 2 - (reader.pos - curpos);
				var dib = new WMFJS.DIBitmap(reader, datalength);
				this._records.push(function(gdi) {
					gdi.stretchDib(srcX, srcY, srcW, srcH, destX, destY, destW, destH, rasterOp, colorUsage, dib);
				});
				break;
			case WMFJS.GDI.RecordType.META_ESCAPE:
				var func = reader.readUint16();
				var count = reader.readUint16();
				var offset = reader.pos;
				var blob = new WMFJS.Blob(reader, offset);
				this._records.push(function(gdi) {
					gdi.escape(func, blob, offset, count);
				});
				break;
			case WMFJS.GDI.RecordType.META_SETTEXTALIGN:
				var textAlign = reader.readUint16();
				this._records.push(function(gdi) {
					gdi.setTextAlign(textAlign);
				});
				break;
			case WMFJS.GDI.RecordType.META_SETBKMODE:
				var bkMode = reader.readUint16();
				this._records.push(function(gdi) {
					gdi.setBkMode(bkMode);
				});
				break;
			case WMFJS.GDI.RecordType.META_SETTEXTCOLOR:
				var textColor = new WMFJS.ColorRef(reader);
				this._records.push(function(gdi) {
					gdi.setTextColor(textColor);
				});
				break;
			case WMFJS.GDI.RecordType.META_SETBKCOLOR:
				var bkColor = new WMFJS.ColorRef(reader);
				this._records.push(function(gdi) {
					gdi.setBkColor(bkColor);
				});
				break;
			case WMFJS.GDI.RecordType.META_CREATEBRUSHINDIRECT:
				var brush = new WMFJS.Brush(reader);
				this._records.push(function(gdi) {
					gdi.createBrush(brush);
				});
				break;
			case WMFJS.GDI.RecordType.META_CREATEPENINDIRECT:
				var pen = new WMFJS.Pen(reader);
				this._records.push(function(gdi) {
					gdi.createPen(pen);
				});
				break;
			case WMFJS.GDI.RecordType.META_SELECTOBJECT:
				var idx = reader.readUint16();
				this._records.push(function(gdi) {
					gdi.selectObject(idx);
				});
				break;
			case WMFJS.GDI.RecordType.META_DELETEOBJECT:
				var idx = reader.readUint16();
				this._records.push(function(gdi) {
					gdi.deleteObject(idx);
				});
				break;
			case WMFJS.GDI.RecordType.META_REALIZEPALETTE:
			case WMFJS.GDI.RecordType.META_SETPALENTRIES:
			case WMFJS.GDI.RecordType.META_SETROP2:
			case WMFJS.GDI.RecordType.META_SETRELABS:
			case WMFJS.GDI.RecordType.META_SETPOLYFILLMODE:
			case WMFJS.GDI.RecordType.META_SETTEXTCHAREXTRA:
			case WMFJS.GDI.RecordType.META_RESIZEPALETTE:
			case WMFJS.GDI.RecordType.META_DIBCREATEPATTERNBRUSH:
			case WMFJS.GDI.RecordType.META_SETLAYOUT:
			case WMFJS.GDI.RecordType.META_OFFSETVIEWPORTORG:
			case WMFJS.GDI.RecordType.META_LINETO:
			case WMFJS.GDI.RecordType.META_MOVETO:
			case WMFJS.GDI.RecordType.META_OFFSETCLIPRGN:
			case WMFJS.GDI.RecordType.META_FILLREGION:
			case WMFJS.GDI.RecordType.META_SETMAPPERFLAGS:
			case WMFJS.GDI.RecordType.META_SELECTPALETTE:
			case WMFJS.GDI.RecordType.META_POLYGON:
			case WMFJS.GDI.RecordType.META_POLYLINE:
			case WMFJS.GDI.RecordType.META_SETTEXTJUSTIFICATION:
			case WMFJS.GDI.RecordType.META_SETVIEWPORTORG:
			case WMFJS.GDI.RecordType.META_SETVIEWPORTEXT:
			case WMFJS.GDI.RecordType.META_OFFSETWINDOWORG:
			case WMFJS.GDI.RecordType.META_SCALEWINDOWEXT:
			case WMFJS.GDI.RecordType.META_SCALEVIEWPORTEXT:
			case WMFJS.GDI.RecordType.META_EXCLUDECLIPRECT:
			case WMFJS.GDI.RecordType.META_INTERSECTCLIPRECT:
			case WMFJS.GDI.RecordType.META_ELLIPSE:
			case WMFJS.GDI.RecordType.META_FLOODFILL:
			case WMFJS.GDI.RecordType.META_FRAMEREGION:
			case WMFJS.GDI.RecordType.META_ANIMATEPALETTE:
			case WMFJS.GDI.RecordType.META_TEXTOUT:
			case WMFJS.GDI.RecordType.META_POLYPOLYGON:
			case WMFJS.GDI.RecordType.META_EXTFLOODFILL:
			case WMFJS.GDI.RecordType.META_RECTANGLE:
			case WMFJS.GDI.RecordType.META_SETPIXEL:
			case WMFJS.GDI.RecordType.META_ROUNDRECT:
			case WMFJS.GDI.RecordType.META_PATBLT:
			case WMFJS.GDI.RecordType.META_PIE:
			case WMFJS.GDI.RecordType.META_STRETCHBLT:
			case WMFJS.GDI.RecordType.META_INVERTREGION:
			case WMFJS.GDI.RecordType.META_PAINTREGION:
			case WMFJS.GDI.RecordType.META_SELECTCLIPREGION:
			case WMFJS.GDI.RecordType.META_ARC:
			case WMFJS.GDI.RecordType.META_CHORD:
			case WMFJS.GDI.RecordType.META_BITBLT:
			case WMFJS.GDI.RecordType.META_EXTTEXTOUT:
			case WMFJS.GDI.RecordType.META_SETDIBTODEV:
			case WMFJS.GDI.RecordType.META_DIBBITBLT:
			case WMFJS.GDI.RecordType.META_CREATEPALETTE:
			case WMFJS.GDI.RecordType.META_CREATEPATTERNBRUSH:
			case WMFJS.GDI.RecordType.META_CREATEFONTINDIRECT:
			case WMFJS.GDI.RecordType.META_CREATEREGION:
				console.log("[WMF] record 0x" + type.toString(16) + " at offset 0x" + curpos.toString(16) + " with " + (size * 2) + " bytes");
				break;
			default:
				console.log("[WMF] UNKNOWN record 0x" + type.toString(16) + " at offset 0x" + curpos.toString(16) + " with " + (size * 2) + " bytes");
				//throw new WMFJS.Error("Record type not recognized: 0x" + type.toString(16));
				break;
		}
		
		curpos += size * 2;
	}
	
	if (!all)
		throw new WMFJS.Error("Could not read all records");
};

WMFJS.WMFRecords.prototype.play = function(gdi) {
	var len = this._records.length;
	for (var i = 0; i < len; i++) {
		this._records[i].call(this, gdi);
	}
};

WMFJS.WMFPlacable = function(reader) {
	reader.skip(2);
	this.boundingBox = new WMFJS.WMFRect16(reader);
	this.unitsPerInch = reader.readInt16();
	reader.skip(4);
	reader.skip(2); // TODO: checksum
	console.log("Got bounding box " + this.boundingBox + " and " + this.unitsPerInch + " units/inch");
};

WMFJS.WMF = function(reader, placable, version, hdrsize) {
	this._reader = reader;
	this._version = version;
	this._hdrsize = hdrsize;
	this._placable = placable;
	this._img = null;
	this._records = new WMFJS.WMFRecords(reader, this._hdrsize);
};

WMFJS.WMF.prototype.render = function(gdi) {
	this._records.play(gdi);
};

WMFJS.Renderer = function(blob) {
	this.parse(blob);
	console.log("WMFJS.Renderer instantiated");
};

WMFJS.Renderer.prototype.parse = function(blob) {
	this._img = null;
	
	var reader = new WMFJS.Blob(blob);
	
	var type, size, placeable, headerstart;
	var key = reader.readUint32();
	if (key == 0x9ac6cdd7) {
		placable = new WMFJS.WMFPlacable(reader);
		headerstart = reader.pos;
		type = reader.readUint16();
		size = reader.readUint16();
	} else {
		headerstart = 0;
		type = key & 0xffff;
		size = (key >>> 16) & 0xffff;
	}
	switch (type) {
		case WMFJS.GDI.MetafileType.MEMORYMETAFILE:
		case WMFJS.GDI.MetafileType.DISKMETAFILE:
			if (size == WMFJS.GDI.METAHEADER_SIZE / 2) {
				var version = reader.readUint16();
				switch (version) {
					case WMFJS.GDI.MetafileVersion.METAVERSION100:
					case WMFJS.GDI.MetafileVersion.METAVERSION300:
						this._img = new WMFJS.WMF(reader, placeable, version, headerstart + (size * 2));
						break;
				}
			}
			break;
	}
	
	if (this._img == null)
		throw new WMFJS.Error("Format not recognized");
};

WMFJS.Renderer.prototype._render = function(svg, info) {
	// See https://www-user.tu-chemnitz.de/~ygu/petzold/ch18b.htm
	var gdi = new WMFJS.GDIContext(svg);
	gdi.setViewportExt(info.xExt, info.yExt);
	gdi.setMapMode(info.mapMode);
	console.log("[WMF] BEGIN RENDERING --->");
	this._img.render(gdi);
	console.log("[WMF] <--- DONE RENDERING");
};

WMFJS.Renderer.prototype.render = function(info) {
	var inst = this;
	var img = $("<div>").svg({
		onLoad: function(svg) {
			return inst._render.call(inst, svg, info);
		},
		settings: {
			viewBox: [0, 0, info.xExt, info.yExt].join(" "),
			preserveAspectRatio: "none" // TODO: MM_ISOTROPIC vs MM_ANISOTROPIC
		}
	});
	var svg = $(img[0]).svg("get");
	return $(svg.root()).attr("width", info.width).attr("height", info.height);
};