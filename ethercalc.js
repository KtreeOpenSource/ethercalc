// Auto-generated from "make depends"; ALL CHANGES HERE WILL BE LOST!
var SocialCalc;
SocialCalc || (SocialCalc = {}), SocialCalc.Constants = {
    textdatadefaulttype: "t",
    s_BrowserNotSupported: "Browser not supported.",
    s_InternalError: "Internal SocialCalc error (probably an internal bug): ",
    s_pssUnknownColType: "Unknown col type item",
    s_pssUnknownRowType: "Unknown row type item",
    s_pssUnknownLineType: "Unknown line type",
    s_cfspUnknownCellType: "Unknown cell type item",
    doCanonicalizeSheet: !0,
    s_escUnknownSheetCmd: "Unknown sheet command: ",
    s_escUnknownSetCoordCmd: "Unknown set coord command: ",
    s_escUnknownCmd: "Unknown command: ",
    s_caccCircRef: "Circular reference to ",
    defaultRowNameWidth: "30",
    defaultAssumedRowHeight: 15,
    defaultCellIDPrefix: "cell_",
    defaultCellLayout: "padding:2px 2px 1px 2px;vertical-align:top;",
    defaultCellFontStyle: "normal normal",
    defaultCellFontSize: "small",
    defaultCellFontFamily: "Verdana,Arial,Helvetica,sans-serif",
    defaultPaneDividerWidth: "3",
    defaultPaneDividerHeight: "3",
    defaultGridCSS: "1px solid #C0C0C0;",
    defaultCommentClass: "",
    defaultCommentStyle: "background-repeat:no-repeat;background-position:top right;background-image:url(images/sc-commentbg.gif);",
    defaultCommentNoGridClass: "",
    defaultCommentNoGridStyle: "",
    defaultReadonlyClass: "",
    defaultReadonlyStyle: "background-repeat:no-repeat;background-position:top right;background-image:url(images/sc-lockbg.gif);",
    defaultReadonlyNoGridClass: "",
    defaultReadonlyNoGridStyle: "",
    defaultReadonlyComment: "Locked cell",
    defaultColWidth: "80",
    defaultMinimumColWidth: 10,
    defaultHighlightTypeCursorClass: "",
    defaultHighlightTypeCursorStyle: "color:#FFF;backgroundColor:#A6A6A6;",
    defaultHighlightTypeRangeClass: "",
    defaultHighlightTypeRangeStyle: "color:#000;backgroundColor:#E5E5E5;",
    defaultColnameClass: "",
    defaultColnameStyle: "overflow:visible;font-size:small;text-align:center;color:#FFFFFF;background-color:#808080;",
    defaultSelectedColnameClass: "",
    defaultSelectedColnameStyle: "overflow:visible;font-size:small;text-align:center;color:#FFFFFF;background-color:#404040;",
    defaultRownameClass: "",
    defaultRownameStyle: "position:relative;overflow:visible;font-size:small;text-align:right;color:#FFFFFF;background-color:#808080;",
    defaultSelectedRownameClass: "",
    defaultSelectedRownameStyle: "position:relative;overflow:visible;font-size:small;text-align:right;color:#FFFFFF;background-color:#404040;",
    defaultUpperLeftClass: "",
    defaultUpperLeftStyle: "font-size:small;",
    defaultSkippedCellClass: "",
    defaultSkippedCellStyle: "font-size:small;background-color:#CCC",
    defaultPaneDividerClass: "",
    defaultPaneDividerStyle: "font-size:small;background-color:#C0C0C0;padding:0px;",
    defaultUnhideLeftClass: "",
    defaultUnhideLeftStyle: "float:right;width:9px;height:12px;cursor:pointer;background-image:url(images/sc-unhideleft.gif);padding:0;",
    defaultUnhideRightClass: "",
    defaultUnhideRightStyle: "float:left;width:9px;height:12px;cursor:pointer;background-image:url(images/sc-unhideright.gif);padding:0;",
    defaultUnhideTopClass: "",
    defaultUnhideTopStyle: "float:left;left:1px;position:absolute;bottom:-4px;width:12px;height:9px;cursor:pointer;background-image:url(images/sc-unhidetop.gif);padding:0;",
    defaultUnhideBottomClass: "",
    defaultUnhideBottomStyle: "float:left;width:12px;height:9px;cursor:pointer;background-image:url(images/sc-unhidebottom.gif);padding:0;",
    defaultColResizeBarClass: "col-resize-bar",
    defaultRowResizeBarClass: "row-resize-bar",
    s_rcMissingSheet: "Render Context must have a sheet object",
    defaultLinkFormatString: '<span style="font-size:smaller;text-decoration:none !important;background-color:#66B;color:#FFF;">Link</span>',
    defaultPageLinkFormatString: '<span style="font-size:smaller;text-decoration:none !important;background-color:#66B;color:#FFF;">Page</span>',
    defaultFormatp: "#,##0.0%",
    defaultFormatc: "[$$]#,##0.00",
    defaultFormatdt: "d-mmm-yyyy h:mm:ss",
    defaultFormatd: "d-mmm-yyyy",
    defaultFormatt: "[h]:mm:ss",
    defaultDisplayTRUE: "TRUE",
    defaultDisplayFALSE: "FALSE",
    defaultImagePrefix: "images/sc_",
    defaultTableEditorIDPrefix: "te_",
    defaultPageUpDnAmount: 15,
    AllowCtrlS: !0,
    defaultTableControlThickness: 20,
    cteGriddivClass: "",
    s_statusline_executing: "Executing...",
    s_statusline_displaying: "Displaying...",
    s_statusline_ordering: "Ordering...",
    s_statusline_calculating: "Calculating...",
    s_statusline_calculatingls: "Calculating... Loading Sheet...",
    s_statusline_doingserverfunc: "doing server function ",
    s_statusline_incell: " in cell ",
    s_statusline_calcstart: "Calculation start...",
    s_statusline_sum: "SUM",
    s_statusline_recalcneeded: '<span style="color:#999;">(Recalc needed)</span>',
    s_statusline_circref: '<span style="color:red;">Circular reference: ',
    s_inputboxdisplaymultilinetext: "[Multi-line text: Click icon on right to edit]",
    defaultInputEchoClass: "",
    defaultInputEchoStyle: "filter:alpha(opacity=90);opacity:.9;backgroundColor:#FFD;border:1px solid #884;fontSize:small;padding:2px 10px 1px 2px;cursor:default;",
    defaultInputEchoPromptClass: "",
    defaultInputEchoPromptStyle: "filter:alpha(opacity=90);opacity:.9;backgroundColor:#FFD;borderLeft:1px solid #884;borderRight:1px solid #884;borderBottom:1px solid #884;fontSize:small;fontStyle:italic;padding:2px 10px 1px 2px;cursor:default;",
    defaultInputEchoHintClass: "",
    defaultInputEchoHintStyle: "filter:alpha(opacity=80);opacity:.8;backgroundColor:#884;border:1px solid #884;fontSize:small;fontWeight:bold;padding:2px 2px 2px 2px;color:#FFF;position:absolute;top:-20px;cursor:default;",
    ietUnknownFunction: "Unknown function ",
    CH_radius1: 29,
    CH_radius2: 41,
    s_CHfillAllTooltip: "Fill Contents and Formats Down/Right",
    s_CHfillContentsTooltip: "Fill Contents Only Down/Right",
    s_CHmovePasteAllTooltip: "Move Contents and Formats",
    s_CHmovePasteContentsTooltip: "Move Contents Only",
    s_CHmoveInsertAllTooltip: "Slide Contents and Formats within Row/Col",
    s_CHmoveInsertContentsTooltip: "Slide Contents within Row/Col",
    s_CHindicatorOperationLookup: {
        Fill: "Fill",
        FillC: "Fill Contents",
        Move: "Move",
        MoveI: "Slide",
        MoveC: "Move Contents",
        MoveIC: "Slide Contents"
    },
    s_CHindicatorDirectionLookup: {
        Down: " Down",
        Right: " Right",
        Horizontal: " Horizontal",
        Vertical: " Vertical"
    },
    defaultTCSliderThickness: 9,
    defaultTCButtonThickness: 20,
    defaultTCThumbThickness: 15,
    TCmainStyle: "backgroundColor:#EEE;",
    TCmainClass: "",
    TCendcapStyle: "backgroundColor:#FFF;",
    TCendcapClass: "",
    TCpanesliderClass: "tc-paneslider",
    s_panesliderTooltiph: "Drag to lock pane vertically",
    s_panesliderTooltipv: "Drag to lock pane horizontally",
    TClessbuttonStyle: "backgroundColor:#AAA;",
    TClessbuttonClass: "",
    TClessbuttonRepeatWait: 300,
    TClessbuttonRepeatInterval: 20,
    TCmorebuttonStyle: "backgroundColor:#AAA;",
    TCmorebuttonClass: "",
    TCmorebuttonRepeatWait: 300,
    TCmorebuttonRepeatInterval: 20,
    TCscrollareaStyle: "backgroundColor:#DDD;",
    TCscrollareaClass: "",
    TCscrollareaRepeatWait: 500,
    TCscrollareaRepeatInterval: 100,
    TCthumbClass: "",
    TCthumbStyle: "backgroundColor:#CCC;",
    TCPStrackinglineClass: "tracklingine",
    TCPStrackinglineStyle: "overflow:hidden;position:absolute;zIndex:100;",
    TCPStrackinglineThickness: "2px",
    TCTDFSthumbstatusvClass: "",
    TCTDFSthumbstatusvStyle: "height:20px;width:auto;border:3px solid #808080;overflow:hidden;backgroundColor:#FFF;fontSize:small;position:absolute;zIndex:100;",
    TCTDFSthumbstatushClass: "",
    TCTDFSthumbstatushStyle: "height:20px;width:auto;border:1px solid black;padding:2px;backgroundColor:#FFF;fontSize:small;position:absolute;zIndex:100;",
    TCTDFSthumbstatusrownumClass: "",
    TCTDFSthumbstatusrownumStyle: "color:#FFF;background-color:#808080;font-size:small;white-space:nowrap;padding:3px;",
    TCTDFStopOffsetv: 0,
    TCTDFSleftOffsetv: -80,
    s_TCTDFthumbstatusPrefixv: "Row ",
    TCTDFStopOffseth: -30,
    TCTDFSleftOffseth: 0,
    s_TCTDFthumbstatusPrefixh: "Col ",
    TooltipOffsetX: 2,
    TooltipOffsetY: 10,
    TDpopupElementClass: "",
    TDpopupElementStyle: "border:1px solid black;padding:1px 2px 2px 2px;textAlign:center;backgroundColor:#FFF;fontSize:7pt;fontFamily:Verdana,Arial,Helvetica,sans-serif;position:absolute;width:auto;zIndex:110;",
    SCToolbarbackground: "background-color:#404040;",
    SCTabbackground: "background-color:#CCC;",
    SCTabselectedCSS: "font-size:small;padding:6px 30px 6px 8px;color:#FFF;background-color:#404040;cursor:default;border-right:1px solid #CCC;",
    SCTabplainCSS: "font-size:small;padding:6px 30px 6px 8px;color:#FFF;background-color:#808080;cursor:default;border-right:1px solid #CCC;",
    SCToolbartext: "font-size:x-small;font-weight:bold;color:#FFF",
    SCFormulabarheight: 30,
    SCStatuslineheight: 20,
    SCStatuslineCSS: "font-size:10px;padding:3px 0px;",
    SCFormatNumberFormats: "[cancel]:|[break]:|%loc!Default!:|[custom]:|%loc!Automatic!:general|%loc!Auto w/ commas!:[,]General|[break]:|00:00|000:000|0000:0000|00000:00000|[break]:|%loc!Formula!:formula|%loc!Hidden!:hidden|[newcol]:1234:0|1,234:#,##0|1,234.5:#,##0.0|1,234.56:#,##0.00|1,234.567:#,##0.000|1,234.5678:#,##0.0000|[break]:|1,234%:#,##0%|1,234.5%:#,##0.0%|1,234.56%:#,##0.00%|[newcol]:|$1,234:$#,##0|$1,234.5:$#,##0.0|$1,234.56:$#,##0.00|[break]:|(1,234):#,##0_);(#,##0)|(1,234.5):#,##0.0_);(#,##0.0)|(1,234.56):#,##0.00_);(#,##0.00)|[break]:|($1,234):$#,##0_);($#,##0)|($1,234.5):$#,##0.0_);($#,##0.0)|($1,234.56):$#,##0.00_);($#,##0.00)|[newcol]:|1/4/06:m/d/yy|01/04/2006:mm/dd/yyyy|2006-01-04:yyyy-mm-dd|4-Jan-06:d-mmm-yy|04-Jan-2006:dd-mmm-yyyy|January 4, 2006:mmmm d, yyyy|[break]:|1\\c23:h:mm|1\\c23 PM:h:mm AM/PM|1\\c23\\c45:h:mm:ss|01\\c23\\c45:hh:mm:ss|26\\c23 (h\\cm):[hh]:mm|69\\c45 (m\\cs):[mm]:ss|69 (s):[ss]|[newcol]:|2006-01-04 01\\c23\\c45:yyyy-mm-dd hh:mm:ss|January 4, 2006:mmmm d, yyyy hh:mm:ss|Wed:ddd|Wednesday:dddd|",
    SCFormatTextFormats: "[cancel]:|[break]:|%loc!Default!:|[custom]:|%loc!Automatic!:general|%loc!Plain Text!:text-plain|HTML:text-html|%loc!Wikitext!:text-wiki|%loc!Link!:text-link|%loc!Formula!:formula|%loc!Hidden!:hidden|",
    SCFormatPadsizes: "[cancel]:|[break]:|%loc!Default!:|[custom]:|%loc!No padding!:0px|[newcol]:|1 pixel:1px|2 pixels:2px|3 pixels:3px|4 pixels:4px|5 pixels:5px|6 pixels:6px|7 pixels:7px|8 pixels:8px|[newcol]:|9 pixels:9px|10 pixels:10px|11 pixels:11px|12 pixels:12px|13 pixels:13px|14 pixels:14px|16 pixels:16px|18 pixels:18px|[newcol]:|20 pixels:20px|22 pixels:22px|24 pixels:24px|28 pixels:28px|36 pixels:36px|",
    SCFormatFontsizes: "[cancel]:|[break]:|%loc!Default!:|[custom]:|X-Small:x-small|Small:small|Medium:medium|Large:large|X-Large:x-large|[newcol]:|6pt:6pt|7pt:7pt|8pt:8pt|9pt:9pt|10pt:10pt|11pt:11pt|12pt:12pt|14pt:14pt|16pt:16pt|[newcol]:|18pt:18pt|20pt:20pt|22pt:22pt|24pt:24pt|28pt:28pt|36pt:36pt|48pt:48pt|72pt:72pt|[newcol]:|8 pixels:8px|9 pixels:9px|10 pixels:10px|11 pixels:11px|12 pixels:12px|13 pixels:13px|14 pixels:14px|[newcol]:|16 pixels:16px|18 pixels:18px|20 pixels:20px|22 pixels:22px|24 pixels:24px|28 pixels:28px|36 pixels:36px|",
    SCFormatFontfamilies: "[cancel]:|[break]:|%loc!Default!:|[custom]:|Verdana:Verdana,Arial,Helvetica,sans-serif|Arial:arial,helvetica,sans-serif|Courier:'Courier New',Courier,monospace|",
    SCFormatFontlook: "[cancel]:|[break]:|%loc!Default!:|%loc!Normal!:normal normal|%loc!Bold!:normal bold|%loc!Italic!:italic normal|%loc!Bold Italic!:italic bold",
    SCFormatTextAlignhoriz: "[cancel]:|[break]:|%loc!Default!:|%loc!Left!:left|%loc!Center!:center|%loc!Right!:right|",
    SCFormatNumberAlignhoriz: "[cancel]:|[break]:|%loc!Default!:|%loc!Left!:left|%loc!Center!:center|%loc!Right!:right|",
    SCFormatAlignVertical: "[cancel]:|[break]:|%loc!Default!:|%loc!Top!:top|%loc!Middle!:middle|%loc!Bottom!:bottom|",
    SCFormatColwidth: "[cancel]:|[break]:|%loc!Default!:|[custom]:|[newcol]:|20 pixels:20|40:40|60:60|80:80|100:100|120:120|140:140|160:160|[newcol]:|180 pixels:180|200:200|220:220|240:240|260:260|280:280|300:300|",
    SCFormatRecalc: "[cancel]:|[break]:|%loc!Auto!:|%loc!Manual!:off|",
    SCFormatUserMaxCol: "[cancel]:|[break]:|%loc!Default!:|[custom]:|[newcol]:|Unlimited:0|10:10|20:20|30:30|40:40|50:50|60:60|80:80|100:100|",
    SCFormatUserMaxRow: "[cancel]:|[break]:|%loc!Default!:|[custom]:|[newcol]:|Unlimited:0|10:10|20:20|30:30|40:40|50:50|60:60|80:80|100:100|",
    ISCButtonBorderNormal: "#404040",
    ISCButtonBorderHover: "#999",
    ISCButtonBorderDown: "#FFF",
    ISCButtonDownBackground: "#888",
    s_PopupListCancel: "[Cancel]",
    s_PopupListCustom: "Custom",
    s_loc_align_center: "Align Center",
    s_loc_align_left: "Align Left",
    s_loc_align_right: "Align Right",
    s_loc_alignment: "Alignment",
    s_loc_audit: "Audit",
    s_loc_audit_trail_this_session: "Audit Trail This Session",
    s_loc_auto: "Auto",
    s_loc_auto_sum: "Auto Sum",
    s_loc_auto_wX_commas: "Auto w/ commas",
    s_loc_automatic: "Automatic",
    s_loc_background: "Background",
    s_loc_bold: "Bold",
    s_loc_bold_XampX_italics: "Bold &amp; Italics",
    s_loc_bold_italic: "Bold Italic",
    s_loc_borders: "Borders",
    s_loc_borders_off: "Borders Off",
    s_loc_borders_on: "Borders On",
    s_loc_bottom: "Bottom",
    s_loc_bottom_border: "Bottom Border",
    s_loc_cell_settings: "CELL SETTINGS",
    s_loc_csv_format: "CSV format",
    s_loc_cancel: "Cancel",
    s_loc_category: "Category",
    s_loc_center: "Center",
    s_loc_clear: "Clear",
    s_loc_clear_socialcalc_clipboard: "Clear SocialCalc Clipboard",
    s_loc_clipboard: "Clipboard",
    s_loc_color: "Color",
    s_loc_column_: "Column ",
    s_loc_comment: "Comment",
    s_loc_copy: "Copy",
    s_loc_custom: "Custom",
    s_loc_cut: "Cut",
    s_loc_default: "Default",
    s_loc_default_alignment: "Default Alignment",
    s_loc_default_column_width: "Default Column Width",
    s_loc_default_font: "Default Font",
    s_loc_default_format: "Default Format",
    s_loc_default_padding: "Default Padding",
    s_loc_delete: "Delete",
    s_loc_delete_column: "Delete Column",
    s_loc_delete_contents: "Delete Contents",
    s_loc_delete_row: "Delete Row",
    s_loc_description: "Description",
    s_loc_display_clipboard_in: "Display Clipboard in",
    s_loc_down: "Down",
    s_loc_edit: "Edit",
    s_loc_existing_names: "Existing Names",
    s_loc_family: "Family",
    s_loc_fill_down: "Fill Down",
    s_loc_fill_right: "Fill Right",
    s_loc_font: "Font",
    s_loc_format: "Format",
    s_loc_formula: "Formula",
    s_loc_function_list: "Function List",
    s_loc_functions: "Functions",
    s_loc_grid: "Grid",
    s_loc_hidden: "Hidden",
    s_loc_horizontal: "Horizontal",
    s_loc_insert_column: "Insert Column",
    s_loc_insert_row: "Insert Row",
    s_loc_italic: "Italic",
    s_loc_last_sort: "Last Sort",
    s_loc_left: "Left",
    s_loc_left_border: "Left Border",
    s_loc_link: "Link",
    s_loc_link_input_box: "Link Input Box",
    s_loc_list: "List",
    s_loc_load_socialcalc_clipboard_with_this: "Load SocialCalc Clipboard With This",
    s_loc_major_sort: "Major Sort",
    s_loc_manual: "Manual",
    s_loc_merge_cells: "Merge Cells",
    s_loc_middle: "Middle",
    s_loc_minor_sort: "Minor Sort",
    s_loc_move_insert: "Move Insert",
    s_loc_move_paste: "Move Paste",
    s_loc_multiXline_input_box: "Multi-line Input Box",
    s_loc_name: "Name",
    s_loc_names: "Names",
    s_loc_no_padding: "No padding",
    s_loc_normal: "Normal",
    s_loc_number: "Number",
    s_loc_number_horizontal: "Number Horizontal",
    s_loc_ok: "OK",
    s_loc_padding: "Padding",
    s_loc_page_name: "Page Name",
    s_loc_paste: "Paste",
    s_loc_paste_formats: "Paste Formats",
    s_loc_plain_text: "Plain Text",
    s_loc_recalc: "Recalc",
    s_loc_recalculation: "Recalculation",
    s_loc_redo: "Redo",
    s_loc_right: "Right",
    s_loc_right_border: "Right Border",
    s_loc_sheet_settings: "SHEET SETTINGS",
    s_loc_save: "Save",
    s_loc_save_to: "Save to",
    s_loc_set_cell_contents: "Set Cell Contents",
    s_loc_set_cells_to_sort: "Set Cells To Sort",
    s_loc_set_value_to: "Set Value To",
    s_loc_set_to_link_format: "Set to Link format",
    s_loc_setXclear_move_from: "Set/Clear Move From",
    s_loc_show_cell_settings: "Show Cell Settings",
    s_loc_show_sheet_settings: "Show Sheet Settings",
    s_loc_show_in_new_browser_window: "Show in new browser window",
    s_loc_size: "Size",
    s_loc_socialcalcXsave_format: "SocialCalc-save format",
    s_loc_sort: "Sort",
    s_loc_sort_: "Sort ",
    s_loc_sort_cells: "Sort Cells",
    s_loc_swap_colors: "Swap Colors",
    s_loc_tabXdelimited_format: "Tab-delimited format",
    s_loc_text: "Text",
    s_loc_text_horizontal: "Text Horizontal",
    s_loc_this_is_aXbrXsample: "This is a<br>sample",
    s_loc_top: "Top",
    s_loc_top_border: "Top Border",
    s_loc_undone_steps: "UNDONE STEPS",
    s_loc_url: "URL",
    s_loc_undo: "Undo",
    s_loc_unmerge_cells: "Unmerge Cells",
    s_loc_up: "Up",
    s_loc_value: "Value",
    s_loc_vertical: "Vertical",
    s_loc_wikitext: "Wikitext",
    s_loc_workspace: "Workspace",
    s_loc_XnewX: "[New]",
    s_loc_XnoneX: "[None]",
    s_loc_Xselect_rangeX: "[select range]",
    SVStatuslineheight: 20,
    SVStatuslineCSS: "font-size:10px;padding:3px 0px;",
    FormatNumber_separatorchar: ",",
    FormatNumber_decimalchar: ".",
    FormatNumber_defaultCurrency: "$",
    s_FormatNumber_daynames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    s_FormatNumber_daynames3: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    s_FormatNumber_monthnames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    s_FormatNumber_monthnames3: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    s_FormatNumber_am: "AM",
    s_FormatNumber_am1: "A",
    s_FormatNumber_pm: "PM",
    s_FormatNumber_pm1: "P",
    s_parseerrexponent: "Improperly formed number exponent",
    s_parseerrchar: "Unexpected character in formula",
    s_parseerrstring: "Improperly formed string",
    s_parseerrspecialvalue: "Improperly formed special value",
    s_parseerrtwoops: "Error in formula (two operators inappropriately in a row)",
    s_parseerrmissingopenparen: "Missing open parenthesis in list with comma(s). ",
    s_parseerrcloseparennoopen: "Closing parenthesis without open parenthesis. ",
    s_parseerrmissingcloseparen: "Missing close parenthesis. ",
    s_parseerrmissingoperand: "Missing operand. ",
    s_parseerrerrorinformula: "Error in formula.",
    s_calcerrerrorvalueinformula: "Error value in formula",
    s_parseerrerrorinformulabadval: "Error in formula resulting in bad value",
    s_formularangeresult: "Formula results in range value:",
    s_calcerrnumericnan: "Formula results in an bad numeric value",
    s_calcerrnumericoverflow: "Numeric overflow",
    s_sheetunavailable: "Sheet unavailable:",
    s_calcerrcellrefmissing: "Cell reference missing when expected.",
    s_calcerrsheetnamemissing: "Sheet name missing when expected.",
    s_circularnameref: "Circular name reference to name",
    s_calcerrunknownname: "Unknown name",
    s_calcerrincorrectargstofunction: "Incorrect arguments to function",
    s_sheetfuncunknownfunction: "Unknown function",
    s_sheetfunclnarg: "LN argument must be greater than 0",
    s_sheetfunclog10arg: "LOG10 argument must be greater than 0",
    s_sheetfunclogsecondarg: "LOG second argument must be numeric greater than 0",
    s_sheetfunclogfirstarg: "LOG first argument must be greater than 0",
    s_sheetfuncroundsecondarg: "ROUND second argument must be numeric",
    s_sheetfuncddblife: "DDB life must be greater than 1",
    s_sheetfuncslnlife: "SLN life must be greater than 1",
    s_fdef_ABS: "Absolute value function. ",
    s_fdef_ACOS: "Trigonometric arccosine function. ",
    s_fdef_AND: "True if all arguments are true. ",
    s_fdef_ASIN: "Trigonometric arcsine function. ",
    s_fdef_ATAN: "Trigonometric arctan function. ",
    s_fdef_ATAN2: "Trigonometric arc tangent function (result is in radians). ",
    s_fdef_AVERAGE: "Averages the values. ",
    s_fdef_CHOOSE: "Returns the value specified by the index. The values may be ranges of cells. ",
    s_fdef_COLUMNS: "Returns the number of columns in the range. ",
    s_fdef_COS: "Trigonometric cosine function (value is in radians). ",
    s_fdef_COUNT: "Counts the number of numeric values, not blank, text, or error. ",
    s_fdef_COUNTA: "Counts the number of non-blank values. ",
    s_fdef_COUNTBLANK: 'Counts the number of blank values. (Note: "" is not blank.) ',
    s_fdef_COUNTIF: 'Counts the number of number of cells in the range that meet the criteria. The criteria may be a value ("x", 15, 1+3) or a test (>25). ',
    s_fdef_DATE: 'Returns the appropriate date value given numbers for year, month, and day. For example: DATE(2006,2,1) for February 1, 2006. Note: In this program, day "1" is December 31, 1899 and the year 1900 is not a leap year. Some programs use January 1, 1900, as day "1" and treat 1900 as a leap year. In both cases, though, dates on or after March 1, 1900, are the same. ',
    s_fdef_DAVERAGE: "Averages the values in the specified field in records that meet the criteria. ",
    s_fdef_DAY: "Returns the day of month for a date value. ",
    s_fdef_DCOUNT: "Counts the number of numeric values, not blank, text, or error, in the specified field in records that meet the criteria. ",
    s_fdef_DCOUNTA: "Counts the number of non-blank values in the specified field in records that meet the criteria. ",
    s_fdef_DDB: "Returns the amount of depreciation at the given period of time (the default factor is 2 for double-declining balance).   ",
    s_fdef_DEGREES: "Converts value in radians into degrees. ",
    s_fdef_DGET: "Returns the value of the specified field in the single record that meets the criteria. ",
    s_fdef_DMAX: "Returns the maximum of the numeric values in the specified field in records that meet the criteria. ",
    s_fdef_DMIN: "Returns the maximum of the numeric values in the specified field in records that meet the criteria. ",
    s_fdef_DPRODUCT: "Returns the result of multiplying the numeric values in the specified field in records that meet the criteria. ",
    s_fdef_DSTDEV: "Returns the sample standard deviation of the numeric values in the specified field in records that meet the criteria. ",
    s_fdef_DSTDEVP: "Returns the standard deviation of the numeric values in the specified field in records that meet the criteria. ",
    s_fdef_DSUM: "Returns the sum of the numeric values in the specified field in records that meet the criteria. ",
    s_fdef_DVAR: "Returns the sample variance of the numeric values in the specified field in records that meet the criteria. ",
    s_fdef_DVARP: "Returns the variance of the numeric values in the specified field in records that meet the criteria. ",
    s_fdef_EVEN: "Rounds the value up in magnitude to the nearest even integer. ",
    s_fdef_EXACT: 'Returns "true" if the values are exactly the same, including case, type, etc. ',
    s_fdef_EXP: "Returns e raised to the value power. ",
    s_fdef_FACT: "Returns factorial of the value. ",
    s_fdef_FALSE: 'Returns the logical value "false". ',
    s_fdef_FIND: 'Returns the starting position within string2 of the first occurrence of string1 at or after "start". If start is omitted, 1 is assumed. ',
    s_fdef_FV: "Returns the future value of repeated payments of money invested at the given rate for the specified number of periods, with optional present value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period). ",
    s_fdef_HLOOKUP: "Look for the matching value for the given value in the range and return the corresponding value in the cell specified by the row offset. If rangelookup is 1 (the default) and not 0, match if within numeric brackets (match<=value) instead of exact match. ",
    s_fdef_HOUR: "Returns the hour portion of a time or date/time value. ",
    s_fdef_IF: "Results in true-value if logical-expression is TRUE or non-zero, otherwise results in false-value. ",
    s_fdef_INDEX: "Returns a cell or range reference for the specified row and column in the range. If range is 1-dimensional, then only one of rownum or colnum are needed. If range is 2-dimensional and rownum or colnum are zero, a reference to the range of just the specified column or row is returned. You can use the returned reference value in a range, e.g., sum(A1:INDEX(A2:A10,4)). ",
    s_fdef_INT: "Returns the value rounded down to the nearest integer (towards -infinity). ",
    s_fdef_IRR: "Returns the interest rate at which the cash flows in the range have a net present value of zero. Uses an iterative process that will return #NUM! error if it does not converge. There may be more than one possible solution. Providing the optional guess value may help in certain situations where it does not converge or finds an inappropriate solution (the default guess is 10%). ",
    s_fdef_ISBLANK: 'Returns "true" if the value is a reference to a blank cell. ',
    s_fdef_ISERR: 'Returns "true" if the value is of type "Error" but not "NA". ',
    s_fdef_ISERROR: 'Returns "true" if the value is of type "Error". ',
    s_fdef_ISLOGICAL: 'Returns "true" if the value is of type "Logical" (true/false). ',
    s_fdef_ISNA: 'Returns "true" if the value is the error type "NA". ',
    s_fdef_ISNONTEXT: 'Returns "true" if the value is not of type "Text". ',
    s_fdef_ISNUMBER: 'Returns "true" if the value is of type "Number" (including logical values). ',
    s_fdef_ISTEXT: 'Returns "true" if the value is of type "Text". ',
    s_fdef_LEFT: "Returns the specified number of characters from the text value. If count is omitted, 1 is assumed. ",
    s_fdef_LEN: "Returns the number of characters in the text value. ",
    s_fdef_LN: "Returns the natural logarithm of the value. ",
    s_fdef_LOG: "Returns the logarithm of the value using the specified base. ",
    s_fdef_LOG10: "Returns the base 10 logarithm of the value. ",
    s_fdef_LOWER: "Returns the text value with all uppercase characters converted to lowercase. ",
    s_fdef_MATCH: "Look for the matching value for the given value in the range and return position (the first is 1) in that range. If rangelookup is 1 (the default) and not 0, match if within numeric brackets (match<=value) instead of exact match. If rangelookup is -1, act like 1 but the bracket is match>=value. ",
    s_fdef_MAX: "Returns the maximum of the numeric values. ",
    s_fdef_MID: "Returns the specified number of characters from the text value starting from the specified position. ",
    s_fdef_MIN: "Returns the minimum of the numeric values. ",
    s_fdef_MINUTE: "Returns the minute portion of a time or date/time value. ",
    s_fdef_MOD: "Returns the remainder of the first value divided by the second. ",
    s_fdef_MONTH: "Returns the month part of a date value. ",
    s_fdef_N: "Returns the value if it is a numeric value otherwise an error. ",
    s_fdef_NA: "Returns the #N/A error value which propagates through most operations. ",
    s_fdef_NOT: "Returns FALSE if value is true, and TRUE if it is false. ",
    s_fdef_NOW: "Returns the current date/time. ",
    s_fdef_NPER: "Returns the number of periods at which payments invested each period at the given rate with optional future value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period) has the given present value. ",
    s_fdef_NPV: "Returns the net present value of cash flows (which may be individual values and/or ranges) at the given rate. The flows are positive if income, negative if paid out, and are assumed at the end of each period. ",
    s_fdef_ODD: "Rounds the value up in magnitude to the nearest odd integer. ",
    s_fdef_OR: "True if any argument is true ",
    s_fdef_PI: "The value 3.1415926... ",
    s_fdef_PMT: "Returns the amount of each payment that must be invested at the given rate for the specified number of periods to have the specified present value, with optional future value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period). ",
    s_fdef_POWER: "Returns the first value raised to the second value power. ",
    s_fdef_PRODUCT: "Returns the result of multiplying the numeric values. ",
    s_fdef_PROPER: "Returns the text value with the first letter of each word converted to uppercase and the others to lowercase. ",
    s_fdef_PV: "Returns the present value of the given number of payments each invested at the given rate, with optional future value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period). ",
    s_fdef_RADIANS: "Converts value in degrees into radians. ",
    s_fdef_RATE: "Returns the rate at which the given number of payments each invested at the given rate has the specified present value, with optional future value (default 0) and payment type (default 0 = at end of period, 1 = beginning of period). Uses an iterative process that will return #NUM! error if it does not converge. There may be more than one possible solution. Providing the optional guess value may help in certain situations where it does not converge or finds an inappropriate solution (the default guess is 10%). ",
    s_fdef_REPLACE: "Returns text1 with the specified number of characters starting from the specified position replaced by text2. ",
    s_fdef_REPT: "Returns the text repeated the specified number of times. ",
    s_fdef_RIGHT: "Returns the specified number of characters from the text value starting from the end. If count is omitted, 1 is assumed. ",
    s_fdef_ROUND: "Rounds the value to the specified number of decimal places. If precision is negative, then round to powers of 10. The default precision is 0 (round to integer). ",
    s_fdef_ROWS: "Returns the number of rows in the range. ",
    s_fdef_SECOND: "Returns the second portion of a time or date/time value (truncated to an integer). ",
    s_fdef_SIN: "Trigonometric sine function (value is in radians) ",
    s_fdef_SLN: "Returns the amount of depreciation at each period of time using the straight-line method. ",
    s_fdef_SQRT: "Square root of the value ",
    s_fdef_STDEV: "Returns the sample standard deviation of the numeric values. ",
    s_fdef_STDEVP: "Returns the standard deviation of the numeric values. ",
    s_fdef_SUBSTITUTE: 'Returns text1 with the all occurrences of oldtext replaced by newtext. If "occurrence" is present, then only that occurrence is replaced. ',
    s_fdef_SUM: "Adds the numeric values. The values to the sum function may be ranges in the form similar to A1:B5. ",
    s_fdef_SUMIF: 'Sums the numeric values of cells in the range that meet the criteria. The criteria may be a value ("x", 15, 1+3) or a test (>25). If range2 is present, then range1 is tested and the corresponding range2 value is summed. ',
    s_fdef_SYD: "Depreciation by Sum of Year's Digits method. ",
    s_fdef_T: "Returns the text value or else a null string. ",
    s_fdef_TAN: "Trigonometric tangent function (value is in radians) ",
    s_fdef_TIME: "Returns the time value given the specified hour, minute, and second. ",
    s_fdef_TODAY: 'Returns the current date (an integer). Note: In this program, day "1" is December 31, 1899 and the year 1900 is not a leap year. Some programs use January 1, 1900, as day "1" and treat 1900 as a leap year. In both cases, though, dates on or after March 1, 1900, are the same. ',
    s_fdef_TRIM: "Returns the text value with leading, trailing, and repeated spaces removed. ",
    s_fdef_TRUE: 'Returns the logical value "true". ',
    s_fdef_TRUNC: "Truncates the value to the specified number of decimal places. If precision is negative, truncate to powers of 10. ",
    s_fdef_UPPER: "Returns the text value with all lowercase characters converted to uppercase. ",
    s_fdef_VALUE: "Converts the specified text value into a numeric value. Various forms that look like numbers (including digits followed by %, forms that look like dates, etc.) are handled. This may not handle all of the forms accepted by other spreadsheets and may be locale dependent. ",
    s_fdef_VAR: "Returns the sample variance of the numeric values. ",
    s_fdef_VARP: "Returns the variance of the numeric values. ",
    s_fdef_VLOOKUP: "Look for the matching value for the given value in the range and return the corresponding value in the cell specified by the column offset. If rangelookup is 1 (the default) and not 0, match if within numeric brackets (match>=value) instead of exact match. ",
    s_fdef_WEEKDAY: "Returns the day of week specified by the date value. If type is 1 (the default), Sunday is day and Saturday is day 7. If type is 2, Monday is day 1 and Sunday is day 7. If type is 3, Monday is day 0 and Sunday is day 6. ",
    s_fdef_YEAR: "Returns the year part of a date value. ",
    s_fdef_SUMPRODUCT: "Sums the pairwise products of 2 or more ranges. The ranges must be of equal length.",
    s_fdef_CEILING: "Rounds the given number up to the nearest integer or multiple of significance. Significance is the value to whose multiple of ten the value is to be rounded up (.01, .1, 1, 10, etc.)",
    s_fdef_FLOOR: "Rounds the given number down to the nearest multiple of significance. Significance is the value to whose multiple of ten the number is to be rounded down (.01, .1, 1, 10, etc.)",
    s_farg_v: "value",
    s_farg_vn: "value1, value2, ...",
    s_farg_xy: "valueX, valueY",
    s_farg_choose: "index, value1, value2, ...",
    s_farg_range: "range",
    s_farg_rangec: "range, criteria",
    s_farg_date: "year, month, day",
    s_farg_dfunc: "databaserange, fieldname, criteriarange",
    s_farg_ddb: "cost, salvage, lifetime, period, [factor]",
    s_farg_find: "string1, string2, [start]",
    s_farg_fv: "rate, n, payment, [pv, [paytype]]",
    s_farg_hlookup: "value, range, row, [rangelookup]",
    s_farg_iffunc: "logical-expression, true-value, [false-value]",
    s_farg_index: "range, rownum, colnum",
    s_farg_irr: "range, [guess]",
    s_farg_tc: "text, count",
    s_farg_log: "value, base",
    s_farg_match: "value, range, [rangelookup]",
    s_farg_mid: "text, start, length",
    s_farg_nper: "rate, payment, pv, [fv, [paytype]]",
    s_farg_npv: "rate, value1, value2, ...",
    s_farg_pmt: "rate, n, pv, [fv, [paytype]]",
    s_farg_pv: "rate, n, payment, [fv, [paytype]]",
    s_farg_rate: "n, payment, pv, [fv, [paytype, [guess]]]",
    s_farg_replace: "text1, start, length, text2",
    s_farg_vp: "value, [precision]",
    s_farg_valpre: "value, precision",
    s_farg_csl: "cost, salvage, lifetime",
    s_farg_cslp: "cost, salvage, lifetime, period",
    s_farg_subs: "text1, oldtext, newtext, [occurrence]",
    s_farg_sumif: "range1, criteria, [range2]",
    s_farg_hms: "hour, minute, second",
    s_farg_txt: "text",
    s_farg_vlookup: "value, range, col, [rangelookup]",
    s_farg_weekday: "date, [type]",
    s_farg_dt: "date",
    s_farg_rangen: "range1, range2, ...",
    s_farg_vsig: "value, [significance]",
    function_classlist: ["all", "stat", "lookup", "datetime", "financial", "test", "math", "text"],
    s_fclass_all: "All",
    s_fclass_stat: "Statistics",
    s_fclass_lookup: "Lookup",
    s_fclass_datetime: "Date & Time",
    s_fclass_financial: "Financial",
    s_fclass_test: "Test",
    s_fclass_math: "Math",
    s_fclass_text: "Text",
    lastone: null
}, SocialCalc.ConstantsDefaultClasses = {
    defaultComment: "",
    defaultCommentNoGrid: "",
    defaultHighlightTypeCursor: "",
    defaultHighlightTypeRange: "",
    defaultColname: "",
    defaultSelectedColname: "",
    defaultRowname: "",
    defaultSelectedRowname: "",
    defaultUpperLeft: "",
    defaultSkippedCell: "",
    defaultPaneDivider: "",
    cteGriddiv: "",
    defaultInputEcho: {
        classname: "",
        style: "filter:alpha(opacity=90);opacity:.9;"
    },
    TCmain: "",
    TCendcap: "",
    TCpaneslider: "",
    TClessbutton: "",
    TCmorebutton: "",
    TCscrollarea: "",
    TCthumb: "",
    TCPStrackingline: "",
    TCTDFSthumbstatus: "",
    TDpopupElement: ""
}, SocialCalc.ConstantsSetClasses = function(e) {
    var t, o = SocialCalc.ConstantsDefaultClasses,
        a = SocialCalc.Constants;
    e = e || "";
    for (t in o) "string" == typeof o[t] ? (a[t + "Class"] = e + (o[t] || t), void 0 !== a[t + "Style"] && (a[t + "Style"] = "")) : "object" == typeof o[t] && (a[t + "Class"] = e + (o[t].classname || t), a[t + "Style"] = o[t].style)
}, SocialCalc.ConstantsSetImagePrefix = function(e) {
    var t = SocialCalc.Constants;
    for (var o in t) "string" == typeof t[o] && (t[o] = t[o].replace(t.defaultImagePrefix, e));
    t.defaultImagePrefix = e
};
var SocialCalc;
SocialCalc || (SocialCalc = {}), SocialCalc.Callbacks = {
    expand_wiki: null,
    expand_markup: function(e, t, o) {
        return SocialCalc.default_expand_markup(e, t, o)
    },
    MakePageLink: null,
    NormalizeSheetName: null
}, SocialCalc.Cell = function(e) {
    this.coord = e, this.datavalue = "", this.datatype = null, this.formula = "", this.valuetype = "b", this.readonly = !1
}, SocialCalc.CellProperties = {
    coord: 1,
    datavalue: 1,
    datatype: 1,
    formula: 1,
    valuetype: 1,
    errors: 1,
    comment: 1,
    readonly: 1,
    bt: 2,
    br: 2,
    bb: 2,
    bl: 2,
    layout: 2,
    font: 2,
    color: 2,
    bgcolor: 2,
    cellformat: 2,
    nontextvalueformat: 2,
    textvalueformat: 2,
    colspan: 2,
    rowspan: 2,
    cssc: 2,
    csss: 2,
    mod: 2,
    displaystring: 3,
    parseinfo: 3,
    hcolspan: 3,
    hrowspan: 3
}, SocialCalc.CellPropertiesTable = {
    bt: "borderstyle",
    br: "borderstyle",
    bb: "borderstyle",
    bl: "borderstyle",
    layout: "layout",
    font: "font",
    color: "color",
    bgcolor: "color",
    cellformat: "cellformat",
    nontextvalueformat: "valueformat",
    textvalueformat: "valueformat"
}, SocialCalc.Sheet = function() {
    SocialCalc.ResetSheet(this), this.statuscallback = null, this.statuscallbackparams = null
}, SocialCalc.ResetSheet = function(e) {
    e.cells = {}, e.attribs = {
        lastcol: 1,
        lastrow: 1,
        defaultlayout: 0,
        usermaxcol: 0,
        usermaxrow: 0
    }, e.rowattribs = {
        hide: {},
        height: {}
    }, e.colattribs = {
        width: {},
        hide: {}
    }, e.names = {}, e.layouts = [], e.layouthash = {}, e.fonts = [], e.fonthash = {}, e.colors = [], e.colorhash = {}, e.borderstyles = [], e.borderstylehash = {}, e.cellformats = [], e.cellformathash = {}, e.valueformats = [], e.valueformathash = {}, e.matched_cells = [], e.selected_search_cell = void 0, e.copiedfrom = "", e.changes = new SocialCalc.UndoStack, e.renderneeded = !1, e.changedrendervalues = !0, e.recalcchangedavalue = !1, e.hiddencolrow = "", e.sci = new SocialCalc.SheetCommandInfo(e)
}, SocialCalc.Sheet.prototype.ResetSheet = function() {
    SocialCalc.ResetSheet(this)
}, SocialCalc.Sheet.prototype.AddCell = function(e) {
    return this.cells[e.coord] = e
}, SocialCalc.Sheet.prototype.GetAssuredCell = function(e) {
    return this.cells[e] || this.AddCell(new SocialCalc.Cell(e))
}, SocialCalc.Sheet.prototype.ParseSheetSave = function(e) {
    SocialCalc.ParseSheetSave(e, this)
}, SocialCalc.Sheet.prototype.CellFromStringParts = function(e, t, o) {
    return SocialCalc.CellFromStringParts(this, e, t, o)
}, SocialCalc.Sheet.prototype.CreateSheetSave = function(e, t) {
    return SocialCalc.CreateSheetSave(this, e, t)
}, SocialCalc.Sheet.prototype.CellToString = function(e) {
    return SocialCalc.CellToString(this, e)
}, SocialCalc.Sheet.prototype.CanonicalizeSheet = function(e) {
    return SocialCalc.CanonicalizeSheet(this, e)
}, SocialCalc.Sheet.prototype.EncodeCellAttributes = function(e) {
    return SocialCalc.EncodeCellAttributes(this, e)
}, SocialCalc.Sheet.prototype.EncodeSheetAttributes = function() {
    return SocialCalc.EncodeSheetAttributes(this)
}, SocialCalc.Sheet.prototype.DecodeCellAttributes = function(e, t, o) {
    return SocialCalc.DecodeCellAttributes(this, e, t, o)
}, SocialCalc.Sheet.prototype.DecodeSheetAttributes = function(e) {
    return SocialCalc.DecodeSheetAttributes(this, e)
}, SocialCalc.Sheet.prototype.ScheduleSheetCommands = function(e, t) {
    return SocialCalc.ScheduleSheetCommands(this, e, t)
}, SocialCalc.Sheet.prototype.SheetUndo = function() {
    return SocialCalc.SheetUndo(this)
}, SocialCalc.Sheet.prototype.SheetRedo = function() {
    return SocialCalc.SheetRedo(this)
}, SocialCalc.Sheet.prototype.CreateAuditString = function() {
    return SocialCalc.CreateAuditString(this)
}, SocialCalc.Sheet.prototype.GetStyleNum = function(e, t) {
    return SocialCalc.GetStyleNum(this, e, t)
}, SocialCalc.Sheet.prototype.GetStyleString = function(e, t) {
    return SocialCalc.GetStyleString(this, e, t)
}, SocialCalc.Sheet.prototype.RecalcSheet = function() {
    return SocialCalc.RecalcSheet(this)
}, SocialCalc.ParseSheetSave = function(e, t) {
    var o, a, l, n, r, i, c, s, d, u = e.split(/\r\n|\n/),
        p = [],
        f = SocialCalc.Constants;
    for (a = 0; a < u.length; a++) {
        switch (o = u[a], p = o.split(":"), p[0]) {
            case "cell":
                c = t.GetAssuredCell(p[1]), l = 2, t.CellFromStringParts(c, p, l);
                break;
            case "col":
                for (i = p[1], l = 2; n = p[l++];) switch (n) {
                    case "w":
                        t.colattribs.width[i] = p[l++];
                        break;
                    case "hide":
                        t.colattribs.hide[i] = p[l++];
                        break;
                    default:
                        throw f.s_pssUnknownColType + " '" + n + "'"
                }
                break;
            case "row":
                for (i = p[1] - 0, l = 2; n = p[l++];) switch (n) {
                    case "h":
                        t.rowattribs.height[i] = p[l++] - 0;
                        break;
                    case "hide":
                        t.rowattribs.hide[i] = p[l++];
                        break;
                    default:
                        throw f.s_pssUnknownRowType + " '" + n + "'"
                }
                break;
            case "sheet":
                for (s = t.attribs, l = 1; n = p[l++];) switch (n) {
                    case "c":
                        s.lastcol = p[l++] - 0;
                        break;
                    case "r":
                        s.lastrow = p[l++] - 0;
                        break;
                    case "w":
                        s.defaultcolwidth = p[l++] + "";
                        break;
                    case "h":
                        s.defaultrowheight = p[l++] - 0;
                        break;
                    case "tf":
                        s.defaulttextformat = p[l++] - 0;
                        break;
                    case "ntf":
                        s.defaultnontextformat = p[l++] - 0;
                        break;
                    case "layout":
                        s.defaultlayout = p[l++] - 0;
                        break;
                    case "font":
                        s.defaultfont = p[l++] - 0;
                        break;
                    case "tvf":
                        s.defaulttextvalueformat = p[l++] - 0;
                        break;
                    case "ntvf":
                        s.defaultnontextvalueformat = p[l++] - 0;
                        break;
                    case "color":
                        s.defaultcolor = p[l++] - 0;
                        break;
                    case "bgcolor":
                        s.defaultbgcolor = p[l++] - 0;
                        break;
                    case "circularreferencecell":
                        s.circularreferencecell = p[l++];
                        break;
                    case "recalc":
                        s.recalc = p[l++];
                        break;
                    case "needsrecalc":
                        s.needsrecalc = p[l++];
                        break;
                    case "usermaxcol":
                        s.usermaxcol = p[l++] - 0;
                        break;
                    case "usermaxrow":
                        s.usermaxrow = p[l++] - 0;
                        break;
                    default:
                        l += 1
                }
                break;
            case "name":
                d = SocialCalc.decodeFromSave(p[1]).toUpperCase(), t.names[d] = {
                    desc: SocialCalc.decodeFromSave(p[2])
                }, t.names[d].definition = SocialCalc.decodeFromSave(p[3]);
                break;
            case "layout":
                p = u[a].match(/^layout\:(\d+)\:(.+)$/), t.layouts[p[1] - 0] = p[2], t.layouthash[p[2]] = p[1] - 0;
                break;
            case "font":
                t.fonts[p[1] - 0] = p[2], t.fonthash[p[2]] = p[1] - 0;
                break;
            case "color":
                t.colors[p[1] - 0] = p[2], t.colorhash[p[2]] = p[1] - 0;
                break;
            case "border":
                t.borderstyles[p[1] - 0] = p[2], t.borderstylehash[p[2]] = p[1] - 0;
                break;
            case "cellformat":
                r = SocialCalc.decodeFromSave(p[2]), t.cellformats[p[1] - 0] = r, t.cellformathash[r] = p[1] - 0;
                break;
            case "valueformat":
                r = SocialCalc.decodeFromSave(p[2]), t.valueformats[p[1] - 0] = r, t.valueformathash[r] = p[1] - 0;
                break;
            case "version":
                break;
            case "copiedfrom":
                t.copiedfrom = p[1] + ":" + p[2];
                break;
            case "clipboardrange":
            case "clipboard":
                break;
            case "":
                break;
            default:
                throw alert(f.s_pssUnknownLineType + " '" + p[0] + "'"), f.s_pssUnknownLineType + " '" + p[0] + "'"
        }
        p = null
    }
}, SocialCalc.CellFromStringParts = function(e, t, o, a) {
    for (var t, l, n; l = o[a++];) switch (l) {
        case "v":
            t.datavalue = SocialCalc.decodeFromSave(o[a++]) - 0, t.datatype = "v", t.valuetype = "n";
            break;
        case "t":
            t.datavalue = SocialCalc.decodeFromSave(o[a++]), t.datatype = "t", t.valuetype = SocialCalc.Constants.textdatadefaulttype;
            break;
        case "vt":
            n = o[a++], t.valuetype = n, "n" == n.charAt(0) ? (t.datatype = "v", t.datavalue = SocialCalc.decodeFromSave(o[a++]) - 0) : (t.datatype = "t", t.datavalue = SocialCalc.decodeFromSave(o[a++]));
            break;
        case "vtf":
            n = o[a++], t.valuetype = n, t.datavalue = "n" == n.charAt(0) ? SocialCalc.decodeFromSave(o[a++]) - 0 : SocialCalc.decodeFromSave(o[a++]), t.formula = SocialCalc.decodeFromSave(o[a++]), t.datatype = "f";
            break;
        case "vtc":
            n = o[a++], t.valuetype = n, t.datavalue = "n" == n.charAt(0) ? SocialCalc.decodeFromSave(o[a++]) - 0 : SocialCalc.decodeFromSave(o[a++]), t.formula = SocialCalc.decodeFromSave(o[a++]), t.datatype = "c";
            break;
        case "ro":
            ro = SocialCalc.decodeFromSave(o[a++]), t.readonly = "yes" == ro.toLowerCase();
            break;
        case "e":
            t.errors = SocialCalc.decodeFromSave(o[a++]);
            break;
        case "b":
            t.bt = o[a++] - 0, t.br = o[a++] - 0, t.bb = o[a++] - 0, t.bl = o[a++] - 0;
            break;
        case "l":
            t.layout = o[a++] - 0;
            break;
        case "f":
            t.font = o[a++] - 0;
            break;
        case "c":
            t.color = o[a++] - 0;
            break;
        case "bg":
            t.bgcolor = o[a++] - 0;
            break;
        case "cf":
            t.cellformat = o[a++] - 0;
            break;
        case "ntvf":
            t.nontextvalueformat = o[a++] - 0;
            break;
        case "tvf":
            t.textvalueformat = o[a++] - 0;
            break;
        case "colspan":
            t.colspan = o[a++] - 0;
            break;
        case "rowspan":
            t.rowspan = o[a++] - 0;
            break;
        case "cssc":
            t.cssc = o[a++];
            break;
        case "csss":
            t.csss = SocialCalc.decodeFromSave(o[a++]);
            break;
        case "mod":
            a += 1;
            break;
        case "comment":
            t.comment = SocialCalc.decodeFromSave(o[a++]);
            break;
        default:
            throw SocialCalc.Constants.s_cfspUnknownCellType + " '" + l + "'"
    }
}, SocialCalc.sheetfields = ["defaultrowheight", "defaultcolwidth", "circularreferencecell", "recalc", "needsrecalc", "usermaxcol", "usermaxrow"], SocialCalc.sheetfieldsshort = ["h", "w", "circularreferencecell", "recalc", "needsrecalc", "usermaxcol", "usermaxrow"], SocialCalc.sheetfieldsxlat = ["defaulttextformat", "defaultnontextformat", "defaulttextvalueformat", "defaultnontextvalueformat", "defaultcolor", "defaultbgcolor", "defaultfont", "defaultlayout"], SocialCalc.sheetfieldsxlatshort = ["tf", "ntf", "tvf", "ntvf", "color", "bgcolor", "font", "layout"], SocialCalc.sheetfieldsxlatxlt = ["cellformat", "cellformat", "valueformat", "valueformat", "color", "color", "font", "layout"], SocialCalc.CreateSheetSave = function(e, t, o) {
    var a, l, n, r, i, c, s, d, u, p, f, h = [];
    e.CanonicalizeSheet(o || SocialCalc.Constants.doCanonicalizeSheet);
    var m = e.xlt;
    for (f = t ? SocialCalc.ParseRange(t) : {
            cr1: {
                row: 1,
                col: 1
            },
            cr2: {
                row: m.maxrow,
                col: m.maxcol
            }
        }, l = f.cr1, n = f.cr2, h.push("version:1.5"), r = l.row; r <= n.row; r++)
        for (i = l.col; i <= n.col; i++) c = SocialCalc.crToCoord(i, r), a = e.cells[c], a && (s = e.CellToString(a), 0 != s.length && (s = "cell:" + c + s, h.push(s)));
    for (i = 1; i <= m.maxcol; i++) c = SocialCalc.rcColname(i), e.colattribs.width[c] && h.push("col:" + c + ":w:" + e.colattribs.width[c]), e.colattribs.hide[c] && h.push("col:" + c + ":hide:" + e.colattribs.hide[c]);
    for (r = 1; r <= m.maxrow; r++) e.rowattribs.height[r] && h.push("row:" + r + ":h:" + e.rowattribs.height[r]), e.rowattribs.hide[r] && h.push("row:" + r + ":hide:" + e.rowattribs.hide[r]);
    for (s = "sheet:c:" + m.maxcol + ":r:" + m.maxrow, u = 0; u < SocialCalc.sheetfields.length; u++) d = SocialCalc.encodeForSave(e.attribs[SocialCalc.sheetfields[u]]), d && (s += ":" + SocialCalc.sheetfieldsshort[u] + ":" + d);
    for (u = 0; u < SocialCalc.sheetfieldsxlat.length; u++) d = e.attribs[SocialCalc.sheetfieldsxlat[u]], d && (s += ":" + SocialCalc.sheetfieldsxlatshort[u] + ":" + m[SocialCalc.sheetfieldsxlatxlt[u] + "sxlat"][d]);
    for (h.push(s), u = 1; u < m.newborderstyles.length; u++) h.push("border:" + u + ":" + m.newborderstyles[u]);
    for (u = 1; u < m.newcellformats.length; u++) h.push("cellformat:" + u + ":" + SocialCalc.encodeForSave(m.newcellformats[u]));
    for (u = 1; u < m.newcolors.length; u++) h.push("color:" + u + ":" + m.newcolors[u]);
    for (u = 1; u < m.newfonts.length; u++) h.push("font:" + u + ":" + m.newfonts[u]);
    for (u = 1; u < m.newlayouts.length; u++) h.push("layout:" + u + ":" + m.newlayouts[u]);
    for (u = 1; u < m.newvalueformats.length; u++) h.push("valueformat:" + u + ":" + SocialCalc.encodeForSave(m.newvalueformats[u]));
    for (u = 0; u < m.namesorder.length; u++) p = m.namesorder[u], h.push("name:" + SocialCalc.encodeForSave(p).toUpperCase() + ":" + SocialCalc.encodeForSave(e.names[p].desc) + ":" + SocialCalc.encodeForSave(e.names[p].definition));
    return t && h.push("copiedfrom:" + SocialCalc.crToCoord(l.col, l.row) + ":" + SocialCalc.crToCoord(n.col, n.row)), h.push(""), delete e.xlt, h.join("\n")
}, SocialCalc.CellToString = function(e, t) {
    var t, o, a, l, n, r, i, c, s;
    return o = "", t ? (a = SocialCalc.encodeForSave(t.datavalue), "v" == t.datatype ? o += "n" == t.valuetype ? ":v:" + a : ":vt:" + t.valuetype + ":" + a : "t" == t.datatype ? o += t.valuetype == SocialCalc.Constants.textdatadefaulttype ? ":t:" + a : ":vt:" + t.valuetype + ":" + a : (l = SocialCalc.encodeForSave(t.formula), "f" == t.datatype ? o += ":vtf:" + t.valuetype + ":" + a + ":" + l : "c" == t.datatype && (o += ":vtc:" + t.valuetype + ":" + a + ":" + l)), t.readonly && (o += ":ro:yes"), t.errors && (o += ":e:" + SocialCalc.encodeForSave(t.errors)), n = t.bt || "", r = t.br || "", i = t.bb || "", c = t.bl || "", e.xlt ? (s = e.xlt, (n || r || i || c) && (o += ":b:" + s.borderstylesxlat[n || 0] + ":" + s.borderstylesxlat[r || 0] + ":" + s.borderstylesxlat[i || 0] + ":" + s.borderstylesxlat[c || 0]), t.layout && (o += ":l:" + s.layoutsxlat[t.layout]), t.font && (o += ":f:" + s.fontsxlat[t.font]), t.color && (o += ":c:" + s.colorsxlat[t.color]), t.bgcolor && (o += ":bg:" + s.colorsxlat[t.bgcolor]), t.cellformat && (o += ":cf:" + s.cellformatsxlat[t.cellformat]), t.textvalueformat && (o += ":tvf:" + s.valueformatsxlat[t.textvalueformat]), t.nontextvalueformat && (o += ":ntvf:" + s.valueformatsxlat[t.nontextvalueformat])) : ((n || r || i || c) && (o += ":b:" + n + ":" + r + ":" + i + ":" + c), t.layout && (o += ":l:" + t.layout), t.font && (o += ":f:" + t.font), t.color && (o += ":c:" + t.color), t.bgcolor && (o += ":bg:" + t.bgcolor), t.cellformat && (o += ":cf:" + t.cellformat), t.textvalueformat && (o += ":tvf:" + t.textvalueformat), t.nontextvalueformat && (o += ":ntvf:" + t.nontextvalueformat)), t.colspan && (o += ":colspan:" + t.colspan), t.rowspan && (o += ":rowspan:" + t.rowspan), t.cssc && (o += ":cssc:" + t.cssc), t.csss && (o += ":csss:" + SocialCalc.encodeForSave(t.csss)), t.mod && (o += ":mod:" + t.mod), t.comment && (o += ":comment:" + SocialCalc.encodeForSave(t.comment)), o) : o
}, SocialCalc.CanonicalizeSheet = function(e, t) {
    var o, a, l, n, r, i, c, s, d, u, p, f, h, m = 0,
        C = 0,
        g = ["borderstyle", "cellformat", "color", "font", "layout", "valueformat"],
        S = {};
    S.namesorder = [];
    for (c in e.names) S.namesorder.push(c);
    if (S.namesorder.sort(), !SocialCalc.Constants.doCanonicalizeSheet || !t) {
        for (i = 0; i < g.length; i++) {
            for (c = g[i], S["new" + c + "s"] = e[c + "s"], o = e[c + "s"].length, d = new Array(o), d[0] = "", f = 1; o > f; f++) d[f] = f;
            S[c + "sxlat"] = d
        }
        return S.maxrow = e.attribs.lastrow, S.maxcol = e.attribs.lastcol, void(e.xlt = S)
    }
    for (i = 0; i < g.length; i++) c = g[i], S[c + "sUsed"] = {};
    var v = S.colorsUsed,
        b = S.borderstylesUsed,
        y = S.fontsUsed,
        w = S.layoutsUsed,
        x = S.cellformatsUsed,
        T = S.valueformatsUsed;
    for (a in e.cells) l = SocialCalc.coordToCr(a), n = e.cells[a], r = !1, n.valuetype && "b" != n.valuetype && (r = !0), n.color && (v[n.color] = 1, r = !0), n.bgcolor && (v[n.bgcolor] = 1, r = !0), n.bt && (b[n.bt] = 1, r = !0), n.br && (b[n.br] = 1, r = !0), n.bb && (b[n.bb] = 1, r = !0), n.bl && (b[n.bl] = 1, r = !0), n.layout && (w[n.layout] = 1, r = !0), n.font && (y[n.font] = 1, r = !0), n.cellformat && (x[n.cellformat] = 1, r = !0), n.textvalueformat && (T[n.textvalueformat] = 1, r = !0), n.nontextvalueformat && (T[n.nontextvalueformat] = 1, r = !0), r && (l.row > m && (m = l.row), l.col > C && (C = l.col));
    for (f = 0; f < SocialCalc.sheetfieldsxlat.length; f++) h = e.attribs[SocialCalc.sheetfieldsxlat[f]], h && (S[SocialCalc.sheetfieldsxlatxlt[f] + "sUsed"][h] = 1);
    c = {
        height: 1,
        hide: 1
    };
    for (h in c)
        for (l in e.rowattribs[h]) l > m && (m = l);
    c = {
        hide: 1,
        width: 1
    };
    for (h in c)
        for (a in e.colattribs[h]) l = SocialCalc.coordToCr(a + "1"), l.col > C && (C = l.col);
    for (i = 0; i < g.length; i++) {
        c = g[i], s = [], u = S[c + "sUsed"];
        for (h in u) s.push(e[c + "s"][h]);
        for (s.sort(), s.unshift(""), d = [""], p = e[c + "hash"], f = 1; f < s.length; f++) d[p[s[f]]] = f;
        S[c + "sxlat"] = d, S["new" + c + "s"] = s
    }
    S.maxrow = m || 1, S.maxcol = C || 1, e.xlt = S
}, SocialCalc.EncodeCellAttributes = function(e, t) {
    var o, a, l, n = {},
        r = function(e) {
            n[e] = {
                def: !0,
                val: ""
            }
        },
        i = function(e) {
            for (var t = 0; t < e.length; t++) r(e[t])
        },
        c = function(e, t) {
            n[e].def = !1, n[e].val = t || ""
        },
        s = function(e, t) {
            "*" != t && (n[e].def = !1, n[e].val = t)
        },
        d = e.GetAssuredCell(t);
    for (r("alignhoriz"), d.cellformat && c("alignhoriz", e.cellformats[d.cellformat]), i(["alignvert", "padtop", "padright", "padbottom", "padleft"]), d.layout && (parts = e.layouts[d.layout].match(/^padding:\s*(\S+)\s+(\S+)\s+(\S+)\s+(\S+);vertical-align:\s*(\S+);/), s("padtop", parts[1]), s("padright", parts[2]), s("padbottom", parts[3]), s("padleft", parts[4]), s("alignvert", parts[5])), i(["fontfamily", "fontlook", "fontsize"]), d.font && (parts = e.fonts[d.font].match(/^(\*|\S+? \S+?) (\S+?) (\S.*)$/), s("fontfamily", parts[3]), s("fontsize", parts[2]), s("fontlook", parts[1])), r("textcolor"), d.color && c("textcolor", e.colors[d.color]), r("bgcolor"), d.bgcolor && c("bgcolor", e.colors[d.bgcolor]), i(["numberformat", "textformat"]), d.nontextvalueformat && c("numberformat", e.valueformats[d.nontextvalueformat]), d.textvalueformat && c("textformat", e.valueformats[d.textvalueformat]), i(["colspan", "rowspan"]), c("colspan", d.colspan || 1), c("rowspan", d.rowspan || 1), o = 0; 4 > o; o++) a = "trbl".charAt(o), l = "b" + a, r(l), c(l, d[l] ? e.borderstyles[d[l]] : ""), r(l + "thickness"), r(l + "style"), r(l + "color"), d[l] && (parts = e.borderstyles[d[l]].match(/(\S+)\s+(\S+)\s+(\S.+)/), c(l + "thickness", parts[1]), c(l + "style", parts[2]), c(l + "color", parts[3]));
    return i(["cssc", "csss", "mod"]), c("cssc", d.cssc || ""), c("csss", d.csss || ""), c("mod", d.mod || "n"), n
}, SocialCalc.EncodeSheetAttributes = function(e) {
    var t, o = e.attribs,
        a = {},
        l = function(e) {
            a[e] = {
                def: !0,
                val: ""
            }
        },
        n = function(e) {
            for (var t = 0; t < e.length; t++) l(e[t])
        },
        r = function(e, o) {
            a[e].def = !1, a[e].val = o || t
        },
        i = function(e, t) {
            "*" != t && (a[e].def = !1, a[e].val = t)
        };
    return l("colwidth"), o.defaultcolwidth && r("colwidth", o.defaultcolwidth), l("rowheight"), o.rowheight && r("rowheight", o.defaultrowheight), l("textalignhoriz"), o.defaulttextformat && r("textalignhoriz", e.cellformats[o.defaulttextformat]), l("numberalignhoriz"), o.defaultnontextformat && r("numberalignhoriz", e.cellformats[o.defaultnontextformat]), n(["alignvert", "padtop", "padright", "padbottom", "padleft"]), o.defaultlayout && (parts = e.layouts[o.defaultlayout].match(/^padding:\s*(\S+)\s+(\S+)\s+(\S+)\s+(\S+);vertical-align:\s*(\S+);/), i("padtop", parts[1]), i("padright", parts[2]), i("padbottom", parts[3]), i("padleft", parts[4]), i("alignvert", parts[5])), n(["fontfamily", "fontlook", "fontsize"]), o.defaultfont && (parts = e.fonts[o.defaultfont].match(/^(\*|\S+? \S+?) (\S+?) (\S.*)$/), i("fontfamily", parts[3]), i("fontsize", parts[2]), i("fontlook", parts[1])), l("textcolor"), o.defaultcolor && r("textcolor", e.colors[o.defaultcolor]), l("bgcolor"), o.defaultbgcolor && r("bgcolor", e.colors[o.defaultbgcolor]), n(["numberformat", "textformat"]), o.defaultnontextvalueformat && r("numberformat", e.valueformats[o.defaultnontextvalueformat]), o.defaulttextvalueformat && r("textformat", e.valueformats[o.defaulttextvalueformat]), l("recalc"), o.recalc && r("recalc", o.recalc), l("usermaxcol"), o.usermaxcol && r("usermaxcol", o.usermaxcol), l("usermaxrow"), o.usermaxrow && r("usermaxrow", o.usermaxrow), a
}, SocialCalc.DecodeCellAttributes = function(e, t, o, a) {
    var l, n, r, c = e.GetAssuredCell(t),
        s = !1,
        d = function(e, t, a) {
            var l;
            o[e] && (l = o[e].def ? "" : o[e].val, l != (t || "") && p(a + " " + l))
        },
        u = "",
        p = function(e) {
            u && (u += "\n"), u += "set " + (a || t) + " " + e, s = !0
        };
    for (d("alignhoriz", e.cellformats[c.cellformat], "cellformat"), l = o.alignvert.def && o.padtop.def && o.padright.def && o.padbottom.def && o.padleft.def ? "" : "padding:" + (o.padtop.def ? "* " : o.padtop.val + " ") + (o.padright.def ? "* " : o.padright.val + " ") + (o.padbottom.def ? "* " : o.padbottom.val + " ") + (o.padleft.def ? "*" : o.padleft.val) + ";vertical-align:" + (o.alignvert.def ? "*;" : o.alignvert.val + ";"), l != (e.layouts[c.layout] || "") && p("layout " + l), l = o.fontlook.def && o.fontsize.def && o.fontfamily.def ? "" : (o.fontlook.def ? "* " : o.fontlook.val + " ") + (o.fontsize.def ? "* " : o.fontsize.val + " ") + (o.fontfamily.def ? "*" : o.fontfamily.val), l != (e.fonts[c.font] || "") && p("font " + l), d("textcolor", e.colors[c.color], "color"), d("bgcolor", e.colors[c.bgcolor], "bgcolor"), d("numberformat", e.valueformats[c.nontextvalueformat], "nontextvalueformat"), d("textformat", e.valueformats[c.textvalueformat], "textvalueformat"), i = 0; 4 > i; i++) n = "trbl".charAt(i), r = "b" + n, d(r, e.borderstyles[c[r]], r);
    return d("cssc", c.cssc, "cssc"), d("csss", c.csss, "csss"), o.mod && (l = o.mod.def ? "n" : o.mod.val, l != (c.mod || "n") && ("n" == l && (l = ""), p("mod " + l))), s ? u : null
}, SocialCalc.DecodeSheetAttributes = function(e, t) {
    var o, a = e.attribs,
        l = !1,
        n = function(e, o, a) {
            var l;
            t[e] && (l = t[e].def ? "" : t[e].val, l != (o || "") && i(a + " " + l))
        },
        r = "",
        i = function(e) {
            r && (r += "\n"), r += "set sheet " + e, l = !0
        };
    return n("colwidth", a.defaultcolwidth, "defaultcolwidth"), n("rowheight", a.defaultrowheight, "defaultrowheight"), n("textalignhoriz", e.cellformats[a.defaulttextformat], "defaulttextformat"), n("numberalignhoriz", e.cellformats[a.defaultnontextformat], "defaultnontextformat"), o = t.alignvert.def && t.padtop.def && t.padright.def && t.padbottom.def && t.padleft.def ? "" : "padding:" + (t.padtop.def ? "* " : t.padtop.val + " ") + (t.padright.def ? "* " : t.padright.val + " ") + (t.padbottom.def ? "* " : t.padbottom.val + " ") + (t.padleft.def ? "*" : t.padleft.val) + ";vertical-align:" + (t.alignvert.def ? "*;" : t.alignvert.val + ";"), o != (e.layouts[a.defaultlayout] || "") && i("defaultlayout " + o), o = t.fontlook.def && t.fontsize.def && t.fontfamily.def ? "" : (t.fontlook.def ? "* " : t.fontlook.val + " ") + (t.fontsize.def ? "* " : t.fontsize.val + " ") + (t.fontfamily.def ? "*" : t.fontfamily.val), o != (e.fonts[a.defaultfont] || "") && i("defaultfont " + o), n("textcolor", e.colors[a.defaultcolor], "defaultcolor"), n("bgcolor", e.colors[a.defaultbgcolor], "defaultbgcolor"), n("numberformat", e.valueformats[a.defaultnontextvalueformat], "defaultnontextvalueformat"), n("textformat", e.valueformats[a.defaulttextvalueformat], "defaulttextvalueformat"), n("recalc", e.attribs.recalc, "recalc"), n("usermaxcol", e.attribs.usermaxcol, "usermaxcol"), n("usermaxrow", e.attribs.usermaxrow, "usermaxrow"), l ? r : null
}, SocialCalc.SheetCommandInfo = function(e) {
    this.sheetobj = e, this.timerobj = null, this.firsttimerdelay = 50, this.timerdelay = 1, this.maxtimeslice = 100, this.saveundo = !1, this.CmdExtensionCallbacks = {}
}, SocialCalc.ScheduleSheetCommands = function(e, t, o) {
    var a = e.sci,
        l = new SocialCalc.Parse(t);
    a.sheetobj.statuscallback && e.statuscallback(a, "cmdstart", "", a.sheetobj.statuscallbackparams), o && a.sheetobj.changes.PushChange(""), a.timerobj = window.setTimeout(function() {
        SocialCalc.SheetCommandsTimerRoutine(a, l, o)
    }, a.firsttimerdelay)
}, SocialCalc.SheetCommandsTimerRoutine = function(e, t, o) {
    var a, l = new Date;
    for (e.timerobj = null; !t.EOF();)
        if (a = SocialCalc.ExecuteSheetCommand(e.sheetobj, t, o), a && alert(a), t.NextLine(), new Date - l >= e.maxtimeslice) return void(e.timerobj = window.setTimeout(function() {
            SocialCalc.SheetCommandsTimerRoutine(e, t, o)
        }, e.timerdelay));
    e.sheetobj.statuscallback && e.sheetobj.statuscallback(e, "cmdend", "", e.sheetobj.statuscallbackparams)
}, SocialCalc.ExecuteSheetCommand = function(e, t, o) {
    function a(t) {
        function o(e) {
            return "v" == e || "c" == e
        }
        var a = SocialCalc.GetSpreadsheetControlObject().editor,
            l = a.range2,
            n = void 0;
        if (l.hasrange) {
            var r, i;
            t && l.bottom - l.top == 1 && l.left == l.right ? (r = e.GetAssuredCell(SocialCalc.crToCoord(l.left, l.top)), i = e.GetAssuredCell(SocialCalc.crToCoord(l.left, l.bottom)), o(r.datatype) && o(i.datatype) && (n = i.datavalue - r.datavalue)) : t || l.left == l.right || (r = e.GetAssuredCell(SocialCalc.crToCoord(l.left, l.top)), i = e.GetAssuredCell(SocialCalc.crToCoord(l.right, l.top)), o(r.datatype) && o(i.datatype) && (n = i.datavalue - r.datavalue))
        }
        return a.Range2Remove(), n
    }
    var l, n, r, i, c, s, d, u, p, f, h, m, C, g, S, v, b, y, w, x, T, k, F, E, _, P, R, A, D, L, N, M, I, O, B, z, H, U, j, V, G, $, W, K, X, q, Y, J, Z, Q, et, tt, ot, at, lt, nt, rt, it, ct, st, dt, g, S, ut, pt, ft, ht = e.attribs,
        mt = e.changes,
        Ct = SocialCalc.CellProperties,
        gt = SocialCalc.Constants,
        St = function() {
            var e = SocialCalc.ParseRange(i);
            m = e.cr1, C = e.cr2, C.col > ht.lastcol && (ht.lastcol = C.col), C.row > ht.lastrow && (ht.lastrow = C.row)
        };
    switch (p = "", l = t.RestOfStringNoMove(), o && e.changes.AddDo(l), n = t.NextToken()) {
        case "set":
            if (i = t.NextToken(), c = t.NextToken(), r = t.RestOfString(), f = "set " + i + " " + c, "sheet" == i) switch (e.renderneeded = !0, c) {
                    case "defaultcolwidth":
                        o && mt.AddUndo(f, ht[c]), ht[c] = r;
                        break;
                    case "defaultcolor":
                    case "defaultbgcolor":
                        o && mt.AddUndo(f, e.GetStyleString("color", ht[c])), ht[c] = e.GetStyleNum("color", r);
                        break;
                    case "defaultlayout":
                        o && mt.AddUndo(f, e.GetStyleString("layout", ht[c])), ht[c] = e.GetStyleNum("layout", r);
                        break;
                    case "defaultfont":
                        o && mt.AddUndo(f, e.GetStyleString("font", ht[c])), "* * *" == r && (r = ""), ht[c] = e.GetStyleNum("font", r);
                        break;
                    case "defaulttextformat":
                    case "defaultnontextformat":
                        o && mt.AddUndo(f, e.GetStyleString("cellformat", ht[c])), ht[c] = e.GetStyleNum("cellformat", r);
                        break;
                    case "defaulttextvalueformat":
                    case "defaultnontextvalueformat":
                        o && mt.AddUndo(f, e.GetStyleString("valueformat", ht[c])), ht[c] = e.GetStyleNum("valueformat", r);
                        for (v in e.cells) delete e.cells[v].displaystring;
                        break;
                    case "lastcol":
                    case "lastrow":
                        o && mt.AddUndo(f, ht[c] - 0), s = r - 0, "number" == typeof s && (ht[c] = s > 0 ? s : 1);
                        break;
                    case "recalc":
                        o && mt.AddUndo(f, ht[c]), "off" == r ? ht.recalc = r : delete ht.recalc;
                        break;
                    case "usermaxcol":
                    case "usermaxrow":
                        o && mt.AddUndo(f, ht[c] - 0), s = r - 0, "number" == typeof s && (ht[c] = s > 0 ? s : 0);
                        break;
                    default:
                        p = gt.s_escUnknownSheetCmd + l
                } else if (/^[a-z]{1,2}(:[a-z]{1,2})?$/i.test(i))
                    for (e.renderneeded = !0, i = i.toUpperCase(), d = i.indexOf(":"), d >= 0 ? (m = SocialCalc.coordToCr(i.substring(0, d) + "1"), C = SocialCalc.coordToCr(i.substring(d + 1) + "1")) : (m = SocialCalc.coordToCr(i + "1"), C = m), g = m.col; g <= C.col; g++) "width" == c ? (v = SocialCalc.rcColname(g), o && mt.AddUndo("set " + v + " width", e.colattribs.width[v]), r.length > 0 ? e.colattribs.width[v] = r : delete e.colattribs.width[v]) : "hide" == c && (e.hiddencolrow = "col", v = SocialCalc.rcColname(g), o && mt.AddUndo("set " + v + " hide", e.colattribs.hide[v]), r.length > 0 ? e.colattribs.hide[v] = r : delete e.colattribs.hide[v]);
                else if (/^\d+(:\d+)?$/i.test(i))
                for (e.renderneeded = !0, i = i.toUpperCase(), d = i.indexOf(":"), d >= 0 ? (m = SocialCalc.coordToCr("A" + i.substring(0, d)), C = SocialCalc.coordToCr("A" + i.substring(d + 1))) : (m = SocialCalc.coordToCr("A" + i), C = m), S = m.row; S <= C.row; S++) "height" == c ? (o && mt.AddUndo("set " + S + " height", e.rowattribs.height[S]), r.length > 0 ? e.rowattribs.height[S] = r : delete e.rowattribs.height[S]) : "hide" == c && (e.hiddencolrow = "row", o && mt.AddUndo("set " + S + " hide", e.rowattribs.hide[S]), r.length > 0 ? e.rowattribs.hide[S] = r : delete e.rowattribs.hide[S]);
            else if (/^[a-z]{1,2}\d+(:[a-z]{1,2}\d+)?$/i.test(i))
                for (St(), m.row != C.row || m.col != C.col || e.celldisplayneeded || e.renderneeded ? (e.renderneeded = !0, e.celldisplayneeded = "") : e.celldisplayneeded = SocialCalc.crToCoord(m.col, m.row), S = m.row; S <= C.row; S++)
                    for (g = m.col; g <= C.col; g++) v = SocialCalc.crToCoord(g, S), b = e.GetAssuredCell(v), b.readonly && "readonly" != c || (o && mt.AddUndo("set " + v + " all", e.CellToString(b)), "value" == c ? (d = r.indexOf(" "), b.datavalue = r.substring(d + 1) - 0, delete b.errors, b.datatype = "v", b.valuetype = r.substring(0, d), delete b.displaystring, delete b.parseinfo, ht.needsrecalc = "yes") : "text" == c ? (d = r.indexOf(" "), b.datavalue = SocialCalc.decodeFromSave(r.substring(d + 1)), delete b.errors, b.datatype = "t", b.valuetype = r.substring(0, d), delete b.displaystring, delete b.parseinfo, ht.needsrecalc = "yes") : "formula" == c ? (b.datavalue = 0, delete b.errors, b.datatype = "f", b.valuetype = "e#N/A", b.formula = r, delete b.displaystring, delete b.parseinfo, ht.needsrecalc = "yes") : "constant" == c ? (d = r.indexOf(" "), u = r.substring(d + 1).indexOf(" "), b.datavalue = r.substring(d + 1, d + 1 + u) - 0, b.valuetype = r.substring(0, d), "e" == b.valuetype.charAt(0) ? b.errors = b.valuetype.substring(1) : delete b.errors, b.datatype = "c", b.formula = r.substring(d + u + 2), delete b.displaystring, delete b.parseinfo, ht.needsrecalc = "yes") : "empty" == c ? (b.datavalue = "", delete b.errors, b.datatype = null, b.formula = "", b.valuetype = "b", delete b.displaystring, delete b.parseinfo, ht.needsrecalc = "yes") : "all" == c ? (r.length > 0 ? (b = new SocialCalc.Cell(v), e.CellFromStringParts(b, r.split(":"), 1), e.cells[v] = b) : delete e.cells[v], ht.needsrecalc = "yes") : /^b[trbl]$/.test(c) ? (b[c] = e.GetStyleNum("borderstyle", r), e.renderneeded = !0) : "color" == c || "bgcolor" == c ? b[c] = e.GetStyleNum("color", r) : "layout" == c || "cellformat" == c ? b[c] = e.GetStyleNum(c, r) : "font" == c ? ("* * *" == r && (r = ""), b[c] = e.GetStyleNum("font", r)) : "textvalueformat" == c || "nontextvalueformat" == c ? (b[c] = e.GetStyleNum("valueformat", r), delete b.displaystring) : "cssc" == c ? (r = r.replace(/[^a-zA-Z0-9\-]/g, ""), b.cssc = r) : "csss" == c ? (r = r.replace(/\n/g, ""), b.csss = r) : "mod" == c ? (r = r.replace(/[^yY]/g, "").toLowerCase(), b.mod = r) : "comment" == c ? b.comment = SocialCalc.decodeFromSave(r) : "readonly" == c ? b.readonly = "yes" == r.toLowerCase() : p = gt.s_escUnknownSetCoordCmd + l);
            break;
        case "merge":
            if (e.renderneeded = !0, i = t.NextToken(), r = t.RestOfString(), St(), b = e.GetAssuredCell(m.coord), b.readonly) break;
            o && mt.AddUndo("unmerge " + m.coord), C.col > m.col ? b.colspan = C.col - m.col + 1 : delete b.colspan, C.row > m.row ? b.rowspan = C.row - m.row + 1 : delete b.rowspan, e.changedrendervalues = !0;
            break;
        case "unmerge":
            if (e.renderneeded = !0, i = t.NextToken(), r = t.RestOfString(), St(), b = e.GetAssuredCell(m.coord), b.readonly) break;
            o && mt.AddUndo("merge " + m.coord + ":" + SocialCalc.crToCoord(m.col + (b.colspan || 1) - 1, m.row + (b.rowspan || 1) - 1)), delete b.colspan, delete b.rowspan, e.changedrendervalues = !0;
            break;
        case "erase":
        case "cut":
            for (e.renderneeded = !0, e.changedrendervalues = !0, i = t.NextToken(), r = t.RestOfString(), St(), o && mt.AddUndo("changedrendervalues"), "cut" == n && (o && mt.AddUndo("loadclipboard", SocialCalc.encodeForSave(SocialCalc.Clipboard.clipboard)), SocialCalc.Clipboard.clipboard = SocialCalc.CreateSheetSave(e, i)), S = m.row; S <= C.row; S++)
                for (g = m.col; g <= C.col; g++) v = SocialCalc.crToCoord(g, S), b = e.GetAssuredCell(v), b.readonly || (o && mt.AddUndo("set " + v + " all", e.CellToString(b)), "all" == r ? delete e.cells[v] : "formulas" == r ? (b.datavalue = "", b.datatype = null, b.formula = "", b.valuetype = "b", delete b.errors, delete b.displaystring, delete b.parseinfo, b.comment && delete b.comment) : "formats" == r && (y = new SocialCalc.Cell(v), y.datavalue = b.datavalue, y.datatype = b.datatype, y.formula = b.formula, y.valuetype = b.valuetype, b.comment && (y.comment = b.comment), e.cells[v] = y));
            ht.needsrecalc = "yes";
            break;
        case "fillright":
        case "filldown":
            e.renderneeded = !0, e.changedrendervalues = !0, o && mt.AddUndo("changedrendervalues"), i = t.NextToken(), r = t.RestOfString(), St();
            var vt;
            for ("fillright" == n ? (w = !0, x = m.row, T = m.col + 1, vt = a(!1)) : (w = !1, x = m.row + 1, T = m.col, vt = a(!0)), S = x; S <= C.row; S++)
                for (g = T; g <= C.col; g++)
                    if (v = SocialCalc.crToCoord(g, S), b = e.GetAssuredCell(v), !b.readonly) {
                        if (o && mt.AddUndo("set " + v + " all", e.CellToString(b)), w ? (k = SocialCalc.crToCoord(m.col, S), E = g - T + 1, F = 0) : (k = SocialCalc.crToCoord(g, m.row), E = 0, F = S - x + 1), _ = e.GetAssuredCell(k), "all" == r || "formats" == r)
                            for (c in Ct) 1 != Ct[c] && (void 0 === typeof _[c] || 3 == Ct[c] ? delete b[c] : b[c] = _[c]);
                        ("all" == r || "formulas" == r) && (b.datavalue = void 0 !== vt ? _.datavalue + (w ? E : F) * vt : _.datavalue, b.datatype = _.datatype, b.valuetype = _.valuetype, b.formula = "f" == b.datatype ? SocialCalc.OffsetFormulaCoords(_.formula, E, F) : _.formula, delete b.parseinfo, b.errors = _.errors), delete b.displaystring
                    }
            ht.needsrecalc = "yes";
            break;
        case "copy":
            i = t.NextToken(), r = t.RestOfString(), o && mt.AddUndo("loadclipboard", SocialCalc.encodeForSave(SocialCalc.Clipboard.clipboard)), SocialCalc.Clipboard.clipboard = SocialCalc.CreateSheetSave(e, i);
            break;
        case "loadclipboard":
            r = t.RestOfString(), o && mt.AddUndo("loadclipboard", SocialCalc.encodeForSave(SocialCalc.Clipboard.clipboard)), SocialCalc.Clipboard.clipboard = SocialCalc.decodeFromSave(r);
            break;
        case "clearclipboard":
            o && mt.AddUndo("loadclipboard", SocialCalc.encodeForSave(SocialCalc.Clipboard.clipboard)), SocialCalc.Clipboard.clipboard = "";
            break;
        case "paste":
            if (e.renderneeded = !0, e.changedrendervalues = !0, o && mt.AddUndo("changedrendervalues"), i = t.NextToken(), r = t.RestOfString(), St(), !SocialCalc.Clipboard.clipboard) break;
            for (P = new SocialCalc.Sheet, P.ParseSheetSave(SocialCalc.Clipboard.clipboard), R = SocialCalc.ParseRange(P.copiedfrom), E = m.col - R.cr1.col, F = m.row - R.cr1.row, A = Math.max(C.col - m.col + 1, R.cr2.col - R.cr1.col + 1), D = Math.max(C.row - m.row + 1, R.cr2.row - R.cr1.row + 1), m.col + A - 1 > ht.lastcol && (ht.lastcol = m.col + A - 1), m.row + D - 1 > ht.lastrow && (ht.lastrow = m.row + D - 1), S = m.row; S < m.row + D; S++)
                for (g = m.col; g < m.col + A; g++)
                    if (v = SocialCalc.crToCoord(g, S), b = e.GetAssuredCell(v), !b.readonly) {
                        if (o && mt.AddUndo("set " + v + " all", e.CellToString(b)), k = SocialCalc.crToCoord(R.cr1.col + (g - m.col) % (R.cr2.col - R.cr1.col + 1), R.cr1.row + (S - m.row) % (R.cr2.row - R.cr1.row + 1)), _ = P.GetAssuredCell(k), "all" == r || "formats" == r)
                            for (c in Ct) 1 != Ct[c] && (void 0 === typeof _[c] || 3 == Ct[c] ? delete b[c] : (L = SocialCalc.CellPropertiesTable[c], b[c] = L && _[c] ? e.GetStyleNum(L, P.GetStyleString(L, _[c])) : _[c]));
                        ("all" == r || "formulas" == r) && (b.datavalue = _.datavalue, b.datatype = _.datatype, b.valuetype = _.valuetype, b.formula = "f" == b.datatype ? SocialCalc.OffsetFormulaCoords(_.formula, E, F) : _.formula, delete b.parseinfo, b.errors = _.errors, _.comment ? b.comment = _.comment : b.comment && delete b.comment), delete b.displaystring
                    }
            ht.needsrecalc = "yes";
            break;
        case "sort":
            for (e.renderneeded = !0, e.changedrendervalues = !0, o && mt.AddUndo("changedrendervalues"), i = t.NextToken(), St(), q = [], Y = [], J = 0, Z = 0; 3 >= Z; Z++) q[Z] = t.NextToken(), Y[Z] = t.NextToken(), q[Z] && (J = Z);
            for (et = {}, Q = [], tt = [], ot = [], S = m.row; S <= C.row; S++) {
                for (g = m.col; g <= C.col; g++) v = SocialCalc.crToCoord(g, S), b = e.cells[v], b ? (et[v] = e.CellToString(b), o && mt.AddUndo("set " + v + " all", et[v])) : o && mt.AddUndo("set " + v + " all");
                for (Q.push(Q.length), tt.push([]), ot.push([]), slast = ot.length - 1, Z = 0; J >= Z; Z++) v = q[Z] + S, b = e.GetAssuredCell(v), h = b.datavalue, lt = b.valuetype.charAt(0) || "b", "t" == lt && (h = h.toLowerCase()), tt[slast].push(h), ot[slast].push(lt)
            }
            for (at = function(e, t) {
                    var o, a, l, n, r;
                    for (o = 0; J >= o; o++)
                        if ("up" == Y[o] ? (a = e, l = t) : (a = t, l = e), n = ot[a][o], tb = ot[l][o], "t" == n ? "t" == tb ? (a = tt[a][o], l = tt[l][o], r = a > l ? 1 : l > a ? -1 : 0) : "n" == tb ? r = 1 : "b" == tb ? r = "up" == Y[o] ? -1 : 1 : "e" == tb && (r = -1) : "n" == n ? "t" == tb ? r = -1 : "n" == tb ? (a = tt[a][o] - 0, l = tt[l][o] - 0, r = a > l ? 1 : l > a ? -1 : 0) : "b" == tb ? r = "up" == Y[o] ? -1 : 1 : "e" == tb && (r = -1) : "e" == n ? "e" == tb ? (a = tt[a][o], l = tt[l][o], r = a > l ? 1 : l > a ? -1 : 0) : r = "b" == tb && "up" == Y[o] ? -1 : 1 : "b" == n && (r = "b" == tb ? 0 : "up" == Y[o] ? 1 : -1), r) return r;
                    return r = e > t ? 1 : t > e ? -1 : 0
                }, Q.sort(at), S = m.row; S <= C.row; S++)
                for (nt = Q[S - m.row], g = m.col; g <= C.col; g++) v = SocialCalc.crToCoord(g, S), rt = SocialCalc.crToCoord(g, nt + m.row), et[rt] ? (b = new SocialCalc.Cell(v), e.CellFromStringParts(b, et[rt].split(":"), 1), "f" == b.datatype && (b.formula = SocialCalc.OffsetFormulaCoords(b.formula, 0, S - m.row - nt)), e.cells[v] = b) : delete e.cells[v];
            ht.needsrecalc = "yes";
            break;
        case "insertcol":
        case "insertrow":
            for (e.renderneeded = !0, e.changedrendervalues = !0, i = t.NextToken(), r = t.RestOfString(), St(), "insertcol" == n ? (E = 1, N = m.col, F = 0, M = 1, I = m.col, B = m.col, O = 1, z = ht.lastrow, o && mt.AddUndo("deletecol " + m.coord)) : (E = 0, N = 1, F = 1, M = m.row, I = 1, B = ht.lastcol, O = m.row, z = m.row, o && mt.AddUndo("deleterow " + m.coord)), S = ht.lastrow; S >= M; S--)
                for (g = ht.lastcol; g >= N; g--) k = SocialCalc.crToCoord(g, S), v = SocialCalc.crToCoord(g + E, S + F), e.cells[k] ? e.cells[v] = e.cells[k] : delete e.cells[v];
            for (S = O; z >= S; S++)
                for (g = I; B >= g; g++) {
                    v = SocialCalc.crToCoord(g, S), b = new SocialCalc.Cell(v), e.cells[v] = b, k = SocialCalc.crToCoord(g - E, S - F), _ = e.GetAssuredCell(k);
                    for (c in Ct) 2 == Ct[c] && (b[c] = _[c])
                }
            for (v in e.cells) b = e.cells[v], b && "f" == b.datatype && (b.formula = SocialCalc.AdjustFormulaCoords(b.formula, m.col, E, m.row, F)), b && delete b.parseinfo;
            for (it in e.names) e.names[it] && (ct = e.names[it].definition, st = "", "=" == ct.charAt(0) && (st = "=", ct = ct.substring(1)), e.names[it].definition = st + SocialCalc.AdjustFormulaCoords(ct, m.col, E, m.row, F));
            for (S = ht.lastrow; S >= M && "insertrow" == n; S--) {
                H = S + F;
                for (c in e.rowattribs) h = e.rowattribs[c][S], e.rowattribs[c][H] != h && (h ? e.rowattribs[c][H] = h : delete e.rowattribs[c][H])
            }
            for (g = ht.lastcol; g >= N && "insertcol" == n; g--) {
                j = SocialCalc.rcColname(g), U = SocialCalc.rcColname(g + E);
                for (c in e.colattribs) h = e.colattribs[c][j], e.colattribs[c][U] != h && (h ? e.colattribs[c][U] = h : delete e.colattribs[c][U])
            }
            ht.lastcol += E, ht.lastrow += F, ht.needsrecalc = "yes";
            break;
        case "deletecol":
        case "deleterow":
            for (e.renderneeded = !0, e.changedrendervalues = !0, i = t.NextToken(), r = t.RestOfString(), G = ht.lastcol, V = ht.lastrow, St(), "deletecol" == n ? (E = m.col - C.col - 1, F = 0, T = C.col + 1, x = 1) : (E = 0, F = m.row - C.row - 1, T = 1, x = C.row + 1), S = x; V - F >= S; S++)
                for (g = T; G - E >= g; g++)
                    if (v = SocialCalc.crToCoord(g + E, S + F), b = e.cells[v], b && b.readonly) return p = "Unable to remove " + ("deletecol" == n ? "column" : "row") + ", because cell " + b.coord + " is locked";
            for (S = x; V - F >= S; S++)
                for (g = T; G - E >= g; g++) v = SocialCalc.crToCoord(g + E, S + F), o && (x - F > S || T - E > g) && (b = e.cells[v], b ? mt.AddUndo("set " + v + " all", e.CellToString(b)) : mt.AddUndo("erase " + v + " all")), k = SocialCalc.crToCoord(g, S), b = e.cells[k], b ? e.cells[v] = b : delete e.cells[v];
            for (v in e.cells) b = e.cells[v], b && ("f" == b.datatype ? (K = b.formula, b.formula = SocialCalc.AdjustFormulaCoords(K, m.col, E, m.row, F), b.formula != K && (delete b.parseinfo, o && -1 != b.formula.indexOf("#REF!") && (X = SocialCalc.coordToCr(v), mt.AddUndo("set " + SocialCalc.rcColname(X.col - E) + (X.row - F) + " formula " + K)))) : delete b.parseinfo);
            for (it in e.names) e.names[it] && (ct = e.names[it].definition, st = "", "=" == ct.charAt(0) && (st = "=", ct = ct.substring(1)), e.names[it].definition = st + SocialCalc.AdjustFormulaCoords(ct, m.col, E, m.row, F));
            for (S = x; V - F >= S && "deleterow" == n; S++) {
                $ = S + F;
                for (c in e.rowattribs) h = e.rowattribs[c][S], e.rowattribs[c][$] != h && (o && mt.AddUndo("set " + $ + " " + c, e.rowattribs[c][$]), h ? e.rowattribs[c][$] = h : delete e.rowattribs[c][$])
            }
            for (g = T; G - E >= g && "deletecol" == n; g++) {
                j = SocialCalc.rcColname(g), W = SocialCalc.rcColname(g + E);
                for (c in e.colattribs) h = e.colattribs[c][j], e.colattribs[c][W] != h && (o && mt.AddUndo("set " + W + " " + c, e.colattribs[c][W]), h ? e.colattribs[c][W] = h : delete e.colattribs[c][W])
            }
            if (o)
                if ("deletecol" == n)
                    for (g = m.col; g <= C.col; g++) mt.AddUndo("insertcol " + SocialCalc.rcColname(m.col));
                else
                    for (S = m.row; S <= C.row; S++) mt.AddUndo("insertrow " + m.row);
                "deletecol" == n ? m.col <= G && (C.col <= G ? ht.lastcol += E : ht.lastcol = m.col - 1) : m.row <= V && (C.row <= V ? ht.lastrow += F : ht.lastrow = m.row - 1), ht.needsrecalc = "yes";
            break;
        case "movepaste":
        case "moveinsert":
            var bt, yt, wt, xt, Tt, kt, Ft;
            for (e.renderneeded = !0, e.changedrendervalues = !0, o && mt.AddUndo("changedrendervalues"), i = t.NextToken(), yt = t.NextToken(), r = t.RestOfString(), "" == r && (r = "all"), St(), wt = SocialCalc.coordToCr(yt), E = wt.col - m.col, F = wt.row - m.row, A = C.col - m.col + 1, D = C.row - m.row + 1, bt = {}, S = m.row; S <= C.row; S++)
                for (g = m.col; g <= C.col; g++)
                    if (v = SocialCalc.crToCoord(g, S), b = e.GetAssuredCell(v), !b.readonly && (o && mt.AddUndo("set " + v + " all", e.CellToString(b)), e.cells[v])) {
                        bt[v] = new SocialCalc.Cell(v);
                        for (c in Ct) void 0 !== typeof b[c] && (bt[v][c] = b[c], "all" == r && delete b[c], "formulas" == r && (1 == Ct[c] || 3 == Ct[c]) && delete b[c], "formats" == r && 2 == Ct[c] && delete b[c]);
                        "formulas" == r && (b.datavalue = "", b.datatype = null, b.formula = "", b.valuetype = "b"), "all" == r && delete e.cells[v]
                    }
            if ("moveinsert" == n && (xt = !1, Tt = !1, 0 == F && (wt.col < m.col || wt.col > C.col) ? wt.col < m.col ? (kt = m.col - wt.col, xt = -1) : (wt.col -= 1, E = wt.col - C.col, kt = wt.col - C.col, xt = 1) : 0 == E && (wt.row < m.row || wt.row > C.row) ? wt.row < m.row ? (kt = m.row - wt.row, Tt = -1) : (wt.row -= 1, F = wt.row - C.row, kt = wt.row - C.row, Tt = 1) : n = "movepaste"), Ft = {}, Tt)
                for (S = 0; kt > S; S++)
                    for (g = m.col; g <= C.col; g++) {
                        if (0 > Tt ? (k = SocialCalc.crToCoord(g, wt.row + kt - S - 1), v = SocialCalc.crToCoord(g, C.row - S)) : (k = SocialCalc.crToCoord(g, wt.row - kt + S + 1), v = SocialCalc.crToCoord(g, m.row + S)), _ = e.GetAssuredCell(k), o && mt.AddUndo("set " + k + " all", e.CellToString(_)), b = e.GetAssuredCell(v), "all" == r || "formats" == r)
                            for (c in Ct) 1 != Ct[c] && (void 0 === typeof _[c] || 3 == Ct[c] ? delete b[c] : b[c] = _[c]);
                        ("all" == r || "formulas" == r) && (b.datavalue = _.datavalue, b.datatype = _.datatype, b.valuetype = _.valuetype, b.formula = _.formula, delete b.parseinfo, b.errors = _.errors), delete b.displaystring, Ft[k] = v
                    }
            if (xt)
                for (g = 0; kt > g; g++)
                    for (S = m.row; S <= C.row; S++) {
                        if (0 > xt ? (k = SocialCalc.crToCoord(wt.col + kt - g - 1, S), v = SocialCalc.crToCoord(C.col - g, S)) : (k = SocialCalc.crToCoord(wt.col - kt + g + 1, S), v = SocialCalc.crToCoord(m.col + g, S)), _ = e.GetAssuredCell(k), o && mt.AddUndo("set " + k + " all", e.CellToString(_)), b = e.GetAssuredCell(v), "all" == r || "formats" == r)
                            for (c in Ct) 1 != Ct[c] && (void 0 === typeof _[c] || 3 == Ct[c] ? delete b[c] : b[c] = _[c]);
                        ("all" == r || "formulas" == r) && (b.datavalue = _.datavalue, b.datatype = _.datatype, b.valuetype = _.valuetype, b.formula = _.formula, delete b.parseinfo, b.errors = _.errors), delete b.displaystring, Ft[k] = v
                    }
            for (wt.col + A - 1 > ht.lastcol && (ht.lastcol = wt.col + A - 1), wt.row + D - 1 > ht.lastrow && (ht.lastrow = wt.row + D - 1), S = m.row; S < m.row + D; S++)
                for (g = m.col; g < m.col + A; g++)
                    if (v = SocialCalc.crToCoord(g + E, S + F), b = e.GetAssuredCell(v), !b.readonly)
                        if (o && mt.AddUndo("set " + v + " all", e.CellToString(b)), k = SocialCalc.crToCoord(g, S), Ft[k] = v, "all" != r || bt[k]) {
                            if (_ = bt[k], _ || (_ = e.GetAssuredCell(k)), "all" == r || "formats" == r)
                                for (c in Ct) 1 != Ct[c] && (void 0 === typeof _[c] || 3 == Ct[c] ? delete b[c] : b[c] = _[c]);
                            ("all" == r || "formulas" == r) && (b.datavalue = _.datavalue, b.datatype = _.datatype, b.valuetype = _.valuetype, b.formula = _.formula, delete b.parseinfo, b.errors = _.errors, _.comment ? b.comment = _.comment : b.comment && delete b.comment), delete b.displaystring
                        } else delete e.cells[v];
            for (v in e.cells) b = e.cells[v], b && ("f" == b.datatype ? (K = b.formula, b.formula = SocialCalc.ReplaceFormulaCoords(K, Ft), b.formula != K && (delete b.parseinfo, o && !Ft[v] && mt.AddUndo("set " + v + " formula " + K))) : delete b.parseinfo);
            for (it in e.names) e.names[it] && (ct = e.names[it].definition, K = ct, st = "", "=" == ct.charAt(0) && (st = "=", ct = ct.substring(1)), e.names[it].definition = st + SocialCalc.ReplaceFormulaCoords(ct, Ft), o && e.names[it].definition != K && mt.AddUndo("name define " + it + " " + K));
            ht.needsrecalc = "yes";
            break;
        case "name":
            if (i = t.NextToken(), it = t.NextToken(), r = t.RestOfString(), it = it.toUpperCase().replace(/[^A-Z0-9_\.]/g, ""), "" == it) break;
            if ("define" == i) {
                if ("" == r) break;
                e.names[it] ? (o && mt.AddUndo("name define " + it + " " + e.names[it].definition), e.names[it].definition = r) : (o && mt.AddUndo("name delete " + it), e.names[it] = {
                    definition: r,
                    desc: ""
                })
            } else "desc" == i ? e.names[it] && (o && mt.AddUndo("name desc " + it + " " + e.names[it].desc), e.names[it].desc = r) : "delete" == i && (o && (e.names[it].desc && mt.AddUndo("name desc " + it + " " + e.names[it].desc), mt.AddUndo("name define " + it + " " + e.names[it].definition)), delete e.names[it]);
            ht.needsrecalc = "yes";
            break;
        case "recalc":
            ht.needsrecalc = "yes", e.recalconce = !0;
            break;
        case "redisplay":
            e.renderneeded = !0;
            break;
        case "changedrendervalues":
            e.changedrendervalues = !0;
            break;
        case "pane":
            if (it = t.NextToken().toUpperCase(), pt = 1, ut = SocialCalc.GetSpreadsheetControlObject().editor, "ROW" === it.toUpperCase()) {
                for (S = parseInt(t.NextToken(), 10), "undefined" != typeof ut.context.rowpanes[1] && "number" == typeof ut.context.rowpanes[1].first && (pt = ut.context.rowpanes[1].first), o && mt.AddUndo("pane row " + pt);
                    "yes" == ut.context.sheetobj.rowattribs.hide[S];) S++;
                (!S || S <= ut.context.rowpanes[0].first) && ut.context.rowpanes.length > 1 ? ut.context.rowpanes.length = 1 : ut.context.rowpanes.length - 1 && !ut.timeout ? (ut.context.SetRowPaneFirstLast(0, ut.context.rowpanes[0].first, S - 1), ut.context.SetRowPaneFirstLast(1, S, S)) : (ut.context.SetRowPaneFirstLast(0, ut.context.rowpanes[0].first, S - 1), ut.context.SetRowPaneFirstLast(1, S, S)), ut.griddiv && (ft = document.getElementById("trackingline-vertical"), ft && (ut.griddiv.removeChild(ft), ut.FitToEditTable()))
            } else {
                for (g = parseInt(t.NextToken(), 10), "undefined" != typeof ut.context.colpanes[1] && "number" == typeof ut.context.colpanes[1].first && (pt = ut.context.colpanes[1].first), o && mt.AddUndo("pane col " + pt);
                    "yes" == ut.context.sheetobj.colattribs.hide[SocialCalc.rcColname(g)];) g++;
                (!g || g <= ut.context.colpanes[0].first) && ut.context.colpanes.length > 1 ? ut.context.colpanes.length = 1 : ut.context.colpanes.length - 1 && !ut.timeout ? (ut.context.SetColPaneFirstLast(0, ut.context.colpanes[0].first, g - 1), ut.context.SetColPaneFirstLast(1, g, g)) : (ut.context.SetColPaneFirstLast(0, ut.context.colpanes[0].first, g - 1), ut.context.SetColPaneFirstLast(1, g, g)), ut.griddiv && (ft = document.getElementById("trackingline-horizon"), ft && (ut.griddiv.removeChild(ft), ut.FitToEditTable()))
            }
            e.renderneeded = !0;
            break;
        case "startcmdextension":
            it = t.NextToken(), dt = e.sci.CmdExtensionCallbacks[it], dt && dt.func(it, dt.data, e, t, o);
            break;
        default:
            p = gt.s_escUnknownCmd + l
    }
    return p
}, SocialCalc.SheetUndo = function(e) {
    var t, o = e.changes.TOS(),
        a = o ? o.undo.length - 1 : -1,
        l = "";
    for (t = a; t >= 0; t--) l && (l += "\n"), l += o.undo[t];
    e.changes.Undo(), e.ScheduleSheetCommands(l, !1)
}, SocialCalc.SheetRedo = function(e) {
    var t, o, a = e.changes.Redo();
    if (!a) return void e.ScheduleSheetCommands("", !1);
    t = e.changes.TOS();
    var l = "";
    for (o = 0; t && o < t.command.length; o++) l && (l += "\n"), l += t.command[o];
    e.ScheduleSheetCommands(l, !1)
}, SocialCalc.CreateAuditString = function(e) {
    var t, o, a = "",
        l = e.changes.stack,
        n = e.changes.tos;
    for (t = 0; n >= t; t++)
        for (o = 0; o < l[t].command.length; o++) a += l[t].command[o] + "\n";
    return a
}, SocialCalc.GetStyleNum = function(e, t, o) {
    var a;
    return 0 == o.length ? 0 : (a = e[t + "hash"][o], a || (e[t + "s"].length < 1 && e[t + "s"].push(""), a = e[t + "s"].push(o) - 1, e[t + "hash"][o] = a, e.changedrendervalues = !0), a)
}, SocialCalc.GetStyleString = function(e, t, o) {
    return o ? e[t + "s"][o] : null
}, SocialCalc.OffsetFormulaCoords = function(e, t, o) {
    var a, l, n, r, i, c, s = "",
        d = SocialCalc.Formula;
    if (!d) return "Need SocialCalc.Formula";
    var u = d.TokenType,
        p = u.op,
        f = u.string,
        h = u.coord,
        m = d.TokenOpExpansion;
    for (a = d.ParseFormulaIntoTokens(e), r = 0; r < a.length; r++) n = a[r].type, l = a[r].text, n == h ? (c = "", i = SocialCalc.coordToCr(l), "$" != l.charAt(0) ? i.col += t : c += "$", c += SocialCalc.rcColname(i.col), -1 == l.indexOf("$", 1) ? i.row += o : c += "$", c += i.row, (i.row < 1 || i.col < 1) && (c = "#REF!"), s += c) : s += n == f ? l.indexOf('"') >= 0 ? '"' + l.replace(/"/, '""') + '"' : '"' + l + '"' : n == p ? m[l] || l : l;
    return s
}, SocialCalc.AdjustFormulaCoords = function(e, t, o, a, l) {
    var n, r, i, c, s = "",
        d = !1,
        u = SocialCalc.Formula;
    if (!u) return "Need SocialCalc.Formula";
    var p = u.TokenType,
        f = p.op,
        h = p.string,
        m = p.coord,
        C = u.TokenOpExpansion;
    for (parseinfo = SocialCalc.Formula.ParseFormulaIntoTokens(e), i = 0; i < parseinfo.length; i++) n = parseinfo[i].type, r = parseinfo[i].text, n == f && ("!" == r ? d = !0 : ":" != r && (d = !1), r = C[r] || r), n == m ? (cr = SocialCalc.coordToCr(r), (0 > o && cr.col >= t && cr.col < t - o || 0 > l && cr.row >= a && cr.row < a - l) && (d || (cr.col = 0, cr.row = 0)), d || (cr.col >= t && (cr.col += o), cr.row >= a && (cr.row += l)), c = "$" == r.charAt(0) ? "$" + SocialCalc.rcColname(cr.col) : SocialCalc.rcColname(cr.col), c += -1 != r.indexOf("$", 1) ? "$" + cr.row : cr.row, (cr.row < 1 || cr.col < 1) && (c = "#REF!"), r = c) : n == h && (r = r.indexOf('"') >= 0 ? '"' + r.replace(/"/, '""') + '"' : '"' + r + '"'), s += r;
    return s
}, SocialCalc.ReplaceFormulaCoords = function(e, t) {
    var o, a, l, n, r, i = "",
        c = !1,
        s = SocialCalc.Formula;
    if (!s) return "Need SocialCalc.Formula";
    var d = s.TokenType,
        u = d.op,
        p = d.string,
        f = d.coord,
        h = s.TokenOpExpansion;
    for (parseinfo = SocialCalc.Formula.ParseFormulaIntoTokens(e), l = 0; l < parseinfo.length; l++) o = parseinfo[l].type, a = parseinfo[l].text, o == u && ("!" == a ? c = !0 : ":" != a && (c = !1), a = h[a] || a), o == f ? (cr = SocialCalc.coordToCr(a), r = SocialCalc.crToCoord(cr.col, cr.row), t[r] && !c && (cr = SocialCalc.coordToCr(t[r]), n = "$" == a.charAt(0) ? "$" + SocialCalc.rcColname(cr.col) : SocialCalc.rcColname(cr.col), n += -1 != a.indexOf("$", 1) ? "$" + cr.row : cr.row, a = n)) : o == p && (a = a.indexOf('"') >= 0 ? '"' + a.replace(/"/, '""') + '"' : '"' + a + '"'), i += a;
    return i
}, SocialCalc.RecalcInfo = {
    sheet: null,
    currentState: 0,
    state: {
        idle: 0,
        start_calc: 1,
        order: 2,
        calc: 3,
        start_wait: 4,
        done_wait: 5
    },
    recalctimer: null,
    maxtimeslice: 100,
    timeslicedelay: 1,
    starttime: 0,
    queue: [],
    LoadSheet: function() {
        return !1
    }
}, SocialCalc.RecalcData = function() {
    this.inrecalc = !0, this.celllist = [], this.celllistitem = 0, this.calclist = null, this.calclistlength = 0, this.firstcalc = null, this.lastcalc = null, this.nextcalc = null, this.count = 0, this.checkinfo = {}
}, SocialCalc.RecalcCheckInfo = function() {
    this.oldcoord = null, this.parsepos = 0, this.inrange = !1, this.inrangestart = !1, this.cr1 = null, this.cr2 = null, this.c1 = null, this.c2 = null, this.r1 = null, this.r2 = null, this.c = null, this.r = null
}, SocialCalc.RecalcSheet = function(e) {
    var t = SocialCalc.RecalcInfo;
    return t.currentState != t.state.idle ? void t.queue.push(e) : (delete e.attribs.circularreferencecell, SocialCalc.Formula.FreshnessInfoReset(), SocialCalc.RecalcClearTimeout(), t.sheet = e, t.currentState = t.state.start_calc, t.starttime = new Date, e.statuscallback && e.statuscallback(t, "calcstart", null, e.statuscallbackparams), void SocialCalc.RecalcSetTimeout())
}, SocialCalc.RecalcSetTimeout = function() {
    var e = SocialCalc.RecalcInfo;
    e.recalctimer = window.setTimeout(SocialCalc.RecalcTimerRoutine, e.timeslicedelay)
}, SocialCalc.RecalcClearTimeout = function() {
    var e = SocialCalc.RecalcInfo;
    e.recalctimer && (window.clearTimeout(e.recalctimer), e.recalctimer = null)
}, SocialCalc.RecalcLoadedSheet = function(e, t, o, a) {
    var l, n = SocialCalc.RecalcInfo,
        r = SocialCalc.Formula;
    l = SocialCalc.Formula.AddSheetToCache(e || r.SheetCache.waitingForLoading, t, a), o && l && "off" != l.attribs.recalc && (l.previousrecalcsheet = n.sheet, n.sheet = l, n.currentState = n.state.start_calc), r.SheetCache.waitingForLoading = null, SocialCalc.RecalcSetTimeout()
}, SocialCalc.RecalcTimerRoutine = function() {
    var e, t, o, a, l, n = new Date,
        r = 0,
        i = SocialCalc.Formula;
    if (!i) return "Need SocialCalc.Formula";
    var c = SocialCalc.RecalcInfo,
        s = c.sheet;
    if (s) {
        var d = s.recalcdata || (s.recalcdata = {}),
            u = function(e, t) {
                s.statuscallback && s.statuscallback(d, e, t, s.statuscallbackparams)
            };
        if (SocialCalc.RecalcClearTimeout(), c.currentState == c.state.start_calc) {
            d = new SocialCalc.RecalcData, s.recalcdata = d;
            for (o in s.cells) o && d.celllist.push(o);
            d.calclist = {}, c.currentState = c.state.order
        }
        if (c.currentState == c.state.order) {
            for (; d.celllistitem < d.celllist.length;)
                if (o = d.celllist[d.celllistitem++], a = SocialCalc.RecalcCheckCell(s, o), new Date - n >= c.maxtimeslice) return u("calcorder", {
                    coord: o,
                    total: d.celllist.length,
                    count: d.celllistitem
                }), void SocialCalc.RecalcSetTimeout();
            return u("calccheckdone", d.calclistlength), d.nextcalc = d.firstcalc, c.currentState = c.state.calc, void SocialCalc.RecalcSetTimeout()
        }
        if (c.currentState == c.state.start_wait) {
            if (c.currentState = c.state.done_wait, c.LoadSheet && (l = c.LoadSheet(i.SheetCache.waitingForLoading))) return;
            return void SocialCalc.RecalcLoadedSheet(null, "", !1)
        }
        if (c.currentState == c.state.done_wait) return c.currentState = c.state.calc, void SocialCalc.RecalcSetTimeout();
        for (c.currentState != c.state.calc && alert("Recalc state error: " + c.currentState + ". Error in SocialCalc code."), o = s.recalcdata.nextcalc; o;) {
            if (t = s.cells[o], e = i.evaluate_parsed_formula(t.parseinfo, s, !1), i.SheetCache.waitingForLoading) return d.nextcalc = o, d.count += r, u("calcloading", {
                sheetname: i.SheetCache.waitingForLoading
            }), c.currentState = c.state.start_wait, void SocialCalc.RecalcSetTimeout();
            if (i.RemoteFunctionInfo.waitingForServer) return d.nextcalc = o, d.count += r, u("calcserverfunc", {
                funcname: i.RemoteFunctionInfo.waitingForServer,
                coord: o,
                total: d.calclistlength,
                count: d.count
            }), void(c.currentState = c.state.done_wait);
            if ((t.datavalue != e.value || t.valuetype != e.type) && (t.datavalue = e.value, t.valuetype = e.type, delete t.displaystring, s.recalcchangedavalue = !0), e.error && (t.errors = e.error), r++, o = s.recalcdata.calclist[o], new Date - n >= c.maxtimeslice) return d.nextcalc = o, d.count += r, u("calcstep", {
                coord: o,
                total: d.calclistlength,
                count: d.count
            }), void SocialCalc.RecalcSetTimeout()
        }
        if (d.inrecalc = !1, delete s.recalcdata, delete s.attribs.needsrecalc, c.sheet = s.previousrecalcsheet || null, c.sheet) return c.currentState = c.state.calc, void SocialCalc.RecalcSetTimeout();
        i.FreshnessInfo.recalc_completed = !0, c.currentState = c.state.idle, u("calcfinished", new Date - c.starttime), c.queue.length > 0 && (s = c.queue.shift(), s.RecalcSheet())
    }
}, SocialCalc.RecalcCheckCell = function(e, t) {
    var o, a, l, n, r, i, c, s, d, u, p = SocialCalc.Formula;
    if (!p) return "Need SocialCalc.Formula";
    var f = p.TokenType,
        h = f.op,
        m = f.name,
        C = f.coord,
        g = e.recalcdata,
        S = g.checkinfo,
        v = !1,
        b = null,
        y = t;
    e: for (; y;)
        if (d = e.cells[y], u = S[y], !d || "f" != d.datatype || u && "object" != typeof u) y = b, S[y] && (b = S[y].oldcoord);
        else {
            for (u || (u = new SocialCalc.RecalcCheckInfo, S[y] = u), d.errors && delete d.errors, d.parseinfo || (d.parseinfo = p.ParseFormulaIntoTokens(d.formula)), o = d.parseinfo, n = u.parsepos; n < o.length; n++) {
                if (u.inrange) {
                    if (u.inrangestart && (u.cr1.col > u.cr2.col ? (u.c1 = u.cr2.col, u.c2 = u.cr1.col) : (u.c1 = u.cr1.col, u.c2 = u.cr2.col), u.c = u.c1 - 1, u.cr1.row > u.cr2.row ? (u.r1 = u.cr2.row, u.r2 = u.cr1.row) : (u.r1 = u.cr1.row, u.r2 = u.cr2.row), u.r = u.r1, u.inrangestart = !1), u.c += 1, u.c > u.c2) {
                        if (u.r += 1, u.r > u.r2) {
                            u.inrange = !1;
                            continue
                        }
                        u.c = u.c1
                    }
                    if (r = SocialCalc.crToCoord(u.c, u.r), u.parsepos = n, u.oldcoord = b, b = y, y = r, S[y] && "object" == typeof S[y]) return d.errors = SocialCalc.Constants.s_caccCircRef + t, S[t] = !0, g.firstcalc ? g.calclist[g.lastcalc] = t : g.firstcalc = t, g.lastcalc = t, g.calclistlength++, e.attribs.circularreferencecell = y + "|" + b, d.errors;
                    continue e
                }
                if (l = o[n].type, a = o[n].text, l == h && ("!" == a ? v = !0 : ":" != a && (v = !1)), l == m)
                    if (i = p.LookupName(e, a), "range" == i.type) {
                        if (c = i.value.indexOf("|"), -1 != c) {
                            u.cr1 = SocialCalc.coordToCr(i.value.substring(0, c)), s = i.value.indexOf("|", c + 1), u.cr2 = SocialCalc.coordToCr(i.value.substring(c + 1, s)), u.inrange = !0, u.inrangestart = !0, n -= 1;
                            continue
                        }
                    } else "coord" == i.type && (l = C, a = i.value);
                if (l == C) {
                    if (n >= 2 && o[n - 1].type == h && ":" == o[n - 1].text && o[n - 2].type == C && !v) {
                        u.cr1 = SocialCalc.coordToCr(o[n - 2].text), u.cr2 = SocialCalc.coordToCr(a), u.inrange = !0, u.inrangestart = !0, n -= 1;
                        continue
                    }
                    if (!v) {
                        if (-1 != a.indexOf("$") && (a = a.replace(/\$/g, "")), u.parsepos = n + 1, u.oldcoord = b, b = y, y = a, S[y] && "object" == typeof S[y]) return d.errors = SocialCalc.Constants.s_caccCircRef + t, S[t] = !0, g.firstcalc ? g.calclist[g.lastcalc] = t : g.firstcalc = t, g.lastcalc = t, g.calclistlength++, e.attribs.circularreferencecell = y + "|" + b, d.errors;
                        continue e
                    }
                }
            }
            v = !1, S[y] = !0, g.firstcalc ? g.calclist[g.lastcalc] = y : g.firstcalc = y, g.lastcalc = y, g.calclistlength++, y = b, b = S[y] ? S[y].oldcoord : null
        }
    return ""
}, SocialCalc.Parse = function(e) {
    this.str = e, this.pos = 0, this.delimiter = " ", this.lineEnd = e.indexOf("\n"), this.lineEnd < 0 && (this.lineEnd = e.length)
}, SocialCalc.Parse.prototype.NextToken = function() {
    if (this.pos < 0) return "";
    var e = this.str.indexOf(this.delimiter, this.pos),
        t = this.pos;
    return e > this.lineEnd && (e = this.lineEnd), e >= 0 ? (this.pos = e + 1, this.str.substring(t, e)) : (this.pos = this.lineEnd, this.str.substring(t, this.lineEnd))
}, SocialCalc.Parse.prototype.RestOfString = function() {
    var e = this.pos;
    return this.pos < 0 || this.pos >= this.lineEnd ? "" : (this.pos = this.lineEnd, this.str.substring(e, this.lineEnd))
}, SocialCalc.Parse.prototype.RestOfStringNoMove = function() {
    return this.pos < 0 || this.pos >= this.lineEnd ? "" : this.str.substring(this.pos, this.lineEnd)
}, SocialCalc.Parse.prototype.NextLine = function() {
    this.pos = this.lineEnd + 1, this.lineEnd = this.str.indexOf("\n", this.pos), this.lineEnd < 0 && (this.lineEnd = this.str.length)
}, SocialCalc.Parse.prototype.EOF = function() {
    return this.pos < 0 || this.pos >= this.str.length ? !0 : !1
}, SocialCalc.UndoStack = function() {
    this.stack = [], this.tos = -1, this.maxRedo = 0, this.maxUndo = 50
}, SocialCalc.UndoStack.prototype.PushChange = function(e) {
    for (; this.stack.length > 0 && this.stack.length - 1 > this.tos;) this.stack.pop();
    this.stack.push({
        command: [],
        type: e,
        undo: []
    }), this.maxRedo && this.stack.length > this.maxRedo && this.stack.shift(), this.maxUndo && this.stack.length > this.maxUndo && (this.stack[this.stack.length - this.maxUndo - 1].undo = []), this.tos = this.stack.length - 1
}, SocialCalc.UndoStack.prototype.AddDo = function() {
    if (this.stack[this.stack.length - 1]) {
        for (var e = [], t = 0; t < arguments.length; t++) null != arguments[t] && e.push(arguments[t]);
        var o = e.join(" ");
        this.stack[this.stack.length - 1].command.push(o)
    }
}, SocialCalc.UndoStack.prototype.AddUndo = function() {
    if (this.stack[this.stack.length - 1]) {
        for (var e = [], t = 0; t < arguments.length; t++) null != arguments[t] && e.push(arguments[t]);
        var o = e.join(" ");
        this.stack[this.stack.length - 1].undo.push(o)
    }
}, SocialCalc.UndoStack.prototype.TOS = function() {
    return this.tos >= 0 ? this.stack[this.tos] : null
}, SocialCalc.UndoStack.prototype.Undo = function() {
    return this.tos >= 0 && (!this.maxUndo || this.tos > this.stack.length - this.maxUndo - 1) ? (this.tos -= 1, !0) : !1
}, SocialCalc.UndoStack.prototype.Redo = function() {
    return this.tos < this.stack.length - 1 ? (this.tos += 1, !0) : !1
}, SocialCalc.Clipboard = {
    clipboard: ""
}, SocialCalc.RenderContext = function(e) {
    var t = e.attribs,
        o = SocialCalc.Constants;
    if (this.sheetobj = e, this.hideRowsCols = !1, this.showGrid = !1, this.showRCHeaders = !1, this.rownamewidth = o.defaultRowNameWidth, this.pixelsPerRow = o.defaultAssumedRowHeight, this.cellskip = {}, this.coordToCR = {}, this.colwidth = [], this.rowheight = [], this.totalwidth = 0, this.totalheight = 0, this.rowpanes = [], this.colpanes = [], this.colunhideleft = [], this.colunhideright = [], this.rowunhidetop = [], this.rowunhidebottom = [], this.maxcol = 0, this.maxrow = 0, this.highlights = {}, this.cursorsuffix = "", this.highlightTypes = {
            cursor: {
                style: o.defaultHighlightTypeCursorStyle,
                className: o.defaultHighlightTypeCursorClass
            },
            range: {
                style: o.defaultHighlightTypeRangeStyle,
                className: o.defaultHighlightTypeRangeClass
            },
            cursorinsertup: {
                style: "color:#FFF;backgroundColor:#A6A6A6;backgroundRepeat:repeat-x;backgroundPosition:top left;backgroundImage:url(" + o.defaultImagePrefix + "cursorinsertup.gif);",
                className: o.defaultHighlightTypeCursorClass
            },
            cursorinsertleft: {
                style: "color:#FFF;backgroundColor:#A6A6A6;backgroundRepeat:repeat-y;backgroundPosition:top left;backgroundImage:url(" + o.defaultImagePrefix + "cursorinsertleft.gif);",
                className: o.defaultHighlightTypeCursorClass
            },
            range2: {
                style: "color:#000;backgroundColor:#FFF;backgroundImage:url(" + o.defaultImagePrefix + "range2.gif);",
                className: ""
            }
        }, this.cellIDprefix = o.defaultCellIDPrefix, this.defaultlinkstyle = null, this.defaultHTMLlinkstyle = {
            type: "html"
        }, this.defaultfontstyle = o.defaultCellFontStyle, this.defaultfontsize = o.defaultCellFontSize, this.defaultfontfamily = o.defaultCellFontFamily, this.defaultlayout = o.defaultCellLayout, this.defaultpanedividerwidth = o.defaultPaneDividerWidth, this.defaultpanedividerheight = o.defaultPaneDividerHeight, this.gridCSS = o.defaultGridCSS, this.commentClassName = o.defaultCommentClass, this.commentCSS = o.defaultCommentStyle, this.commentNoGridClassName = o.defaultCommentNoGridClass, this.commentNoGridCSS = o.defaultCommentNoGridStyle, this.readonlyClassName = o.defaultReadonlyClass, this.readonlyCSS = o.defaultReadonlyStyle, this.readonlyNoGridClassName = o.defaultReadonlyNoGridClass, this.readonlyNoGridCSS = o.defaultReadonlyNoGridStyle, this.readonlyComment = o.defaultReadonlyComment, this.classnames = {
            colname: o.defaultColnameClass,
            rowname: o.defaultRownameClass,
            selectedcolname: o.defaultSelectedColnameClass,
            selectedrowname: o.defaultSelectedRownameClass,
            upperleft: o.defaultUpperLeftClass,
            skippedcell: o.defaultSkippedCellClass,
            panedivider: o.defaultPaneDividerClass,
            unhideleft: o.defaultUnhideLeftClass,
            unhideright: o.defaultUnhideRightClass,
            unhidetop: o.defaultUnhideTopClass,
            unhidebottom: o.defaultUnhideBottomClass,
            colresizebar: o.defaultColResizeBarClass,
            rowresizebar: o.defaultRowResizeBarClass
        }, this.explicitStyles = {
            colname: o.defaultColnameStyle,
            rowname: o.defaultRownameStyle,
            selectedcolname: o.defaultSelectedColnameStyle,
            selectedrowname: o.defaultSelectedRownameStyle,
            upperleft: o.defaultUpperLeftStyle,
            skippedcell: o.defaultSkippedCellStyle,
            panedivider: o.defaultPaneDividerStyle,
            unhideleft: o.defaultUnhideLeftStyle,
            unhideright: o.defaultUnhideRightStyle,
            unhidetop: o.defaultUnhideTopStyle,
            unhidebottom: o.defaultUnhideBottomStyle
        }, this.cellskip = null, this.needcellskip = !0, this.fonts = [], this.layouts = [], this.needprecompute = !0, !t) throw o.s_rcMissingSheet;
    this.rowpanes[0] = {
        first: 1,
        last: t.lastrow
    }, this.colpanes[0] = {
        first: 1,
        last: t.lastcol
    }, this.usermaxcol = t.usermaxcol, this.usermaxrow = t.usermaxrow
}, SocialCalc.RenderContext.prototype.PrecomputeSheetFontsAndLayouts = function() {
    SocialCalc.PrecomputeSheetFontsAndLayouts(this)
}, SocialCalc.RenderContext.prototype.CalculateCellSkipData = function() {
    SocialCalc.CalculateCellSkipData(this)
}, SocialCalc.RenderContext.prototype.CalculateColWidthData = function() {
    SocialCalc.CalculateColWidthData(this)
}, SocialCalc.RenderContext.prototype.CalculateRowHeightData = function() {
    SocialCalc.CalculateRowHeightData(this)
}, SocialCalc.RenderContext.prototype.SetRowPaneFirstLast = function(e, t, o) {
    this.rowpanes[e] = {
        first: t,
        last: o
    }
}, SocialCalc.RenderContext.prototype.SetColPaneFirstLast = function(e, t, o) {
    this.colpanes[e] = {
        first: t,
        last: o
    }
}, SocialCalc.RenderContext.prototype.CoordInPane = function(e, t, o) {
    return SocialCalc.CoordInPane(this, e, t, o)
}, SocialCalc.RenderContext.prototype.CellInPane = function(e, t, o, a) {
    return SocialCalc.CellInPane(this, e, t, o, a)
}, SocialCalc.RenderContext.prototype.InitializeTable = function(e) {
    SocialCalc.InitializeTable(this, e)
}, SocialCalc.RenderContext.prototype.RenderSheet = function(e, t) {
    return SocialCalc.RenderSheet(this, e, t)
}, SocialCalc.RenderContext.prototype.RenderColGroup = function() {
    return SocialCalc.RenderColGroup(this)
}, SocialCalc.RenderContext.prototype.RenderColHeaders = function() {
    return SocialCalc.RenderColHeaders(this)
}, SocialCalc.RenderContext.prototype.RenderFiltersRow = function() {
    return SocialCalc.RenderFiltersRow(this)
}, SocialCalc.RenderContext.prototype.RenderSizingRow = function() {
    return SocialCalc.RenderSizingRow(this)
}, SocialCalc.RenderContext.prototype.RenderRow = function(e, t, o) {
    return SocialCalc.RenderRow(this, e, t, o)
}, SocialCalc.RenderContext.prototype.RenderSpacingRow = function() {
    return SocialCalc.RenderSpacingRow(this)
}, SocialCalc.RenderContext.prototype.RenderCell = function(e, t, o, a, l, n) {
    return SocialCalc.RenderCell(this, e, t, o, a, l, n)
}, SocialCalc.PrecomputeSheetFontsAndLayouts = function(e) {
    var t, o, a, l, n, r, i, c, s = e.sheetobj,
        d = s.attribs;
    for (d.defaultfont && (t = s.fonts[d.defaultfont], t = t.replace(/^\*/, SocialCalc.Constants.defaultCellFontStyle), t = t.replace(/(.+)\*(.+)/, "$1" + SocialCalc.Constants.defaultCellFontSize + "$2"), t = t.replace(/\*$/, SocialCalc.Constants.defaultCellFontFamily), o = t.match(/^(\S+? \S+?) (\S+?) (\S.*)$/), e.defaultfontstyle = o[1], e.defaultfontsize = o[2], e.defaultfontfamily = o[3]), r = 1; r < s.fonts.length; r++) i = s.fonts[r], i = i.replace(/^\*/, e.defaultfontstyle), i = i.replace(/(.+)\*(.+)/, "$1" + e.defaultfontsize + "$2"), i = i.replace(/\*$/, e.defaultfontfamily), o = i.match(/^(\S+?) (\S+?) (\S+?) (\S.*)$/), e.fonts[r] = {
        style: o[1],
        weight: o[2],
        size: o[3],
        family: o[4]
    };
    for (a = /^padding:\s*(\S+)\s+(\S+)\s+(\S+)\s+(\S+);vertical-align:\s*(\S+);/, l = SocialCalc.Constants.defaultCellLayout.match(a), n = d.defaultlayout ? s.layouts[d.defaultlayout].match(a) : ["", "*", "*", "*", "*", "*"], r = 1; r < s.layouts.length; r++) {
        for (i = s.layouts[r], o = i.match(a), c = 1; 5 >= c; c++) "*" == o[c] && (o[c] = "*" != n[c] ? n[c] : l[c]);
        e.layouts[r] = "padding:" + o[1] + " " + o[2] + " " + o[3] + " " + o[4] + ";vertical-align:" + o[5] + ";"
    }
    e.needprecompute = !1
}, SocialCalc.CalculateCellSkipData = function(e) {
    {
        var t, o, a, l, n, r, i, c, s, d = e.sheetobj;
        d.rowattribs, d.colattribs
    }
    for (e.maxrow = 0, e.maxcol = 0, e.cellskip = {}, t = 1; t <= d.attribs.lastrow; t++)
        for (o = 1; o <= d.attribs.lastcol; o++)
            if (a = SocialCalc.crToCoord(o, t), l = d.cells[a], void 0 !== l && !e.cellskip[a] && (n = l.colspan || 1, r = l.rowspan || 1, n > 1 || r > 1))
                for (i = t; t + r > i; i++)
                    for (c = o; o + n > c; c++) s = SocialCalc.crToCoord(c, i), s == a ? e.coordToCR[a] = {
                        row: t,
                        col: o
                    } : e.cellskip[s] = a, i > e.maxrow && (maxrow = i), c > e.maxcol && (maxcol = c);
    e.needcellskip = !1
}, SocialCalc.CalculateColWidthData = function(e) {
    {
        var t, o, a, l, n = e.sheetobj;
        n.colattribs
    }
    for (l = e.showRCHeaders ? e.rownamewidth - 0 : 0, colpane = 0; colpane < e.colpanes.length; colpane++)
        for (t = e.colpanes[colpane].first; t <= e.colpanes[colpane].last; t++) o = SocialCalc.rcColname(t), "yes" == n.colattribs.hide[o] ? e.colwidth[t] = 0 : (a = n.colattribs.width[o] || n.attribs.defaultcolwidth || SocialCalc.Constants.defaultColWidth, ("blank" == a || "auto" == a) && (a = ""), e.colwidth[t] = a + "", l += a && a - 0 > 0 ? a - 0 : 10);
    e.totalwidth = l
}, SocialCalc.CalculateRowHeightData = function(e) {
    var t, o, a, l = e.sheetobj;
    for (a = e.showRCHeaders ? e.pixelsPerRow : 0, rowpane = 0; rowpane < e.rowpanes.length; rowpane++)
        for (t = e.rowpanes[rowpane].first; t <= e.rowpanes[rowpane].last; t++) "yes" === l.rowattribs.hide[t] ? e.rowheight[t] = 0 : (o = l.rowattribs.height[t] || l.attribs.defaultrowheight || SocialCalc.Constants.defaultAssumedRowHeight, ("blank" === o || "auto" === o) && (o = ""), e.rowheight[t] = o + "", a += o && o - 0 > 0 ? o - 0 : 10);
    e.totalheight = a
}, SocialCalc.InitializeTable = function(e, t) {
    t.style.borderCollapse = "collapse", t.cellSpacing = "0", t.cellPadding = "0", t.style.width = e.totalwidth + "px"
}, SocialCalc.RenderSheet = function(e, t, o) {
    var a, l, n, r, i, c;
    for (sheetObj = e.sheetobj, searchedCellsLists = sheetObj.search_cells, e.sheetobj.changedrendervalues && (e.needcellskip = !0, e.needprecompute = !0, e.sheetobj.changedrendervalues = !1), e.needcellskip && e.CalculateCellSkipData(), e.needprecompute && e.PrecomputeSheetFontsAndLayouts(), e.CalculateColWidthData(), e.CalculateRowHeightData(), n = document.createElement("table"), e.InitializeTable(n), filteredRowObj = e.RenderFiltersRow(), n.appendChild(filteredRowObj), r = e.RenderColGroup(), n.appendChild(r), i = document.createElement("tbody"), i.appendChild(e.RenderSizingRow()), e.showRCHeaders && (a = e.RenderColHeaders(), a && i.appendChild(a)), l = 0; l < e.rowpanes.length; l++) {
        row_array = [];
        for (rownumer in searchedCellsLists) rownumerVal = parseInt(searchedCellsLists[rownumer].match(/\d+/)[0], 10), row_array.push(rownumerVal);
        searchfil = !1, sheetObj.filtertext && sheetObj.filtertext.length > 2 && (searchfil = !0);
        var s, d;
        if (d = e.rowpanes[l].first, s = e.rowpanes[l].last, searchfil) {
            lastrownumber = row_array[row_array.length - 1], row_array = row_array.slice(d - 1, s - 1);
            for (rownumer in row_array) a = e.RenderRow(row_array[rownumer], l, o), lastrownumber == row_array[rownumer] && (a.className = "lastfilterrow"), i.appendChild(a);
            l < e.rowpanes.length - 1 && (a = e.RenderSpacingRow(), i.appendChild(a))
        } else {
            for (rownum = e.rowpanes[l].first; rownum <= e.rowpanes[l].last; rownum++) a = e.RenderRow(rownum, l, o), i.appendChild(a);
            l < e.rowpanes.length - 1 && (a = e.RenderSpacingRow(), i.appendChild(a))
        }
    }
    return n.appendChild(i), t && (c = t.parentNode, c && c.replaceChild(n, t)), n
}, SocialCalc.RenderRow = function(e, t, o, a) {
    var l, n, r, i, c = e.sheetobj,
        s = document.createElement("tr");
    if (e.showRCHeaders) {
        if (n = document.createElement("td"), e.classnames && (n.className = e.classnames.rowname), e.explicitStyles && (n.style.cssText = e.explicitStyles.rowname), n.width = e.rownamewidth, n.height = e.rowheight[t], n.style.verticalAlign = "top", n.innerHTML = t + "", t < e.rowpanes[e.rowpanes.length - 1].last && "yes" == c.rowattribs.hide[t + 1]) {
            var d = document.createElement("div");
            d.style.position = "relative";
            var u = document.createElement("div");
            e.classnames && (u.className = e.classnames.unhidetop), e.explicitStyles && (u.style.cssText = e.explicitStyles.unhidetop);
            var p = e.rowheight[t] - 0 - SocialCalc.Constants.defaultAssumedRowHeight;
            p = 0 === p ? 4 : p, u.style.bottom = "-" + p + "px", e.rowunhidetop[t] = u, d.appendChild(u), n.appendChild(d)
        }
        if (t > 1 && "yes" == c.rowattribs.hide[t - 1]) {
            var u = document.createElement("div");
            e.classnames && (u.className = e.classnames.unhidebottom), e.explicitStyles && (u.style.cssText = e.explicitStyles.unhidebottom), e.rowunhidebottom[t] = u, n.appendChild(u)
        }
        var f = document.createElement("div");
        f.className = e.classnames.rowresizebar, n.appendChild(f), s.appendChild(n)
    }
    for (r = 0; r < e.colpanes.length; r++) {
        for (l = e.colpanes[r].first; l <= e.colpanes[r].last; l++) n = e.RenderCell(t, l, o, r, null, a), n && s.appendChild(n);
        r < e.colpanes.length - 1 && (n = document.createElement("td"), n.width = e.defaultpanedividerwidth, e.classnames.panedivider && (n.className = e.classnames.panedivider), e.explicitStyles.panedivider && (n.style.cssText = e.explicitStyles.panedivider), i = document.createElement("div"), i.style.width = e.defaultpanedividerwidth + "px", i.style.overflow = "hidden", n.appendChild(i), s.appendChild(n))
    }
    return "yes" == c.rowattribs.hide[t] && (s.style.cssText += ";display:none"), s
}, SocialCalc.RenderSpacingRow = function(e) {
    var t, o, a, l, n = (e.sheetobj, document.createElement("tr"));
    for (e.showRCHeaders && (o = document.createElement("td"), o.width = e.rownamewidth, o.height = e.defaultpanedividerheight, e.classnames.panedivider && (o.className = e.classnames.panedivider), e.explicitStyles.panedivider && (o.style.cssText = e.explicitStyles.panedivider), n.appendChild(o)), a = 0; a < e.colpanes.length; a++) {
        for (t = e.colpanes[a].first; t <= e.colpanes[a].last; t++) o = document.createElement("td"), l = e.colwidth[t], l && (o.width = l), o.height = e.defaultpanedividerheight, e.classnames.panedivider && (o.className = e.classnames.panedivider), e.explicitStyles.panedivider && (o.style.cssText = e.explicitStyles.panedivider), o && n.appendChild(o);
        a < e.colpanes.length - 1 && (o = document.createElement("td"), o.width = e.defaultpanedividerwidth, o.height = e.defaultpanedividerheight, e.classnames.panedivider && (o.className = e.classnames.panedivider), e.explicitStyles.panedivider && (o.style.cssText = e.explicitStyles.panedivider), n.appendChild(o))
    }
    return n
}, SocialCalc.RenderColHeaders = function(e) {
    var t, o, a = e.sheetobj,
        l = document.createElement("tr");
    if (!e.showRCHeaders) return null;
    for (o = document.createElement("td"), e.classnames && (o.className = e.classnames.upperleft), e.explicitStyles && (o.style.cssText = e.explicitStyles.upperleft), o.width = e.rownamewidth, l.appendChild(o), colpane = 0; colpane < e.colpanes.length; colpane++) {
        for (t = e.colpanes[colpane].first; t <= e.colpanes[colpane].last; t++) {
            if (o = document.createElement("td"), e.classnames && (o.className = e.classnames.colname), e.explicitStyles && (o.style.cssText = e.explicitStyles.colname), "yes" == a.colattribs.hide[SocialCalc.rcColname(t)] && (o.style.cssText += ";display:none"), o.innerHTML = SocialCalc.rcColname(t), t < e.colpanes[e.colpanes.length - 1].last && "yes" == a.colattribs.hide[SocialCalc.rcColname(t + 1)]) {
                var n = document.createElement("div");
                e.classnames && (n.className = e.classnames.unhideleft), e.explicitStyles && (n.style.cssText = e.explicitStyles.unhideleft), e.colunhideleft[t] = n, o.appendChild(n)
            }
            t > 1 && "yes" == a.colattribs.hide[SocialCalc.rcColname(t - 1)] && (n = document.createElement("div"), e.classnames && (n.className = e.classnames.unhideright), e.explicitStyles && (n.style.cssText = e.explicitStyles.unhideright), e.colunhideright[t] = n, o.appendChild(n));
            var r = document.createElement("span");
            r.style.height = SocialCalc.Constants.defaultAssumedRowHeight + "px", r.className = e.classnames.colresizebar, o.appendChild(r), l.appendChild(o)
        }
        colpane < e.colpanes.length - 1 && (o = document.createElement("td"), o.width = e.defaultpanedividerwidth, e.classnames.panedivider && (o.className = e.classnames.panedivider), e.explicitStyles.panedivider && (o.style.cssText = e.explicitStyles.panedivider), l.appendChild(o))
    }
    return l
}, SocialCalc.RenderFiltersRow = function(e) {
    var t = e.sheetobj,
        o = document.createElement("thead");
    tableRowObj = document.createElement("tr");
    var a = t.filtertext ? JSON.parse(t.filtertext) : [],
        l = {};
    if ("{}" !== JSON.stringify(a) && (sheet_vals = t.Customcells ? t.Customcells : t.cells, "{}" !== JSON.stringify(sheet_vals))) {
        for (var n in sheet_vals) {
            var r = SocialCalc.coordToCr(n);
            r && (tmp_array = l[r.col] ? l[r.col] : [], sheet_vals[n] && (tmp_array.push(sheet_vals[n].datavalue), l[r.col] = tmp_array))
        }
        var i = {};
        $.each(l, function(e, t) {
            i = t.filter(Boolean), i = $.unique(i), l[e] = i.sort()
        }), t.filtersList = l
    }
    for (i = document.createElement("th"), e.classnames && (i.className = e.classnames.upperleft), e.explicitStyles && (i.style.cssText = e.explicitStyles.upperleft), i.width = e.rownamewidth, tableRowObj.appendChild(i), colpane = 0; colpane < e.colpanes.length; colpane++) {
        for (colnum = e.colpanes[colpane].first; colnum <= e.colpanes[colpane].last; colnum++) {
            if (i = document.createElement("th"), e.classnames && (i.className = e.classnames.colname), e.explicitStyles && (i.style.cssText = e.explicitStyles.colname), colnum < e.colpanes[e.colpanes.length - 1].last && "yes" == t.colattribs.hide[SocialCalc.rcColname(colnum + 1)]) {
                var c = document.createElement("div");
                e.classnames && (c.className = e.classnames.unhideleft), e.explicitStyles && (c.style.cssText = e.explicitStyles.unhideleft), e.colunhideleft[colnum] = c, i.appendChild(c)
            }
            tableRowObj.appendChild(i), filtertxt = document.createElement("input"), filtertxt.style = "width:90%", a[SocialCalc.rcColname(colnum)] && (filtertxt.value = a[SocialCalc.rcColname(colnum)]), filtertxt.id = SocialCalc.rcColname(colnum), filtertxt.className = "searchbarinput", i.appendChild(filtertxt), colnum > 1 && "yes" == t.colattribs.hide[SocialCalc.rcColname(colnum - 1)] && (c = document.createElement("div"), e.classnames && (c.className = e.classnames.unhideright), e.explicitStyles && (c.style.cssText = e.explicitStyles.unhideright), e.colunhideright[colnum] = c, i.appendChild(c)), i.className = "filtersRow", i.id = "searchcol_" + colnum, tableRowObj.appendChild(i)
        }
        colpane < e.colpanes.length - 1 && (i = document.createElement("td"), i.width = e.defaultpanedividerwidth, e.classnames.panedivider && (i.className = e.classnames.panedivider), e.explicitStyles.panedivider && (i.style.cssText = e.explicitStyles.panedivider), tableRowObj.appendChild(i))
    }
    return o.appendChild(tableRowObj), o
}, SocialCalc.RenderColGroup = function(e) {
    var t, o, a, l, n = e.sheetobj,
        r = document.createElement("colgroup");
    for (e.showRCHeaders && (a = document.createElement("col"), a.width = e.rownamewidth, r.appendChild(a)), t = 0; t < e.colpanes.length; t++) {
        for (o = e.colpanes[t].first; o <= e.colpanes[t].last; o++) a = document.createElement("col"), "yes" == n.colattribs.hide[SocialCalc.rcColname(o)] ? a.width = "1" : (l = e.colwidth[o], l && (a.width = l), r.appendChild(a));
        t < e.colpanes.length - 1 && (a = document.createElement("col"), a.width = e.defaultpanedividerwidth, r.appendChild(a))
    }
    return r
}, SocialCalc.RenderSizingRow = function(e) {
    var t, o, a, l, n = e.sheetobj,
        r = document.createElement("tr");
    for (e.showRCHeaders && (a = document.createElement("td"), a.style.width = e.rownamewidth + "px", a.height = "1", r.appendChild(a)), t = 0; t < e.colpanes.length; t++) {
        for (o = e.colpanes[t].first; o <= e.colpanes[t].last; o++) a = document.createElement("td"), "yes" == n.colattribs.hide[SocialCalc.rcColname(o)] ? a.width = "1" : (l = e.colwidth[o], l && (a.width = l)), a.height = "1", r.appendChild(a);
        t < e.colpanes.length - 1 && (a = document.createElement("td"), a.width = e.defaultpanedividerwidth, a.height = "1", r.appendChild(a))
    }
    return r
}, SocialCalc.RenderCell = function(e, t, o, a, l, n, r) {
    var i, c, s, d, u, p, f, h = e.sheetobj,
        m = "";
    t -= 0, o -= 0;
    var C = SocialCalc.crToCoord(o, t);
    if (e.cellskip[C]) return e.CoordInPane(e.cellskip[C], a, l) ? null : (s = n ? SocialCalc.CreatePseudoElement() : document.createElement("td"), e.classnames.skippedcell && (s.className = e.classnames.skippedcell), e.explicitStyles.skippedcell && (s.style.cssText = e.explicitStyles.skippedcell), s.innerHTML = "&nbsp;", s);
    if (s = n ? SocialCalc.CreatePseudoElement() : document.createElement("td"), e.cellIDprefix && (s.id = e.cellIDprefix + C), u = h.cells[C], u || (u = new SocialCalc.Cell(C)), f = h.attribs, scc = SocialCalc.Constants, u.colspan > 1) {
        for (d = 1, i = 1; i < u.colspan; i++) "yes" != h.colattribs.hide[SocialCalc.rcColname(o + i)] && e.CellInPane(t, o + i, a, l) && d++;
        s.colSpan = d
    }
    if (u.rowspan > 1) {
        for (d = 1, i = 1; i < u.rowspan; i++) "yes" != h.rowattribs.hide[t + i + ""] && e.CellInPane(t + i, o, a, l) && d++;
        s.rowSpan = d
    }
    return void 0 == u.displaystring && (u.displaystring = SocialCalc.FormatValueForDisplay(h, u.datavalue, C, r || e.defaultlinkstyle)), s.innerHTML = u.displaystring, i = u.layout || f.defaultlayout, m += i && "undefined" != typeof e.layouts[i] ? e.layouts[i] : scc.defaultCellLayout, i = u.font || f.defaultfont, i && "undefined" != typeof e.fonts[i] ? (c = e.fonts[i], m += "font-style:" + c.style + ";font-weight:" + c.weight + ";font-size:" + c.size + ";font-family:" + c.family + ";") : (scc.defaultCellFontSize && (m += "font-size:" + scc.defaultCellFontSize + ";"), scc.defaultCellFontFamily && (m += "font-family:" + scc.defaultCellFontFamily + ";")), i = u.color || f.defaultcolor, i && "undefined" != typeof h.colors[i] && (m += "color:" + h.colors[i] + ";"), i = u.bgcolor || f.defaultbgcolor, i && "undefined" != typeof h.colors[i] && (m += "background-color:" + h.colors[i] + ";"), i = u.cellformat, i && "undefined" != typeof h.cellformats[i] ? m += "text-align:" + h.cellformats[i] + ";" : (c = u.valuetype.charAt(0), "t" == c ? (i = f.defaulttextformat, i && "undefined" != typeof h.cellformats[i] && (m += "text-align:" + h.cellformats[i] + ";")) : "n" == c ? (i = f.defaultnontextformat, m += i && "undefined" != typeof h.cellformats[i] ? "text-align:" + h.cellformats[i] + ";" : "text-align:right;") : m += "text-align:left;"), (u.colspan > 1 || u.rowspan > 1) && (p = h.cells[SocialCalc.crToCoord(o + (u.colspan || 1) - 1, t + (u.rowspan || 1) - 1)]), i = u.bt, i && "undefined" != typeof h.borderstyles[i] && (m += "border-top:" + h.borderstyles[i] + ";"), i = "undefined" != typeof p ? p.br : u.br, i && "undefined" != typeof h.borderstyles[i] ? m += "border-right:" + h.borderstyles[i] + ";" : e.showGrid && (c = e.CellInPane(t, o + (u.colspan || 1), a, l) ? SocialCalc.crToCoord(o + (u.colspan || 1), t) : "nomatch", e.cellskip[c] && (c = e.cellskip[c]), h.cells[c] && h.cells[c].bl || (m += "border-right:" + e.gridCSS)), i = "undefined" != typeof p ? p.bb : u.bb, i && "undefined" != typeof h.borderstyles[i] ? m += "border-bottom:" + h.borderstyles[i] + ";" : e.showGrid && (c = e.CellInPane(t + (u.rowspan || 1), o, a, l) ? SocialCalc.crToCoord(o, t + (u.rowspan || 1)) : "nomatch", e.cellskip[c] && (c = e.cellskip[c]), h.cells[c] && h.cells[c].bt || (m += "border-bottom:" + e.gridCSS)), i = u.bl, i && "undefined" != typeof h.borderstyles[i] && (m += "border-left:" + h.borderstyles[i] + ";"), u.comment && (s.title = u.comment, e.showGrid ? (e.commentClassName && (s.className = (s.className ? s.className + " " : "") + e.commentClassName), m += e.commentCSS) : (e.commentNoGridClassName && (s.className = (s.className ? s.className + " " : "") + e.commentNoGridClassName), m += e.commentNoGridCSS)), u.readonly && (u.comment || (s.title = e.readonlyComment), e.showGrid ? (e.readonlyClassName && (s.className = (s.className ? s.className + " " : "") + e.readonlyClassName), m += e.readonlyCSS) : (e.readonlyNoGridClassName && (s.className = (s.className ? s.className + " " : "") + e.readonlyNoGridClassName), m += e.readonlyNoGridCSS)), s.style.cssText = m, void 0 !== u.cssc && (n ? s.className = (s.className ? s.className + " " : "") + u.cssc : s.classList.add(u.cssc)), c = e.highlights[C], c && ("cursor" == c && (c += e.cursorsuffix), e.highlightTypes[c].className && (s.className = (s.className ? s.className + " " : "") + e.highlightTypes[c].className), SocialCalc.setStyles(s, e.highlightTypes[c].style)), "yes" == h.colattribs.hide[SocialCalc.rcColname(o)] && (s.style.cssText += ";display:none"), "yes" == h.rowattribs.hide[t] && (s.style.cssText += ";display:none"), s
}, SocialCalc.CoordInPane = function(e, t, o, a) {
    var l = e.coordToCR[t];
    if (!l || !l.row || !l.col) throw "Bad coordToCR for " + t;
    return e.CellInPane(l.row, l.col, o, a)
}, SocialCalc.CellInPane = function(e, t, o, a, l) {
    var n = e.rowpanes[a],
        r = e.colpanes[l];
    if (!n || !r) throw "CellInPane called with unknown panes " + a + "/" + l;
    return t < n.first || t > n.last ? !1 : o < r.first || o > r.last ? !1 : !0
}, SocialCalc.CreatePseudoElement = function() {
    return {
        style: {
            cssText: ""
        },
        innerHTML: "",
        className: ""
    }
}, SocialCalc.rcColname = function(e) {
    e > 702 && (e = 702), 1 > e && (e = 1);
    var t = (e - 1) % 26 + 65,
        o = Math.floor((e - 1) / 26);
    return o ? String.fromCharCode(o + 64) + String.fromCharCode(t) : String.fromCharCode(t)
}, SocialCalc.letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], SocialCalc.crToCoord = function(e, t) {
    var o;
    1 > e && (e = 1), e > 702 && (e = 702), 1 > t && (t = 1);
    var a = (e - 1) % 26,
        l = Math.floor((e - 1) / 26);
    return o = l ? SocialCalc.letters[l - 1] + SocialCalc.letters[a] + t : SocialCalc.letters[a] + t
}, SocialCalc.coordToCol = {}, SocialCalc.coordToRow = {}, SocialCalc.coordToCr = function(e) {
    var t, o, a, l = SocialCalc.coordToRow[e];
    if (l) return {
        row: l,
        col: SocialCalc.coordToCol[e]
    };
    for (t = 0, l = 0, o = 0; o < e.length; o++) a = e.charCodeAt(o), 36 == a || (57 >= a ? l = 10 * l + a - 48 : a >= 97 ? t = 26 * t + a - 96 : a >= 65 && (t = 26 * t + a - 64));
    return SocialCalc.coordToCol[e] = t, SocialCalc.coordToRow[e] = l, {
        row: l,
        col: t
    }
}, SocialCalc.ParseRange = function(e) {
    var t, o, a, l;
    return e || (e = "A1:A1"), e = e.toUpperCase(), t = e.indexOf(":"), t >= 0 ? (o = e.substring(0, t), a = SocialCalc.coordToCr(o), a.coord = o, o = e.substring(t + 1), l = SocialCalc.coordToCr(o), l.coord = o) : (a = SocialCalc.coordToCr(e), a.coord = e, l = SocialCalc.coordToCr(e), l.coord = e), {
        cr1: a,
        cr2: l
    }
}, SocialCalc.decodeFromSave = function(e) {
    if ("string" != typeof e) return e;
    if (-1 == e.indexOf("\\")) return e;
    var t = e.replace(/\\c/g, ":");
    return t = t.replace(/\\n/g, "\n"), t.replace(/\\b/g, "\\")
}, SocialCalc.decodeFromAjax = function(e) {
    if ("string" != typeof e) return e;
    if (-1 == e.indexOf("\\")) return e;
    var t = e.replace(/\\c/g, ":");
    return t = t.replace(/\\n/g, "\n"), t = t.replace(/\\e/g, "]]"), t.replace(/\\b/g, "\\")
}, SocialCalc.encodeForSave = function(e) {
    return "string" != typeof e ? e : (-1 != e.indexOf("\\") && (e = e.replace(/\\/g, "\\b")), -1 != e.indexOf(":") && (e = e.replace(/:/g, "\\c")), -1 != e.indexOf("\n") && (e = e.replace(/\n/g, "\\n")), e)
}, SocialCalc.special_chars = function(e) {
    return /[&<>"]/.test(e) && (e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/"/g, "&quot;")), e
}, SocialCalc.Lookup = function(e, t) {
    for (i = 0; i < t.length; i++)
        if (t[i] > e) return i > 0 ? i - 1 : null;
    return t.length - 1
}, SocialCalc.setStyles = function(e, t) {
    var o, a, l, n, r;
    if (t)
        for (o = t.split(";"), a = 0; a < o.length; a++) l = o[a].indexOf(":"), -1 != l && (n = o[a].substring(0, l), r = o[a].substring(l + 1), n && r && (e.style[n] = r))
}, SocialCalc.GetViewportInfo = function() {
    var e = {};
    return window.innerWidth ? (e.width = window.innerWidth, e.height = window.innerHeight, e.horizontalScroll = window.pageXOffset, e.verticalScroll = window.pageYOffset) : document.documentElement && document.documentElement.clientWidth ? (e.width = document.documentElement.clientWidth, e.height = document.documentElement.clientHeight, e.horizontalScroll = document.documentElement.scrollLeft, e.verticalScroll = document.documentElement.scrollTop) : document.body.clientWidth && (e.width = document.body.clientWidth, e.height = document.body.clientHeight, e.horizontalScroll = document.body.scrollLeft, e.verticalScroll = document.body.scrollTop), e
}, SocialCalc.GetElementPosition = function(e) {
    for (var t = 0, o = 0; e && "relative" != SocialCalc.GetComputedStyle(e, "position");) t += e.offsetLeft, o += e.offsetTop, e = e.offsetParent;
    return {
        left: t,
        top: o
    }
}, SocialCalc.GetElementPositionWithScroll = function(e) {
    var t = e.getBoundingClientRect();
    return {
        left: t.left,
        right: t.right,
        top: t.top,
        bottom: t.bottom,
        width: t.width ? t.width : t.right - t.left,
        height: t.height ? t.height : t.bottom - t.top
    }
}, SocialCalc.GetElementFixedParent = function(e) {
    for (; e && "HTML" != e.tagName;) {
        if ("fixed" == SocialCalc.GetComputedStyle(e, "position")) return e;
        e = e.parentNode
    }
    return !1
}, SocialCalc.GetComputedStyle = function(e, t) {
    var o;
    return o = "undefined" != typeof e.currentStyle ? e.currentStyle : document.defaultView.getComputedStyle(e, null), o[t]
}, SocialCalc.LookupElement = function(e, t) {
    var o;
    for (o = 0; o < t.length; o++)
        if (t[o].element == e) return t[o];
    return null
}, SocialCalc.AssignID = function(e, t, o) {
    e.idPrefix && (t.id = e.idPrefix + o)
}, SocialCalc.GetCellContents = function(e, t) {
    var o = "",
        a = e.cells[t];
    if (a) switch (a.datatype) {
        case "v":
            o = a.datavalue + "";
            break;
        case "t":
            o = "'" + a.datavalue;
            break;
        case "f":
            o = "=" + a.formula;
            break;
        case "c":
            o = a.formula
    }
    return o
}, SocialCalc.FormatValueForDisplay = function(e, t, o, a) {
    var l, n, r, i, c = e.attribs,
        s = (SocialCalc.Constants, e.cells[o]);
    if (s || (s = new SocialCalc.Cell(o)), i = t, n = s.valuetype || "", r = n.substring(1), n = n.charAt(0), s.errors || "e" == n) return i = s.errors || r || "Error in cell";
    if ("t" == n) {
        if (l = e.valueformats[s.textvalueformat - 0] || e.valueformats[c.defaulttextvalueformat - 0] || "", "formula" == l) return i = "f" == s.datatype ? SocialCalc.special_chars("=" + s.formula) || "&nbsp;" : "c" == s.datatype ? SocialCalc.special_chars("'" + s.formula) || "&nbsp;" : SocialCalc.special_chars("'" + i) || "&nbsp;";
        i = SocialCalc.format_text_for_display(i, s.valuetype, l, e, a, s.nontextvalueformat)
    } else if ("n" == n) {
        if (l = s.nontextvalueformat, (null == l || "" == l) && (l = c.defaultnontextvalueformat), l = e.valueformats[l - 0], (null == l || "none" == l) && (l = ""), "formula" == l) return i = "f" == s.datatype ? SocialCalc.special_chars("=" + s.formula) || "&nbsp;" : "c" == s.datatype ? SocialCalc.special_chars("'" + s.formula) || "&nbsp;" : SocialCalc.special_chars("'" + i) || "&nbsp;";
        if ("forcetext" == l) return i = "f" == s.datatype ? SocialCalc.special_chars("=" + s.formula) || "&nbsp;" : "c" == s.datatype ? SocialCalc.special_chars(s.formula) || "&nbsp;" : SocialCalc.special_chars(i) || "&nbsp;";
        i = SocialCalc.format_number_for_display(i, s.valuetype, l)
    } else i = "&nbsp;";
    return i
}, SocialCalc.format_text_for_display = function(e, t, o, a, l, n) {
    var o, r, i, c, s, d;
    return r = t.substring(1), d = e, ("none" == o || null == o) && (o = ""), /^(text-|custom|hidden)/.test(o) || (o = ""), ("" == o || "General" == o) && ("h" == r && (o = "text-html"), ("w" == r || "r" == r) && (o = "text-wiki"), "l" == r && (o = "text-link"), r || (o = "text-plain")), "text-html" == o || (SocialCalc.Callbacks.expand_wiki && /^text-wiki/.test(o) ? d = SocialCalc.Callbacks.expand_wiki(d, a, l, o) : "text-wiki" == o ? d = SocialCalc.Callbacks.expand_markup && SocialCalc.Callbacks.expand_markup(d, a, l) || SocialCalc.special_chars("wiki-text:" + d) : "text-url" == o ? (i = SocialCalc.special_chars(d), c = encodeURI(d), d = '<a href="' + c + '">' + i + "</a>") : "text-link" == o ? d = SocialCalc.expand_text_link(d, a, l, o) : "text-image" == o ? (c = encodeURI(d), d = '<img src="' + c + '">') : "text-custom:" == o.substring(0, 12) ? (i = SocialCalc.special_chars(d), i = i.replace(/  /g, "&nbsp; "), i = i.replace(/\n/g, "<br>"), c = encodeURI(d), s = {}, s.r = d, s.s = i, s.u = c, d = o.substring(12), d = d.replace(/@(r|s|u)/g, function(e, t) {
        return s[t]
    })) : "custom" == o.substring(0, 6) ? (d = SocialCalc.special_chars(d), d = d.replace(/  /g, "&nbsp; "), d = d.replace(/\n/g, "<br>"), d += " (custom format)") : "hidden" == o ? d = "&nbsp;" : null != n && "" != n && "none" != a.valueformats[n - 0] && "" != a.valueformats[n - 0] ? (o = a.valueformats[n], d = SocialCalc.format_number_for_display(e, t, o)) : (d = SocialCalc.special_chars(d), d = d.replace(/  /g, "&nbsp; "), d = d.replace(/\n/g, "<br>"))), d
}, SocialCalc.format_number_for_display = function(e, t, o) {
    var a, l, n = SocialCalc.Constants;
    return a = e - 0, l = t.substring(1), ("Auto" == o || "" == o) && (o = "%" == l ? n.defaultFormatp : "$" == l ? n.defaultFormatc : "dt" == l ? n.defaultFormatdt : "d" == l ? n.defaultFormatd : "t" == l ? n.defaultFormatt : "l" == l ? "logical" : "General"), "logical" == o ? a ? n.defaultDisplayTRUE : n.defaultDisplayFALSE : "hidden" == o ? "&nbsp;" : SocialCalc.FormatNumber.formatNumberWithFormat(e, o, "")
}, SocialCalc.DetermineValueType = function(e) {
    var t, o, a, l, n, r, i, c, s, d, u = e + "",
        p = "t";
    return t = u.replace(/^\s+/, ""), t = t.replace(/\s+$/, ""), 0 == u.length ? p = "" : u.match(/^\s+$/) || (t.match(/^[-+]?\d*(?:\.)?\d*(?:[eE][-+]?\d+)?$/) ? (u = t - 0, isNaN(u) ? u = e + "" : p = "n") : t.match(/^[-+]?\d*(?:\.)?\d*\s*%$/) ? (u = (t.slice(0, -1) - 0) / 100, p = "n%") : t.match(/^[-+]?\$\s*\d*(?:\.)?\d*\s*$/) && t.match(/\d/) ? (u = t.replace(/\$/, "") - 0, p = "n$") : t.match(/^[-+]?(\d*,\d*)+(?:\.)?\d*$/) ? (u = t.replace(/,/g, "") - 0, p = "n") : t.match(/^[-+]?(\d*,\d*)+(?:\.)?\d*\s*%$/) ? (u = (t.replace(/[%,]/g, "") - 0) / 100, p = "n%") : t.match(/^[-+]?\$\s*(\d*,\d*)+(?:\.)?\d*$/) && t.match(/\d/) ? (u = t.replace(/[\$,]/g, "") - 0, p = "n$") : (o = u.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{1,4})\s*$/)) ? (a = o[3] - 0, a = 1e3 > a ? a + 2e3 : a, u = SocialCalc.FormatNumber.convert_date_gregorian_to_julian(a, o[1] - 0, o[2] - 0) - 2415019, p = "nd") : (o = u.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})\s*$/)) ? (a = o[1] - 0, a = 1e3 > a ? a + 2e3 : a, u = SocialCalc.FormatNumber.convert_date_gregorian_to_julian(a, o[2] - 0, o[3] - 0) - 2415019, p = "nd") : (o = u.match(/^(\d{1,2}):(\d{1,2})\s*$/)) ? (l = o[1] - 0, n = o[2] - 0, 24 > l && 60 > n && (u = l / 24 + n / 1440, p = "nt")) : (o = u.match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/)) ? (l = o[1] - 0, n = o[2] - 0, r = o[3] - 0, 24 > l && 60 > n && 60 > r && (u = l / 24 + n / 1440 + r / 86400, p = "nt")) : (o = u.match(/^\s*([-+]?\d+) (\d+)\/(\d+)\s*$/)) ? (s = o[1] - 0, c = o[2] - 0, i = o[3] - 0, i && i > 0 && (u = s + (0 > s ? -c / i : c / i), p = "n")) : (d = SocialCalc.InputConstants[u.toUpperCase()]) ? (c = d.indexOf(","), u = d.substring(0, c) - 0, p = d.substring(c + 1)) : t.length > 7 && "http://" == t.substring(0, 7).toLowerCase() ? (u = t, p = "tl") : t.match(/<([A-Z][A-Z0-9]*)\b[^>]*>[\s\S]*?<\/\1>/i) && (u = t, p = "th")), {
        value: u,
        type: p
    }
}, SocialCalc.InputConstants = {
    TRUE: "1,nl",
    FALSE: "0,nl",
    "#N/A": "0,e#N/A",
    "#NULL!": "0,e#NULL!",
    "#NUM!": "0,e#NUM!",
    "#DIV/0!": "0,e#DIV/0!",
    "#VALUE!": "0,e#VALUE!",
    "#REF!": "0,e#REF!",
    "#NAME?": "0,e#NAME?"
}, SocialCalc.default_expand_markup = function(e) {
    var t = e;
    return t = SocialCalc.special_chars(t), t = t.replace(/  /g, "&nbsp; "), t = t.replace(/\n/g, "<br>")
}, SocialCalc.expand_text_link = function(e, t, o, a) {
    var l, n, r, i = SocialCalc.Constants,
        c = "",
        s = SocialCalc.ParseCellLinkText(e + "");
    return l = s.desc ? SocialCalc.special_chars(s.desc) : s.pagename ? i.defaultPageLinkFormatString : i.defaultLinkFormatString, e.length > 7 && "http://" == e.substring(0, 7).toLowerCase() && ">" != e.charAt(e.length - 1) && (l = l.substring(7)), n = s.newwin || !o ? ' target="_blank"' : "", s.pagename ? SocialCalc.Callbacks.MakePageLink && (c = SocialCalc.Callbacks.MakePageLink(s.pagename, s.workspacename, o, a)) : c = encodeURI(s.url), r = '<a href="' + c + '"' + n + ">" + l + "</a>"
}, SocialCalc.ParseCellLinkText = function(e) {
    var t = {
            url: "",
            desc: "",
            newwin: !1,
            pagename: "",
            workspace: ""
        },
        o = !1,
        a = e.length - 1,
        l = 0,
        n = e.lastIndexOf("<"),
        r = e.lastIndexOf("["),
        i = e.lastIndexOf("{"),
        c = -1;
    return ">" == e.charAt(a) && -1 != n || "]" == e.charAt(a) && -1 != r || !("}" != e.charAt(a) || "]" != e.charAt(a - 1) || -1 == i || -1 == r || i > r) ? (">" == e.charAt(a) ? (c = n - 1, n > 0 && "<" == e.charAt(c) && ">" == e.charAt(a - 1) && (c--, a--, t.newwin = !0)) : "]" == e.charAt(a) ? (c = r - 1, o = !0, r > 0 && "[" == e.charAt(c) && "]" == e.charAt(a - 1) && (c--, a--, t.newwin = !0)) : "}" == e.charAt(a) && (c = i - 1, o = !0, wsend = r, a--, r > 0 && "[" == e.charAt(r - 1) && "]" == e.charAt(a - 1) && (wsend = r - 1, a--, t.newwin = !0), " " == e.charAt(wsend - 1) && wsend--, t.workspace = e.substring(i + 1, wsend) || ""), " " == e.charAt(c) && c--, '"' == e.charAt(l) && '"' == e.charAt(c) && (l++, c--)) : (a++, c = a), o ? t.pagename = e.substring(r + 1, a) || "" : t.url = e.substring(n + 1, a) || "", c >= l && (t.desc = e.substring(l, c + 1)), t
}, SocialCalc.ConvertSaveToOtherFormat = function(e, t, o) {
    var a, l, n, r, i, c, s, d, u, p, f = "";
    if ("scsave" == t) return e;
    if ("" == e) return "";
    if (a = new SocialCalc.Sheet, a.ParseSheetSave(e), o) throw "SocialCalc.ConvertSaveToOtherFormat: Not doing recalc.";
    if (n = a.copiedfrom ? SocialCalc.ParseRange(a.copiedfrom) : {
            cr1: {
                row: 1,
                col: 1
            },
            cr2: {
                row: a.attribs.lastrow,
                col: a.attribs.lastcol
            }
        }, "html" == t) return l = new SocialCalc.RenderContext(a), a.copiedfrom && (l.rowpanes[0] = {
        first: n.cr1.row,
        last: n.cr2.row
    }, l.colpanes[0] = {
        first: n.cr1.col,
        last: n.cr2.col
    }), r = document.createElement("div"), i = l.RenderSheet(null, l.defaultHTMLlinkstyle), r.appendChild(i), delete l, delete a, f = r.innerHTML, delete i, delete r, f;
    for (c = n.cr1.row; c <= n.cr2.row; c++) {
        for (s = n.cr1.col; s <= n.cr2.col; s++) d = SocialCalc.crToCoord(s, c), u = a.GetAssuredCell(d), p = u.errors ? u.errors : u.datavalue + "", "csv" == t ? (-1 != p.indexOf('"') && (p = p.replace(/"/g, '""')), /[, \n"]/.test(p) && (p = '"' + p + '"'), s > n.cr1.col && (p = "," + p)) : "tab" == t && (-1 != p.indexOf("\n") && (-1 != p.indexOf('"') && (p = p.replace(/"/g, '""')), p = '"' + p + '"'), s > n.cr1.col && (p = "	" + p)), f += p;
        f += "\n"
    }
    return f
}, SocialCalc.ConvertOtherFormatToSave = function(e, t) {
    var o, a, l, n, r, i, c, s, d, u, p, f, h = "",
        m = function() {
            u++, u > f && (f = u), p = SocialCalc.crToCoord(u, d), SocialCalc.SetConvertedCell(o, p, r), r = ""
        };
    if ("scsave" == t) return e;
    if (o = new SocialCalc.Sheet, a = e.split(/\r\n|\n/), f = 0, "csv" == t) {
        for (d = 0, i = !1, l = 0; l < a.length && (l != a.length - 1 || "" != a[l]); l++)
            for (i ? r += "\n" : (r = "", d++, u = 0), n = a[l], c = 0; c < n.length; c++) s = n.charAt(c), '"' != s ? ("," != s || i ? r += s : m(), c != n.length - 1 || i || m()) : i ? c < n.length - 1 && '"' == n.charAt(c + 1) ? (c++, r += '"') : (i = !1, c == n.length - 1 && m()) : i = !0;
        f > 0 && (o.attribs.lastrow = d, o.attribs.lastcol = f, h = o.CreateSheetSave("A1:" + SocialCalc.crToCoord(f, d)))
    }
    if ("tab" == t) {
        for (d = 0, i = !1, l = 0; l < a.length && (l != a.length - 1 || "" != a[l]); l++)
            for (i ? r += "\n" : (r = "", d++, u = 0), n = a[l], c = 0; c < n.length; c++) {
                if (s = n.charAt(c), '"' == s) {
                    if (i) {
                        c < n.length - 1 ? '"' == n.charAt(c + 1) ? (c++, r += '"') : "	" == n.charAt(c + 1) && (c++, i = !1, m()) : (i = !1, m());
                        continue
                    }
                    if ("" == r) {
                        i = !0;
                        continue
                    }
                }
                "	" != s || i ? r += s : m(), c != n.length - 1 || i || m()
            }
        f > 0 && (o.attribs.lastrow = d, o.attribs.lastcol = f, h = o.CreateSheetSave("A1:" + SocialCalc.crToCoord(f, d)))
    }
    return h
}, SocialCalc.SetConvertedCell = function(e, t, o) {
    var a, l;
    a = e.GetAssuredCell(t), l = SocialCalc.DetermineValueType(o), "n" == l.type && l.value == o ? (a.datatype = "v", a.valuetype = "n", a.datavalue = l.value) : "t" == l.type.charAt(0) ? (a.datatype = "t", a.valuetype = l.type, a.datavalue = l.value) : (a.datatype = "c", a.valuetype = l.type, a.datavalue = l.value, a.formula = o)
};
var SocialCalc;
SocialCalc || (SocialCalc = {}), SocialCalc.TableEditor = function(e) {
    var t = SocialCalc.Constants;
    this.context = e, this.toplevel = null, this.fullgrid = null, this.noEdit = !1, this.width = null, this.tablewidth = null, this.height = null, this.tableheight = null, this.inputBox = null, this.inputEcho = null, this.verticaltablecontrol = null, this.horizontaltablecontrol = null, this.logo = null, this.cellhandles = null, this.timeout = null, this.busy = !1, this.ensureecell = !1, this.deferredCommands = [], this.gridposition = null, this.headposition = null, this.firstscrollingrow = null, this.firstscrollingrowtop = null, this.lastnonscrollingrow = null, this.lastvisiblerow = null, this.firstscrollingcol = null, this.firstscrollingcolleft = null, this.lastnonscrollingcol = null, this.lastvisiblecol = null, this.rowpositions = [], this.colpositions = [], this.rowheight = [], this.colwidth = [], this.ecell = null, this.state = "start", this.workingvalues = {}, this.imageprefix = t.defaultImagePrefix, this.idPrefix = t.defaultTableEditorIDPrefix, this.pageUpDnAmount = t.defaultPageUpDnAmount, this.recalcFunction = function(e) {
        return e.context.sheetobj.RecalcSheet ? void e.context.sheetobj.RecalcSheet(SocialCalc.EditorSheetStatusCallback, e) : null
    }, this.ctrlkeyFunction = function(e, t) {
        var o, a, l, n, r, i;
        switch (t) {
            case "[ctrl-c]":
            case "[ctrl-x]":
                return o = e.pasteTextarea, o.value = "", a = SocialCalc.GetEditorCellElement(e, e.ecell.row, e.ecell.col), a && (l = SocialCalc.GetElementPosition(a.element), o.style.left = l.left - 1 + "px", o.style.top = l.top - 1 + "px"), r = e.range.hasrange ? SocialCalc.crToCoord(e.range.left, e.range.top) + ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom) : e.ecell.coord, i = SocialCalc.ConvertSaveToOtherFormat(SocialCalc.CreateSheetSave(e.context.sheetobj, r), "tab"), n = "[ctrl-c]" == t || e.noEdit || e.ECellReadonly() ? "copy " + r + " formulas" : "cut " + r + " formulas", e.EditorScheduleSheetCommands(n, !0, !1), o.style.display = "block", o.value = i, o.focus(), o.select(), window.setTimeout(function() {
                    var t = e.pasteTextarea;
                    t.blur(), t.style.display = "none", SocialCalc.KeyboardFocus()
                }, 200), !0;
            case "[ctrl-v]":
                return e.noEdit || e.ECellReadonly() ? !0 : (o = e.pasteTextarea, o.value = "", a = SocialCalc.GetEditorCellElement(e, e.ecell.row, e.ecell.col), a && (l = SocialCalc.GetElementPosition(a.element), o.style.left = l.left - 1 + "px", o.style.top = l.top - 1 + "px"), o.style.display = "block", o.value = "", o.focus(), window.setTimeout(function() {
                    var t = e.pasteTextarea,
                        o = t.value;
                    t.blur(), t.style.display = "none";
                    var a = "",
                        l = SocialCalc.ConvertSaveToOtherFormat(SocialCalc.Clipboard.clipboard, "tab");
                    o = o.replace(/\r\n/g, "\n"), o == l || o.length - l.length == 1 && o.substring(0, o.length - 1) == l || (a = "loadclipboard " + SocialCalc.encodeForSave(SocialCalc.ConvertOtherFormatToSave(o, "tab")) + "\n");
                    var n;
                    if (e.range.hasrange) {
                        var r = new SocialCalc.Sheet;
                        r.ParseSheetSave(SocialCalc.Clipboard.clipboard);
                        var i = r.copiedfrom.match(/(.+):(.+)/);
                        n = null !== i && i[1] === i[2] ? SocialCalc.crToCoord(e.range.left, e.range.top) + ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom) : SocialCalc.crToCoord(e.range.left, e.range.top)
                    } else n = e.ecell.coord;
                    a += "paste " + n + " formulas", e.EditorScheduleSheetCommands(a, !0, !1), SocialCalc.KeyboardFocus()
                }, 200), !0);
            case "[ctrl-z]":
                return e.EditorScheduleSheetCommands("undo", !0, !1), !1;
            case "[ctrl-s]":
                if (!SocialCalc.Constants.AllowCtrlS) break;
                return window.setTimeout(function() {
                    var t = e.context.sheetobj,
                        o = t.GetAssuredCell(e.ecell.coord),
                        a = o.nontextvalueformat ? t.valueformats[o.nontextvalueformat - 0] || "" : "",
                        l = window.prompt("Advanced Feature:\n\nCustom Numeric Format or Command", a);
                    if (null != l) {
                        if (l.match(/^cmd:/)) n = l.substring(4);
                        else {
                            if (l.match(/^edit:/)) return n = l.substring(5), void(SocialCalc.CtrlSEditor && SocialCalc.CtrlSEditor(n));
                            r = e.range.hasrange ? SocialCalc.crToCoord(e.range.left, e.range.top) + ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom) : e.ecell.coord, n = "set " + r + " nontextvalueformat " + l
                        }
                        e.EditorScheduleSheetCommands(n, !0, !1)
                    }
                }, 200), !1
        }
        return !0
    }, e.sheetobj.statuscallback = SocialCalc.EditorSheetStatusCallback, e.sheetobj.statuscallbackparams = this, this.StatusCallback = {}, this.MoveECellCallback = {}, this.RangeChangeCallback = {}, this.SettingsCallbacks = {}, this.ecell = {
        coord: "A1",
        row: 1,
        col: 1
    }, e.highlights[this.ecell.coord] = "cursor", this.range = {
        hasrange: !1
    }, this.range2 = {
        hasrange: !1
    }
}, SocialCalc.TableEditor.prototype.CreateTableEditor = function(e, t) {
    return SocialCalc.CreateTableEditor(this, e, t)
}, SocialCalc.TableEditor.prototype.ResizeTableEditor = function(e, t) {
    return SocialCalc.ResizeTableEditor(this, e, t)
}, SocialCalc.TableEditor.prototype.SaveEditorSettings = function() {
    return SocialCalc.SaveEditorSettings(this)
}, SocialCalc.TableEditor.prototype.LoadEditorSettings = function(e, t) {
    return SocialCalc.LoadEditorSettings(this, e, t)
}, SocialCalc.TableEditor.prototype.EditorRenderSheet = function() {
    SocialCalc.EditorRenderSheet(this)
}, SocialCalc.TableEditor.prototype.EditorScheduleSheetCommands = function(e, t, o) {
    SocialCalc.EditorScheduleSheetCommands(this, e, t, o)
}, SocialCalc.TableEditor.prototype.ScheduleSheetCommands = function(e, t) {
    this.context.sheetobj.ScheduleSheetCommands(e, t)
}, SocialCalc.TableEditor.prototype.SheetUndo = function() {
    this.context.sheetobj.SheetUndo()
}, SocialCalc.TableEditor.prototype.SheetRedo = function() {
    this.context.sheetobj.SheetRedo()
}, SocialCalc.TableEditor.prototype.EditorStepSet = function(e, t) {
    SocialCalc.EditorStepSet(this, e, t)
}, SocialCalc.TableEditor.prototype.GetStatuslineString = function(e, t, o) {
    return SocialCalc.EditorGetStatuslineString(this, e, t, o)
}, SocialCalc.TableEditor.prototype.EditorMouseRegister = function() {
    return SocialCalc.EditorMouseRegister(this)
}, SocialCalc.TableEditor.prototype.EditorMouseUnregister = function() {
    return SocialCalc.EditorMouseUnregister(this)
}, SocialCalc.TableEditor.prototype.EditorMouseRange = function(e) {
    return SocialCalc.EditorMouseRange(this, e)
}, SocialCalc.TableEditor.prototype.EditorProcessKey = function(e, t) {
    return SocialCalc.EditorProcessKey(this, e, t)
}, SocialCalc.TableEditor.prototype.EditorAddToInput = function(e, t) {
    return SocialCalc.EditorAddToInput(this, e, t)
}, SocialCalc.TableEditor.prototype.DisplayCellContents = function() {
    return SocialCalc.EditorDisplayCellContents(this)
}, SocialCalc.TableEditor.prototype.EditorSaveEdit = function(e) {
    return SocialCalc.EditorSaveEdit(this, e)
}, SocialCalc.TableEditor.prototype.EditorApplySetCommandsToRange = function(e, t) {
    return SocialCalc.EditorApplySetCommandsToRange(this, e, t)
}, SocialCalc.TableEditor.prototype.MoveECellWithKey = function(e) {
    return SocialCalc.MoveECellWithKey(this, e)
}, SocialCalc.TableEditor.prototype.MoveECell = function(e) {
    return SocialCalc.MoveECell(this, e)
}, SocialCalc.TableEditor.prototype.ReplaceCell = function(e, t, o) {
    SocialCalc.ReplaceCell(this, e, t, o)
}, SocialCalc.TableEditor.prototype.UpdateCellCSS = function(e, t, o) {
    SocialCalc.UpdateCellCSS(this, e, t, o)
}, SocialCalc.TableEditor.prototype.SetECellHeaders = function(e) {
    SocialCalc.SetECellHeaders(this, e)
}, SocialCalc.TableEditor.prototype.EnsureECellVisible = function() {
    SocialCalc.EnsureECellVisible(this)
}, SocialCalc.TableEditor.prototype.ECellReadonly = function(e) {
    return SocialCalc.ECellReadonly(this, e)
}, SocialCalc.TableEditor.prototype.RangeAnchor = function(e) {
    SocialCalc.RangeAnchor(this, e)
}, SocialCalc.TableEditor.prototype.RangeExtend = function(e) {
    SocialCalc.RangeExtend(this, e)
}, SocialCalc.TableEditor.prototype.RangeRemove = function() {
    SocialCalc.RangeRemove(this)
}, SocialCalc.TableEditor.prototype.Range2Remove = function() {
    SocialCalc.Range2Remove(this)
}, SocialCalc.TableEditor.prototype.FitToEditTable = function() {
    SocialCalc.FitToEditTable(this)
}, SocialCalc.TableEditor.prototype.CalculateEditorPositions = function() {
    SocialCalc.CalculateEditorPositions(this)
}, SocialCalc.TableEditor.prototype.ScheduleRender = function() {
    SocialCalc.ScheduleRender(this)
}, SocialCalc.TableEditor.prototype.DoRenderStep = function() {
    SocialCalc.DoRenderStep(this)
}, SocialCalc.TableEditor.prototype.SchedulePositionCalculations = function() {
    SocialCalc.SchedulePositionCalculations(this)
}, SocialCalc.TableEditor.prototype.DoPositionCalculations = function() {
    SocialCalc.DoPositionCalculations(this)
}, SocialCalc.TableEditor.prototype.CalculateRowPositions = function(e, t, o) {
    return SocialCalc.CalculateRowPositions(this, e, t, o)
}, SocialCalc.TableEditor.prototype.CalculateColPositions = function(e, t, o) {
    return SocialCalc.CalculateColPositions(this, e, t, o)
}, SocialCalc.TableEditor.prototype.ScrollRelative = function(e, t) {
    SocialCalc.ScrollRelative(this, e, t)
}, SocialCalc.TableEditor.prototype.ScrollRelativeBoth = function(e, t) {
    SocialCalc.ScrollRelativeBoth(this, e, t)
}, SocialCalc.TableEditor.prototype.PageRelative = function(e, t) {
    SocialCalc.PageRelative(this, e, t)
}, SocialCalc.TableEditor.prototype.LimitLastPanes = function() {
    SocialCalc.LimitLastPanes(this)
}, SocialCalc.TableEditor.prototype.ScrollTableUpOneRow = function() {
    return SocialCalc.ScrollTableUpOneRow(this)
}, SocialCalc.TableEditor.prototype.ScrollTableDownOneRow = function() {
    return SocialCalc.ScrollTableDownOneRow(this)
}, SocialCalc.TableEditor.prototype.ScrollTableLeftOneCol = function() {
    return SocialCalc.ScrollTableLeftOneCol(this)
}, SocialCalc.TableEditor.prototype.ScrollTableRightOneCol = function() {
    return SocialCalc.ScrollTableRightOneCol(this)
}, SocialCalc.CreateTableEditor = function(e, t, o) {
    var a = SocialCalc.Constants,
        l = SocialCalc.AssignID;
    e.toplevel = document.createElement("div"), e.toplevel.style.position = "relative", l(e, e.toplevel, "toplevel"), e.width = t, e.height = o, e.griddiv = document.createElement("div"), e.tablewidth = Math.max(0, t - a.defaultTableControlThickness), e.tableheight = Math.max(0, o - a.defaultTableControlThickness), e.griddiv.style.width = e.tablewidth + "px", e.griddiv.style.height = e.tableheight + "px", e.griddiv.style.overflow = "hidden", e.griddiv.style.cursor = "default", a.cteGriddivClass && (e.griddiv.className = a.cteGriddivClass), l(e, e.griddiv, "griddiv"), e.FitToEditTable(), e.EditorRenderSheet(), e.griddiv.appendChild(e.fullgrid), e.verticaltablecontrol = new SocialCalc.TableControl(e, !0, e.tableheight), e.verticaltablecontrol.CreateTableControl(), l(e, e.verticaltablecontrol.main, "tablecontrolv"), e.horizontaltablecontrol = new SocialCalc.TableControl(e, !1, e.tablewidth), e.horizontaltablecontrol.CreateTableControl(), l(e, e.horizontaltablecontrol.main, "tablecontrolh");
    var n, r, i, c, s;
    return n = document.createElement("table"), e.layouttable = n, n.cellSpacing = 0, n.cellPadding = 0, l(e, n, "layouttable"), r = document.createElement("tbody"), n.appendChild(r), i = document.createElement("tr"), r.appendChild(i), c = document.createElement("td"), c.appendChild(e.griddiv), i.appendChild(c), c = document.createElement("td"), c.appendChild(e.verticaltablecontrol.main), i.appendChild(c), i = document.createElement("tr"), r.appendChild(i), c = document.createElement("td"), c.appendChild(e.horizontaltablecontrol.main), i.appendChild(c), c = document.createElement("td"), c.style.background = "url(" + e.imageprefix + "logo.gif) no-repeat center center", c.innerHTML = "<div style='cursor:pointer;font-size:100px;'><img src='" + e.imageprefix + "1x1.gif' border='0' width='18' height='18'></div>", i.appendChild(c), e.logo = c, l(e, e.logo, "logo"), SocialCalc.TooltipRegister(c.firstChild.firstChild, "SocialCalc", null, e.toplevel), e.toplevel.appendChild(e.layouttable), e.noEdit || (e.inputEcho = new SocialCalc.InputEcho(e), l(e, e.inputEcho.main, "inputecho")), e.cellhandles = new SocialCalc.CellHandles(e), s = document.createElement("textarea"), SocialCalc.setStyles(s, "display:none;position:absolute;height:1px;width:1px;opacity:0;filter:alpha(opacity=0);"), s.value = "", e.pasteTextarea = s, l(e, e.pasteTextarea, "pastetextarea"), navigator.userAgent.match(/Safari\//) && !navigator.userAgent.match(/Chrome\//) && (window.removeEventListener("beforepaste", SocialCalc.SafariPasteFunction, !1), window.addEventListener("beforepaste", SocialCalc.SafariPasteFunction, !1), window.removeEventListener("beforecopy", SocialCalc.SafariPasteFunction, !1), window.addEventListener("beforecopy", SocialCalc.SafariPasteFunction, !1), window.removeEventListener("beforecut", SocialCalc.SafariPasteFunction, !1), window.addEventListener("beforecut", SocialCalc.SafariPasteFunction, !1)), e.toplevel.appendChild(e.pasteTextarea), SocialCalc.MouseWheelRegister(e.toplevel, {
        WheelMove: SocialCalc.EditorProcessMouseWheel,
        editor: e
    }), SocialCalc.KeyboardSetFocus(e), SocialCalc.EditorSheetStatusCallback(null, "startup", null, e), e.toplevel
}, SocialCalc.SafariPasteFunction = function(e) {
    e.preventDefault()
}, SocialCalc.ResizeTableEditor = function(e, t, o) {
    var a = SocialCalc.Constants;
    e.width = t, e.height = o, e.toplevel.style.width = t + "px", e.toplevel.style.height = o + "px", e.tablewidth = Math.max(0, t - a.defaultTableControlThickness), e.tableheight = Math.max(0, o - a.defaultTableControlThickness), e.griddiv.style.width = e.tablewidth + "px", e.griddiv.style.height = e.tableheight + "px", e.verticaltablecontrol.main.style.height = e.tableheight + "px", e.horizontaltablecontrol.main.style.width = e.tablewidth + "px", e.FitToEditTable(), e.ScheduleRender()
}, SocialCalc.SaveEditorSettings = function(e) {
    var t, o, a = e.context,
        l = e.range,
        n = "";
    for (n += "version:1.0\n", t = 0; t < a.rowpanes.length; t++) n += "rowpane:" + t + ":" + a.rowpanes[t].first + ":" + a.rowpanes[t].last + "\n";
    for (t = 0; t < a.colpanes.length; t++) n += "colpane:" + t + ":" + a.colpanes[t].first + ":" + a.colpanes[t].last + "\n";
    e.ecell && (n += "ecell:" + e.ecell.coord + "\n"), l.hasrange && (n += "range:" + l.anchorcoord + ":" + l.top + ":" + l.bottom + ":" + l.left + ":" + l.right + "\n");
    for (o in e.SettingsCallbacks) n += e.SettingsCallbacks[o].save(e, o);
    return n
}, SocialCalc.LoadEditorSettings = function(e, t, o) {
    var a, l, n, r, i, c, s, d, u, p = t.split(/\r\n|\n/),
        f = [],
        h = e.context;
    for (h.rowpanes = [{
            first: 1,
            last: 1
        }], h.colpanes = [{
            first: 1,
            last: 1
        }], e.ecell = null, e.range = {
            hasrange: !1
        }, e.range2 = {
            hasrange: !1
        }, u = e.range, h.highlights = {}, d = h.highlights, l = 0; l < p.length; l++) switch (a = p[l], f = a.split(":"), s = f[0]) {
        case "version":
            break;
        case "rowpane":
            h.rowpanes[f[1] - 0] = {
                first: f[2] - 0,
                last: f[3] - 0
            };
            break;
        case "colpane":
            h.colpanes[f[1] - 0] = {
                first: f[2] - 0,
                last: f[3] - 0
            };
            break;
        case "ecell":
            e.ecell = SocialCalc.coordToCr(f[1]), e.ecell.coord = f[1], d[f[1]] = "cursor";
            break;
        case "range":
            for (u.hasrange = !0, u.anchorcoord = f[1], n = SocialCalc.coordToCr(u.anchorcoord), u.anchorrow = n.row, u.anchorcol = n.col, u.top = f[2] - 0, u.bottom = f[3] - 0, u.left = f[4] - 0, u.right = f[5] - 0, r = u.top; r <= u.bottom; r++)
                for (i = u.left; i <= u.right; i++) c = SocialCalc.crToCoord(i, r), "cursor" != d[c] && (d[c] = "range");
            break;
        default:
            e.SettingsCallbacks[s] && e.SettingsCallbacks[s].load(e, s, a, o)
    }
}, SocialCalc.EditorRenderSheet = function(e) {
    e.EditorMouseUnregister(), e.fullgrid = e.context.RenderSheet(e.fullgrid), e.ecell && e.SetECellHeaders("selected"), SocialCalc.AssignID(e, e.fullgrid, "fullgrid"), e.EditorMouseRegister()
}, SocialCalc.EditorScheduleSheetCommands = function(e, t, o, a) {
    if ("start" == e.state || a) {
        if (e.busy && !a) return void e.deferredCommands.push({
            cmdstr: t,
            saveundo: o
        });
        switch (t) {
            case "recalc":
            case "redisplay":
                e.context.sheetobj.ScheduleSheetCommands(t, !1);
                break;
            case "undo":
                e.SheetUndo();
                break;
            case "redo":
                e.SheetRedo();
                break;
            default:
                e.context.sheetobj.ScheduleSheetCommands(t, o)
        }
    }
}, SocialCalc.EditorSheetStatusCallback = function(e, t, o, a) {
    var l, n, r, i = a.context.sheetobj,
        c = function(e) {
            for (l in a.StatusCallback) a.StatusCallback[l].func && a.StatusCallback[l].func(a, e, o, a.StatusCallback[l].params)
        };
    switch (t) {
        case "startup":
            break;
        case "cmdstart":
            a.busy = !0, i.celldisplayneeded = "";
            break;
        case "cmdextension":
            break;
        case "cmdend":
            if (c(t), i.changedrendervalues && (a.context.PrecomputeSheetFontsAndLayouts(), a.context.CalculateCellSkipData(), i.changedrendervalues = !1), i.celldisplayneeded && !i.renderneeded && (cr = SocialCalc.coordToCr(i.celldisplayneeded), n = SocialCalc.GetEditorCellElement(a, cr.row, cr.col), a.ReplaceCell(n, cr.row, cr.col)), a.deferredCommands.length) return r = a.deferredCommands.shift(), void a.EditorScheduleSheetCommands(r.cmdstr, r.saveundo, !0);
            if (i.attribs.needsrecalc && ("off" != i.attribs.recalc || i.recalconce) && a.recalcFunction ? (a.FitToEditTable(), i.renderneeded = !1, i.recalconce && delete i.recalconce, a.recalcFunction(a)) : i.renderneeded ? (a.FitToEditTable(), i.renderneeded = !1, a.ScheduleRender()) : a.SchedulePositionCalculations(), "col" == i.hiddencolrow) {
                for (var s = a.ecell.col;
                    "yes" == i.colattribs.hide[SocialCalc.rcColname(s)];) s++;
                var d = SocialCalc.crToCoord(s, a.ecell.row);
                a.MoveECell(d), i.hiddencolrow = ""
            }
            if ("row" == i.hiddencolrow) {
                for (var u = a.ecell.row;
                    "yes" == i.rowattribs.hide[u];) u++;
                var d = SocialCalc.crToCoord(a.ecell.col, u);
                a.MoveECell(d), i.hiddencolrow = ""
            }
            return;
        case "calcstart":
            a.busy = !0;
            break;
        case "calccheckdone":
        case "calcorder":
        case "calcstep":
        case "calcloading":
        case "calcserverfunc":
            break;
        case "calcfinished":
            return c(t), void a.ScheduleRender();
        case "schedrender":
            a.busy = !0;
            break;
        case "renderdone":
            break;
        case "schedposcalc":
            a.busy = !0;
            break;
        case "doneposcalc":
            return void(a.deferredCommands.length ? (c(t), r = a.deferredCommands.shift(), a.EditorScheduleSheetCommands(r.cmdstr, r.saveundo, !0)) : (a.busy = !1, c(t), "start" == a.state && a.DisplayCellContents()));
        default:
            addmsg("Unknown status: " + t)
    }
    c(t)
}, SocialCalc.EditorGetStatuslineString = function(e, t, o, a) {
    var l, n, r, i, c, s, d, u, p = SocialCalc.Constants;
    switch (n = "", t) {
        case "moveecell":
        case "rangechange":
        case "startup":
            break;
        case "cmdstart":
            a.command = !0, document.body.style.cursor = "progress", e.griddiv.style.cursor = "progress", n = p.s_statusline_executing;
            break;
        case "cmdextension":
            n = "Command Extension: " + o;
            break;
        case "cmdend":
            a.command = !1;
            break;
        case "schedrender":
            n = p.s_statusline_displaying;
            break;
        case "renderdone":
            n = " ";
            break;
        case "schedposcalc":
            n = p.s_statusline_displaying;
            break;
        case "cmdendnorender":
        case "doneposcalc":
            document.body.style.cursor = "default", e.griddiv.style.cursor = "default";
            break;
        case "calcorder":
            n = p.s_statusline_ordering + Math.floor(100 * o.count / (o.total || 1)) + "%";
            break;
        case "calcstep":
            n = p.s_statusline_calculating + Math.floor(100 * o.count / (o.total || 1)) + "%";
            break;
        case "calcloading":
            n = p.s_statusline_calculatingls + ": " + o.sheetname;
            break;
        case "calcserverfunc":
            n = p.s_statusline_calculating + Math.floor(100 * o.count / (o.total || 1)) + "%, " + p.s_statusline_doingserverfunc + o.funcname + p.s_statusline_incell + o.coord;
            break;
        case "calcstart":
            a.calculating = !0, document.body.style.cursor = "progress", e.griddiv.style.cursor = "progress", n = p.s_statusline_calcstart;
            break;
        case "calccheckdone":
            break;
        case "calcfinished":
            a.calculating = !1;
            break;
        default:
            n = t
    }
    if (!n && a.calculating && (n = p.s_statusline_calculating), !(a.calculating || a.command || n || !e.range.hasrange || e.range.left == e.range.right && e.range.top == e.range.bottom)) {
        for (u = 0, c = e.range.top; c <= e.range.bottom; c++)
            for (s = e.range.left; s <= e.range.right; s++) d = e.context.sheetobj.cells[SocialCalc.crToCoord(s, c)], d && d.valuetype && "n" == d.valuetype.charAt(0) && (u += d.datavalue - 0);
        u = SocialCalc.FormatNumber.formatNumberWithFormat(u, "[,]General", ""), r = SocialCalc.crToCoord(e.range.left, e.range.top) + ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom), n = r + " (" + (e.range.right - e.range.left + 1) + "x" + (e.range.bottom - e.range.top + 1) + ") " + p.s_statusline_sum + "=" + u + " " + n
    }
    return l = (e.ecell || {}).coord + " &nbsp; " + n, a.calculating || "yes" != e.context.sheetobj.attribs.needsrecalc || (l += " &nbsp; " + p.s_statusline_recalcneeded), i = e.context.sheetobj.attribs.circularreferencecell, i && (i = i.replace(/\|/, " referenced by "), l += " &nbsp; " + p.s_statusline_circref + i + "</span>"), l
}, SocialCalc.EditorMouseInfo = {
    registeredElements: [],
    editor: null,
    element: null,
    ignore: !1,
    mousedowncoord: "",
    mouselastcoord: "",
    mouseresizecol: "",
    mouseresizeclientx: null,
    mouseresizedisplay: null
}, SocialCalc.EditorMouseRegister = function(e) {
    var t, o = SocialCalc.EditorMouseInfo,
        a = e.fullgrid;
    for (t = 0; t < o.registeredElements.length; t++)
        if (o.registeredElements[t].editor == e) {
            if (o.registeredElements[t].element == a) return;
            break
        }
    if (t < o.registeredElements.length ? o.registeredElements[t].element = a : o.registeredElements.push({
            element: a,
            editor: e
        }), a.addEventListener) a.addEventListener("mousedown", SocialCalc.ProcessEditorMouseDown, !1), a.addEventListener("dblclick", SocialCalc.ProcessEditorDblClick, !1);
    else {
        if (!a.attachEvent) throw "Browser not supported";
        a.attachEvent("onmousedown", SocialCalc.ProcessEditorMouseDown), a.attachEvent("ondblclick", SocialCalc.ProcessEditorDblClick)
    }
    o.ignore = !1
}, SocialCalc.EditorMouseUnregister = function(e) {
    {
        var t, o, a = SocialCalc.EditorMouseInfo;
        e.fullgrid
    }
    for (t = 0; t < a.registeredElements.length && a.registeredElements[t].editor != e; t++);
    t < a.registeredElements.length && (o = a.registeredElements[t].element, o.removeEventListener ? (o.removeEventListener("mousedown", SocialCalc.ProcessEditorMouseDown, !1), o.removeEventListener("dblclick", SocialCalc.ProcessEditorDblClick, !1)) : o.detachEvent && (o.detachEvent("onmousedown", SocialCalc.ProcessEditorMouseDown), o.detachEvent("ondblclick", SocialCalc.ProcessEditorDblClick)), a.registeredElements.splice(t, 1))
}, SocialCalc.ProcessEditorMouseDown = function(e) {
    if (!$(e.target).is(".searchbarinput") && !$(e.target).is("th")) {
        var t, o, a, l, n, r = e || window.event,
            i = SocialCalc.EditorMouseInfo,
            c = r.target || r.srcElement;
        if (i.ignore) return;
        for (n = null; !n && c; c = c.parentNode) n = SocialCalc.LookupElement(c, i.registeredElements);
        if (!n) return void(i.editor = null);
        t = n.editor, i.element = c, l = t.range;
        var s = SocialCalc.GetElementPositionWithScroll(t.toplevel),
            d = r.clientX - s.left,
            u = r.clientY - s.top;
        if (ta = SocialCalc.GetSpreadsheetControlObject(), $(e.target).is("td") ? (rownumerVal = parseInt($(e.target).attr("id").match(/\d+/)[0], 10), coordinates = $(e.target).attr("id"), coordinates = coordinates.replace("cell_", "")) : $(e.target).is("p") && (rownumerVal = parseInt($(e.target).parents("td").attr("id").match(/\d+/)[0], 10), coordinates = $(e.target).parents("td").attr("id"), coordinates = coordinates.replace("cell_", "")), o = SocialCalc.GridMousePosition(t, d, u), !o) return;
        if (i.editor = t, act_coord = o.coord, coordinates && (o.coord = coordinates), rownumerVal && (o.row = rownumerVal), o.rowheader) return void SocialCalc.ProcessEditorRowsizeMouseDown(e, c, o);
        if (o.colheader) return void SocialCalc.ProcessEditorColsizeMouseDown(e, c, o);
        if (!o.coord) return;
        return l.hasrange || e.shiftKey && t.RangeAnchor(), a = t.MoveECell(act_coord), l.hasrange && (e.shiftKey ? t.RangeExtend() : t.RangeRemove()), i.mousedowncoord = a, i.mouselastcoord = a, t.EditorMouseRange(a), SocialCalc.KeyboardSetFocus(t), t.customecell = o, t.ecell.coord = coordinates, "start" != t.state && t.inputBox && t.inputBox.element.focus(), document.addEventListener ? (document.addEventListener("mousemove", SocialCalc.ProcessEditorMouseMove, !0), document.addEventListener("mouseup", SocialCalc.ProcessEditorMouseUp, !0)) : c.attachEvent && (c.setCapture(), c.attachEvent("onmousemove", SocialCalc.ProcessEditorMouseMove), c.attachEvent("onmouseup", SocialCalc.ProcessEditorMouseUp), c.attachEvent("onlosecapture", SocialCalc.ProcessEditorMouseUp)), r.stopPropagation ? r.stopPropagation() : r.cancelBubble = !0, void(r.preventDefault ? r.preventDefault() : r.returnValue = !1)
    }
}, SocialCalc.EditorMouseRange = function(e, t) {
    var o, a, l = e.range;
    switch (e.state) {
        case "input":
            o = e.inputBox.GetText(), a = e.workingvalues, ("(+-*/,:!&<>=^".indexOf(o.slice(-1)) >= 0 && "=" == o.slice(0, 1) || "=" == o) && (a.partialexpr = o), a.partialexpr ? t && e.inputBox.SetText(l.hasrange ? a.partialexpr + SocialCalc.crToCoord(l.left, l.top) + ":" + SocialCalc.crToCoord(l.right, l.bottom) : a.partialexpr + t) : (e.inputBox.Blur(), e.inputBox.ShowInputBox(!1), e.state = "start", e.cellhandles.ShowCellHandles(!0), e.EditorSaveEdit(), e.inputBox.DisplayCellContents(null));
            break;
        case "inputboxdirect":
            e.inputBox.Blur(), e.inputBox.ShowInputBox(!1), e.state = "start", e.cellhandles.ShowCellHandles(!0), e.EditorSaveEdit(), e.inputBox.DisplayCellContents(null)
    }
}, SocialCalc.ProcessEditorMouseMove = function(e) {
    var t, o, a, l = e || window.event,
        n = SocialCalc.EditorMouseInfo;
    if (t = n.editor, t && !n.ignore) {
        o = n.element;
        var r = SocialCalc.GetElementPositionWithScroll(t.toplevel),
            i = l.clientX - r.left,
            c = l.clientY - r.top;
        if (a = SocialCalc.GridMousePosition(t, i, c)) {
            if (a && !a.coord) return void SocialCalc.SetDragAutoRepeat(t, a);
            SocialCalc.SetDragAutoRepeat(t, null), a.coord && (a.coord != n.mouselastcoord && (e.shiftKey || t.range.hasrange || t.RangeAnchor(n.mousedowncoord), t.MoveECell(a.coord), t.RangeExtend()), n.mouselastcoord = a.coord, t.EditorMouseRange(a.coord), l.stopPropagation ? l.stopPropagation() : l.cancelBubble = !0, l.preventDefault ? l.preventDefault() : l.returnValue = !1)
        }
    }
}, SocialCalc.ProcessEditorMouseUp = function(e) {
    var t, o, a, l = e || window.event,
        n = SocialCalc.EditorMouseInfo;
    if (t = n.editor, t && !n.ignore) {
        o = n.element;
        var r = SocialCalc.GetElementPositionWithScroll(t.toplevel),
            i = l.clientX - r.left,
            c = l.clientY - r.top;
        if (a = SocialCalc.GridMousePosition(t, i, c), SocialCalc.SetDragAutoRepeat(t, null), a) return a.coord || (a.coord = t.ecell.coord), t.range.hasrange ? (t.MoveECell(a.coord), t.RangeExtend()) : a.coord && a.coord != n.mousedowncoord && (t.RangeAnchor(n.mousedowncoord), t.MoveECell(a.coord), t.RangeExtend()), t.EditorMouseRange(a.coord), l.stopPropagation ? l.stopPropagation() : l.cancelBubble = !0, l.preventDefault ? l.preventDefault() : l.returnValue = !1, document.removeEventListener ? (document.removeEventListener("mousemove", SocialCalc.ProcessEditorMouseMove, !0), document.removeEventListener("mouseup", SocialCalc.ProcessEditorMouseUp, !0)) : o.detachEvent && (o.detachEvent("onlosecapture", SocialCalc.ProcessEditorMouseUp), o.detachEvent("onmouseup", SocialCalc.ProcessEditorMouseUp), o.detachEvent("onmousemove", SocialCalc.ProcessEditorMouseMove), o.releaseCapture()), n.editor = null, !1
    }
}, SocialCalc.ProcessEditorColsizeMouseDown = function(e, t, o) {
    var a = e || window.event,
        l = SocialCalc.EditorMouseInfo,
        n = l.editor,
        r = SocialCalc.GetElementPositionWithScroll(n.toplevel),
        i = a.clientX - r.left;
    if (l.mouseresizecolnum = o.coltoresize, l.mouseresizecol = SocialCalc.rcColname(o.coltoresize), l.mousedownclientx = i, l.mousecoltounhide = o.coltounhide, o.coltoresize) {
        var c = document.createElement("div");
        l.mouseresizedisplay = c, c.style.width = "auto", c.style.position = "absolute", c.style.zIndex = 100, c.style.top = n.headposition.top + "px", c.style.left = n.colpositions[o.coltoresize] + "px", c.innerHTML = '<table cellpadding="0" cellspacing="0"><tr><td style="height:100px;border:1px dashed black;background-color:white;width:' + (n.context.colwidth[l.mouseresizecolnum] - 2) + 'px;">&nbsp;</td><td><div style="font-size:small;color:white;background-color:gray;padding:4px;">' + n.context.colwidth[l.mouseresizecolnum] + "</div></td></tr></table>", SocialCalc.setStyles(c.firstChild.lastChild.firstChild.childNodes[0], "filter:alpha(opacity=85);opacity:.85;"), n.toplevel.appendChild(c)
    }
    document.addEventListener ? (document.addEventListener("mousemove", SocialCalc.ProcessEditorColsizeMouseMove, !0), document.addEventListener("mouseup", SocialCalc.ProcessEditorColsizeMouseUp, !0)) : n.toplevel.attachEvent && (n.toplevel.setCapture(), n.toplevel.attachEvent("onmousemove", SocialCalc.ProcessEditorColsizeMouseMove), n.toplevel.attachEvent("onmouseup", SocialCalc.ProcessEditorColsizeMouseUp), n.toplevel.attachEvent("onlosecapture", SocialCalc.ProcessEditorColsizeMouseUp)), a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1
}, SocialCalc.ProcessEditorColsizeMouseMove = function(e) {
    var t = e || window.event,
        o = SocialCalc.EditorMouseInfo,
        a = o.editor;
    if (a) {
        if (o.mouseresizecolnum) {
            var l = SocialCalc.GetElementPositionWithScroll(a.toplevel),
                n = t.clientX - l.left,
                r = a.context.colwidth[o.mouseresizecolnum] - 0 + (n - o.mousedownclientx);
            r < SocialCalc.Constants.defaultMinimumColWidth && (r = SocialCalc.Constants.defaultMinimumColWidth);
            var i = o.mouseresizedisplay;
            i.innerHTML = '<table cellpadding="0" cellspacing="0"><tr><td style="height:100px;border:1px dashed black;background-color:white;width:' + (r - 2) + 'px;">&nbsp;</td><td><div style="font-size:small;color:white;background-color:gray;padding:4px;">' + r + "</div></td></tr></table>", SocialCalc.setStyles(i.firstChild.lastChild.firstChild.childNodes[0], "filter:alpha(opacity=85);opacity:.85;")
        }
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }
}, SocialCalc.ProcessEditorColsizeMouseUp = function(e) {
    var t = e || window.event,
        o = SocialCalc.EditorMouseInfo,
        a = o.editor;
    if (a) {
        element = o.element;
        var l = SocialCalc.GetElementPositionWithScroll(a.toplevel),
            n = t.clientX - l.left;
        if (t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, document.removeEventListener ? (document.removeEventListener("mousemove", SocialCalc.ProcessEditorColsizeMouseMove, !0), document.removeEventListener("mouseup", SocialCalc.ProcessEditorColsizeMouseUp, !0)) : a.toplevel.detachEvent && (a.toplevel.detachEvent("onlosecapture", SocialCalc.ProcessEditorColsizeMouseUp), a.toplevel.detachEvent("onmouseup", SocialCalc.ProcessEditorColsizeMouseUp), a.toplevel.detachEvent("onmousemove", SocialCalc.ProcessEditorColsizeMouseMove), a.toplevel.releaseCapture()), o.mousecoltounhide) a.EditorScheduleSheetCommands("set " + SocialCalc.rcColname(o.mousecoltounhide) + " hide", !0, !1);
        else if (o.mouseresizecolnum) {
            var r = a.context.colwidth[o.mouseresizecolnum] - 0 + (n - o.mousedownclientx);
            r < SocialCalc.Constants.defaultMinimumColWidth && (r = SocialCalc.Constants.defaultMinimumColWidth), a.EditorScheduleSheetCommands("set " + o.mouseresizecol + " width " + r, !0, !1), a.timeout && window.clearTimeout(a.timeout), a.timeout = window.setTimeout(SocialCalc.FinishColRowSize, 1)
        }
        return !1
    }
}, SocialCalc.FinishColRowSize = function() {
    var e = SocialCalc.EditorMouseInfo,
        t = e.editor;
    t && (t.toplevel.removeChild(e.mouseresizedisplay), e.mouseresizedisplay = null, e.editor = null)
}, SocialCalc.ProcessEditorRowselectMouseDown = function(e, t) {
    t.rowselect && (coord1 = SocialCalc.crToCoord(1, t.row), coord2 = SocialCalc.crToCoord(e.colpositions.length, t.row), coord3 = SocialCalc.crToCoord(e.firstscrollingcol, t.row), e.RangeAnchor(coord1), e.RangeExtend(coord2), e.MoveECell(coord3))
}, SocialCalc.ProcessEditorColselectMouseDown = function(e, t) {
    t.colselect && (coord1 = SocialCalc.crToCoord(t.col, 1), coord2 = SocialCalc.crToCoord(t.col, e.rowpositions.length), coord3 = SocialCalc.crToCoord(t.col, e.firstscrollingrow), e.RangeAnchor(coord1), e.RangeExtend(coord2), e.MoveECell(coord3))
}, SocialCalc.ProcessEditorRowsizeMouseDown = function(e, t, o) {
    var a = e || window.event,
        l = SocialCalc.EditorMouseInfo,
        n = l.editor,
        r = SocialCalc.GetSpreadsheetControlObject().spreadsheetDiv.firstChild.offsetHeight,
        i = a.clientY - r;
    if (l.mouseresizerownum = o.rowtoresize, l.mouseresizerow = o.rowtoresize, l.mousedownclienty = i, l.mouserowtounhide = o.rowtounhide, o.rowtoresize) {
        var c = document.createElement("div");
        l.mouseresizedisplay = c, c.style.width = n.context.totalwidth + "px", c.style.height = n.rowpositions[o.rowtoresize] + "px", c.style.position = "absolute", c.style.zIndex = 100, c.style.top = n.rowpositions[o.rowtoresize] + "px", c.style.left = n.headposition.left + "px", c.innerHTML = '<table cellpadding="0" cellspacing="0"><tr><td style="width:100pxborder:1px dashed black;background-color:white;height:' + (n.context.rowheight[l.mouseresizerownum] - 2) + 'px;">&nbsp;</td><td><div style="font-size:small;color:white;background-color:gray;padding:4px;">' + n.context.rowheight[l.mouseresizerownum] + "</div></td></tr></table>", SocialCalc.setStyles(c.firstChild.lastChild.firstChild.childNodes[0], "filter:alpha(opacity=85);opacity:.5;"), n.toplevel.appendChild(c)
    }
    document.addEventListener ? (document.addEventListener("mousemove", SocialCalc.ProcessEditorRowsizeMouseMove, !0), document.addEventListener("mouseup", SocialCalc.ProcessEditorRowsizeMouseUp, !0)) : n.toplevel.attachEvent && (n.toplevel.setCapture(), n.toplevel.attachEvent("onmousemove", SocialCalc.ProcessEditorRowsizeMouseMove), n.toplevel.attachEvent("onmouseup", SocialCalc.ProcessEditorRowsizeMouseUp), n.toplevel.attachEvent("onlosecapture", SocialCalc.ProcessEditorRowsizeMouseUp)), a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1
}, SocialCalc.ProcessEditorRowsizeMouseMove = function(e) {
    var t = e || window.event,
        o = SocialCalc.EditorMouseInfo,
        a = o.editor;
    if (a) {
        if (o.mouseresizerownum) {
            var l = SocialCalc.GetSpreadsheetControlObject().spreadsheetDiv.firstChild.offsetHeight,
                n = t.clientY - l,
                r = a.context.rowheight[o.mouseresizerownum] - 0 + (n - o.mousedownclienty);
            r < SocialCalc.Constants.defaultAssumedRowHeight && (r = SocialCalc.Constants.defaultAssumedRowHeight);
            var i = o.mouseresizedisplay;
            i.innerHTML = '<table cellpadding="0" cellspacing="0"><tr><td style="width:100px;border:1px dashed black;background-color:white;height:' + (r - 2) + 'px;">&nbsp;</td><td><div style="font-size:small;color:white;background-color:gray;padding:4px;">' + r + "</div></td></tr></table>", SocialCalc.setStyles(i.firstChild.lastChild.firstChild.childNodes[0], "filter:alpha(opacity=85);opacity:.5;")
        }
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1
    }
}, SocialCalc.ProcessEditorRowsizeMouseUp = function(e) {
    var t = e || window.event,
        o = SocialCalc.EditorMouseInfo,
        a = o.editor;
    if (a) {
        element = o.element;
        var l = SocialCalc.GetSpreadsheetControlObject().spreadsheetDiv.firstChild.offsetHeight,
            n = t.clientY - l;
        if (t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, document.removeEventListener ? (document.removeEventListener("mousemove", SocialCalc.ProcessEditorRowsizeMouseMove, !0), document.removeEventListener("mouseup", SocialCalc.ProcessEditorRowsizeMouseUp, !0)) : a.toplevel.detachEvent && (a.toplevel.detachEvent("onlosecapture", SocialCalc.ProcessEditorRowsizeMouseUp), a.toplevel.detachEvent("onmouseup", SocialCalc.ProcessEditorRowsizeMouseUp), a.toplevel.detachEvent("onmousemove", SocialCalc.ProcessEditorRowsizeMouseMove), a.toplevel.releaseCapture()), o.mouserowtounhide) a.EditorScheduleSheetCommands("set " + o.mouserowtounhide + " hide", !0, !1);
        else if (o.mouseresizerownum) {
            var r = a.context.rowheight[o.mouseresizerownum] - 0 + (n - o.mousedownclienty);
            r < SocialCalc.Constants.defaultAssumedRowHeight && (r = SocialCalc.Constants.defaultAssumedRowHeight), a.EditorScheduleSheetCommands("set " + o.mouseresizerownum + " height " + r, !0, !1), a.timeout && window.clearTimeout(a.timeout), a.timeout = window.setTimeout(SocialCalc.FinishColRowSize, 1)
        }
        return !1
    }
}, SocialCalc.AutoRepeatInfo = {
    timer: null,
    mouseinfo: null,
    repeatinterval: 1e3,
    editor: null,
    repeatcallback: null
}, SocialCalc.SetDragAutoRepeat = function(e, t, o) {
    var a, l, n = SocialCalc.AutoRepeatInfo;
    if (n.repeatcallback = o, !t) return n.timer && (window.clearTimeout(n.timer), n.timer = null), void(n.mouseinfo = null);
    if (n.editor = e, n.mouseinfo && (t.rowheader || t.rowfooter ? t.row != n.mouseinfo.row && (a = SocialCalc.crToCoord(e.ecell.col, t.row), n.repeatcallback ? (l = t.row < n.mouseinfo.row ? "left" : t.row > n.mouseinfo.row ? "right" : "", n.repeatcallback(a, l)) : (e.MoveECell(a), e.MoveECell(a), e.RangeExtend(), e.EditorMouseRange(a))) : (t.colheader || t.colfooter) && t.col != n.mouseinfo.col && (a = SocialCalc.crToCoord(t.col, e.ecell.row), n.repeatcallback ? (l = t.row < n.mouseinfo.row ? "left" : t.row > n.mouseinfo.row ? "right" : "", n.repeatcallback(a, l)) : (e.MoveECell(a), e.RangeExtend(), e.EditorMouseRange(a)))), n.mouseinfo = t, t.distance < 5) n.repeatinterval = 333;
    else if (t.distance < 10) n.repeatinterval = 250;
    else if (t.distance < 25) n.repeatinterval = 100;
    else {
        if (!(t.distance < 35)) return void(n.timer && (window.clearTimeout(n.timer), n.timer = null));
        n.repeatinterval = 75
    }
    n.timer || (n.timer = window.setTimeout(SocialCalc.DragAutoRepeat, n.repeatinterval))
}, SocialCalc.DragAutoRepeat = function() {
    var e, t, o, a = SocialCalc.AutoRepeatInfo,
        l = a.mouseinfo;
    l.rowheader ? e = "left" : l.rowfooter ? e = "right" : l.colheader ? e = "up" : l.colfooter && (e = "down"), a.repeatcallback ? (o = SocialCalc.coordToCr(a.editor.ecell.coord), "left" == e && o.col > 1 ? o.col-- : "right" == e ? o.col++ : "up" == e && o.row > 1 ? o.row-- : "down" == e && o.row++, t = SocialCalc.crToCoord(o.col, o.row), a.repeatcallback(t, e)) : (t = a.editor.MoveECellWithKey("[a" + e + "]shifted"), t && a.editor.EditorMouseRange(t)), a.timer = window.setTimeout(SocialCalc.DragAutoRepeat, a.repeatinterval)
}, SocialCalc.ProcessEditorDblClick = function(e) {
    if (!$(e.target).is(".searchbarinput") && !$(e.target).is("th")) {
        var t, o, a, l, n = e || window.event,
            r = SocialCalc.EditorMouseInfo,
            i = n.target || n.srcElement;
        if (r.ignore) return;
        for (l = null; !l && i; i = i.parentNode) l = SocialCalc.LookupElement(i, r.registeredElements);
        if (!l) return void(r.editor = null);
        t = l.editor;
        var c = SocialCalc.GetElementPositionWithScroll(t.toplevel),
            s = n.clientX - c.left,
            d = n.clientY - c.top;
        if (o = SocialCalc.GridMousePosition(t, s, d), !o || !o.coord) return;
        switch (r.editor = t, r.element = i, a = t.range, sheetobj = t.context.sheetobj, t.state) {
            case "start":
                SocialCalc.EditorOpenCellEdit(t);
                break;
            case "input":
        }
        return n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0, void(n.preventDefault ? n.preventDefault() : n.returnValue = !1)
    }
}, SocialCalc.EditorOpenCellEdit = function(e) {
    var t;
    return e.ecell && e.inputBox ? e.inputBox.element.disabled ? !0 : (e.inputBox.ShowInputBox(!0), e.inputBox.Focus(), e.inputBox.SetText(""), e.inputBox.DisplayCellContents(), e.inputBox.Select("end"), t = e.workingvalues, t.partialexpr = "", t.ecoord = e.ecell.coord, t.erow = e.ecell.row, void(t.ecol = e.ecell.col)) : !0
}, SocialCalc.EditorProcessKey = function(e, t, o) {
    if ($(o.target).is(".searchbarinput") || $(o.target).is("th")) return !0;
    var a, l, n, r, i = (e.context.sheetobj, e.workingvalues),
        c = e.range;
    switch ("string" != typeof t && (t = ""), e.state) {
        case "start":
            if (o.shiftKey && "[a" == t.substr(0, 2) && (t += "shifted"), "[enter]" == t && (t = "[adown]"), "[tab]" == t && (t = o.shiftKey ? "[aleft]" : "[aright]"), "[a" == t.substr(0, 2) || "[pg" == t.substr(0, 3) || "[home]" == t) return a = e.MoveECellWithKey(t), !a;
            if ("[del]" == t || "[backspace]" == t) {
                e.noEdit || e.ECellReadonly() || e.EditorApplySetCommandsToRange("empty", "");
                break
            }
            if ("[esc]" == t) {
                if (c.hasrange) {
                    e.RangeRemove(), e.MoveECell(c.anchorcoord);
                    for (r in e.StatusCallback) e.StatusCallback[r].func(e, "specialkey", t, e.StatusCallback[r].params)
                }
                return !1
            }
            if ("[f2]" == t) return e.noEdit || e.ECellReadonly() ? !0 : (SocialCalc.EditorOpenCellEdit(e), !1);
            if (t.length > 1 && "[" == t.substr(0, 1) || 0 == t.length) return e.ctrlkeyFunction && t.length > 0 ? e.ctrlkeyFunction(e, t) : !0;
            if (!e.ecell) return !0;
            if (!e.inputBox) return !0;
            if (e.ECellReadonly()) return !0;
            e.inputBox.element.disabled = !1, e.state = "input", e.inputBox.ShowInputBox(!0), e.inputBox.Focus(), e.inputBox.SetText(t), e.inputBox.Select("end"), i.partialexpr = "", i.ecoord = e.ecell.coord, i.erow = e.ecell.row, i.ecol = e.ecell.col, e.RangeRemove();
            break;
        case "input":
            if (n = e.inputBox.GetText(), e.inputBox.skipOne) return !1;
            if ("[esc]" == t || "[enter]" == t || "[tab]" == t || t && "[a" == t.substr(0, 2)) {
                if (("(+-*/,:!&<>=^".indexOf(n.slice(-1)) >= 0 && "=" == n.slice(0, 1) || "=" == n) && (i.partialexpr = n), i.partialexpr && (o.shiftKey && "[a" == t.substr(0, 2) && (t += "shifted"), l = e.MoveECellWithKey(t))) return e.inputBox.SetText(c.hasrange ? i.partialexpr + SocialCalc.crToCoord(c.left, c.top) + ":" + SocialCalc.crToCoord(c.right, c.bottom) : i.partialexpr + l), !1;
                e.inputBox.Blur(), e.inputBox.ShowInputBox(!1), e.state = "start", e.cellhandles.ShowCellHandles(!0), "[esc]" != t ? (e.EditorSaveEdit(), e.ecell.coord != i.ecoord && e.MoveECell(i.ecoord), "[enter]" == t && (t = "[adown]"), "[tab]" == t && (t = o.shiftKey ? "[aleft]" : "[aright]"), "[a" == t.substr(0, 2) && e.MoveECellWithKey(t)) : (e.inputBox.DisplayCellContents(), e.RangeRemove(), e.MoveECell(i.ecoord));
                break
            }
            return i.partialexpr && "[backspace]" == t ? (e.inputBox.SetText(i.partialexpr), i.partialexpr = "", e.RangeRemove(), e.MoveECell(i.ecoord), e.inputBox.ShowInputBox(!0), !1) : "[f2]" == t ? !1 : (c.hasrange && e.RangeRemove(), e.MoveECell(i.ecoord), i.partialexpr && (e.inputBox.ShowInputBox(!0), i.partialexpr = ""), !0);
        case "inputboxdirect":
            if (n = e.inputBox.GetText(), "[esc]" == t || "[enter]" == t || "[tab]" == t) {
                e.inputBox.Blur(), e.inputBox.ShowInputBox(!1), e.state = "start", e.cellhandles.ShowCellHandles(!0), "[esc]" == t ? e.inputBox.DisplayCellContents() : (e.EditorSaveEdit(), e.ecell.coord != i.ecoord && e.MoveECell(i.ecoord), "[enter]" == t && (t = "[adown]"), "[tab]" == t && (t = o.shiftKey ? "[aleft]" : "[aright]"), "[a" == t.substr(0, 2) && e.MoveECellWithKey(t));
                break
            }
            return "[f2]" == t ? !1 : !0;
        case "skip-and-start":
            return e.state = "start", e.cellhandles.ShowCellHandles(!0), !1;
        default:
            return !0
    }
    return !1
}, SocialCalc.EditorAddToInput = function(e, t, o) {
    var a = e.workingvalues;
    if (!e.noEdit && !e.ECellReadonly()) switch (e.state) {
        case "start":
            e.state = "input", e.inputBox.ShowInputBox(!0), e.inputBox.element.disabled = !1, e.inputBox.Focus(), e.inputBox.SetText((o || "") + t), e.inputBox.Select("end"), a.partialexpr = "", a.ecoord = e.ecell.coord, a.erow = e.ecell.row, a.ecol = e.ecell.col, e.RangeRemove();
            break;
        case "input":
        case "inputboxdirect":
            e.inputBox.element.focus(), a.partialexpr && (e.inputBox.SetText(a.partialexpr), a.partialexpr = "", e.RangeRemove(), e.MoveECell(a.ecoord)), e.inputBox.SetText(e.inputBox.GetText() + t)
    }
}, SocialCalc.EditorDisplayCellContents = function(e) {
    e.inputBox && e.inputBox.DisplayCellContents()
}, SocialCalc.EditorSaveEdit = function(e, t) {
    var o, a, l, n, r, i, c = e.context.sheetobj,
        s = e.workingvalues,
        d = s.ecoord;
    l = "text t", n = "string" == typeof t ? t : e.inputBox.GetText(), r = SocialCalc.GetCellContents(c, s.ecoord) + "", n != r && (a = n.charAt(0), "=" == a && -1 == n.indexOf("\n") ? (l = "formula", n = n.substring(1)) : "'" == a ? (l = "text t", n = n.substring(1), o = SocialCalc.DetermineValueType(n), "t" == o.type.charAt(0) && (l = "text " + o.type)) : 0 == n.length ? l = "empty" : (o = SocialCalc.DetermineValueType(n), l = "n" == o.type && n == o.value + "" ? "value n" : "t" == o.type.charAt(0) ? "text " + o.type : "" == o.type ? "text t" : "constant " + o.type + " " + o.value), "t" == l.charAt(0) && (n = SocialCalc.encodeForSave(n)), i = "set " + d + " " + l + " " + n, e.EditorScheduleSheetCommands(i, !0, !1), d && setTimeout(function() {
        c.Customcells && (c.Customcells[d] = c.cells[d]), SocialCalc.SpreadsheetControl.FindInSheet(), e = SocialCalc.GetSpreadsheetControlObject().editor, e.ScrollRelativeBoth(0, 3), e.ScrollRelativeBoth(0, -3)
    }, 500))
}, SocialCalc.EditorApplySetCommandsToRange = function(e, t) {
    var o, a, l = (e.context.sheetobj, e.ecell),
        n = e.range;
    n.hasrange ? (coord = SocialCalc.crToCoord(n.left, n.top) + ":" + SocialCalc.crToCoord(n.right, n.bottom), o = "set " + coord + " " + t, a = e.EditorScheduleSheetCommands(o, !0, !1)) : (o = "set " + l.coord + " " + t, a = e.EditorScheduleSheetCommands(o, !0, !1)), e.DisplayCellContents()
}, SocialCalc.EditorProcessMouseWheel = function(e, t, o, a) {
    a.functionobj.editor.busy || (t > 0 && a.functionobj.editor.ScrollRelative(!0, Math.floor(1.5 * -t)), 0 > t && a.functionobj.editor.ScrollRelative(!0, Math.ceil(1.5 * -t)))
}, SocialCalc.GridMousePosition = function(e, t, o) {
    var a, l, n, r, i, c, s = {};
    for (a = 1; a < e.rowpositions.length && !(e.rowheight[a] && e.rowpositions[a] + e.rowheight[a] > o); a++);
    for (n = 1; n < e.colpositions.length && !(e.colwidth[n] && e.colpositions[n] + e.colwidth[n] > t); n++);
    if (s.row = a, s.col = n, e.headposition) {
        if (t < e.headposition.left && t >= e.gridposition.left) {
            for (s.rowheader = !0, s.distance = e.headposition.left - t, s.rowtoresize = !1, s.rowselect = !1, i = 1; i < e.rowpositions.length; i++)
                if (e.rowheight[i] && e.rowpositions[i] + e.rowheight[i] - 3 <= o && e.rowpositions[i] + e.rowheight[i] + 3 >= o) {
                    s.rowtoresize = i;
                    break
                }
            for ((unhide = e.context.rowunhidetop[a]) && (pos = SocialCalc.GetElementPosition(unhide), t >= pos.left && t < pos.left + unhide.offsetWidth && o >= e.rowpositions[a] + e.rowheight[a] - unhide.offsetHeight && o < e.rowpositions[a] + e.rowheight[a] && (s.rowtounhide = a + 1)), (unhide = e.context.rowunhidebottom[a]) && (pos = SocialCalc.GetElementPosition(unhide), t >= pos.left && t < pos.left + unhide.offsetWidth && o >= e.rowpositions[a] && o < e.rowpositions[a] + unhide.offsetHeight && (s.rowtounhide = a - 1)), l = 0; l < e.context.rowpanes.length; l++)
                if (s.rowtoresize >= e.context.rowpanes[l].first && s.rowtoresize <= e.context.rowpanes[l].last) return s;
            return delete s.rowtoresize, s.rowselect = !0, s
        }
        if (o < e.headposition.top && o > e.gridposition.top) {
            for (s.colheader = !0, s.distance = e.headposition.top - o, s.coltoresize = !1, s.colselect = !1, c = 1; c < e.colpositions.length; c++)
                if (e.colwidth[c] && e.colpositions[c] + e.colwidth[c] - 3 <= t && e.colpositions[c] + e.colwidth[c] + 3 >= t) {
                    s.coltoresize = c;
                    break
                }
            for ((unhide = e.context.colunhideleft[n]) && (pos = SocialCalc.GetElementPosition(unhide), t >= pos.left && t < pos.left + unhide.offsetWidth && o >= pos.top && o < pos.top + unhide.offsetHeight && (s.coltounhide = n + 1)), (unhide = e.context.colunhideright[n]) && (pos = SocialCalc.GetElementPosition(unhide), t >= pos.left && t < pos.left + unhide.offsetWidth && o >= pos.top && o < pos.top + unhide.offsetHeight && (s.coltounhide = n - 1)), r = 0; r < e.context.colpanes.length; r++)
                if (s.coltoresize >= e.context.colpanes[r].first && s.coltoresize <= e.context.colpanes[r].last) return s;
            return delete s.coltoresize, s.colselect = !0, s
        }
        return t >= e.verticaltablecontrol.controlborder ? (s.rowfooter = !0, s.distance = t - e.verticaltablecontrol.controlborder, s) : o >= e.horizontaltablecontrol.controlborder ? (s.colfooter = !0, s.distance = o - e.horizontaltablecontrol.controlborder, s) : t < e.gridposition.left ? (s.rowheader = !0, s.distance = e.headposition.left - t, s) : o <= e.gridposition.top ? (s.colheader = !0, s.distance = e.headposition.top - o, s) : (s.coord = SocialCalc.crToCoord(s.col, s.row), e.context.cellskip[s.coord] && (s.coord = e.context.cellskip[s.coord]), s)
    }
    return null
}, SocialCalc.GetEditorCellElement = function(e, t, o) {
    var a, l, n, r, i = 0,
        c = 0;
    for (a = 0; a < e.context.rowpanes.length; a++) {
        if (t >= e.context.rowpanes[a].first && t <= e.context.rowpanes[a].last)
            for (l = 0; l < e.context.colpanes.length; l++) {
                if (o >= e.context.colpanes[l].first && o <= e.context.colpanes[l].last) {
                    for (i += t - e.context.rowpanes[a].first + 2, n = e.context.colpanes[l].first; o >= n; n++) r = e.context.cellskip[SocialCalc.crToCoord(n, t)], r && e.context.CoordInPane(r, a, l) || c++;
                    return {
                        element: e.griddiv.firstChild.lastChild.childNodes[i].childNodes[c],
                        rowpane: a,
                        colpane: l
                    }
                }
                for (n = e.context.colpanes[l].first; n <= e.context.colpanes[l].last; n++) r = e.context.cellskip[SocialCalc.crToCoord(n, t)], r && e.context.CoordInPane(r, a, l) || c++;
                c += 1
            }
        i += e.context.rowpanes[a].last - e.context.rowpanes[a].first + 1 + 1
    }
    return null
}, SocialCalc.MoveECellWithKey = function(e, t) {
    var o, a, l, n, r = !1,
        i = 1;
    if (!e.ecell) return null;
    switch ("shifted" == t.slice(-7) && (t = t.slice(0, -7), r = !0), a = e.ecell.row, l = e.ecell.col, n = e.context.sheetobj.cells[e.ecell.coord], t) {
        case "[adown]":
            a += n && n.rowspan || 1;
            break;
        case "[aup]":
            a--, i = -1;
            break;
        case "[pgdn]":
            a += e.pageUpDnAmount - 1 + (n && n.rowspan || 1);
            break;
        case "[pgup]":
            a -= e.pageUpDnAmount, i = -1;
            break;
        case "[aright]":
            l += n && n.colspan || 1;
            break;
        case "[aleft]":
            l--, i = -1;
            break;
        case "[home]":
            a = 1, l = 1;
            break;
        default:
            return null
    }
    for (e.context.sheetobj.attribs.usermaxcol && (l = Math.min(e.context.sheetobj.attribs.usermaxcol, l)), e.context.sheetobj.attribs.usermaxrow && (a = Math.min(e.context.sheetobj.attribs.usermaxrow, a));
        "yes" == e.context.sheetobj.colattribs.hide[SocialCalc.rcColname(l)];) l += i, 1 > l && (i = -i, l = 1);
    for (;
        "yes" == e.context.sheetobj.rowattribs.hide[a];) a += i, 1 > a && (i = -i, a = 1);
    return e.range.hasrange || r && e.RangeAnchor(), o = e.MoveECell(SocialCalc.crToCoord(l, a)), e.context.sheetobj.cellsids[e.ecell.row - 1] && (e.ecell.coord = e.customecell.coord = SocialCalc.crToCoord(e.ecell.col, e.context.sheetobj.cellsids[e.ecell.row - 1])), e.range.hasrange && (r ? e.RangeExtend() : e.RangeRemove()), o
}, SocialCalc.MoveECell = function(e, t) {
    var o, a, l = e.context.highlights,
        n = SocialCalc.coordToCr(t);
    if (e.context.sheetobj.attribs.usermaxcol && n.col > e.context.sheetobj.attribs.usermaxcol && (n.col = e.context.sheetobj.attribs.usermaxcol), e.context.sheetobj.attribs.usermaxrow && n.row > e.context.sheetobj.attribs.usermaxrow && (n.row = e.context.sheetobj.attribs.usermaxrow), t = SocialCalc.crToCoord(n.col, n.row), e.ecell) {
        if (e.ecell.coord == t) return t;
        o = SocialCalc.GetEditorCellElement(e, e.ecell.row, e.ecell.col), delete l[e.ecell.coord], e.range2.hasrange && e.ecell.row >= e.range2.top && e.ecell.row <= e.range2.bottom && e.ecell.col >= e.range2.left && e.ecell.col <= e.range2.right && (l[e.ecell.coord] = "range2"), e.UpdateCellCSS(o, e.ecell.row, e.ecell.col), e.SetECellHeaders(""), e.cellhandles.ShowCellHandles(!1)
    }
    t = e.context.cellskip[t] || t, e.ecell = SocialCalc.coordToCr(t), e.ecell.coord = t, o = SocialCalc.GetEditorCellElement(e, e.ecell.row, e.ecell.col), l[t] = "cursor";
    for (a in e.MoveECellCallback) e.MoveECellCallback[a](e);
    e.UpdateCellCSS(o, e.ecell.row, e.ecell.col), e.SetECellHeaders("selected");
    for (a in e.StatusCallback) e.StatusCallback[a].func(e, "moveecell", t, e.StatusCallback[a].params);
    return e.busy ? e.ensureecell = !0 : (e.ensureecell = !1, e.EnsureECellVisible()), t
}, SocialCalc.EnsureECellVisible = function(e) {
    var t = 0,
        o = 0,
        a = !0;
    e.customlastRow == e.ecell.row && (a = !1), e.ecell.row > e.lastnonscrollingrow && (e.ecell.row < e.firstscrollingrow ? t = e.ecell.row - e.firstscrollingrow - Math.floor((e.lastvisiblerow - e.firstscrollingrow) / 2) : e.ecell.row + 1 > e.lastvisiblerow && (t = e.ecell.row - e.lastvisiblerow + Math.floor((e.lastvisiblerow - e.firstscrollingrow) / 2))), e.ecell.col > e.lastnonscrollingcol && (e.ecell.col < e.firstscrollingcol ? o = e.ecell.col - e.firstscrollingcol - Math.floor((e.lastvisiblecol - e.firstscrollingcol) / 2) : e.ecell.col + 1 > e.lastvisiblecol && (o = e.ecell.col - e.lastvisiblecol + Math.floor((e.lastvisiblecol - e.firstscrollingcol) / 2))), 0 != t && a || 0 != o ? e.ScrollRelativeBoth(t, o) : e.cellhandles.ShowCellHandles(!0)
}, SocialCalc.ReplaceCell = function(e, t, o, a) {
    var l, n;
    if (t && (l = e.context.RenderCell(o, a, t.rowpane, t.colpane, !0, null))) {
        t.element.innerHTML = l.innerHTML, t.element.style.cssText = "", t.element.className = l.className;
        for (n in l.style) "cssText" != l.style[n] && (t.element.style[n] = l.style[n])
    }
}, SocialCalc.UpdateCellCSS = function(e, t, o, a) {
    var l, n;
    if (t && (l = e.context.RenderCell(o, a, t.rowpane, t.colpane, !0, null))) {
        t.element.style.cssText = "", t.element.className = l.className;
        for (n in l.style) "cssText" != l.style[n] && (t.element.style[n] = l.style[n])
    }
}, SocialCalc.SetECellHeaders = function(e, t) {
    var o, a, l, n, r, i = e.ecell,
        c = e.context,
        s = 0,
        d = 0;
    if (i) {
        for (;
            "yes" == c.sheetobj.colattribs.hide[SocialCalc.rcColname(i.col)];) i.col++;
        for (;
            "yes" == c.sheetobj.rowattribs.hide[i.row];) i.row++;
        for (i.coord = SocialCalc.crToCoord(i.col, i.row), o = 0; o < c.rowpanes.length; o++) l = c.rowpanes[o].first, n = c.rowpanes[o].last, i.row >= l && i.row <= n && (r = e.fullgrid.childNodes[2].childNodes[2 + s + i.row - l].childNodes[0], r && (c.classnames && (r.className = c.classnames[t + "rowname"]), c.explicitStyles && (r.style.cssText = c.explicitStyles[t + "rowname"]), r.style.verticalAlign = "top")), s += n - l + 1 + 1;
        for (a = 0; a < c.colpanes.length; a++) l = c.colpanes[a].first, n = c.colpanes[a].last, i.col >= l && i.col <= n && (r = e.fullgrid.childNodes[1].childNodes[1].childNodes[1 + d + i.col - l], r && (c.classnames && (r.className = c.classnames[t + "colname"]), c.explicitStyles && (r.style.cssText = c.explicitStyles[t + "colname"]))), d += n - l + 1 + 1
    }
}, SocialCalc.ECellReadonly = function(e, t) {
    if (!t && e.ecell && (t = e.ecell.coord), !t) return !1;
    var o = e.context.sheetobj.cells[t];
    return o && o.readonly
}, SocialCalc.RangeAnchor = function(e, t) {
    e.range.hasrange && e.RangeRemove(), e.RangeExtend(t)
}, SocialCalc.RangeExtend = function(e, t) {
    var o, a, l, n, r, i, c, s = e.context.highlights,
        d = e.range,
        u = e.range2;
    if (t ? (c = SocialCalc.coordToCr(t), c.coord = t) : c = e.ecell, c) {
        d.hasrange || (d.anchorcoord = c.coord, d.anchorrow = c.row, d.top = c.row, d.bottom = c.row, d.anchorcol = c.col, d.left = c.col, d.right = c.col, d.hasrange = !0), d.anchorrow < c.row ? (d.top = d.anchorrow, d.bottom = c.row) : (d.top = c.row, d.bottom = d.anchorrow), d.anchorcol < c.col ? (d.left = d.anchorcol, d.right = c.col) : (d.left = c.col, d.right = d.anchorcol);
        for (l in s) switch (s[l]) {
            case "range":
                s[l] = "unrange";
                break;
            case "range2":
                s[l] = "unrange2"
        }
        for (n = d.top; n <= d.bottom; n++)
            for (r = d.left; r <= d.right; r++) switch (l = SocialCalc.crToCoord(r, n), s[l]) {
                case "unrange":
                    s[l] = "range";
                    break;
                case "cursor":
                    break;
                case "unrange2":
                default:
                    s[l] = "newrange"
            }
        for (n = u.top; u.hasrange && n <= u.bottom; n++)
            for (r = u.left; r <= u.right; r++) switch (l = SocialCalc.crToCoord(r, n), s[l]) {
                case "unrange2":
                    s[l] = "range2";
                    break;
                case "range":
                case "newrange":
                case "cursor":
                    break;
                default:
                    s[l] = "newrange2"
            }
        for (l in s) {
            switch (s[l]) {
                case "unrange":
                    delete s[l];
                    break;
                case "newrange":
                    s[l] = "range";
                    break;
                case "newrange2":
                    s[l] = "range2";
                    break;
                case "range":
                case "range2":
                case "cursor":
                    continue
            }
            a = SocialCalc.coordToCr(l), o = SocialCalc.GetEditorCellElement(e, a.row, a.col), e.UpdateCellCSS(o, a.row, a.col)
        }
        for (i in e.RangeChangeCallback) e.RangeChangeCallback[i](e);
        l = SocialCalc.crToCoord(e.range.left, e.range.top), (e.range.left != e.range.right || e.range.top != e.range.bottom) && (l += ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom));
        for (i in e.StatusCallback) e.StatusCallback[i].func(e, "rangechange", l, e.StatusCallback[i].params)
    }
}, SocialCalc.RangeRemove = function(e) {
    var t, o, a, l, n, r, i = e.context.highlights,
        c = e.range,
        s = e.range2;
    if (c.hasrange || s.hasrange) {
        for (l = s.top; s.hasrange && l <= s.bottom; l++)
            for (n = s.left; n <= s.right; n++) switch (a = SocialCalc.crToCoord(n, l), i[a]) {
                case "range":
                    i[a] = "newrange2";
                    break;
                case "range2":
                case "cursor":
                    break;
                default:
                    i[a] = "newrange2"
            }
        for (a in i) {
            switch (i[a]) {
                case "range":
                    delete i[a];
                    break;
                case "newrange2":
                    i[a] = "range2";
                    break;
                case "cursor":
                    continue
            }
            o = SocialCalc.coordToCr(a), t = SocialCalc.GetEditorCellElement(e, o.row, o.col), e.UpdateCellCSS(t, o.row, o.col)
        }
        c.hasrange = !1;
        for (r in e.RangeChangeCallback) e.RangeChangeCallback[r](e);
        for (r in e.StatusCallback) e.StatusCallback[r].func(e, "rangechange", "", e.StatusCallback[r].params)
    }
}, SocialCalc.Range2Remove = function(e) {
    var t, o, a, l = e.context.highlights,
        n = e.range2;
    if (n.hasrange) {
        for (a in l) {
            switch (l[a]) {
                case "range2":
                    delete l[a];
                    break;
                case "range":
                case "cursor":
                    continue
            }
            o = SocialCalc.coordToCr(a), t = SocialCalc.GetEditorCellElement(e, o.row, o.col), e.UpdateCellCSS(t, o.row, o.col)
        }
        n.hasrange = !1
    }
}, SocialCalc.FitToEditTable = function(e) {
    {
        var t, o, a, l, n, r, i, c, s = e.context,
            d = s.sheetobj;
        d.colattribs
    }
    for (l = s.showRCHeaders ? s.rownamewidth - 0 : 0, colpane = 0; colpane < s.colpanes.length - 1; colpane++)
        for (t = s.colpanes[colpane].first; t <= s.colpanes[colpane].last; t++) o = SocialCalc.rcColname(t), "yes" != d.colattribs.hide[o] && (a = d.colattribs.width[o] || d.attribs.defaultcolwidth || SocialCalc.Constants.defaultColWidth, ("blank" == a || "auto" == a) && (a = ""), l += a && a - 0 > 0 ? a - 0 : 10);
    for (t = s.colpanes[colpane].first; 1e4 >= t && (o = SocialCalc.rcColname(t), "yes" != d.colattribs.hide[o] && (a = d.colattribs.width[o] || d.attribs.defaultcolwidth || SocialCalc.Constants.defaultColWidth, ("blank" == a || "auto" == a) && (a = ""), l += a && a - 0 > 0 ? a - 0 : 10), !(l > e.tablewidth)); t++);
    for (s.colpanes[colpane].last = s.sheetobj.attribs.usermaxcol || t, n = s.showRCHeaders ? 1 : 0, i = 0; i < s.rowpanes.length - 1; i++)
        for (n += s.rowpanes[i].last - s.rowpanes[i].first + 1, r = s.rowpanes[i].first; r <= s.rowpanes[i].last; r++) "yes" == d.rowattribs.hide[r] && n--;
    c = e.tableheight - n * s.pixelsPerRow, s.rowpanes[i].last = s.sheetobj.attribs.usermaxrow || s.rowpanes[i].first + Math.floor(c / s.pixelsPerRow) + 1
}, SocialCalc.CalculateEditorPositions = function(e) {
    var t, o, a;
    e.gridposition = SocialCalc.GetElementPosition(e.griddiv);
    var l = e.griddiv.firstChild.lastChild.childNodes[1].childNodes[0];
    for (e.headposition = SocialCalc.GetElementPosition(l), e.headposition.left += l.offsetWidth, e.headposition.top += l.offsetHeight, e.rowpositions = [], t = 0; t < e.context.rowpanes.length; t++) e.CalculateRowPositions(t, e.rowpositions, e.rowheight);
    for (a = 0; a < e.rowpositions.length && !(e.rowpositions[a] > e.gridposition.top + e.tableheight); a++);
    for (e.lastvisiblerow = a - 1, e.colpositions = [], o = 0; o < e.context.colpanes.length; o++) e.CalculateColPositions(o, e.colpositions, e.colwidth);
    for (a = 0; a < e.colpositions.length && !(e.colpositions[a] > e.gridposition.left + e.tablewidth); a++);
    for (e.lastvisiblecol = a - 1, e.firstscrollingrow = e.context.rowpanes[e.context.rowpanes.length - 1].first;
        "yes" == e.context.sheetobj.rowattribs.hide[e.firstscrollingrow];) e.firstscrollingrow++;
    for (e.firstscrollingrowtop = e.rowpositions[e.firstscrollingrow] || e.headposition.top, e.lastnonscrollingrow = e.context.rowpanes.length - 1 > 0 ? e.context.rowpanes[e.context.rowpanes.length - 2].last : 0, e.firstscrollingcol = e.context.colpanes[e.context.colpanes.length - 1].first;
        "yes" == e.context.sheetobj.colattribs.hide[SocialCalc.rcColname(e.firstscrollingcol)];) e.firstscrollingcol++;
    e.firstscrollingcolleft = e.colpositions[e.firstscrollingcol] || e.headposition.left, e.lastnonscrollingcol = e.context.colpanes.length - 1 > 0 ? e.context.colpanes[e.context.colpanes.length - 2].last : 0, e.verticaltablecontrol.ComputeTableControlPositions(), e.horizontaltablecontrol.ComputeTableControlPositions()
}, SocialCalc.ScheduleRender = function(e) {
    e.timeout && window.clearTimeout(e.timeout), SocialCalc.EditorSheetStatusCallback(null, "schedrender", null, e), e.timeout = window.setTimeout(function() {
        SocialCalc.DoRenderStep(e)
    }, 1)
}, SocialCalc.DoRenderStep = function(e) {
    e.timeout = null, e.EditorRenderSheet(), SocialCalc.EditorSheetStatusCallback(null, "renderdone", null, e), SocialCalc.EditorSheetStatusCallback(null, "schedposcalc", null, e), e.timeout = window.setTimeout(function() {
        SocialCalc.DoPositionCalculations(e)
    }, 1)
}, SocialCalc.SchedulePositionCalculations = function(e) {
    SocialCalc.EditorSheetStatusCallback(null, "schedposcalc", null, e), e.timeout = window.setTimeout(function() {
        SocialCalc.DoPositionCalculations(e)
    }, 1)
}, SocialCalc.DoPositionCalculations = function(e) {
    e.timeout = null, e.CalculateEditorPositions(), e.verticaltablecontrol.PositionTableControlElements(), e.horizontaltablecontrol.PositionTableControlElements(), SocialCalc.EditorSheetStatusCallback(null, "doneposcalc", null, e), e.ensureecell && e.ecell && !e.deferredCommands.length && (e.ensureecell = !1, e.EnsureECellVisible()), e.cellhandles.ShowCellHandles(!0)
}, SocialCalc.CalculateRowPositions = function(e, t, o, a) {
    {
        var l, n, r, i, c, s, d = e.context;
        d.sheetobj
    }
    if (!d.showRCHeaders) throw "Needs showRCHeaders=true";
    for (s = e.fullgrid.lastChild, l = 2, n = 0; t > n; n++) l += d.rowpanes[n].last - d.rowpanes[n].first + 2;
    for (i = 0, r = d.rowpanes[n].first; r <= d.rowpanes[n].last; r++) c = s.childNodes[l + i], i++, c && (o[r] || (o[r] = c.firstChild.offsetTop, a[r] = c.firstChild.offsetHeight))
}, SocialCalc.CalculateColPositions = function(e, t, o, a) {
    {
        var l, n, r, i, c, s, d, u = e.context;
        u.sheetobj
    }
    if (!u.showRCHeaders) throw "Needs showRCHeaders=true";
    for (d = e.fullgrid.lastChild, l = 1, n = 0; t > n; n++) l += u.colpanes[n].last - u.colpanes[n].first + 2;
    for (c = d.childNodes[1], i = 0, r = u.colpanes[n].first; r <= u.colpanes[n].last; r++) s = SocialCalc.GetElementPosition(c.childNodes[l + i]), o[r] || (o[r] = s.left, c.childNodes[l + i] && (a[r] = c.childNodes[l + i].offsetWidth)), i++
}, SocialCalc.ScrollRelative = function(e, t, o) {
    t ? e.ScrollRelativeBoth(o, 0) : e.ScrollRelativeBoth(0, o)
}, SocialCalc.ScrollRelativeBoth = function(e, t, o) {
    var a = e.context,
        l = t > 0 ? 1 : -1,
        n = o > 0 ? 1 : -1,
        r = a.rowpanes.length,
        i = r > 1 ? a.rowpanes[r - 2].last + 1 : 1;
    a.rowpanes[r - 1].first + t < i && (t = -a.rowpanes[r - 1].first + i);
    var c = a.colpanes.length,
        s = c > 1 ? a.colpanes[c - 2].last + 1 : 1;
    for (a.colpanes[c - 1].first + o < s && (o = -a.colpanes[c - 1].first + s);
        "yes" == a.sheetobj.colattribs.hide[SocialCalc.rcColname(a.colpanes[c - 1].first + o)];)
        if (o += n, 1 > o) {
            o = 0;
            break
        }
    for (;
        "yes" == a.sheetobj.rowattribs.hide[a.rowpanes[r - 1].first + t];)
        if (t += l, 1 > t) {
            t = 0;
            break
        }
    return 1 != t && -1 != t || 0 != o ? void((0 != t || 0 != o) && (a.rowpanes[r - 1].first += t, a.rowpanes[r - 1].last += t, a.colpanes[c - 1].first += o, a.colpanes[c - 1].last += o, e.LimitLastPanes(), e.FitToEditTable(), e.ScheduleRender())) : (1 == t ? e.ScrollTableUpOneRow() : e.ScrollTableDownOneRow(), e.ecell && e.SetECellHeaders("selected"), void e.SchedulePositionCalculations())
}, SocialCalc.PageRelative = function(e, t, o) {
    var a, l, n, r, i = e.context,
        c = t ? "rowpanes" : "colpanes",
        s = i[c][i[c].length - 1],
        d = t ? "lastvisiblerow" : "lastvisiblecol",
        u = t ? e.rowheight : e.colwidth,
        p = t ? SocialCalc.Constants.defaultAssumedRowHeight : SocialCalc.Constants.defaultColWidth;
    if (o > 0) l = e[d], l == s.first && (l += 1);
    else {
        for (n = t ? e.tableheight - (e.firstscrollingrowtop - e.gridposition.top) : e.tablewidth - (e.firstscrollingcolleft - e.gridposition.left), n -= u[e[d]] > 0 ? u[e[d]] : p, l = s.first - 1; l > 0 && (a = u[l] > 0 ? u[l] : p, !(a > n)); l--) n -= a;
        r = s.first, l >= r && (l = r - 1), 1 > l && (l = 1)
    }
    s.first = l, s.last = l + 1, e.LimitLastPanes(), e.FitToEditTable(), e.ScheduleRender()
}, SocialCalc.LimitLastPanes = function(e) {
    var t, o = e.context;
    t = o.rowpanes.length, t > 1 && o.rowpanes[t - 1].first <= o.rowpanes[t - 2].last && (o.rowpanes[t - 1].first = o.rowpanes[t - 2].last + 1), o.sheetobj.attribs.usermaxrow && o.rowpanes[t - 1].first > o.sheetobj.attribs.usermaxrow && (o.rowpanes[t - 1].first = o.sheetobj.attribs.usermaxrow), t = o.colpanes.length, t > 1 && o.colpanes[t - 1].first <= o.colpanes[t - 2].last && (o.colpanes[t - 1].first = o.colpanes[t - 2].last + 1), o.sheetobj.attribs.usermaxcol && o.colpanes[t - 1].first > o.sheetobj.attribs.usermaxcol && (o.colpanes[t - 1].first = o.sheetobj.attribs.usermaxcol)
}, SocialCalc.ScrollTableUpOneRow = function(e) {
    var t, o, a, l, n, r, i, c, s, d, u, p, f = {},
        h = e.context,
        m = h.sheetobj,
        C = e.fullgrid;
    for (p = C.lastChild, t = h.showRCHeaders ? 2 : 1, o = 0; o < h.rowpanes.length - 1; o++) t += h.rowpanes[o].last - h.rowpanes[o].first + 2;
    if (h.sheetobj.attribs.usermaxrow && h.sheetobj.attribs.usermaxrow - h.rowpanes[o].first < 1) return C;
    for (p.removeChild(p.childNodes[t]), h.rowpanes[o].first++, h.rowpanes[o].last++, e.FitToEditTable(), h.CalculateColWidthData(), h.sheetobj.attribs.usermaxrow && h.rowpanes[o].last == h.sheetobj.attribs.usermaxrow || (c = h.RenderRow(h.rowpanes[o].last, o), p.appendChild(c)), maxrowspan = 1, i = h.rowpanes[o].first - 1, n = 0; n < h.colpanes.length; n++)
        for (l = h.colpanes[n].first; l <= h.colpanes[n].last; l++) coord = SocialCalc.crToCoord(l, i), h.cellskip[coord] || (r = m.cells[coord], r && r.rowspan > maxrowspan && (maxrowspan = r.rowspan));
    if (maxrowspan > 1)
        for (a = 1; maxrowspan > a && !(a + i >= h.rowpanes[o].last); a++) s = h.RenderRow(a + i, o), d = p.childNodes[t + a - 1], p.replaceChild(s, d);
    for (u = h.rowpanes[o].last, n = 0; n < h.colpanes.length; n++)
        for (l = h.colpanes[n].first; l <= h.colpanes[n].last; l++) coord = h.cellskip[SocialCalc.crToCoord(l, u)], coord && (a = h.coordToCR[coord].row - 0, a == h.rowpanes[o].last || a < h.rowpanes[o].first || (r = m.cells[coord], r && r.rowspan > 1 && (f[a] = !0)));
    for (a in f) s = h.RenderRow(a, o), d = p.childNodes[t + (a - h.rowpanes[o].first)], p.replaceChild(s, d);
    return C
}, SocialCalc.ScrollTableDownOneRow = function(e) {
    var t, o, a, l, n, r, i, c, s, d, u, p = {},
        f = e.context,
        h = f.sheetobj,
        m = e.fullgrid;
    for (u = m.lastChild, t = f.showRCHeaders ? 2 : 1, o = 0; o < f.rowpanes.length - 1; o++) t += f.rowpanes[o].last - f.rowpanes[o].first + 2;
    for (f.sheetobj.attribs.usermaxrow || u.removeChild(u.childNodes[t + (f.rowpanes[o].last - f.rowpanes[o].first)]), f.rowpanes[o].first--, f.rowpanes[o].last--, e.FitToEditTable(), f.CalculateColWidthData(), c = f.RenderRow(f.rowpanes[o].first, o), u.insertBefore(c, u.childNodes[t]), maxrowspan = 1, i = f.rowpanes[o].first, n = 0; n < f.colpanes.length; n++)
        for (l = f.colpanes[n].first; l <= f.colpanes[n].last; l++) coord = SocialCalc.crToCoord(l, i), f.cellskip[coord] || (r = h.cells[coord], r && r.rowspan > maxrowspan && (maxrowspan = r.rowspan));
    if (maxrowspan > 1)
        for (a = 1; maxrowspan > a && !(a + i > f.rowpanes[o].last); a++) c = f.RenderRow(a + i, o), s = u.childNodes[t + a], u.replaceChild(c, s);
    for (d = f.rowpanes[o].last, n = 0; n < f.colpanes.length; n++)
        for (l = f.colpanes[n].first; l <= f.colpanes[n].last; l++) coord = SocialCalc.crToCoord(l, d), r = h.cells[coord], r && r.rowspan > 1 ? p[d] = !0 : (coord = f.cellskip[SocialCalc.crToCoord(l, d)], coord && (a = f.coordToCR[coord].row - 0, a == d || a < f.rowpanes[o].first || (r = h.cells[coord], r && r.rowspan > 1 && (p[a] = !0))));
    for (a in p) c = f.RenderRow(a, o), s = u.childNodes[t + (a - f.rowpanes[o].first)], u.replaceChild(c, s);
    return m
}, SocialCalc.InputBox = function(e, t) {
    e && (this.element = e, this.editor = t, this.inputEcho = null, t.inputBox = this, e.onmousedown = SocialCalc.InputBoxOnMouseDown, t.MoveECellCallback.formulabar = function(e) {
        "start" == e.state && t.inputBox.DisplayCellContents(e.ecell.coord)
    })
}, SocialCalc.InputBox.prototype.DisplayCellContents = function(e) {
    SocialCalc.InputBoxDisplayCellContents(this, e)
}, SocialCalc.InputBox.prototype.ShowInputBox = function(e) {
    this.editor.inputEcho.ShowInputEcho(e)
}, SocialCalc.InputBox.prototype.GetText = function() {
    return this.element.value
}, SocialCalc.InputBox.prototype.SetText = function(e) {
    this.element && (this.element.value = e, this.editor.inputEcho.SetText(e + "_"))
}, SocialCalc.InputBox.prototype.Focus = function() {
    SocialCalc.InputBoxFocus(this)
}, SocialCalc.InputBox.prototype.Blur = function() {
    return this.element.blur()
}, SocialCalc.InputBox.prototype.Select = function(e) {
    if (this.element) switch (e) {
        case "end":
            if (document.selection && document.selection.createRange) try {
                var t = document.selection.createRange().duplicate();
                t.moveToElementText(this.element), t.collapse(!1), t.select()
            } catch (o) {
                void 0 != this.element.selectionStart && (this.element.selectionStart = this.element.value.length, this.element.selectionEnd = this.element.value.length)
            } else void 0 != this.element.selectionStart && (this.element.selectionStart = this.element.value.length, this.element.selectionEnd = this.element.value.length)
    }
}, SocialCalc.InputBoxDisplayCellContents = function(e, t) {
    var o = SocialCalc.Constants;
    if (e) {
        t || (t = e.editor.ecell.coord);
        var a = SocialCalc.GetCellContents(e.editor.context.sheetobj, t); - 1 != a.indexOf("\n") ? (a = o.s_inputboxdisplaymultilinetext, e.element.disabled = !0) : e.element.disabled = e.editor.ECellReadonly() ? !0 : !1, e.SetText(a)
    }
}, SocialCalc.InputBoxFocus = function(e) {
    if (e) {
        e.element.focus();
        var t = e.editor;
        t.state = "input";
        var o = t.workingvalues;
        o.partialexpr = "", o.ecoord = t.ecell.coord, o.erow = t.ecell.row, o.ecol = t.ecell.col
    }
}, SocialCalc.InputBoxOnMouseDown = function() {
    var e = SocialCalc.Keyboard.focusTable;
    if (!e) return !0;
    var t = e.workingvalues;
    switch (e.state) {
        case "start":
            e.state = "inputboxdirect", t.partialexpr = "", t.ecoord = e.ecell.coord, t.erow = e.ecell.row, t.ecol = e.ecell.col, e.inputEcho.ShowInputEcho(!0);
            break;
        case "input":
            t.partialexpr = "", e.MoveECell(t.ecoord), e.state = "inputboxdirect", SocialCalc.KeyboardFocus();
            break;
        case "inputboxdirect":
    }
}, SocialCalc.InputEcho = function(e) {
    var t = SocialCalc.Constants;
    this.editor = e, this.text = "", this.interval = null, this.container = null, this.main = null, this.prompt = null, this.hint = null, this.functionbox = null, this.container = document.createElement("div"), SocialCalc.setStyles(this.container, "display:none;position:absolute;zIndex:10;"), this.main = document.createElement("div"), t.defaultInputEchoClass && (this.main.className = t.defaultInputEchoClass), t.defaultInputEchoStyle && SocialCalc.setStyles(this.main, t.defaultInputEchoStyle), this.main.innerHTML = "&nbsp;", this.hint = document.createElement("div"), t.defaultInputEchoHintClass && (this.hint.className = t.defaultInputEchoHintClass), t.defaultInputEchoHintStyle && SocialCalc.setStyles(this.hint, t.defaultInputEchoHintStyle), this.hint.innerHTML = "", this.container.appendChild(this.hint), this.container.appendChild(this.main), this.prompt = document.createElement("div"), t.defaultInputEchoPromptClass && (this.prompt.className = t.defaultInputEchoPromptClass), t.defaultInputEchoPromptStyle && SocialCalc.setStyles(this.prompt, t.defaultInputEchoPromptStyle), this.prompt.innerHTML = "", this.container.appendChild(this.prompt), SocialCalc.DragRegister(this.main, !0, !0, {
        MouseDown: SocialCalc.DragFunctionStart,
        MouseMove: SocialCalc.DragFunctionPosition,
        MouseUp: SocialCalc.DragFunctionPosition,
        Disabled: null,
        positionobj: this.container
    }, this.editor.toplevel), e.toplevel.appendChild(this.container)
}, SocialCalc.InputEcho.prototype.ShowInputEcho = function(e) {
    return SocialCalc.ShowInputEcho(this, e)
}, SocialCalc.InputEcho.prototype.SetText = function(e) {
    return SocialCalc.SetInputEchoText(this, e)
}, SocialCalc.ShowInputEcho = function(e, t) {
    var o, a, l = e.editor;
    l && (t ? (l.cellhandles.ShowCellHandles(!1), o = SocialCalc.GetEditorCellElement(l, l.ecell.row, l.ecell.col), o && (a = SocialCalc.GetElementPosition(o.element), e.container.style.left = a.left - 1 + "px", e.container.style.top = a.top - 1 + "px"), e.hint.innerHTML = l.ecell.coord, e.container.style.display = "block", e.interval && window.clearInterval(e.interval), e.interval = window.setInterval(SocialCalc.InputEchoHeartbeat, 50)) : (e.interval && window.clearInterval(e.interval), e.container.style.display = "none"))
}, SocialCalc.SetInputEchoText = function(e, t) {
    var o, a, l = SocialCalc.Constants,
        n = SocialCalc.special_chars(t);
    n = n.replace(/\n/g, "<br>"), e.text != n && (e.main.innerHTML = n, e.text = n);
    var r = t.match(/.*[\+\-\*\/\&\^\<\>\=\,\(]([A-Za-z][A-Za-z][\w\.]*?)\([^\)]*$/);
    "=" == t.charAt(0) && r ? (o = r[1].toUpperCase(), SocialCalc.Formula.FunctionList[o] ? (SocialCalc.Formula.FillFunctionInfo(), a = SocialCalc.special_chars(o + "(" + SocialCalc.Formula.FunctionArgString(o) + ")")) : a = l.ietUnknownFunction + o, e.prompt.innerHTML != a && (e.prompt.innerHTML = a, e.prompt.style.display = "block")) : "none" != e.prompt.style.display && (e.prompt.innerHTML = "", e.prompt.style.display = "none")
}, SocialCalc.InputEchoHeartbeat = function() {
    var e = SocialCalc.Keyboard.focusTable;
    return e ? void e.inputEcho.SetText(e.inputBox.GetText() + "_") : !0
}, SocialCalc.InputEchoMouseDown = function(e) {
    var t = (e || window.event, SocialCalc.Keyboard.focusTable);
    return t ? void t.inputBox.element.focus() : !0
}, SocialCalc.CellHandles = function(e) {
    SocialCalc.Constants;
    if (!e.noEdit) {
        this.editor = e, this.noCursorSuffix = !1, this.movedmouse = !1, this.draghandle = document.createElement("div"), SocialCalc.setStyles(this.draghandle, "display:none;position:absolute;zIndex:8;border:1px solid white;width:4px;height:4px;fontSize:1px;backgroundColor:#0E93D8;cursor:default;"), this.draghandle.innerHTML = "&nbsp;", e.toplevel.appendChild(this.draghandle), SocialCalc.AssignID(e, this.draghandle, "draghandle");
        var t = "png";
        if (navigator.userAgent.match(/MSIE 6\.0/) && (t = "gif"), this.dragpalette = document.createElement("div"), SocialCalc.setStyles(this.dragpalette, "display:none;position:absolute;zIndex:8;width:90px;height:90px;fontSize:1px;textAlign:center;cursor:default;backgroundImage:url(" + SocialCalc.Constants.defaultImagePrefix + "drag-handles." + t + ");"), this.dragpalette.innerHTML = "&nbsp;", e.toplevel.appendChild(this.dragpalette), SocialCalc.AssignID(e, this.dragpalette, "dragpalette"), this.dragtooltip = document.createElement("div"), SocialCalc.setStyles(this.dragtooltip, "display:none;position:absolute;zIndex:9;border:1px solid black;width:100px;height:auto;fontSize:10px;backgroundColor:#FFFFFF;"), this.dragtooltip.innerHTML = "&nbsp;", e.toplevel.appendChild(this.dragtooltip), SocialCalc.AssignID(e, this.dragtooltip, "dragtooltip"), this.fillinghandle = document.createElement("div"), SocialCalc.setStyles(this.fillinghandle, "display:none;position:absolute;zIndex:9;border:1px solid black;width:auto;height:14px;fontSize:10px;backgroundColor:#FFFFFF;"), this.fillinghandle.innerHTML = "&nbsp;", e.toplevel.appendChild(this.fillinghandle), SocialCalc.AssignID(e, this.fillinghandle, "fillinghandle"), this.draghandle.addEventListener) this.draghandle.addEventListener("mousemove", SocialCalc.CellHandlesMouseMoveOnHandle, !1), this.dragpalette.addEventListener("mousedown", SocialCalc.CellHandlesMouseDown, !1), this.dragpalette.addEventListener("mousemove", SocialCalc.CellHandlesMouseMoveOnHandle, !1);
        else {
            if (!this.draghandle.attachEvent) throw "Browser not supported";
            this.draghandle.attachEvent("onmousemove", SocialCalc.CellHandlesMouseMoveOnHandle), this.dragpalette.attachEvent("onmousedown", SocialCalc.CellHandlesMouseDown), this.dragpalette.attachEvent("onmousemove", SocialCalc.CellHandlesMouseMoveOnHandle)
        }
    }
}, SocialCalc.CellHandles.prototype.ShowCellHandles = function(e, t) {
    return SocialCalc.ShowCellHandles(this, e, t)
}, SocialCalc.ShowCellHandles = function(e, t, o) {
    var a, l, n, r = e.editor,
        i = !1,
        c = 1,
        s = 1;
    if (r) {
        do {
            if (!t) break;
            if (l = r.ecell.row, n = r.ecell.col, "start" != r.state) break;
            if (l >= r.lastvisiblerow) break;
            if (n >= r.lastvisiblecol) break;
            if (l < r.firstscrollingrow) break;
            if (n < r.firstscrollingcol) break;
            for (;
                "yes" == r.context.sheetobj.colattribs.hide[SocialCalc.rcColname(n + c)];) c++;
            for (;
                "yes" == r.context.sheetobj.rowattribs.hide[l + s];) s++;
            if (a = r.context.sheetobj.cells[SocialCalc.crToCoord(n + c - 1, l + s - 1)], "undefined" != typeof a && (c += (a.colspan || 1) - 1, s += (a.rowspan || 1) - 1), r.rowpositions[l + s] + 20 > r.horizontaltablecontrol.controlborder) break;
            if (r.rowpositions[l + s] - 10 < r.headposition.top) break;
            if (r.colpositions[n + c] + 20 > r.verticaltablecontrol.controlborder) break;
            if (r.colpositions[n + c] - 30 < r.headposition.left) break;
            e.draghandle.style.left = r.colpositions[n + c] - 1 + "px", e.draghandle.style.top = r.rowpositions[l + s] - 1 + "px", e.draghandle.style.display = "block", o && (e.draghandle.style.display = "none", e.dragpalette.style.left = r.colpositions[n + c] - 45 + "px", e.dragpalette.style.top = r.rowpositions[l + s] - 45 + "px", e.dragpalette.style.display = "block", e.dragtooltip.style.left = r.colpositions[n + c] - 45 + "px", e.dragtooltip.style.top = r.rowpositions[l + s] + 45 + "px", e.dragtooltip.style.display = "none"), i = !0
        } while (!1);
        i || (e.draghandle.style.display = "none"), o || (e.dragpalette.style.display = "none", e.dragtooltip.style.display = "none")
    }
}, SocialCalc.CellHandlesMouseMoveOnHandle = function(e) {
    var t = SocialCalc.Constants,
        o = e || window.event,
        a = o.target || o.srcElement,
        l = SocialCalc.Keyboard.focusTable;
    if (!l) return !0;
    var n = l.cellhandles;
    if (!n.editor) return !0;
    var r = SocialCalc.GetElementPositionWithScroll(l.toplevel),
        i = o.clientX - r.left,
        c = o.clientY - r.top;
    if (!l.cellhandles.mouseDown) {
        if (l.cellhandles.ShowCellHandles(!0, !0), a == n.dragpalette) {
            var s = SocialCalc.SegmentDivHit([t.CH_radius1, t.CH_radius2], l.cellhandles.dragpalette, i, c);
            if (0 == s) return void SocialCalc.CellHandlesHoverTimeout();
            n.tooltipstimer && (window.clearTimeout(n.tooltipstimer), n.tooltipstimer = null), n.tooltipswhichhandle = s, n.tooltipstimer = window.setTimeout(SocialCalc.CellHandlesTooltipsTimeout, 700)
        }
        n.timer && (window.clearTimeout(n.timer), n.timer = null), n.timer = window.setTimeout(SocialCalc.CellHandlesHoverTimeout, 3e3)
    }
}, SocialCalc.SegmentDivHit = function(e, t, o, a) {
    var l = t.offsetWidth,
        n = t.offsetHeight,
        r = t.offsetLeft,
        i = t.offsetTop,
        c = 0,
        s = e,
        d = Math.sqrt(Math.pow(o - r - (l / 2 - .5), 2) + Math.pow(a - i - (n / 2 - .5), 2));
    if (2 == s.length) return o >= r && r + l / 2 > o && a >= i && i + n / 2 > a && (d <= e[0] ? c = -1 : d <= e[1] && (c = 1)), o >= r + l / 2 && r + l > o && a >= i && i + n / 2 > a && (d <= e[0] ? c = -2 : d <= e[1] && (c = 2)), o >= r + l / 2 && r + l > o && a >= i + n / 2 && i + n > a && (d <= e[0] ? c = -3 : d <= e[1] && (c = 3)), o >= r && r + l / 2 > o && a >= i + n / 2 && i + n > a && (d <= e[0] ? c = -4 : d <= e[1] && (c = 4)), c;
    for (;;)
        if (o >= r && r + l / 2 > o && a >= i && i + n / 2 > a) {
            if (quadrant += "1", c = s[0], "number" == typeof c) break;
            s = c, l /= 2, n /= 2
        } else if (o >= r + l / 2 && r + l > o && a >= i && i + n / 2 > a) {
        if (quadrant += "2", c = s[1], "number" == typeof c) break;
        s = c, l /= 2, r += l, n /= 2
    } else if (o >= r + l / 2 && r + l > o && a >= i + n / 2 && i + n > a) {
        if (quadrant += "3", c = s[2], "number" == typeof c) break;
        s = c, l /= 2, r += l, n /= 2, i += n
    } else {
        if (!(o >= r && r + l / 2 > o && a >= i + n / 2 && i + n > a)) return 0;
        if (quadrant += "4", c = s[3], "number" == typeof c) break;
        s = c, l /= 2, n /= 2, i += n
    }
    return c
}, SocialCalc.CellHandlesHoverTimeout = function() {
    if (editor = SocialCalc.Keyboard.focusTable, !editor) return !0;
    var e = editor.cellhandles;
    e.timer && (window.clearTimeout(e.timer), e.timer = null), e.tooltipstimer && (window.clearTimeout(e.tooltipstimer), e.tooltipstimer = null), editor.cellhandles.ShowCellHandles(!0, !1)
}, SocialCalc.CellHandlesTooltipsTimeout = function() {
    if (editor = SocialCalc.Keyboard.focusTable, !editor) return !0;
    var e = editor.cellhandles;
    e.tooltipstimer && (window.clearTimeout(e.tooltipstimer), e.tooltipstimer = null);
    var t = e.tooltipswhichhandle;
    if (0 == t) return void SocialCalc.CellHandlesHoverTimeout();
    if (-3 == t) e.dragtooltip.innerHTML = scc.s_CHfillAllTooltip;
    else if (3 == t) e.dragtooltip.innerHTML = scc.s_CHfillContentsTooltip;
    else if (-2 == t) e.dragtooltip.innerHTML = scc.s_CHmovePasteAllTooltip;
    else if (-4 == t) e.dragtooltip.innerHTML = scc.s_CHmoveInsertAllTooltip;
    else if (2 == t) e.dragtooltip.innerHTML = scc.s_CHmovePasteContentsTooltip;
    else {
        if (4 != t) return e.dragtooltip.innerHTML = "&nbsp;", void(e.dragtooltip.style.display = "none");
        e.dragtooltip.innerHTML = scc.s_CHmoveInsertContentsTooltip
    }
    e.dragtooltip.style.display = "block"
}, SocialCalc.CellHandlesMouseDown = function(e) {
    var t, o, a, l = SocialCalc.Constants,
        n = e || window.event,
        r = SocialCalc.EditorMouseInfo;
    if (t = SocialCalc.Keyboard.focusTable, !t) return !0;
    if (!t.busy) {
        var i = t.cellhandles;
        i.movedmouse = !1;
        var c = SocialCalc.GetElementPositionWithScroll(t.toplevel),
            s = n.clientX - c.left,
            d = n.clientY - c.top;
        i.timer && (window.clearTimeout(i.timer), i.timer = null), i.tooltipstimer && (window.clearTimeout(i.tooltipstimer), i.tooltipstimer = null), i.dragtooltip.innerHTML = "&nbsp;", i.dragtooltip.style.display = "none", a = t.range;
        var u = SocialCalc.SegmentDivHit([l.CH_radius1, l.CH_radius2], t.cellhandles.dragpalette, s, d);
        if (1 == u || -1 == u || 0 == u) return void i.ShowCellHandles(!0, !1);
        switch (r.ignore = !0, -3 == u ? (i.dragtype = "Fill", i.noCursorSuffix = !1) : 3 == u ? (i.dragtype = "FillC", i.noCursorSuffix = !1) : -2 == u ? (i.dragtype = "Move", i.noCursorSuffix = !0) : -4 == u ? (i.dragtype = "MoveI", i.noCursorSuffix = !1) : 2 == u ? (i.dragtype = "MoveC", i.noCursorSuffix = !0) : 4 == u && (i.dragtype = "MoveIC", i.noCursorSuffix = !1), i.filltype = null, i.dragtype) {
            case "Fill":
            case "FillC":
                a.hasrange || t.RangeAnchor(), t.range2.top = t.range.top, t.range2.right = t.range.right, t.range2.bottom = t.range.bottom, t.range2.left = t.range.left, t.range2.hasrange = !0;
                break;
            case "Move":
            case "MoveI":
            case "MoveC":
            case "MoveIC":
                a.hasrange || t.RangeAnchor(), t.range2.top = t.range.top, t.range2.right = t.range.right, t.range2.bottom = t.range.bottom, t.range2.left = t.range.left, t.range2.hasrange = !0, t.RangeRemove();
                break;
            default:
                return
        }
        i.fillinghandle.style.left = s + "px", i.fillinghandle.style.top = d - 17 + "px", i.fillinghandle.innerHTML = l.s_CHindicatorOperationLookup[i.dragtype] + (l.s_CHindicatorDirectionLookup[t.cellhandles.filltype] || ""), i.fillinghandle.style.display = "block", i.ShowCellHandles(!0, !1), i.mouseDown = !0, r.editor = t, o = t.ecell.coord, i.startingcoord = o, i.startingX = s, i.startingY = d, r.mouselastcoord = o, SocialCalc.KeyboardSetFocus(t), document.addEventListener ? (document.addEventListener("mousemove", SocialCalc.CellHandlesMouseMove, !0), document.addEventListener("mouseup", SocialCalc.CellHandlesMouseUp, !0)) : i.draghandle.attachEvent && (i.draghandle.setCapture(), i.draghandle.attachEvent("onmousemove", SocialCalc.CellHandlesMouseMove), i.draghandle.attachEvent("onmouseup", SocialCalc.CellHandlesMouseUp), i.draghandle.attachEvent("onlosecapture", SocialCalc.CellHandlesMouseUp)), n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0, n.preventDefault ? n.preventDefault() : n.returnValue = !1
    }
}, SocialCalc.CellHandlesMouseMove = function(e) {
    var t, o, a, l, n, r, i, c = SocialCalc.Constants,
        s = e || window.event,
        d = SocialCalc.EditorMouseInfo;
    if (t = d.editor) {
        var u = t.cellhandles;
        o = d.element;
        var p = SocialCalc.GetElementPositionWithScroll(t.toplevel),
            f = s.clientX - p.left,
            h = s.clientY - p.top;
        if (a = SocialCalc.GridMousePosition(t, f, h)) {
            if (a && !a.coord) return void SocialCalc.SetDragAutoRepeat(t, a, SocialCalc.CellHandlesDragAutoRepeat);
            if (SocialCalc.SetDragAutoRepeat(t, null), a.coord) {
                switch (l = SocialCalc.coordToCr(t.cellhandles.startingcoord), n = SocialCalc.coordToCr(a.coord), u.movedmouse = !0, u.dragtype) {
                    case "Fill":
                    case "FillC":
                        a.coord == u.startingcoord ? (u.filltype = null, u.startingX = f, u.startingY = h) : u.filltype ? "Down" == u.filltype ? (n.col = l.col, n.row < l.row && (n.row = l.row)) : (n.row = l.row, n.col < l.col && (n.col = l.col)) : (Math.abs(h - u.startingY) > 10 ? u.filltype = "Down" : Math.abs(f - u.startingX) > 10 && (u.filltype = "Right"), n.col = l.col, n.row = l.row), a.coord = SocialCalc.crToCoord(n.col, n.row), a.coord != d.mouselastcoord && (t.MoveECell(a.coord), t.RangeExtend());
                        break;
                    case "Move":
                    case "MoveC":
                        a.coord != d.mouselastcoord && (t.MoveECell(a.coord), r = t.range2.right - t.range2.left + a.col, i = t.range2.bottom - t.range2.top + a.row, t.RangeAnchor(SocialCalc.crToCoord(r, i)), t.RangeExtend());
                        break;
                    case "MoveI":
                    case "MoveIC":
                        a.coord == u.startingcoord ? (u.filltype = null, u.startingX = f, u.startingY = h) : u.filltype ? "Vertical" == u.filltype ? (n.col = t.range2.left, n.row >= t.range2.top && n.row <= t.range2.bottom + 1 && (n.row = t.range2.bottom + 2)) : (n.row = t.range2.top, n.col >= t.range2.left && n.col <= t.range2.right + 1 && (n.col = t.range2.right + 2)) : (Math.abs(h - u.startingY) > 10 ? u.filltype = "Vertical" : Math.abs(f - u.startingX) > 10 && (u.filltype = "Horizontal"), n.col = l.col, n.row = l.row), a.coord = SocialCalc.crToCoord(n.col, n.row), a.coord != d.mouselastcoord && (t.MoveECell(a.coord), u.filltype ? (r = t.range2.right - t.range2.left + n.col, i = t.range2.bottom - t.range2.top + n.row, t.RangeAnchor(SocialCalc.crToCoord(r, i)), t.RangeExtend()) : t.RangeRemove())
                }
                u.fillinghandle.style.left = f + "px", u.fillinghandle.style.top = h - 17 + "px", u.fillinghandle.innerHTML = c.s_CHindicatorOperationLookup[u.dragtype] + (c.s_CHindicatorDirectionLookup[t.cellhandles.filltype] || ""), u.fillinghandle.style.display = "block", d.mouselastcoord = a.coord, s.stopPropagation ? s.stopPropagation() : s.cancelBubble = !0, s.preventDefault ? s.preventDefault() : s.returnValue = !1
            }
        }
    }
}, SocialCalc.CellHandlesDragAutoRepeat = function(e, t) {
    var o = SocialCalc.EditorMouseInfo,
        a = o.editor;
    if (a) {
        var l, n, r, i = a.cellhandles,
            c = SocialCalc.coordToCr(a.cellhandles.startingcoord),
            s = SocialCalc.coordToCr(e),
            d = 0,
            u = 0;
        switch ("left" == t ? u = -1 : "right" == t ? u = 1 : "up" == t ? d = -1 : "down" == t && (d = 1), a.ScrollRelativeBoth(d, u), i.dragtype) {
            case "Fill":
            case "FillC":
                i.filltype ? "Down" == i.filltype ? (s.col = c.col, s.row < c.row && (s.row = c.row)) : (s.row = c.row, s.col < c.col && (s.col = c.col)) : (s.col = c.col, s.row = c.row), l = SocialCalc.crToCoord(s.col, s.row), l != o.mouselastcoord && (a.MoveECell(e), a.RangeExtend());
                break;
            case "Move":
            case "MoveC":
                e != o.mouselastcoord && (a.MoveECell(e), n = a.range2.right - a.range2.left + a.ecell.col, r = a.range2.bottom - a.range2.top + a.ecell.row, a.RangeAnchor(SocialCalc.crToCoord(n, r)), a.RangeExtend());
                break;
            case "MoveI":
            case "MoveIC":
                i.filltype ? "Vertical" == i.filltype ? (s.col = a.range2.left, s.row >= a.range2.top && s.row <= a.range2.bottom + 1 && (s.row = a.range2.bottom + 2)) : (s.row = a.range2.top, s.col >= a.range2.left && s.col <= a.range2.right + 1 && (s.col = a.range2.right + 2)) : (s.col = c.col, s.row = c.row), l = SocialCalc.crToCoord(s.col, s.row), l != o.mouselastcoord && (a.MoveECell(l), n = a.range2.right - a.range2.left + s.col, r = a.range2.bottom - a.range2.top + s.row, a.RangeAnchor(SocialCalc.crToCoord(n, r)), a.RangeExtend())
        }
        o.mouselastcoord = l
    }
}, SocialCalc.CellHandlesMouseUp = function(e) {
    var t, o, a, l, n, r, i, c, s, d, u, p, f = e || window.event,
        h = SocialCalc.EditorMouseInfo;
    if (t = h.editor) {
        var m = t.cellhandles;
        o = h.element, h.ignore = !1;
        var C = SocialCalc.GetElementPositionWithScroll(t.toplevel),
            g = f.clientX - C.left,
            S = f.clientY - C.top;
        switch (a = SocialCalc.GridMousePosition(t, g, S), SocialCalc.SetDragAutoRepeat(t, null), m.mouseDown = !1, m.noCursorSuffix = !1, m.fillinghandle.style.display = "none", a || (a = {}), a.coord || (a.coord = t.ecell.coord), m.dragtype) {
            case "Fill":
            case "Move":
            case "MoveI":
                r = " all";
                break;
            case "FillC":
            case "MoveC":
            case "MoveIC":
                r = " formulas"
        }
        switch (m.movedmouse || (m.dragtype = "Nothing"), m.dragtype) {
            case "Nothing":
                t.Range2Remove(), t.RangeRemove();
                break;
            case "Fill":
            case "FillC":
                i = SocialCalc.coordToCr(m.startingcoord), c = SocialCalc.coordToCr(a.coord), m.filltype && ("Down" == m.filltype ? c.col = i.col : c.row = i.row), a.coord = SocialCalc.crToCoord(c.col, c.row), t.MoveECell(a.coord), t.RangeExtend(), n = "Right" == t.cellhandles.filltype ? "right" : "down", l = "fill" + n + " " + SocialCalc.crToCoord(t.range.left, t.range.top) + ":" + SocialCalc.crToCoord(t.range.right, t.range.bottom) + r, t.EditorScheduleSheetCommands(l, !0, !1);
                break;
            case "Move":
            case "MoveC":
                t.context.cursorsuffix = "", l = "movepaste " + SocialCalc.crToCoord(t.range2.left, t.range2.top) + ":" + SocialCalc.crToCoord(t.range2.right, t.range2.bottom) + " " + t.ecell.coord + r, t.EditorScheduleSheetCommands(l, !0, !1), t.Range2Remove();
                break;
            case "MoveI":
            case "MoveIC":
                t.context.cursorsuffix = "", s = t.range2.right - t.range2.left, d = t.range2.bottom - t.range2.top, u = t.ecell.col - t.range2.left, p = t.ecell.row - t.range2.top, l = "moveinsert " + SocialCalc.crToCoord(t.range2.left, t.range2.top) + ":" + SocialCalc.crToCoord(t.range2.right, t.range2.bottom) + " " + t.ecell.coord + r, t.EditorScheduleSheetCommands(l, !0, !1), t.Range2Remove(), t.RangeRemove(), " Horizontal" == t.cellhandles.filltype && u > 0 ? t.MoveECell(SocialCalc.crToCoord(t.ecell.col - s - 1, t.ecell.row)) : " Vertical" == t.cellhandles.filltype && p > 0 && t.MoveECell(SocialCalc.crToCoord(t.ecell.col, t.ecell.row - d - 1)), t.RangeAnchor(SocialCalc.crToCoord(t.ecell.col + s, t.ecell.row + d)), t.RangeExtend()
        }
        return f.stopPropagation ? f.stopPropagation() : f.cancelBubble = !0, f.preventDefault ? f.preventDefault() : f.returnValue = !1, document.removeEventListener ? (document.removeEventListener("mousemove", SocialCalc.CellHandlesMouseMove, !0), document.removeEventListener("mouseup", SocialCalc.CellHandlesMouseUp, !0)) : m.draghandle.detachEvent && (m.draghandle.detachEvent("onlosecapture", SocialCalc.CellHandlesMouseUp), m.draghandle.detachEvent("onmouseup", SocialCalc.CellHandlesMouseUp), m.draghandle.detachEvent("onmousemove", SocialCalc.CellHandlesMouseMove), m.draghandle.releaseCapture()), h.editor = null, !1
    }
}, SocialCalc.TableControl = function(e, t, o) {
    var a = SocialCalc.Constants;
    this.editor = e, this.vertical = t, this.size = o, this.main = null, this.endcap = null, this.paneslider = null, this.lessbutton = null, this.morebutton = null, this.scrollarea = null, this.thumb = null, this.controlborder = null, this.endcapstart = null, this.panesliderstart = null, this.lessbuttonstart = null, this.morebuttonstart = null, this.scrollareastart = null, this.scrollareaend = null, this.scrollareasize = null, this.thumbpos = null, this.controlthickness = a.defaultTableControlThickness, this.sliderthickness = a.defaultTCSliderThickness, this.buttonthickness = a.defaultTCButtonThickness, this.thumbthickness = a.defaultTCThumbThickness, this.minscrollingpanesize = this.buttonthickness + this.buttonthickness + this.thumbthickness + 20
}, SocialCalc.TableControl.prototype.CreateTableControl = function() {
    return SocialCalc.CreateTableControl(this)
}, SocialCalc.TableControl.prototype.PositionTableControlElements = function() {
    SocialCalc.PositionTableControlElements(this)
}, SocialCalc.TableControl.prototype.ComputeTableControlPositions = function() {
    SocialCalc.ComputeTableControlPositions(this)
}, SocialCalc.CreateTableControl = function(e) {
    var t, o, a, l = SocialCalc.AssignID,
        n = SocialCalc.setStyles,
        r = SocialCalc.Constants,
        i = function(t, o, a) {
            r["s_" + o + "Tooltip" + a] && SocialCalc.TooltipRegister(t, r["s_" + o + "Tooltip" + a], null, e.editor.toplevel)
        },
        c = e.editor.imageprefix,
        s = e.vertical ? "v" : "h";
    return e.main = document.createElement("div"), t = e.main.style, t.height = (e.vertical ? e.size : e.controlthickness) + "px", t.width = (e.vertical ? e.controlthickness : e.size) + "px", t.zIndex = 0, n(e.main, r.TCmainStyle), t.backgroundImage = "url(" + c + "main-" + s + ".gif)", r.TCmainClass && (e.main.className = r.TCmainClass), e.main.style.display = "none", e.endcap = document.createElement("div"), t = e.endcap.style, t.height = e.controlthickness + "px", t.width = e.controlthickness + "px", t.zIndex = 1, t.overflow = "hidden", t.position = "absolute", n(e.endcap, r.TCendcapStyle), t.backgroundImage = "url(" + c + "endcap-" + s + ".gif)", r.TCendcapClass && (e.endcap.className = r.TCendcapClass), l(e.editor, e.endcap, "endcap" + s), e.main.appendChild(e.endcap), e.paneslider = document.createElement("div"), t = e.paneslider.style, t.height = (e.vertical ? e.sliderthickness : e.controlthickness) + "px", t.overflow = "hidden", t.width = (e.vertical ? e.controlthickness : e.sliderthickness) + "px", t.position = "absolute", t[e.vertical ? "top" : "left"] = "4px", t.zIndex = 3, t.backgroundImage = "url(" + c + "paneslider-" + s + ".gif)", r.TCpanesliderClass && (e.paneslider.className = r.TCpanesliderClass), l(e.editor, e.paneslider, "paneslider" + s), i(e.paneslider, "paneslider", s), o = {
        MouseDown: SocialCalc.TCPSDragFunctionStart,
        MouseMove: SocialCalc.TCPSDragFunctionMove,
        MouseUp: SocialCalc.TCPSDragFunctionStop,
        Disabled: function() {
            return e.editor.busy
        }
    }, o.control = e, SocialCalc.DragRegister(e.paneslider, e.vertical, !e.vertical, o, e.editor.toplevel), e.main.appendChild(e.paneslider), e.lessbutton = document.createElement("div"), t = e.lessbutton.style, t.height = (e.vertical ? e.buttonthickness : e.controlthickness) + "px", t.width = (e.vertical ? e.controlthickness : e.buttonthickness) + "px", t.zIndex = 2, t.overflow = "hidden", t.position = "absolute", n(e.lessbutton, r.TClessbuttonStyle), t.backgroundImage = "url(" + c + "less-" + s + "n.gif)", r.TClessbuttonClass && (e.lessbutton.className = r.TClessbuttonClass), l(e.editor, e.lessbutton, "lessbutton" + s), a = {
        repeatwait: r.TClessbuttonRepeatWait,
        repeatinterval: r.TClessbuttonRepeatInterval,
        normalstyle: "backgroundImage:url(" + c + "less-" + s + "n.gif);",
        downstyle: "backgroundImage:url(" + c + "less-" + s + "d.gif);",
        hoverstyle: "backgroundImage:url(" + c + "less-" + s + "h.gif);"
    }, o = {
        MouseDown: function() {
            e.editor.busy || e.editor.ScrollRelative(e.vertical, -1)
        },
        Repeat: function() {
            e.editor.busy || e.editor.ScrollRelative(e.vertical, -1)
        },
        Disabled: function() {
            return e.editor.busy
        }
    }, SocialCalc.ButtonRegister(e.editor, e.lessbutton, a, o), e.main.appendChild(e.lessbutton), e.morebutton = document.createElement("div"), t = e.morebutton.style, t.height = (e.vertical ? e.buttonthickness : e.controlthickness) + "px", t.width = (e.vertical ? e.controlthickness : e.buttonthickness) + "px", t.zIndex = 2, t.overflow = "hidden", t.position = "absolute", n(e.morebutton, r.TCmorebuttonStyle), t.backgroundImage = "url(" + c + "more-" + s + "n.gif)", r.TCmorebuttonClass && (e.morebutton.className = r.TCmorebuttonClass), l(e.editor, e.morebutton, "morebutton" + s), a = {
        repeatwait: r.TCmorebuttonRepeatWait,
        repeatinterval: r.TCmorebuttonRepeatInterval,
        normalstyle: "backgroundImage:url(" + c + "more-" + s + "n.gif);",
        downstyle: "backgroundImage:url(" + c + "more-" + s + "d.gif);",
        hoverstyle: "backgroundImage:url(" + c + "more-" + s + "h.gif);"
    }, o = {
        MouseDown: function() {
            e.editor.busy || e.editor.ScrollRelative(e.vertical, 1)
        },
        Repeat: function() {
            e.editor.busy || e.editor.ScrollRelative(e.vertical, 1)
        },
        Disabled: function() {
            return e.editor.busy
        }
    }, SocialCalc.ButtonRegister(e.editor, e.morebutton, a, o), e.main.appendChild(e.morebutton), e.scrollarea = document.createElement("div"), t = e.scrollarea.style, t.height = e.controlthickness + "px", t.width = e.controlthickness + "px", t.zIndex = 1, t.overflow = "hidden", t.position = "absolute", n(e.scrollarea, r.TCscrollareaStyle), t.backgroundImage = "url(" + c + "scrollarea-" + s + ".gif)", r.TCscrollareaClass && (e.scrollarea.className = r.TCscrollareaClass), l(e.editor, e.scrollarea, "scrollarea" + s), a = {
        repeatwait: r.TCscrollareaRepeatWait,
        repeatinterval: r.TCscrollareaRepeatWait
    }, o = {
        MouseDown: SocialCalc.ScrollAreaClick,
        Repeat: SocialCalc.ScrollAreaClick,
        Disabled: function() {
            return e.editor.busy
        }
    }, o.control = e, SocialCalc.ButtonRegister(e.editor, e.scrollarea, a, o), e.main.appendChild(e.scrollarea), e.thumb = document.createElement("div"), t = e.thumb.style, t.height = (e.vertical ? e.thumbthickness : e.controlthickness) + "px", t.width = (e.vertical ? e.controlthickness : e.thumbthickness) + "px", t.zIndex = 2, t.overflow = "hidden", t.position = "absolute", n(e.thumb, r.TCthumbStyle), e.thumb.style.backgroundImage = "url(" + c + "thumb-" + s + "n.gif)", r.TCthumbClass && (e.thumb.className = r.TCthumbClass), l(e.editor, e.thumb, "thumb" + s), o = {
        MouseDown: SocialCalc.TCTDragFunctionStart,
        MouseMove: SocialCalc.TCTDragFunctionMove,
        MouseUp: SocialCalc.TCTDragFunctionStop,
        Disabled: function() {
            return e.editor.busy
        }
    }, o.control = e, SocialCalc.DragRegister(e.thumb, e.vertical, !e.vertical, o, e.editor.toplevel), a = {
        normalstyle: "backgroundImage:url(" + c + "thumb-" + s + "n.gif)",
        name: "Thumb",
        downstyle: "backgroundImage:url(" + c + "thumb-" + s + "d.gif)",
        hoverstyle: "backgroundImage:url(" + c + "thumb-" + s + "h.gif)"
    }, SocialCalc.ButtonRegister(e.editor, e.thumb, a, null), e.main.appendChild(e.thumb), e.main
}, SocialCalc.ScrollAreaClick = function(e, t, o) {
    var a = o.functionobj.control,
        l = SocialCalc.GetElementPositionWithScroll(a.editor.toplevel),
        n = a.vertical ? t.clientY - l.top : t.clientX - l.left;
    a.editor.busy || a.editor.PageRelative(a.vertical, n > a.thumbpos ? 1 : -1)
}, SocialCalc.PositionTableControlElements = function(e) {
    var t, o, a, l = e.editor;
    e.vertical ? (t = e.controlborder + "px", e.endcap.style.top = e.endcapstart + "px", e.endcap.style.left = t, e.paneslider.style.top = e.panesliderstart + "px", e.paneslider.style.left = t, e.lessbutton.style.top = e.lessbuttonstart + "px", e.lessbutton.style.left = t, e.morebutton.style.top = e.morebuttonstart + "px", e.morebutton.style.left = t, e.scrollarea.style.top = e.scrollareastart + "px", e.scrollarea.style.left = t, e.scrollarea.style.height = e.scrollareasize + "px", o = Math.max(l.context.sheetobj.attribs.lastrow, l.firstscrollingrow + 1), a = (l.firstscrollingrow - (l.lastnonscrollingrow + 1)) * (e.scrollareasize - 3 * e.thumbthickness) / (o - (l.lastnonscrollingrow + 1)) + e.scrollareastart - 1, a = Math.floor(a), e.thumb.style.top = a + "px", e.thumb.style.left = t) : (t = e.controlborder + "px", e.endcap.style.left = e.endcapstart + "px", e.endcap.style.top = t, e.paneslider.style.left = e.panesliderstart + "px", e.paneslider.style.top = t, e.lessbutton.style.left = e.lessbuttonstart + "px", e.lessbutton.style.top = t, e.morebutton.style.left = e.morebuttonstart + "px", e.morebutton.style.top = t, e.scrollarea.style.left = e.scrollareastart + "px", e.scrollarea.style.top = t, e.scrollarea.style.width = e.scrollareasize + "px", o = Math.max(l.context.sheetobj.attribs.lastcol, l.firstscrollingcol + 1), a = (l.firstscrollingcol - (l.lastnonscrollingcol + 1)) * (e.scrollareasize - e.thumbthickness) / (o - l.lastnonscrollingcol) + e.scrollareastart - 1, a = Math.floor(a), e.thumb.style.left = a + "px", e.thumb.style.top = t), e.thumbpos = a, e.main.style.display = "block"
}, SocialCalc.ComputeTableControlPositions = function(e) {
    var t = e.editor;
    if (!t.gridposition || !t.headposition) throw "Can't compute table control positions before editor positions";
    e.vertical ? (e.controlborder = t.gridposition.left + t.tablewidth, e.endcapstart = t.gridposition.top, e.panesliderstart = t.firstscrollingrowtop - e.sliderthickness, e.lessbuttonstart = t.firstscrollingrowtop - 1, e.morebuttonstart = t.gridposition.top + t.tableheight - e.buttonthickness, e.scrollareastart = t.firstscrollingrowtop - 1 + e.buttonthickness, e.scrollareaend = e.morebuttonstart - 1, e.scrollareasize = e.scrollareaend - e.scrollareastart + 1) : (e.controlborder = t.gridposition.top + t.tableheight, e.endcapstart = t.gridposition.left, e.panesliderstart = t.firstscrollingcolleft - e.sliderthickness, e.lessbuttonstart = t.firstscrollingcolleft - 1, e.morebuttonstart = t.gridposition.left + t.tablewidth - e.buttonthickness, e.scrollareastart = t.firstscrollingcolleft - 1 + e.buttonthickness, e.scrollareaend = e.morebuttonstart - 1, e.scrollareasize = e.scrollareaend - e.scrollareastart + 1)
}, SocialCalc.TCPSDragFunctionStart = function(e, t, o) {
    var a = o.functionobj.control.editor,
        l = SocialCalc.Constants;
    SocialCalc.DragFunctionStart(e, t, o), t.trackingline = document.createElement("div"), t.trackingline.style.height = o.vertical ? l.TCPStrackinglineThickness : a.tableheight - (a.headposition.top - a.gridposition.top) + "px", t.trackingline.style.width = o.vertical ? a.tablewidth - (a.headposition.left - a.gridposition.left) + "px" : l.TCPStrackinglineThickness, t.trackingline.style.backgroundImage = "url(" + a.imageprefix + "trackingline-" + (o.vertical ? "v" : "h") + ".gif)", l.TCPStrackinglineClass && (t.trackingline.className = l.TCPStrackinglineClass), SocialCalc.setStyles(t.trackingline, l.TCPStrackinglineStyle), o.vertical ? (row = SocialCalc.Lookup(t.clientY + o.functionobj.control.sliderthickness, a.rowpositions), t.trackingline.style.top = (a.rowpositions[row] || a.headposition.top) + "px", t.trackingline.style.left = a.headposition.left + "px", t.trackingline.id = "trackingline-vertical", a.context.rowpanes.length - 1 && (a.context.SetRowPaneFirstLast(1, a.context.rowpanes[0].last + 1, a.context.rowpanes[0].last + 1), a.FitToEditTable(), a.ScheduleRender())) : (col = SocialCalc.Lookup(t.clientX + o.functionobj.control.sliderthickness, a.colpositions), t.trackingline.style.top = a.headposition.top + "px", t.trackingline.style.left = (a.colpositions[col] || a.headposition.left) + "px", t.trackingline.id = "trackingline-horizon", a.context.colpanes.length - 1 && (a.context.SetColPaneFirstLast(1, a.context.colpanes[0].last + 1, a.context.colpanes[0].last + 1), a.FitToEditTable(), a.ScheduleRender())), a.griddiv.appendChild(t.trackingline)
}, SocialCalc.TCPSDragFunctionMove = function(e, t, o) {
    var a, l, n, r, i = o.functionobj.control,
        c = i.sliderthickness,
        s = i.editor;
    if (o.vertical) {
        for (n = i.morebuttonstart - i.minscrollingpanesize - t.offsetY, t.clientY > n && (t.clientY = n), r = s.headposition.top - c - t.offsetY, t.clientY < r && (t.clientY = r), a = SocialCalc.Lookup(t.clientY + c, s.rowpositions);
            "yes" == s.context.sheetobj.rowattribs.hide[a];) a++;
        t.trackingline.style.top = (s.rowpositions[a] || s.headposition.top) + "px"
    } else {
        for (n = i.morebuttonstart - i.minscrollingpanesize - t.offsetX, t.clientX > n && (t.clientX = n), r = s.headposition.left - c - t.offsetX, t.clientX < r && (t.clientX = r), l = SocialCalc.Lookup(t.clientX + c, s.colpositions);
            "yes" == s.context.sheetobj.colattribs.hide[SocialCalc.rcColname(l)];) l++;
        t.trackingline.style.left = (s.colpositions[l] || s.headposition.left) + "px"
    }
    SocialCalc.DragFunctionPosition(e, t, o)
}, SocialCalc.TCPSDragFunctionStop = function(e, t, o) {
    var a, l, n, r, i = o.functionobj.control,
        c = i.sliderthickness,
        s = i.editor;
    if (o.vertical) {
        for (n = i.morebuttonstart - i.minscrollingpanesize - t.offsetY, t.clientY > n && (t.clientY = n), r = s.headposition.top - c - t.offsetY, t.clientY < r && (t.clientY = r), a = SocialCalc.Lookup(t.clientY + c, s.rowpositions), a > s.context.sheetobj.attribs.lastrow && (a = s.context.sheetobj.attribs.lastrow);
            "yes" == s.context.sheetobj.rowattribs.hide[a];) a++;
        s.EditorScheduleSheetCommands("pane row " + a, !0, !1)
    } else {
        for (n = i.morebuttonstart - i.minscrollingpanesize - t.offsetX, t.clientX > n && (t.clientX = n), r = s.headposition.left - c - t.offsetX, t.clientX < r && (t.clientX = r), l = SocialCalc.Lookup(t.clientX + c, s.colpositions), l > s.context.sheetobj.attribs.lastcol && (l = s.context.sheetobj.attribs.lastcol);
            "yes" == s.context.sheetobj.colattribs.hide[SocialCalc.rcColname(l)];) l++;
        s.EditorScheduleSheetCommands("pane col " + l, !0, !1)
    }
}, SocialCalc.TCTDragFunctionStart = function(e, t, o) {
    var a = o.functionobj.control,
        l = a.editor,
        n = SocialCalc.Constants;
    if (SocialCalc.DragFunctionStart(e, t, o), t.thumbstatus && (t.thumbstatus.rowmsgele && (t.thumbstatus.rowmsgele = null), t.thumbstatus.rowpreviewele && (t.thumbstatus.rowpreviewele = null), l.toplevel.removeChild(t.thumbstatus), t.thumbstatus = null), t.thumbstatus = document.createElement("div"), o.vertical) {
        n.TCTDFSthumbstatusvClass && (t.thumbstatus.className = n.TCTDFSthumbstatusvClass), SocialCalc.setStyles(t.thumbstatus, n.TCTDFSthumbstatusvStyle), t.thumbstatus.style.top = t.clientY + n.TCTDFStopOffsetv + "px", t.thumbstatus.style.left = a.controlborder - 10 - l.tablewidth / 2 + "px", t.thumbstatus.style.width = l.tablewidth / 2 + "px", t.thumbcontext = new SocialCalc.RenderContext(l.context.sheetobj), t.thumbcontext.showGrid = !0, t.thumbcontext.rowpanes = [{
            first: 1,
            last: 1
        }];
        var r = l.context.colpanes[l.context.colpanes.length - 1];
        t.thumbcontext.colpanes = [{
            first: r.first,
            last: r.last
        }], t.thumbstatus.innerHTML = '<table cellspacing="0" cellpadding="0"><tr><td valign="top" style="' + n.TCTDFSthumbstatusrownumStyle + '" class="' + n.TCTDFSthumbstatusrownumClass + '"><div>msg</div></td><td valign="top"><div style="overflow:hidden;">preview</div></td></tr></table>', t.thumbstatus.rowmsgele = t.thumbstatus.firstChild.firstChild.firstChild.firstChild.firstChild, t.thumbstatus.rowpreviewele = t.thumbstatus.firstChild.firstChild.firstChild.childNodes[1].firstChild, l.toplevel.appendChild(t.thumbstatus), SocialCalc.TCTDragFunctionRowSetStatus(t, l, l.firstscrollingrow || 1)
    } else n.TCTDFSthumbstatushClass && (t.thumbstatus.className = n.TCTDFSthumbstatushClass), SocialCalc.setStyles(t.thumbstatus, n.TCTDFSthumbstatushStyle), t.thumbstatus.style.top = a.controlborder + n.TCTDFStopOffseth + "px", t.thumbstatus.style.left = t.clientX + n.TCTDFSleftOffseth + "px", l.toplevel.appendChild(t.thumbstatus), t.thumbstatus.innerHTML = n.s_TCTDFthumbstatusPrefixh + SocialCalc.rcColname(l.firstscrollingcol)
}, SocialCalc.TCTDragFunctionRowSetStatus = function(e, t, o) {
    var a = SocialCalc.Constants,
        l = a.s_TCTDFthumbstatusPrefixv + o + " ";
    e.thumbstatus.rowmsgele.innerHTML = l, e.thumbcontext.rowpanes = [{
        first: o,
        last: o
    }], e.thumbrowshown = o;
    e.thumbcontext.RenderSheet(e.thumbstatus.rowpreviewele.firstChild, {
        type: "html"
    })
}, SocialCalc.TCTDragFunctionMove = function(e, t, o) {
    var a, l, n = o.functionobj.control,
        r = (n.thumbthickness, n.editor),
        i = SocialCalc.Constants;
    o.vertical ? (t.clientY > n.scrollareaend - t.offsetY - n.thumbthickness + 2 && (t.clientY = n.scrollareaend - t.offsetY - n.thumbthickness + 2), t.clientY < n.scrollareastart - t.offsetY - 1 && (t.clientY = n.scrollareastart - t.offsetY - 1), t.thumbstatus.style.top = t.clientY + "px", a = (t.clientY + t.offsetY - n.scrollareastart + 1) / (n.scrollareasize - n.thumbthickness) * (r.context.sheetobj.attribs.lastrow - r.lastnonscrollingrow) + r.lastnonscrollingrow + 1, a = Math.floor(a), a <= r.lastnonscrollingrow && (a = r.lastnonscrollingrow + 1), a > r.context.sheetobj.attribs.lastrow && (a = r.context.sheetobj.attribs.lastrow), a != t.thumbrowshown && SocialCalc.TCTDragFunctionRowSetStatus(t, r, a)) : (t.clientX > n.scrollareaend - t.offsetX - n.thumbthickness + 2 && (t.clientX = n.scrollareaend - t.offsetX - n.thumbthickness + 2), t.clientX < n.scrollareastart - t.offsetX - 1 && (t.clientX = n.scrollareastart - t.offsetX - 1), t.thumbstatus.style.left = t.clientX + "px", a = (t.clientX + t.offsetX - n.scrollareastart + 1) / (n.scrollareasize - n.thumbthickness) * (r.context.sheetobj.attribs.lastcol - r.lastnonscrollingcol) + r.lastnonscrollingcol + 1, a = Math.floor(a), a <= r.lastnonscrollingcol && (a = r.lastnonscrollingcol + 1), a > r.context.sheetobj.attribs.lastcol && (a = r.context.sheetobj.attribs.lastcol), l = i.s_TCTDFthumbstatusPrefixh + SocialCalc.rcColname(a), t.thumbstatus.innerHTML = l), SocialCalc.DragFunctionPosition(e, t, o)
}, SocialCalc.TCTDragFunctionStop = function(e, t, o) {
    var a, l = o.functionobj.control,
        n = l.editor;
    o.vertical ? (a = (t.clientY + t.offsetY - l.scrollareastart + 1) / (l.scrollareasize - l.thumbthickness) * (n.context.sheetobj.attribs.lastrow - n.lastnonscrollingrow) + n.lastnonscrollingrow + 1, a = Math.floor(a), a <= n.lastnonscrollingrow && (a = n.lastnonscrollingrow + 1), a > n.context.sheetobj.attribs.lastrow && (a = n.context.sheetobj.attribs.lastrow), n.context.SetRowPaneFirstLast(n.context.rowpanes.length - 1, a, a + 1)) : (a = (t.clientX + t.offsetX - l.scrollareastart + 1) / (l.scrollareasize - l.thumbthickness) * (n.context.sheetobj.attribs.lastcol - n.lastnonscrollingcol) + n.lastnonscrollingcol + 1, a = Math.floor(a), a <= n.lastnonscrollingcol && (a = n.lastnonscrollingcol + 1), a > n.context.sheetobj.attribs.lastcol && (a = n.context.sheetobj.attribs.lastcol), n.context.SetColPaneFirstLast(n.context.colpanes.length - 1, a, a + 1)), n.FitToEditTable(), t.thumbstatus.rowmsgele && (t.thumbstatus.rowmsgele = null), t.thumbstatus.rowpreviewele && (t.thumbstatus.rowpreviewele = null), n.toplevel.removeChild(t.thumbstatus), t.thumbstatus = null, n.ScheduleRender()
}, SocialCalc.DragInfo = {
    registeredElements: [],
    draggingElement: null,
    startX: 0,
    startY: 0,
    startZ: 0,
    clientX: 0,
    clientY: 0,
    offsetX: 0,
    offsetY: 0,
    relativeOffset: {
        left: 0,
        top: 0
    }
}, SocialCalc.DragRegister = function(e, t, o, a, l) {
    var n = SocialCalc.DragInfo;
    if (a || (a = {
            MouseDown: SocialCalc.DragFunctionStart,
            MouseMove: SocialCalc.DragFunctionPosition,
            MouseUp: SocialCalc.DragFunctionPosition,
            Disabled: null
        }), n.registeredElements.push({
            element: e,
            vertical: t,
            horizontal: o,
            functionobj: a,
            parent: l
        }), e.addEventListener) e.addEventListener("mousedown", SocialCalc.DragMouseDown, !1);
    else {
        if (!e.attachEvent) throw SocialCalc.Constants.s_BrowserNotSupported;
        e.attachEvent("onmousedown", SocialCalc.DragMouseDown)
    }
}, SocialCalc.DragUnregister = function(e) {
    var t, o = SocialCalc.DragInfo;
    if (e)
        for (t = 0; t < o.registeredElements.length; t++)
            if (o.registeredElements[t].element == e) return o.registeredElements.splice(t, 1), void(e.removeEventListener ? e.removeEventListener("mousedown", SocialCalc.DragMouseDown, !1) : e.detachEvent("onmousedown", SocialCalc.DragMouseDown))
}, SocialCalc.DragMouseDown = function(e) {
    var t = e || window.event,
        o = SocialCalc.DragInfo,
        a = SocialCalc.LookupElement(t.target || t.srcElement, o.registeredElements);
    return !a || a && a.functionobj && a.functionobj.Disabled && a.functionobj.Disabled(t, o, a) ? void 0 : (o.draggingElement = a, a.parent && (o.relativeOffset = SocialCalc.GetElementPositionWithScroll(a.parent)), o.clientX = t.clientX - o.relativeOffset.left, o.clientY = t.clientY - o.relativeOffset.top, o.startX = o.clientX, o.startY = o.clientY, o.startZ = a.element.style.zIndex, o.offsetX = 0, o.offsetY = 0, a.element.style.zIndex = "100", document.addEventListener ? (document.addEventListener("mousemove", SocialCalc.DragMouseMove, !0), document.addEventListener("mouseup", SocialCalc.DragMouseUp, !0)) : a.element.attachEvent && (a.element.setCapture(), a.element.attachEvent("onmousemove", SocialCalc.DragMouseMove), a.element.attachEvent("onmouseup", SocialCalc.DragMouseUp), a.element.attachEvent("onlosecapture", SocialCalc.DragMouseUp)), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, a && a.functionobj && a.functionobj.MouseDown && a.functionobj.MouseDown(t, o, a), !1)
}, SocialCalc.DragMouseMove = function(e) {
    var t = e || window.event,
        o = SocialCalc.DragInfo,
        a = o.draggingElement;
    return o.clientX = t.clientX - o.relativeOffset.left, o.clientY = t.clientY - o.relativeOffset.top, t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, a && a.functionobj && a.functionobj.MouseMove && a.functionobj.MouseMove(t, o, a), !1
}, SocialCalc.DragMouseUp = function(e) {
    var t = e || window.event,
        o = SocialCalc.DragInfo,
        a = o.draggingElement;
    return o.clientX = t.clientX - o.relativeOffset.left, o.clientY = t.clientY - o.relativeOffset.top, a.element.style.zIndex = o.startZ, a && a.functionobj && a.functionobj.MouseUp && a.functionobj.MouseUp(t, o, a), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, document.removeEventListener ? (document.removeEventListener("mousemove", SocialCalc.DragMouseMove, !0), document.removeEventListener("mouseup", SocialCalc.DragMouseUp, !0)) : a.element.detachEvent && (a.element.detachEvent("onlosecapture", SocialCalc.DragMouseUp), a.element.detachEvent("onmouseup", SocialCalc.DragMouseUp), a.element.detachEvent("onmousemove", SocialCalc.DragMouseMove), a.element.releaseCapture()), o.draggingElement = null, !1
}, SocialCalc.DragFunctionStart = function(e, t, o) {
    var a = o.functionobj.positionobj || o.element;
    t.offsetY = parseInt(a.style.top) - t.clientY, t.offsetX = parseInt(a.style.left) - t.clientX
}, SocialCalc.DragFunctionPosition = function(e, t, o) {
    var a = o.functionobj.positionobj || o.element;
    o.vertical && (a.style.top = t.clientY + t.offsetY + "px"), o.horizontal && (a.style.left = t.clientX + t.offsetX + "px")
}, SocialCalc.TooltipInfo = {
    registeredElements: [],
    registered: !1,
    tooltipElement: null,
    timer: null,
    popupElement: null,
    clientX: 0,
    clientY: 0,
    offsetX: SocialCalc.Constants.TooltipOffsetX,
    offsetY: SocialCalc.Constants.TooltipOffsetY
}, SocialCalc.TooltipRegister = function(e, t, o, a) {
    var l = SocialCalc.TooltipInfo;
    if (l.registeredElements.push({
            element: e,
            tiptext: t,
            functionobj: o,
            parent: a
        }), !l.registered) {
        if (document.addEventListener) document.addEventListener("mousemove", SocialCalc.TooltipMouseMove, !1);
        else {
            if (!document.attachEvent) throw SocialCalc.Constants.s_BrowserNotSupported;
            document.attachEvent("onmousemove", SocialCalc.TooltipMouseMove)
        }
        l.registered = !0
    }
}, SocialCalc.TooltipMouseMove = function(e) {
    var t = e || window.event,
        o = SocialCalc.TooltipInfo;
    o.clientX = t.clientX, o.clientY = t.clientY;
    var a = SocialCalc.LookupElement(t.target || t.srcElement, o.registeredElements);
    o.timer && (window.clearTimeout(o.timer), o.timer = null), o.popupElement && SocialCalc.TooltipHide(), o.tooltipElement = a || null, a && !SocialCalc.ButtonInfo.buttonDown && (o.timer = window.setTimeout(SocialCalc.TooltipWaitDone, 700), o.tooltipElement.element.addEventListener ? o.tooltipElement.element.addEventListener("mousedown", SocialCalc.TooltipMouseDown, !1) : o.tooltipElement.element.attachEvent && o.tooltipElement.element.attachEvent("onmousedown", SocialCalc.TooltipMouseDown))
}, SocialCalc.TooltipMouseDown = function(e) {
    var t = (e || window.event, SocialCalc.TooltipInfo);
    t.timer && (window.clearTimeout(t.timer), t.timer = null), t.popupElement && SocialCalc.TooltipHide(), t.tooltipElement && (t.tooltipElement.element.removeEventListener ? t.tooltipElement.element.removeEventListener("mousedown", SocialCalc.TooltipMouseDown, !1) : t.tooltipElement.element.attachEvent && t.tooltipElement.element.detachEvent("onmousedown", SocialCalc.TooltipMouseDown), t.tooltipElement = null)
}, SocialCalc.TooltipDisplay = function(e) {
    var t = SocialCalc.TooltipInfo,
        o = SocialCalc.Constants,
        a = e.functionobj && "number" == typeof e.functionobj.offsetx ? e.functionobj.offsetx : t.offsetX,
        l = e.functionobj && "number" == typeof e.functionobj.offsety ? e.functionobj.offsety : t.offsetY,
        n = SocialCalc.GetViewportInfo(),
        r = SocialCalc.GetElementPositionWithScroll(e.parent);
    t.popupElement = document.createElement("div"), o.TDpopupElementClass && (t.popupElement.className = o.TDpopupElementClass), SocialCalc.setStyles(t.popupElement, o.TDpopupElementStyle), t.popupElement.innerHTML = e.tiptext, t.clientX > n.width / 2 ? (t.popupElement.style.bottom = r.height - t.clientY + l + r.top + "px", t.popupElement.style.right = r.width - t.clientX + a + r.left + "px") : (t.popupElement.style.bottom = r.height - t.clientY + l + r.top + "px", t.popupElement.style.left = t.clientX + a - r.left + "px"), t.clientY < 50 && (t.popupElement.style.bottom = r.height - t.clientY + l - 50 + r.top + "px"), e.parent.appendChild(t.popupElement)
}, SocialCalc.TooltipHide = function() {
    var e = SocialCalc.TooltipInfo;
    e.popupElement && (e.popupElement.parentNode.removeChild(e.popupElement), e.popupElement = null)
}, SocialCalc.TooltipWaitDone = function() {
    var e = SocialCalc.TooltipInfo;
    e.timer = null, SocialCalc.TooltipDisplay(e.tooltipElement)
}, SocialCalc.ButtonInfo = {
    registeredElements: [],
    buttonElement: null,
    doingHover: !1,
    buttonDown: !1,
    timer: null,
    relativeOffset: null,
    clientX: 0,
    clientY: 0
}, SocialCalc.ButtonRegister = function(e, t, o, a) {
    var l = SocialCalc.ButtonInfo;
    if (o || (o = {}), l.registeredElements.push({
            name: o.name,
            element: t,
            editor: e,
            normalstyle: o.normalstyle,
            hoverstyle: o.hoverstyle,
            downstyle: o.downstyle,
            repeatwait: o.repeatwait,
            repeatinterval: o.repeatinterval,
            functionobj: a
        }), t.addEventListener) t.addEventListener("mousedown", SocialCalc.ButtonMouseDown, !1), t.addEventListener("mouseover", SocialCalc.ButtonMouseOver, !1), t.addEventListener("mouseout", SocialCalc.ButtonMouseOut, !1);
    else {
        if (!t.attachEvent) throw SocialCalc.Constants.s_BrowserNotSupported;
        t.attachEvent("onmousedown", SocialCalc.ButtonMouseDown), t.attachEvent("onmouseover", SocialCalc.ButtonMouseOver), t.attachEvent("onmouseout", SocialCalc.ButtonMouseOut)
    }
}, SocialCalc.ButtonMouseOver = function(e) {
    var t = e || window.event,
        o = SocialCalc.ButtonInfo,
        a = SocialCalc.LookupElement(t.target || t.srcElement, o.registeredElements);
    if (a) {
        if (o.buttonDown) return void(o.buttonElement == a && (o.doingHover = !0));
        o.buttonElement && o.buttonElement != a && o.doingHover && SocialCalc.setStyles(o.buttonElement.element, o.buttonElement.normalstyle), o.buttonElement = a, o.doingHover = !0, SocialCalc.setStyles(a.element, a.hoverstyle), a && a.functionobj && a.functionobj.MouseOver && a.functionobj.MouseOver(t, o, a)
    }
}, SocialCalc.ButtonMouseOut = function(e) {
    var t = e || window.event,
        o = SocialCalc.ButtonInfo;
    if (o.buttonDown) return void(o.doingHover = !1);
    var a = SocialCalc.LookupElement(t.target || t.srcElement, o.registeredElements);
    o.doingHover && (o.buttonElement && SocialCalc.setStyles(o.buttonElement.element, o.buttonElement.normalstyle), o.buttonElement = null, o.doingHover = !1), a && a.functionobj && a.functionobj.MouseOut && a.functionobj.MouseOut(t, o, a)
}, SocialCalc.ButtonMouseDown = function(e) {
    var t = e || window.event,
        o = SocialCalc.ButtonInfo,
        a = (SocialCalc.GetViewportInfo(), SocialCalc.LookupElement(t.target || t.srcElement, o.registeredElements));
    a && (a && a.functionobj && a.functionobj.Disabled && a.functionobj.Disabled(t, o, a) || (o.buttonElement = a, o.buttonDown = !0, SocialCalc.setStyles(a.element, o.buttonElement.downstyle), document.addEventListener ? document.addEventListener("mouseup", SocialCalc.ButtonMouseUp, !0) : a.element.attachEvent && (a.element.setCapture(), a.element.attachEvent("onmouseup", SocialCalc.ButtonMouseUp), a.element.attachEvent("onlosecapture", SocialCalc.ButtonMouseUp)), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, o.relativeOffset = SocialCalc.GetElementPositionWithScroll(a.editor.toplevel), o.clientX = t.clientX - o.relativeOffset.left, o.clientY = t.clientY - o.relativeOffset.top, a && a.functionobj && a.functionobj.MouseDown && a.functionobj.MouseDown(t, o, a), a.repeatwait && (o.timer = window.setTimeout(SocialCalc.ButtonRepeat, a.repeatwait))))
}, SocialCalc.ButtonMouseUp = function(e) {
    var t = e || window.event,
        o = SocialCalc.ButtonInfo,
        a = o.buttonElement;
    o.timer && (window.clearTimeout(o.timer), o.timer = null), o.buttonDown && (t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1, document.removeEventListener ? document.removeEventListener("mouseup", SocialCalc.ButtonMouseUp, !0) : document.detachEvent && (a.element.detachEvent("onlosecapture", SocialCalc.ButtonMouseUp), a.element.detachEvent("onmouseup", SocialCalc.ButtonMouseUp), a.element.releaseCapture()), o.buttonElement.downstyle && (o.doingHover ? SocialCalc.setStyles(a.element, o.buttonElement.hoverstyle) : SocialCalc.setStyles(a.element, o.buttonElement.normalstyle)), o.buttonDown = !1, a && a.functionobj && a.functionobj.MouseUp && a.functionobj.MouseUp(t, o, a))
}, SocialCalc.ButtonRepeat = function() {
    var e = SocialCalc.ButtonInfo,
        t = e.buttonElement;
    t && (t && t.functionobj && t.functionobj.Repeat && t.functionobj.Repeat(null, e, t), e.timer = window.setTimeout(SocialCalc.ButtonRepeat, t.repeatinterval || 100))
}, SocialCalc.MouseWheelInfo = {
    registeredElements: []
}, SocialCalc.MouseWheelRegister = function(e, t) {
    var o = SocialCalc.MouseWheelInfo;
    if (o.registeredElements.push({
            element: e,
            functionobj: t
        }), e.addEventListener) e.addEventListener("DOMMouseScroll", SocialCalc.ProcessMouseWheel, !1), e.addEventListener("mousewheel", SocialCalc.ProcessMouseWheel, !1);
    else {
        if (!e.attachEvent) throw SocialCalc.Constants.s_BrowserNotSupported;
        e.attachEvent("onmousewheel", SocialCalc.ProcessMouseWheel)
    }
}, SocialCalc.ProcessMouseWheel = function(e) {
    var t, o = e || window.event;
    if (!SocialCalc.Keyboard.passThru) {
        var a, l = SocialCalc.MouseWheelInfo,
            n = o.target || o.srcElement;
        for (a = null; !a && n; n = n.parentNode) a = SocialCalc.LookupElement(n, l.registeredElements);
        a && (t = o.wheelDelta ? o.wheelDelta / 120 : -o.detail / 3, t || (t = 0), a.functionobj && a.functionobj.WheelMove && a.functionobj.WheelMove(o, t, l, a), o.preventDefault && o.preventDefault(), o.returnValue = !1)
    }
}, SocialCalc.keyboardTables = {
    specialKeysCommon: {
        8: "[backspace]",
        9: "[tab]",
        13: "[enter]",
        25: "[tab]",
        27: "[esc]",
        33: "[pgup]",
        34: "[pgdn]",
        35: "[end]",
        36: "[home]",
        37: "[aleft]",
        38: "[aup]",
        39: "[aright]",
        40: "[adown]",
        45: "[ins]",
        46: "[del]",
        113: "[f2]"
    },
    specialKeysIE: {
        8: "[backspace]",
        9: "[tab]",
        13: "[enter]",
        25: "[tab]",
        27: "[esc]",
        33: "[pgup]",
        34: "[pgdn]",
        35: "[end]",
        36: "[home]",
        37: "[aleft]",
        38: "[aup]",
        39: "[aright]",
        40: "[adown]",
        45: "[ins]",
        46: "[del]",
        113: "[f2]"
    },
    controlKeysIE: {
        67: "[ctrl-c]",
        83: "[ctrl-s]",
        86: "[ctrl-v]",
        88: "[ctrl-x]",
        90: "[ctrl-z]"
    },
    specialKeysOpera: {
        8: "[backspace]",
        9: "[tab]",
        13: "[enter]",
        25: "[tab]",
        27: "[esc]",
        33: "[pgup]",
        34: "[pgdn]",
        35: "[end]",
        36: "[home]",
        37: "[aleft]",
        38: "[aup]",
        39: "[aright]",
        40: "[adown]",
        45: "[ins]",
        46: "[del]",
        113: "[f2]"
    },
    controlKeysOpera: {
        67: "[ctrl-c]",
        83: "[ctrl-s]",
        86: "[ctrl-v]",
        88: "[ctrl-x]",
        90: "[ctrl-z]"
    },
    specialKeysSafari: {
        8: "[backspace]",
        9: "[tab]",
        13: "[enter]",
        25: "[tab]",
        27: "[esc]",
        63232: "[aup]",
        63233: "[adown]",
        63234: "[aleft]",
        63235: "[aright]",
        63272: "[del]",
        63273: "[home]",
        63275: "[end]",
        63276: "[pgup]",
        63277: "[pgdn]",
        63237: "[f2]"
    },
    controlKeysSafari: {
        99: "[ctrl-c]",
        115: "[ctrl-s]",
        118: "[ctrl-v]",
        120: "[ctrl-x]",
        122: "[ctrl-z]"
    },
    ignoreKeysSafari: {
        63236: "[f1]",
        63238: "[f3]",
        63239: "[f4]",
        63240: "[f5]",
        63241: "[f6]",
        63242: "[f7]",
        63243: "[f8]",
        63244: "[f9]",
        63245: "[f10]",
        63246: "[f11]",
        63247: "[f12]",
        63289: "[numlock]"
    },
    specialKeysFirefox: {
        8: "[backspace]",
        9: "[tab]",
        13: "[enter]",
        25: "[tab]",
        27: "[esc]",
        33: "[pgup]",
        34: "[pgdn]",
        35: "[end]",
        36: "[home]",
        37: "[aleft]",
        38: "[aup]",
        39: "[aright]",
        40: "[adown]",
        45: "[ins]",
        46: "[del]",
        113: "[f2]"
    },
    controlKeysFirefox: {
        99: "[ctrl-c]",
        115: "[ctrl-s]",
        118: "[ctrl-v]",
        120: "[ctrl-x]",
        122: "[ctrl-z]"
    },
    ignoreKeysFirefox: {
        16: "[shift]",
        17: "[ctrl]",
        18: "[alt]",
        20: "[capslock]",
        19: "[pause]",
        44: "[printscreen]",
        91: "[windows]",
        92: "[windows]",
        112: "[f1]",
        114: "[f3]",
        115: "[f4]",
        116: "[f5]",
        117: "[f6]",
        118: "[f7]",
        119: "[f8]",
        120: "[f9]",
        121: "[f10]",
        122: "[f11]",
        123: "[f12]",
        144: "[numlock]",
        145: "[scrolllock]",
        224: "[cmd]"
    }
}, SocialCalc.Keyboard = {
    areListener: !1,
    focusTable: null,
    passThru: null,
    didProcessKey: !1,
    statusFromProcessKey: !1,
    repeatingKeyPress: !1,
    chForProcessKey: ""
}, SocialCalc.KeyboardSetFocus = function(e) {
    $(e.target).is(".searchbarinput") || $(e.target).is("th") || (SocialCalc.Keyboard.focusTable = e, SocialCalc.Keyboard.areListener || (document.onkeydown = SocialCalc.ProcessKeyDown, document.onkeypress = SocialCalc.ProcessKeyPress, SocialCalc.Keyboard.areListener = !0), SocialCalc.Keyboard.passThru && (SocialCalc.Keyboard.passThru.blur && SocialCalc.Keyboard.passThru.blur(), SocialCalc.Keyboard.passThru = null), window.focus())
}, SocialCalc.KeyboardFocus = function() {
    SocialCalc.Keyboard.passThru = null, window.focus()
}, SocialCalc.ProcessKeyDown = function(e) {
    var t = SocialCalc.keyboardTables;
    t.didProcessKey = !1, t.statusFromProcessKey = !1, t.repeatingKeyPress = !1;
    var o = "",
        a = !0;
    if (!SocialCalc.Keyboard.passThru) {
        if (e = e || window.event, void 0 == e.which) {
            if (o = t.specialKeysCommon[e.keyCode], !o && (e.ctrlKey && (o = t.controlKeysIE[e.keyCode]), !o)) return !0;
            a = SocialCalc.ProcessKey(o, e), a || (e.preventDefault && e.preventDefault(), e.returnValue = !1)
        } else {
            if (o = t.specialKeysCommon[e.keyCode], !o && ((e.ctrlKey || e.metaKey) && (o = t.controlKeysIE[e.keyCode]), !o)) return !0;
            a = SocialCalc.ProcessKey(o, e), t.didProcessKey = !0, t.statusFromProcessKey = a, t.chForProcessKey = o
        }
        return a
    }
}, SocialCalc.ProcessKeyPress = function(e) {
    var t = SocialCalc.keyboardTables,
        o = "";
    if (e = e || window.event, !SocialCalc.Keyboard.passThru) {
        if (t.didProcessKey) return t.repeatingKeyPress ? SocialCalc.ProcessKey(t.chForProcessKey, e) : (t.repeatingKeyPress = !0, t.statusFromProcessKey);
        if (void 0 == e.which) o = String.fromCharCode(e.keyCode);
        else {
            if (!e.which) return !1;
            if (void 0 == e.charCode) {
                if (0 == e.which) return !0;
                if (e.which < 32 || 144 == e.which) {
                    if (o = t.specialKeysOpera[e.which]) return !0
                } else o = e.ctrlKey ? t.controlKeysOpera[e.keyCode] : String.fromCharCode(e.which)
            } else {
                if (0 == e.keyCode && 0 == e.charCode) return;
                if (e.keyCode == e.charCode) {
                    if (o = t.specialKeysSafari[e.keyCode], !o) {
                        if (t.ignoreKeysSafari[e.keyCode]) return !0;
                        o = e.metaKey ? t.controlKeysSafari[e.keyCode] : String.fromCharCode(e.which)
                    }
                } else {
                    if (t.specialKeysFirefox[e.keyCode]) return !0;
                    o = String.fromCharCode(e.which), (e.ctrlKey || e.metaKey) && (o = t.controlKeysFirefox[e.which])
                }
            }
        }
        var a = SocialCalc.ProcessKey(o, e);
        return a || (e.preventDefault && e.preventDefault(), e.returnValue = !1), a
    }
}, SocialCalc.ProcessKey = function(e, t) {
    var o = SocialCalc.Keyboard.focusTable;
    return o && "searchbarinput" != $(t.explicitOriginalTarget).attr("class") ? o.EditorProcessKey(e, t) : !0
};
var SocialCalc;
SocialCalc || (SocialCalc = {}), SocialCalc.FormatNumber = {}, SocialCalc.FormatNumber.format_definitions = {}, SocialCalc.FormatNumber.separatorchar = ",", SocialCalc.FormatNumber.decimalchar = ".", SocialCalc.FormatNumber.daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], SocialCalc.FormatNumber.daynames3 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], SocialCalc.FormatNumber.monthnames3 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], SocialCalc.FormatNumber.monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], SocialCalc.FormatNumber.allowedcolors = {
    BLACK: "#000000",
    BLUE: "#0000FF",
    CYAN: "#00FFFF",
    GREEN: "#00FF00",
    MAGENTA: "#FF00FF",
    RED: "#FF0000",
    WHITE: "#FFFFFF",
    YELLOW: "#FFFF00"
}, SocialCalc.FormatNumber.alloweddates = {
    H: "h]",
    M: "m]",
    MM: "mm]",
    S: "s]",
    SS: "ss]"
}, SocialCalc.FormatNumber.commands = {
    copy: 1,
    color: 2,
    integer_placeholder: 3,
    fraction_placeholder: 4,
    decimal: 5,
    currency: 6,
    general: 7,
    separator: 8,
    date: 9,
    comparison: 10,
    section: 11,
    style: 12
}, SocialCalc.FormatNumber.datevalues = {
    julian_offset: 2415019,
    seconds_in_a_day: 86400,
    seconds_in_an_hour: 3600
}, SocialCalc.FormatNumber.formatNumberWithFormat = function(e, t, o) {
    var a, l, n, r, i, c, s, d, u, p, f, h, m, C, g, S, v, b, y, w, x, T, k, F, E, _, P, R, A, D, L, N, M, I, O, B, z, H, U, j = SocialCalc.Constants,
        V = SocialCalc.FormatNumber,
        G = "";
    if ("string" == typeof e && !e.length) return "";
    if (U = e - 0, !isFinite(U)) return "string" == typeof e ? V.formatTextWithFormat(e, t) : "NaN";
    e = U;
    var $ = 0 > U ? 1 : 0;
    $ && (U = -U);
    var W = 0 == U ? 1 : 0;
    if (o = o || j.FormatNumber_DefaultCurrency, V.parse_format_string(V.format_definitions, t), v = V.format_definitions[t], !v) throw "Format not parsed error!";
    if (b = v.sectioninfo.length - 1, v.hascomparison)
        for (b = 0, y = 0, T = 0;; T++) {
            if (a = v.operators[T], l = v.operands[T], !a) {
                y && (t = "General", V.parse_format_string(V.format_definitions, t), v = V.format_definitions[t], b = 0);
                break
            }
            if (a != V.commands.section) {
                if (a == V.commands.comparison) {
                    if (E = l.indexOf(":"), w = l.substring(0, E), x = l.substring(E + 1) - 0, "<" == w && x > e || "<=" == w && x >= e || "=" == w && e == x || "<>" == w && e != x || ">=" == w && e >= x || ">" == w && e > x) break;
                    y = 1
                }
            } else {
                if (!y) break;
                y = 0, b++
            }
        } else b > 0 && (1 == b ? $ ? ($ = 0, b = 1) : b = 0 : (2 == b || 3 == b) && ($ ? ($ = 0, b = 1) : b = W ? 2 : 0));
    if (F = v.sectioninfo[b], F.commas > 0)
        for (E = 0; E < F.commas; E++) U /= 1e3;
    if (F.percent > 0)
        for (E = 0; E < F.percent; E++) U *= 100;
    for (_ = 1, E = 0; E < F.fractiondigits; E++) _ *= 10;
    if (P = Math.floor(U * _ + .5), P /= _, "number" != typeof P) return "NaN";
    if (!isFinite(P)) return "NaN";
    if (R = P + "", 0 == P && (F.fractiondigits || F.integerdigits) && ($ = 0), R.indexOf("e") >= 0) return e + "";
    if (A = R.match(/^\+{0,1}(\d*)(?:\.(\d*)){0,1}$/), !A) return "NaN";
    if (D = A[1], D && "0" != D || (D = ""), L = A[2], L || (L = ""), F.hasdate) {
        if (0 > e) return "??-???-??&nbsp;??:??:??";
        for (c = (e - Math.floor(e)) * V.datevalues.seconds_in_a_day, s = e * V.datevalues.seconds_in_a_day, d = Math.floor(c / V.datevalues.seconds_in_an_hour), f = Math.floor(s / V.datevalues.seconds_in_an_hour), c -= d * V.datevalues.seconds_in_an_hour, u = Math.floor(c / 60), h = Math.floor(s / 60), p = c - 60 * u, _ = 1, E = 0; E < F.fractiondigits; E++) _ *= 10;
        for (p = Math.floor(p * _ + .5), p /= _, m = Math.floor(s * _ + .5), m /= _, p >= 60 && (p = 0, u++, h++, u >= 60 && (u = 0, d++, f++, d >= 24 && (d = 0, e++))), L = p - Math.floor(p) + "", L = L.substring(2), g = SocialCalc.FormatNumber.convert_date_julian_to_gregorian(Math.floor(e + V.datevalues.julian_offset)), S = 0, mspos = F.sectionstart;
            (a = v.operators[mspos], l = v.operands[mspos], a) && a != V.commands.section; mspos++) a == V.commands.date ? ("am/pm" != l.toLowerCase() && "a/p" != l.toLowerCase() || C || (d >= 12 ? (d -= 12, C = "a/p" == l.toLowerCase() ? j.s_FormatNumber_pm1 : j.s_FormatNumber_pm) : C = "a/p" == l.toLowerCase() ? j.s_FormatNumber_am1 : j.s_FormatNumber_am, l.indexOf(C) < 0 && (C = C.toLowerCase())), !S || "m" != l && "mm" != l || (v.operands[mspos] += "in"), S = "h" == l.charAt(0) ? 1 : 0) : a != V.commands.copy && (S = 0);
        for (S = 0, --mspos;
            (a = v.operators[mspos], l = v.operands[mspos], a) && a != V.commands.section; mspos--) a == V.commands.date ? (!S || "m" != l && "mm" != l || (v.operands[mspos] += "in"), S = "ss" == l ? 1 : 0) : a != V.commands.copy && (S = 0)
    }
    for (N = 0, M = 0, I = 0, O = "", B = "", z = j.FormatNumber_separatorchar, z.indexOf(" ") >= 0 && (z = z.replace(/ /g, "&nbsp;")), H = j.FormatNumber_decimalchar, H.indexOf(" ") >= 0 && (H = H.replace(/ /g, "&nbsp;")), k = F.sectionstart; a = v.operators[k];)
        if (l = v.operands[k++], a == V.commands.copy) G += l;
        else if (a == V.commands.color) O = l;
    else if (a == V.commands.style) B = l;
    else if (a == V.commands.integer_placeholder) {
        if ($ && (G += "-", $ = 0), N++, 1 == N && D.length > F.integerdigits)
            for (; M < D.length - F.integerdigits; M++) G += D.charAt(M), F.thousandssep && (n = D.length - M - 1, n > 2 && n % 3 == 0 && (G += z));
        D.length < F.integerdigits && N <= F.integerdigits - D.length ? ("0" == l || "?" == l) && (G += "0" == l ? "0" : "&nbsp;", F.thousandssep && (n = F.integerdigits - N, n > 2 && n % 3 == 0 && (G += z))) : (G += D.charAt(M), F.thousandssep && (n = D.length - M - 1, n > 2 && n % 3 == 0 && (G += z)), M++)
    } else if (a == V.commands.fraction_placeholder) I >= L.length ? ("0" == l || "?" == l) && (G += "0" == l ? "0" : "&nbsp;") : G += L.charAt(I), I++;
    else if (a == V.commands.decimal) $ && (G += "-", $ = 0), G += H;
    else if (a == V.commands.currency) $ && (G += "-", $ = 0), G += l;
    else if (a == V.commands.general) {
        if (0 != U) {
            var K = Math.floor(Math.LOG10E * Math.log(U));
            if (K = Math.pow(10, 13 - K), U = Math.floor(K * U + .5) / K, !isFinite(U)) return "NaN"
        }
        if ($ && (G += "-"), R = U + "", R.indexOf("e") >= 0) {
            G += R;
            continue
        }
        if (A = R.match(/^\+{0,1}(\d*)(?:\.(\d*)){0,1}$/), D = A[1], D && "0" != D || (D = ""), L = A[2], L || (L = ""), M = 0, I = 0, D.length)
            for (; M < D.length; M++) G += D.charAt(M), F.thousandssep && (n = D.length - M - 1, n > 2 && n % 3 == 0 && (G += z));
        else G += "0";
        if (L.length)
            for (G += H; I < L.length; I++) G += L.charAt(I)
    } else if (a == V.commands.date) i = l.toLowerCase(), "y" == i || "yy" == i ? G += (g.year + "").substring(2) : "yyyy" == i ? G += g.year + "" : "d" == i ? G += g.day + "" : "dd" == i ? (r = 1e3 + g.day, G += (r + "").substr(2)) : "ddd" == i ? (r = Math.floor(e + 6) % 7, G += j.s_FormatNumber_daynames3[r]) : "dddd" == i ? (r = Math.floor(e + 6) % 7, G += j.s_FormatNumber_daynames[r]) : "m" == i ? G += g.month + "" : "mm" == i ? (r = 1e3 + g.month, G += (r + "").substr(2)) : "mmm" == i ? G += j.s_FormatNumber_monthnames3[g.month - 1] : "mmmm" == i ? G += j.s_FormatNumber_monthnames[g.month - 1] : "mmmmm" == i ? G += j.s_FormatNumber_monthnames[g.month - 1].charAt(0) : "h" == i ? G += d + "" : "h]" == i ? G += f + "" : "mmin" == i ? (r = 1e3 + u + "", G += r.substr(2)) : "mm]" == i ? 100 > h ? (r = 1e3 + h + "", G += r.substr(2)) : G += h + "" : "min" == i ? G += u + "" : "m]" == i ? G += h + "" : "hh" == i ? (r = 1e3 + d + "", G += r.substr(2)) : "s" == i ? (r = Math.floor(p), G += r + "") : "ss" == i ? (r = 1e3 + Math.floor(p) + "", G += r.substr(2)) : "am/pm" == i || "a/p" == i ? G += C : "ss]" == i && (100 > m ? (r = 1e3 + Math.floor(m) + "", G += r.substr(2)) : (r = Math.floor(m), G += r + ""));
    else {
        if (a == V.commands.section) break;
        if (a == V.commands.comparison) continue;
        G += "!! Parse error !!"
    }
    return O && (G = '<span style="color:' + O + ';">' + G + "</span>"), B && (G = '<span style="' + B + ';">' + G + "</span>"), G
}, SocialCalc.FormatNumber.formatTextWithFormat = function(e, t) {
    var o, a, l, n, r = (SocialCalc.Constants, SocialCalc.FormatNumber),
        i = e + "",
        c = "",
        s = "",
        d = "";
    if (r.parse_format_string(r.format_definitions, t), thisformat = r.format_definitions[t], !thisformat) throw "Format not parsed error!";
    if (o = thisformat.sectioninfo.length - 1, 0 == o) o = 0;
    else {
        if (3 != o) return i;
        o = 3
    }
    for (a = thisformat.sectioninfo[o], l = a.sectionstart; op = thisformat.operators[l];) n = thisformat.operands[l++], op == r.commands.copy ? c += "@" == n ? i : n.replace(/ /g, "&nbsp;") : op == r.commands.color ? s = n : op == r.commands.style && (d = n);
    return s && (c = '<span style="color:' + s + ';">' + c + "</span>"), d && (c = '<span style="' + d + ';">' + c + "</span>"), c
}, SocialCalc.FormatNumber.parse_format_string = function(e, t) {
    var o, a, l, n, r, i, c, s, d, u, p, f, h, m, C, g, S, v = SocialCalc.FormatNumber,
        b = 1;
    if (!e[t]) {
        for (o = {
                operators: [],
                operands: [],
                sectioninfo: [{}]
            }, e[t] = o, a = 0, sectioninfo = o.sectioninfo[a], sectioninfo.sectionstart = 0, sectioninfo.integerdigits = 0, sectioninfo.fractiondigits = 0, sectioninfo.commas = 0, sectioninfo.percent = 0, g = 0; g < t.length; g++)
            if (S = t.charAt(g), c) {
                if ('"' == S) {
                    c = 0, o.operators.push(v.commands.copy), o.operands.push(s);
                    continue
                }
                s += S
            } else if (d) {
            if ("]" == S) {
                if (d = 0, p = SocialCalc.FormatNumber.parse_format_bracket(u), p.operator == v.commands.separator) {
                    sectioninfo.thousandssep = 1;
                    continue
                }
                p.operator == v.commands.date && (sectioninfo.hasdate = 1), p.operator == v.commands.comparison && (o.hascomparison = 1), o.operators.push(p.operator), o.operands.push(p.operand);
                continue
            }
            u += S
        } else if (n) o.operators.push(v.commands.copy), o.operands.push(S), n = !1;
        else if (r) o.operators.push(v.commands.copy), o.operands.push(S + S + S + S + S), r = !1;
        else if (i) o.operators.push(v.commands.copy), o.operands.push("&nbsp;"), i = !1;
        else {
            if (f) {
                if ("general".charAt(f) == S.toLowerCase()) {
                    f++, 7 == f && (o.operators.push(v.commands.general), o.operands.push(S), f = 0);
                    continue
                }
                f = 0
            }
            if (C) {
                if (C.charAt(0) == S) {
                    C += S;
                    continue
                }
                o.operators.push(v.commands.date), o.operands.push(C), sectioninfo.hasdate = 1, C = ""
            }
            h ? (h += S, m = h.toLowerCase(), m != "am/pm".substring(0, m.length) && m != "a/p".substring(0, m.length) ? ampstr = "" : ("am/pm" == m || "a/p" == m) && (o.operators.push(v.commands.date), o.operands.push(h), h = "")) : "#" == S || "0" == S || "?" == S ? b ? (sectioninfo.integerdigits++, sectioninfo.commas && (sectioninfo.thousandssep = 1, sectioninfo.commas = 0), l = 1, o.operators.push(v.commands.integer_placeholder), o.operands.push(S)) : (sectioninfo.fractiondigits++, l = 1, o.operators.push(v.commands.fraction_placeholder), o.operands.push(S)) : "." == S ? (l = 0, o.operators.push(v.commands.decimal), o.operands.push(S), b = 0) : "$" == S ? (l = 0, o.operators.push(v.commands.currency), o.operands.push(S)) : "," == S ? l ? sectioninfo.commas++ : (o.operators.push(v.commands.copy), o.operands.push(S)) : "%" == S ? (l = 0, sectioninfo.percent++, o.operators.push(v.commands.copy), o.operands.push(S)) : '"' == S ? (l = 0, c = 1, s = "") : "[" == S ? (l = 0, d = 1, u = "") : "\\" == S ? (n = 1, l = 0) : "*" == S ? (r = 1, l = 0) : "_" == S ? (i = 1, l = 0) : ";" == S ? (a++, o.sectioninfo[a] = {}, sectioninfo = o.sectioninfo[a], sectioninfo.sectionstart = 1 + o.operators.length, sectioninfo.integerdigits = 0, sectioninfo.fractiondigits = 0, sectioninfo.commas = 0, sectioninfo.percent = 0, b = 1, l = 0, o.operators.push(v.commands.section), o.operands.push(S)) : "g" == S.toLowerCase() ? (f = 1, l = 0) : "a" == S.toLowerCase() ? (h = S, l = 0) : "dmyhHs".indexOf(S) >= 0 ? C = S : (l = 0, o.operators.push(v.commands.copy), o.operands.push(S))
        }
        C && (o.operators.push(v.commands.date), o.operands.push(C), sectioninfo.hasdate = 1)
    }
}, SocialCalc.FormatNumber.parse_format_bracket = function(e) {
    var t, o = SocialCalc.FormatNumber,
        a = SocialCalc.Constants,
        l = {};
    return "$" == e.charAt(0) ? (l.operator = o.commands.currency, t = e.match(/^\$(.+?)(\-.+?){0,1}$/), l.operand = t ? t[1] || a.FormatNumber_defaultCurrency || "$" : e.substring(1) || a.FormatNumber_defaultCurrency || "$") : "?$" == e ? (l.operator = o.commands.currency, l.operand = "[?$]") : o.allowedcolors[e.toUpperCase()] ? (l.operator = o.commands.color, l.operand = o.allowedcolors[e.toUpperCase()]) : (t = e.match(/^style=([^"]*)$/)) ? (l.operator = o.commands.style, l.operand = t[1]) : "," == e ? (l.operator = o.commands.separator, l.operand = e) : o.alloweddates[e.toUpperCase()] ? (l.operator = o.commands.date, l.operand = o.alloweddates[e.toUpperCase()]) : (t = e.match(/^[<>=]/)) ? (t = e.match(/^([<>=]+)(.+)$/), l.operator = o.commands.comparison, l.operand = t[1] + ":" + t[2]) : (l.operator = o.commands.copy, l.operand = "[" + e + "]"), l
}, SocialCalc.FormatNumber.convert_date_gregorian_to_julian = function(e, t, o) {
    var a;
    return a = o - 32075 + SocialCalc.intFunc(1461 * (e + 4800 + SocialCalc.intFunc((t - 14) / 12)) / 4), a += SocialCalc.intFunc(367 * (t - 2 - 12 * SocialCalc.intFunc((t - 14) / 12)) / 12), a -= SocialCalc.intFunc(3 * SocialCalc.intFunc((e + 4900 + SocialCalc.intFunc((t - 14) / 12)) / 100) / 4)
}, SocialCalc.FormatNumber.convert_date_julian_to_gregorian = function(e) {
    var t, o, a, l, n;
    return t = e + 68569, o = Math.floor(4 * t / 146097), t -= Math.floor((146097 * o + 3) / 4), a = Math.floor(4e3 * (t + 1) / 1461001), t = t - Math.floor(1461 * a / 4) + 31, l = Math.floor(80 * t / 2447), n = t - Math.floor(2447 * l / 80), t = Math.floor(l / 11), l = l + 2 - 12 * t, a = 100 * (o - 49) + a + t, {
        year: a,
        month: l,
        day: n
    }
}, SocialCalc.intFunc = function(e) {
    return 0 > e ? -Math.floor(-e) : Math.floor(e)
};
var SocialCalc;
SocialCalc || (SocialCalc = {}), SocialCalc.Formula = {}, SocialCalc.Formula.ParseState = {
    num: 1,
    alpha: 2,
    coord: 3,
    string: 4,
    stringquote: 5,
    numexp1: 6,
    numexp2: 7,
    alphanumeric: 8,
    specialvalue: 9
}, SocialCalc.Formula.TokenType = {
    num: 1,
    coord: 2,
    op: 3,
    name: 4,
    error: 5,
    string: 6,
    space: 7
}, SocialCalc.Formula.CharClass = {
    num: 1,
    numstart: 2,
    op: 3,
    eof: 4,
    alpha: 5,
    incoord: 6,
    error: 7,
    quote: 8,
    space: 9,
    specialstart: 10
}, SocialCalc.Formula.CharClassTable = {
    " ": 9,
    "!": 3,
    '"': 8,
    "'": 8,
    "#": 10,
    $: 6,
    "%": 3,
    "&": 3,
    "(": 3,
    ")": 3,
    "*": 3,
    "+": 3,
    ",": 3,
    "-": 3,
    ".": 2,
    "/": 3,
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    ":": 3,
    "<": 3,
    "=": 3,
    ">": 3,
    A: 5,
    B: 5,
    C: 5,
    D: 5,
    E: 5,
    F: 5,
    G: 5,
    H: 5,
    I: 5,
    J: 5,
    K: 5,
    L: 5,
    M: 5,
    N: 5,
    O: 5,
    P: 5,
    Q: 5,
    R: 5,
    S: 5,
    T: 5,
    U: 5,
    V: 5,
    W: 5,
    X: 5,
    Y: 5,
    Z: 5,
    "^": 3,
    _: 5,
    a: 5,
    b: 5,
    c: 5,
    d: 5,
    e: 5,
    f: 5,
    g: 5,
    h: 5,
    i: 5,
    j: 5,
    k: 5,
    l: 5,
    m: 5,
    n: 5,
    o: 5,
    p: 5,
    q: 5,
    r: 5,
    s: 5,
    t: 5,
    u: 5,
    v: 5,
    w: 5,
    x: 5,
    y: 5,
    z: 5
}, SocialCalc.Formula.UpperCaseTable = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    E: "E",
    F: "F",
    G: "G",
    H: "H",
    I: "I",
    J: "J",
    K: "K",
    L: "L",
    M: "M",
    N: "N",
    O: "O",
    P: "P",
    Q: "Q",
    R: "R",
    S: "S",
    T: "T",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "Z"
}, SocialCalc.Formula.SpecialConstants = {
    "#NULL!": "0,e#NULL!",
    "#NUM!": "0,e#NUM!",
    "#DIV/0!": "0,e#DIV/0!",
    "#VALUE!": "0,e#VALUE!",
    "#REF!": "0,e#REF!",
    "#NAME?": "0,e#NAME?"
}, SocialCalc.Formula.TokenPrecedence = {
    "!": 1,
    ":": 2,
    ",": 2,
    M: -3,
    P: -3,
    "%": 4,
    "^": 5,
    "*": 6,
    "/": 6,
    "+": 7,
    "-": 7,
    "&": 8,
    "<": 9,
    ">": 9,
    G: 9,
    L: 9,
    N: 9
}, SocialCalc.Formula.TokenOpExpansion = {
    G: ">=",
    L: "<=",
    M: "-",
    N: "<>",
    P: "+"
}, SocialCalc.Formula.TypeLookupTable = {
    unaryminus: {
        "n*": "|n*:1|",
        "e*": "|e*:1|",
        "t*": "|t*:e#VALUE!|",
        b: "|b:n|"
    },
    unaryplus: {
        "n*": "|n*:1|",
        "e*": "|e*:1|",
        "t*": "|t*:e#VALUE!|",
        b: "|b:n|"
    },
    unarypercent: {
        "n*": "|n:n%|n*:n|",
        "e*": "|e*:1|",
        "t*": "|t*:e#VALUE!|",
        b: "|b:n|"
    },
    plus: {
        "n%": "|n%:n%|nd:n|nt:n|ndt:n|n$:n|n:n|n*:n|b:n|e*:2|t*:e#VALUE!|",
        nd: "|n%:n|nd:nd|nt:ndt|ndt:ndt|n$:n|n:nd|n*:n|b:n|e*:2|t*:e#VALUE!|",
        nt: "|n%:n|nd:ndt|nt:nt|ndt:ndt|n$:n|n:nt|n*:n|b:n|e*:2|t*:e#VALUE!|",
        ndt: "|n%:n|nd:ndt|nt:ndt|ndt:ndt|n$:n|n:ndt|n*:n|b:n|e*:2|t*:e#VALUE!|",
        n$: "|n%:n|nd:n|nt:n|ndt:n|n$:n$|n:n$|n*:n|b:n|e*:2|t*:e#VALUE!|",
        nl: "|n%:n|nd:n|nt:n|ndt:n|n$:n|n:n|n*:n|b:n|e*:2|t*:e#VALUE!|",
        n: "|n%:n|nd:nd|nt:nt|ndt:ndt|n$:n$|n:n|n*:n|b:n|e*:2|t*:e#VALUE!|",
        b: "|n%:n%|nd:nd|nt:nt|ndt:ndt|n$:n$|n:n|n*:n|b:n|e*:2|t*:e#VALUE!|",
        "t*": "|n*:e#VALUE!|t*:e#VALUE!|b:e#VALUE!|e*:2|",
        "e*": "|e*:1|n*:1|t*:1|b:1|"
    },
    concat: {
        t: "|t:t|th:th|tw:tw|tl:t|tr:tr|t*:2|e*:2|",
        th: "|t:th|th:th|tw:t|tl:th|tr:t|t*:t|e*:2|",
        tw: "|t:tw|th:t|tw:tw|tl:tw|tr:tw|t*:t|e*:2|",
        tl: "|t:tl|th:th|tw:tw|tl:tl|tr:tr|t*:t|e*:2|",
        "t*": "|t*:t|e*:2|",
        "e*": "|e*:1|n*:1|t*:1|"
    },
    oneargnumeric: {
        "n*": "|n*:n|",
        "e*": "|e*:1|",
        "t*": "|t*:e#VALUE!|",
        b: "|b:n|"
    },
    twoargnumeric: {
        "n*": "|n*:n|t*:e#VALUE!|e*:2|",
        "e*": "|e*:1|n*:1|t*:1|",
        "t*": "|t*:e#VALUE!|n*:e#VALUE!|e*:2|"
    },
    propagateerror: {
        "n*": "|n*:2|e*:2|",
        "e*": "|e*:2|",
        "t*": "|t*:2|e*:2|",
        b: "|b:2|e*:2|"
    }
}, SocialCalc.Formula.ParseFormulaIntoTokens = function(e) {
    var t, o, a, l, n, r, i, c, s = SocialCalc.Formula,
        d = SocialCalc.Constants,
        u = s.ParseState,
        p = s.TokenType,
        f = s.CharClass,
        h = s.CharClassTable,
        m = s.UpperCaseTable,
        C = s.ParsePushToken,
        g = /^\$?[A-Z]{1,2}\$?[1-9]\d*$/i,
        S = [],
        v = "",
        b = 0,
        l = !1;
    for (t = 0; t <= e.length; t++) t < e.length ? (o = e.charAt(t), a = h[o]) : (o = "", a = f.eof), b == u.num && (a == f.num ? v += o : a != f.numstart || l ? "E" == o || "e" == o ? (v += o, l = !1, b = u.numexp1) : (C(S, v, p.num, 0), l = !1, b = 0) : (l = !0, v += o)), b == u.numexp1 && (a == u.num ? b = u.numexp2 : "+" != o && "-" != o || "E" != m[v.charAt(v.length - 1)] ? "E" == o || "e" == o || (C(S, d.s_parseerrexponent, p.error, 0), b = 0) : v += o), b == u.numexp2 && (a == f.num ? v += o : (C(S, v, p.num, 0), b = 0)), b == u.alpha && (a == f.num ? b = u.coord : a == f.alpha || "." == o ? v += o : a == f.incoord ? b = u.coord : a == f.op || a == f.numstart || a == f.space || a == f.eof ? (C(S, v.toUpperCase(), p.name, 0), b = 0) : (C(S, d.s_parseerrchar, p.error, 0), b = 0)), b == u.coord && (a == f.num ? v += o : a == f.incoord ? v += o : a == f.alpha ? b = u.alphanumeric : a == f.op || a == f.numstart || a == f.eof || a == f.space ? (c = g.test(v) ? p.coord : p.name, C(S, v.toUpperCase(), c, 0), b = 0) : (C(S, d.s_parseerrchar, p.error, 0), b = 0)), b == u.alphanumeric && (a == f.num || a == f.alpha ? v += o : a == f.op || a == f.numstart || a == f.space || a == f.eof ? (C(S, v.toUpperCase(), p.name, 0), b = 0) : (C(S, d.s_parseerrchar, p.error, 0), b = 0)), b == u.string ? a == f.quote ? b = u.stringquote : a == f.eof ? (C(S, d.s_parseerrstring, p.error, 0), b = 0) : v += o : b == u.stringquote ? a == f.quote ? (v += o, b = u.string) : (C(S, v, p.string, 0), b = 0) : b == u.specialvalue && ("!" == v.charAt(v.length - 1) ? (C(S, v, p.name, 0), b = 0) : a == f.eof ? (C(S, d.s_parseerrspecialvalue, p.error, 0), b = 0) : v += o), 0 == b && (a == f.num ? (v = o, b = u.num) : a == f.numstart ? (v = o, l = !0, b = u.num) : a == f.alpha || a == f.incoord ? (v = o, b = u.alpha) : a == f.specialstart ? (v = o, b = u.specialvalue) : a == f.op ? (v = o, S.length > 0 ? (n = S[S.length - 1], r = n.type, i = n.text, r == f.op && ("<" == i || ">" == i) && (v = i + v, S.pop(), S.length > 0 ? (n = S[S.length - 1], r = n.type, i = n.text) : (r = f.eof, i = "EOF"))) : (r = f.eof, i = "EOF"), c = p.op, 0 == S.length || r == f.op && ")" != i && "%" != i ? "-" == v ? (v = "M", o = "M") : "+" == v ? (v = "P", o = "P") : ")" == v && "(" == i || "(" != v && (c = p.error, v = d.s_parseerrtwoops) : v.length > 1 && (">=" == v ? (v = "G", o = "G") : "<=" == v ? (v = "L", o = "L") : "<>" == v ? (v = "N", o = "N") : (c = p.error, v = d.s_parseerrtwoops)), C(S, v, c, o), b = 0) : a == f.quote ? (v = "", b = u.string) : a == f.space || a == f.eof || C(S, d.s_parseerrchar, p.error, 0));
    return S
}, SocialCalc.Formula.ParsePushToken = function(e, t, o, a) {
    e.push({
        text: t,
        type: o,
        opcode: a
    })
}, SocialCalc.Formula.evaluate_parsed_formula = function(e, t, o) {
    {
        var a, l, n = SocialCalc.Formula;
        n.TokenType
    }
    return l = n.ConvertInfixToPolish(e), a = n.EvaluatePolish(e, l, t, o)
}, SocialCalc.Formula.ConvertInfixToPolish = function(e) {
    var t, o, a, l, n, r, i = SocialCalc.Formula,
        c = SocialCalc.Constants,
        s = i.TokenType,
        d = i.TokenPrecedence,
        u = [],
        p = [],
        f = "",
        h = -1;
    for (t = 0; t < e.length; t++)
        if (o = e[t], a = o.type, l = o.text, a == s.num || a == s.coord || a == s.string) u.push(t);
        else if (a == s.name) p.push(t), u.push(h);
    else {
        if (a == s.space) continue;
        if ("," == l) {
            for (; p.length && "(" != e[p[p.length - 1]].text;) u.push(p.pop());
            if (0 == p.length) {
                f = c.s_parseerrmissingopenparen;
                break
            }
        } else if ("(" == l) p.push(t);
        else if (")" == l) {
            for (; p.length && "(" != e[p[p.length - 1]].text;) u.push(p.pop());
            if (0 == p.length) {
                f = c.s_parseerrcloseparennoopen;
                break
            }
            p.pop(), p.length && e[p[p.length - 1]].type == s.name && u.push(p.pop())
        } else {
            if (a != s.op) {
                if (a == s.error) {
                    f = l;
                    break
                }
                f = "Internal error while processing parsed formula. ";
                break
            }
            for (p.length && e[p[p.length - 1]].type == s.name && u.push(p.pop()); !(!p.length || e[p[p.length - 1]].type != s.op || "(" == e[p[p.length - 1]].text || (n = d[o.opcode], r = d[e[p[p.length - 1]].opcode], n >= 0 && r > n) || 0 > n && (n = -n, 0 > r && (r = -r), r >= n));) u.push(p.pop());
            p.push(t)
        }
    }
    for (; p.length > 0;) {
        if ("(" == e[p[p.length - 1]].text) {
            f = c.s_parseerrmissingcloseparen;
            break
        }
        u.push(p.pop())
    }
    return f ? f : u
}, SocialCalc.Formula.EvaluatePolish = function(e, t, o, a) {
    var l, n, r, i, c, s, d, u, p, f, h, m, C, g, S = SocialCalc.Formula,
        v = SocialCalc.Constants,
        b = S.TokenType,
        y = S.LookupResultType,
        w = S.TypeLookupTable,
        x = S.OperandAsNumber,
        T = S.OperandAsText,
        k = S.OperandValueAndType,
        F = S.OperandsAsCoordOnSheet,
        E = SocialCalc.format_number_for_display || function(e) {
            return e + ""
        },
        _ = "",
        P = -1,
        R = {
            value: "",
            type: "e#VALUE!",
            error: v.s_parseerrmissingoperand
        },
        A = [],
        D = function(e, t) {
            A.push({
                type: e,
                value: t
            })
        };
    if (!(e.length && t instanceof Array)) return {
        value: "",
        type: "e#VALUE!",
        error: "string" == typeof t ? t : ""
    };
    for (l = 0; l < t.length; l++)
        if (n = t[l], n != P)
            if (r = e[n], i = r.type, c = r.text, i == b.num) D("n", c - 0);
            else if (i == b.coord) D("coord", c);
    else if (i == b.string) D("t", c);
    else if (i == b.op) {
        if (A.length <= 0) return R;
        if ("M" == c) s = x(o, A), f = y(s.type, s.type, w.unaryminus), D(f, -s.value);
        else if ("P" == c) s = x(o, A), f = y(s.type, s.type, w.unaryplus), D(f, s.value);
        else if ("%" == c) s = x(o, A), f = y(s.type, s.type, w.unarypercent), D(f, .01 * s.value);
        else if ("&" == c) {
            if (A.length <= 1) return R;
            d = T(o, A), s = T(o, A), f = y(s.type, s.type, w.concat), D(f, s.value + d.value)
        } else if (":" == c) {
            if (A.length <= 1) return R;
            s = S.OperandsAsRangeOnSheet(o, A), s.error && (_ = _ || s.error), D(s.type, s.value)
        } else if ("!" == c) {
            if (A.length <= 1) return R;
            s = F(o, A), s.error && (_ = _ || s.error), D(s.type, s.value)
        } else if ("<" == c || "L" == c || "=" == c || "G" == c || ">" == c || "N" == c) {
            if (A.length <= 1) {
                _ = v.s_parseerrmissingoperand;
                break
            }
            d = k(o, A), s = k(o, A), "n" == s.type.charAt(0) && "n" == d.type.charAt(0) ? (m = 0, "<" == c ? m = s.value < d.value ? 1 : 0 : "L" == c ? m = s.value <= d.value ? 1 : 0 : "=" == c ? m = s.value == d.value ? 1 : 0 : "G" == c ? m = s.value >= d.value ? 1 : 0 : ">" == c ? m = s.value > d.value ? 1 : 0 : "N" == c && (m = s.value != d.value ? 1 : 0), D("nl", m)) : "e" == s.type.charAt(0) ? D(s.type, 0) : "e" == d.type.charAt(0) ? D(d.type, 0) : (u = s.type.charAt(0), p = d.type.charAt(0), "n" == u ? s.value = E(s.value, "n", "") : "b" == u && (s.value = ""), "n" == p ? d.value = E(d.value, "n", "") : "b" == p && (d.value = ""), m = 0, s.value = s.value.toLowerCase(), d.value = d.value.toLowerCase(), "<" == c ? m = s.value < d.value ? 1 : 0 : "L" == c ? m = s.value <= d.value ? 1 : 0 : "=" == c ? m = s.value == d.value ? 1 : 0 : "G" == c ? m = s.value >= d.value ? 1 : 0 : ">" == c ? m = s.value > d.value ? 1 : 0 : "N" == c && (m = s.value != d.value ? 1 : 0), D("nl", m))
        } else {
            if (A.length <= 1) {
                _ = v.s_parseerrmissingoperand;
                break
            }
            d = x(o, A), s = x(o, A), "+" == c ? (f = y(s.type, d.type, w.plus), D(f, s.value + d.value)) : "-" == c ? (f = y(s.type, d.type, w.plus), D(f, s.value - d.value)) : "*" == c ? (f = y(s.type, d.type, w.plus), D(f, s.value * d.value)) : "/" == c ? 0 != d.value ? D("n", s.value / d.value) : D("e#DIV/0!", 0) : "^" == c && (s.value = Math.pow(s.value, d.value), s.type = "n", isNaN(s.value) && (s.value = 0, s.type = "e#NUM!"), D(s.type, s.value))
        }
    } else {
        if (i != b.name) {
            _ = v.s_InternalError + "Unknown token " + i + " (" + c + "). ";
            break
        }
        if (_ = S.CalculateFunction(c, A, o)) break
    } else D("start", 0);
    return value = A[0] ? A[0].value : "", u = A[0] ? A[0].type : "", "name" == u && (s = SocialCalc.Formula.LookupName(o, value), value = s.value, u = s.type, _ = _ || s.error), "coord" == u && (s = k(o, A), value = s.value, u = s.type, "b" == u && (u = "n", value = 0)), A.length > 1 && !_ && (_ += v.s_parseerrerrorinformula), h = u, "e" == u.charAt(0) ? _ = _ || u.substring(1) || v.s_calcerrerrorvalueinformula : "range" == u && (C = value.match(/^(.*)\|(.*)\|/), g = C[1].indexOf("!"), C[1] = g >= 0 ? C[1].substring(g + 1) + "!" + C[1].substring(0, g).toUpperCase() : C[1].toUpperCase(), value = C[1] + ":" + C[2].toUpperCase(), a || (_ = v.s_formularangeresult + " " + value)), _ && "e" != h.charAt(0) && (value = _, h = "e"), "n" != h.charAt(0) || !isNaN(value) && isFinite(value) || (value = 0, h = "e#NUM!", _ = isNaN(value) ? v.s_calcerrnumericnan : v.s_calcerrnumericoverflow), {
        value: value,
        type: h,
        error: _
    }
}, SocialCalc.Formula.LookupResultType = function(e, t, o) {
    var a, l, n, r = o[e];
    return r || (r = o[e.charAt(0) + "*"]) ? (a = r.indexOf("|" + t + ":"), a >= 0 ? (l = r.indexOf("|", a + 1), 0 > l ? "e#VALUE! (internal error, incorrect LookupResultType " + r + ")" : (n = r.substring(a + t.length + 2, l), "1" == n ? e : "2" == n ? t : n)) : (a = r.indexOf("|" + t.charAt(0) + "*:"), a >= 0 ? (l = r.indexOf("|", a + 1), 0 > l ? "e#VALUE! (internal error, incorrect LookupResultType " + r + ")" : (n = r.substring(a + 4, l), "1" == n ? e : "2" == n ? t : n)) : "e#VALUE!")) : "e#VALUE! (internal error, missing LookupResultType " + e.charAt(0) + "*)"
}, SocialCalc.Formula.TopOfStackValueAndType = function(e, t) {
    var o = SocialCalc.Formula,
        a = {
            type: "",
            value: ""
        },
        l = t.length;
    return l ? (a.value = t[l - 1].value, a.type = t[l - 1].type, t.pop(), "name" == a.type && (a = o.LookupName(e, a.value)), a) : (a.error = SocialCalc.Constants.s_InternalError + "no operand on stack", a)
}, SocialCalc.Formula.OperandAsNumber = function(e, t) {
    var o, a, l = SocialCalc.Formula.OperandValueAndType(e, t);
    return o = l.type.charAt(0), "n" == o ? l.value = l.value - 0 : "b" == o ? (l.type = "n", l.value = 0) : "e" == o ? l.value = 0 : (a = SocialCalc.DetermineValueType ? SocialCalc.DetermineValueType(l.value) : {
        value: l.value - 0,
        type: "n"
    }, "n" == a.type.charAt(0) ? (l.value = a.value - 0, l.type = a.type) : (l.value = 0, l.type = a.type)), l
}, SocialCalc.Formula.OperandAsText = function(e, t) {
    var o, a = SocialCalc.Formula.OperandValueAndType(e, t);
    return o = a.type.charAt(0), "t" == o || ("n" == o ? (a.value = SocialCalc.format_number_for_display ? SocialCalc.format_number_for_display(a.value, a.type, "") : a.value = a.value + "", a.type = "t") : "b" == o ? (a.value = "", a.type = "t") : "e" == o ? a.value = "" : (t.value = a.value + "", t.type = "t")), a
}, SocialCalc.Formula.OperandValueAndType = function(e, t) {
    var o, a, l, n, r = SocialCalc.Formula,
        i = {
            type: "",
            value: ""
        },
        c = t.length;
    if (!c) return i.error = SocialCalc.Constants.s_InternalError + "no operand on stack", i;
    if (i.value = t[c - 1].value, i.type = t[c - 1].type, t.pop(), "name" == i.type && (i = r.LookupName(e, i.value)), "range" == i.type && (i = r.StepThroughRangeDown(t, i.value)), "coord" == i.type) {
        if (n = e, l = i.value.indexOf("!"), -1 != l) {
            if (n = r.FindInSheetCache(i.value.substring(l + 1)), null == n) return i.type = "e#REF!", i.error = SocialCalc.Constants.s_sheetunavailable + " " + i.value.substring(l + 1), i.value = 0, i;
            i.value = i.value.substring(0, l)
        }
        n ? (a = n.cells[SocialCalc.Formula.PlainCoord(i.value)], a ? (o = a.valuetype, i.value = a.datavalue) : o = "b") : (o = "e#N/A", i.value = 0), i.type = o || "b", "b" == i.type && (i.value = 0)
    }
    return i
}, SocialCalc.Formula.OperandAsCoord = function(e, t) {
    var o = (SocialCalc.Formula, {
            type: "",
            value: ""
        }),
        a = t.length;
    return o.value = t[a - 1].value, o.type = t[a - 1].type, t.pop(), "name" == o.type && (o = SocialCalc.Formula.LookupName(e, o.value)), "coord" == o.type ? o : (o.value = SocialCalc.Constants.s_calcerrcellrefmissing, o.type = "e#REF!", o)
}, SocialCalc.Formula.OperandsAsCoordOnSheet = function(e, t) {
    var o, a, l, n, r = {},
        i = {},
        c = SocialCalc.Formula,
        s = t.length;
    return r.value = t[s - 1].value, r.type = t[s - 1].type, t.pop(), o = c.OperandAsSheetName(e, t), a = c.FindInSheetCache(o.value), null == a ? (i.type = "e#REF!", i.value = 0, i.error = SocialCalc.Constants.s_sheetunavailable + " " + o.value, i) : ("name" == r.type && (r = c.LookupName(a, r.value)), i.type = r.type, "coord" == r.type ? i.value = r.value + "!" + o.value : "range" == r.type ? (l = r.value.indexOf("|"), n = r.value.indexOf("|", l + 1), i.value = r.value.substring(0, l) + "!" + o.value + "|" + r.value.substring(l + 1, n) + "|") : "e" == r.type.charAt(0) ? i.value = r.value : (i.error = SocialCalc.Constants.s_calcerrcellrefmissing, i.type = "e#REF!", i.value = 0), i)
}, SocialCalc.Formula.OperandsAsRangeOnSheet = function(e, t) {
    var o, a, l, n, r = {},
        i = SocialCalc.Formula,
        c = SocialCalc.Constants,
        s = t.length;
    return r.value = t[s - 1].value, r.type = t[s - 1].type, t.pop(), o = i.OperandAsCoord(e, t), "coord" != o.type ? {
        value: 0,
        type: "e#REF!"
    } : (a = e, l = o.value.indexOf("!"), -1 != l && (n = o.value.indexOf("|", l + 1), 0 > n && (n = o.value.length), a = i.FindInSheetCache(o.value.substring(l + 1, n)), null == a) ? {
        value: 0,
        type: "e#REF!",
        errortext: c.s_sheetunavailable + " " + o.value.substring(l + 1, n)
    } : ("name" == r.type && (r = i.LookupName(a, r.value, "end")), "coord" == r.type ? {
        value: o.value + "|" + r.value + "|",
        type: "range"
    } : {
        value: c.s_calcerrcellrefmissing,
        type: "e#REF!"
    }))
}, SocialCalc.Formula.OperandAsSheetName = function(e, t) {
    var o, a, l = (SocialCalc.Formula, {
            type: "",
            value: ""
        }),
        n = t.length;
    if (l.value = t[n - 1].value, l.type = t[n - 1].type, t.pop(), "name" == l.type) {
        if (o = SocialCalc.Formula.LookupName(e, l.value), !o.value) return l;
        l.value = o.value, l.type = o.type
    }
    return "coord" == l.type && (a = e.cells[SocialCalc.Formula.PlainCoord(l.value)], a ? (l.value = a.datavalue, l.type = a.valuetype) : (l.value = "", l.type = "b")), "t" == l.type.charAt(0) ? l : (l.value = "", l.error = SocialCalc.Constants.s_calcerrsheetnamemissing, l)
}, SocialCalc.Formula.LookupName = function(e, t, o) {
    var a, l, n, r = e.names,
        i = {},
        c = !1;
    if (r[t.toUpperCase()]) {
        if (i.value = r[t.toUpperCase()].definition, "=" == i.value.charAt(0)) {
            if (e.checknamecirc) {
                if (e.checknamecirc[t]) return i.type = "e#NAME?", i.error = SocialCalc.Constants.s_circularnameref + ' "' + t + '".', i
            } else e.checknamecirc = {}, c = !0;
            if (e.checknamecirc[t] = !0, n = SocialCalc.Formula.ParseFormulaIntoTokens(i.value.substring(1)), i = SocialCalc.Formula.evaluate_parsed_formula(n, e, 1), delete e.checknamecirc[t], c && delete e.checknamecirc, "range" != i.type) return i
        }
        return a = i.value.indexOf(":"), -1 != a ? (i.type = "range", i.value = i.value.substring(0, a) + "|" + i.value.substring(a + 1) + "|", i.value = i.value.toUpperCase()) : (i.type = "coord", i.value = i.value.toUpperCase()), i
    }
    return (l = SocialCalc.Formula.SpecialConstants[t.toUpperCase()]) ? (a = l.indexOf(","), i.value = l.substring(0, a) - 0, i.type = l.substring(a + 1), i) : /^[a-zA-Z][a-zA-Z]?$/.test(t) ? (i.type = "coord", i.value = t.toUpperCase() + (o ? e.attribs.lastrow : 1), i) : (i.value = "", i.type = "e#NAME?", i.error = SocialCalc.Constants.s_calcerrunknownname + ' "' + t + '"', i)
}, SocialCalc.Formula.StepThroughRangeDown = function(e, t) {
    var o, a, l, n, r, i, c, s, d, u, p = SocialCalc.Formula;
    for (n = t.indexOf("|"), r = t.indexOf("|", n + 1), o = t.substring(0, n), a = t.substring(n + 1, r), l = t.substring(r + 1) - 0, n = o.indexOf("!"), -1 != n ? (i = o.substring(n), o = o.substring(0, n)) : i = "", n = a.indexOf("!"), -1 != n && (a = a.substring(0, n)), c = p.OrderRangeParts(o, a), u = 0, d = c.r1; d <= c.r2; d++)
        for (s = c.c1; s <= c.c2; s++)
            if (u++, u > l) return (d != c.r2 || s != c.c2) && p.PushOperand(e, "range", o + i + "|" + a + "|" + u), {
                value: SocialCalc.crToCoord(s, d) + i,
                type: "coord"
            }
}, SocialCalc.Formula.DecodeRangeParts = function(e, t) {
    var o, a, l, n, r, i, c, s = SocialCalc.Formula;
    return l = t.indexOf("|"), n = t.indexOf("|", l + 1), o = t.substring(0, l), a = t.substring(l + 1, n), l = o.indexOf("!"), -1 != l ? (r = o.substring(l + 1), o = o.substring(0, l)) : r = "", l = a.indexOf("!"), -1 != l && (a = a.substring(0, l)), i = e, r && (i = s.FindInSheetCache(r), null == i) ? null : (c = s.OrderRangeParts(o, a), {
        sheetdata: i,
        sheetname: r,
        col1num: c.c1,
        ncols: c.c2 - c.c1 + 1,
        row1num: c.r1,
        nrows: c.r2 - c.r1 + 1
    })
}, SocialCalc.Formula.FunctionList || (SocialCalc.Formula.FunctionList = {}), SocialCalc.Formula.FunctionClasses = null, SocialCalc.Formula.FunctionArgDefs = {}, SocialCalc.Formula.CalculateFunction = function(e, t, o) {
    var a, l, n, r, i, c = SocialCalc.Formula,
        s = "";
    if (a = c.FunctionList[e]) {
        if (l = [], n = a[0], r = a[1], c.CopyFunctionArgs(t, l), 100 != r)
            if (0 > r) {
                if (l.length < -r) return s = c.FunctionArgsError(e, t)
            } else if (l.length != r) return s = c.FunctionArgsError(e, t);
        s = n(e, t, l, o)
    } else i = e, t.length && "start" == t[t.length - 1].type ? (t.pop(), c.PushOperand(t, "name", i)) : s = SocialCalc.Constants.s_sheetfuncunknownfunction + " " + i + ". ";
    return s
}, SocialCalc.Formula.PushOperand = function(e, t, o) {
    e.push({
        type: t,
        value: o
    })
}, SocialCalc.Formula.CopyFunctionArgs = function(e, t) {
    var t;
    for (SocialCalc.Formula; e.length > 0 && "start" != e[e.length - 1].type;) t.push(e.pop());
    e.pop()
}, SocialCalc.Formula.FunctionArgsError = function(e, t) {
    var o = SocialCalc.Constants.s_calcerrincorrectargstofunction + " " + e + ". ";
    return SocialCalc.Formula.PushOperand(t, "e#VALUE!", o), o
}, SocialCalc.Formula.FunctionSpecificError = function(e, t, o, a) {
    return SocialCalc.Formula.PushOperand(t, o, a), a
}, SocialCalc.Formula.CheckForErrorValue = function(e, t) {
    return "e" == t.type.charAt(0) ? (e.push(t), !0) : !1
}, SocialCalc.Formula.FillFunctionInfo = function() {
    var e, t, o, a, l, n = SocialCalc.Formula,
        r = SocialCalc.Constants;
    if (!n.FunctionClasses) {
        for (e in n.FunctionList) t = n.FunctionList[e], t[2] && (n.FunctionArgDefs[t[2]] = r["s_farg_" + t[2]] || ""), t[3] || r["s_fdef_" + e] && (n.FunctionList[e][3] = r["s_fdef_" + e]);
        for (n.FunctionClasses = {}, l = 0; l < r.function_classlist.length; l++) a = r.function_classlist[l], n.FunctionClasses[a] = {
            name: r["s_fclass_" + a],
            items: []
        };
        for (e in n.FunctionList)
            for (t = n.FunctionList[e], o = t[4] ? t[4].split(",") : [], o.push("all"), l = 0; l < o.length; l++) a = o[l], n.FunctionClasses[a].items.push(e);
        for (a in n.FunctionClasses) n.FunctionClasses[a].items.sort()
    }
}, SocialCalc.Formula.FunctionArgString = function(e) {
    var t, o, a, l = SocialCalc.Formula,
        n = l.FunctionList[e],
        r = n[2];
    if (!r) {
        if (t = n[1], 0 != t) {
            if (t > 0) {
                for (a = "v1", o = 2; t >= o; o++) a += ", v" + o;
                return a
            }
            if (0 > t) {
                for (a = "v1", o = 2; - t > o; o++) a += ", v" + o;
                return a + ", ..."
            }
            return "nargs: " + t
        }
        r = " "
    }
    return a = l.FunctionArgDefs[r] || r
}, SocialCalc.Formula.SeriesFunctions = function(e, t, o, a) {
    for (var l, n, r, i, c, s, d, u, p, f = SocialCalc.Formula, h = f.OperandValueAndType, m = f.LookupResultType, C = f.TypeLookupTable.plus, g = function(e, o) {
            t.push({
                type: e,
                value: o
            })
        }, S = 0, v = "", b = 0, y = 0, w = 0, x = 1; o.length > 0;) l = h(a, o), n = l.type.charAt(0), "n" == n && (b += 1), "b" != n && (y += 1), "b" == n && (w += 1), "n" == n ? (r = l.value - 0, S += r, x *= r, i = void 0 != i ? r > i ? r : i : r, c = void 0 != c ? c > r ? r : c : r, 1 == b ? (u = r, p = 0) : (s = u + (r - u) / b, d = p + (r - u) * (r - s), p = d, u = s), v = m(l.type, v || l.type, C)) : "e" == n && "e" != v.charAt(0) && (v = l.type);
    switch (v = v || "n", e) {
        case "SUM":
            g(v, S);
            break;
        case "PRODUCT":
            g(v, x);
            break;
        case "MIN":
            g(v, c || 0);
            break;
        case "MAX":
            g(v, i || 0);
            break;
        case "COUNT":
            g("n", b);
            break;
        case "COUNTA":
            g("n", y);
            break;
        case "COUNTBLANK":
            g("n", w);
            break;
        case "AVERAGE":
            b > 0 ? g(v, S / b) : g("e#DIV/0!", 0);
            break;
        case "STDEV":
            b > 1 ? g(v, Math.sqrt(d / (b - 1))) : g("e#DIV/0!", 0);
            break;
        case "STDEVP":
            b > 1 ? g(v, Math.sqrt(d / b)) : g("e#DIV/0!", 0);
            break;
        case "VAR":
            b > 1 ? g(v, d / (b - 1)) : g("e#DIV/0!", 0);
            break;
        case "VARP":
            b > 1 ? g(v, d / b) : g("e#DIV/0!", 0)
    }
    return null
}, SocialCalc.Formula.FunctionList.AVERAGE = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.COUNT = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.COUNTA = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.COUNTBLANK = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.MAX = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.MIN = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.PRODUCT = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.STDEV = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.STDEVP = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.SUM = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.VAR = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.FunctionList.VARP = [SocialCalc.Formula.SeriesFunctions, -1, "vn", null, "stat"], SocialCalc.Formula.SumProductFunction = function(e, t, o, a) {
    for (var l, n = [], r = 0, c = SocialCalc.Formula, s = 0, d = 0, u = function(e, o) {
            t.push({
                type: e,
                value: o
            })
        }; o.length > 0;) {
        if (l = c.TopOfStackValueAndType(a, o), "range" != l.type) return void u("e#VALUE!", 0);
        if (rangeinfo = c.DecodeRangeParts(a, l.value), s) {
            if (s != rangeinfo.ncols) return void u("e#VALUE!", 0)
        } else s = rangeinfo.ncols;
        if (d) {
            if (d != rangeinfo.nrows) return void u("e#VALUE!", 0)
        } else d = rangeinfo.nrows;
        for (i = 0; i < rangeinfo.ncols; i++)
            for (j = 0; j < rangeinfo.nrows; j++) k = i * rangeinfo.nrows + j, cellcr = SocialCalc.crToCoord(rangeinfo.col1num + i, rangeinfo.row1num + j), cell = rangeinfo.sheetdata.GetAssuredCell(cellcr), value = "n" == cell.valuetype ? cell.datavalue : 0, n[k] = (n[k] || 1) * value
    }
    for (i = 0; i < n.length; i++) r += n[i];
    u("n", r)
}, SocialCalc.Formula.FunctionList.SUMPRODUCT = [SocialCalc.Formula.SumProductFunction, -1, "rangen", "", "stat"], SocialCalc.Formula.DSeriesFunctions = function(e, t, o, a) {
    var l, n, r, i, c, s, d, u, p, f, h, m, C, g, S, v, b, y, w, x, T, k, F, E, _, P, R = SocialCalc.Formula,
        A = (R.OperandValueAndType, R.LookupResultType),
        D = R.TypeLookupTable.plus,
        L = function(e, o) {
            t.push({
                type: e,
                value: o
            })
        },
        l = {},
        N = 0,
        M = "",
        I = 0,
        O = 0,
        B = 0,
        z = 1;
    if (r = R.TopOfStackValueAndType(a, o), i = R.OperandValueAndType(a, o), c = R.TopOfStackValueAndType(a, o), "range" != r.type || "range" != c.type) return R.FunctionArgsError(e, t);
    if (s = R.DecodeRangeParts(a, r.value), d = R.DecodeRangeParts(a, c.value), u = R.FieldToColnum(s.sheetdata, s.col1num, s.ncols, s.row1num, i.value, i.type), 0 >= u) return void L("e#VALUE!", 0);
    for (p = s.col1num + u - 1, g = [], f = 0; f < d.ncols; f++) {
        if (C = d.sheetdata.GetAssuredCell(SocialCalc.crToCoord(d.col1num + f, d.row1num)), criterianum = R.FieldToColnum(s.sheetdata, s.col1num, s.ncols, s.row1num, C.datavalue, C.valuetype), 0 >= criterianum) return void L("e#VALUE!", 0);
        g.push(s.col1num + criterianum - 1)
    }
    for (f = 1; f < s.nrows; f++) {
        S = !1;
        e: for (h = 1; h < d.nrows; h++) {
            for (m = 0; m < d.ncols; m++)
                if (v = SocialCalc.crToCoord(d.col1num + m, d.row1num + h), C = d.sheetdata.GetAssuredCell(v), b = C.datavalue, ("string" != typeof b || 0 != b.length) && (y = g[m], w = SocialCalc.crToCoord(y, s.row1num + f), C = d.sheetdata.GetAssuredCell(w), !R.TestCriteria(C.datavalue, C.valuetype || "b", b))) continue e;
            S = !0;
            break e
        }
        S && (n = SocialCalc.crToCoord(p, s.row1num + f), C = s.sheetdata.GetAssuredCell(n), l.value = C.datavalue, l.type = C.valuetype, x = l.type.charAt(0), "n" == x && (I += 1), "b" != x && (O += 1), "b" == x && (B += 1), "n" == x ? (v1 = l.value - 0, N += v1, z *= v1, T = void 0 != T ? v1 > T ? v1 : T : v1, k = void 0 != k ? k > v1 ? v1 : k : v1, 1 == I ? (_ = v1, P = 0) : (F = _ + (v1 - _) / I, E = P + (v1 - _) * (v1 - F), P = E, _ = F), M = A(l.type, M || l.type, D)) : "e" == x && "e" != M.charAt(0) && (M = l.type))
    }
    switch (M = M || "n", e) {
        case "DSUM":
            L(M, N);
            break;
        case "DPRODUCT":
            L(M, z);
            break;
        case "DMIN":
            L(M, k || 0);
            break;
        case "DMAX":
            L(M, T || 0);
            break;
        case "DCOUNT":
            L("n", I);
            break;
        case "DCOUNTA":
            L("n", O);
            break;
        case "DAVERAGE":
            I > 0 ? L(M, N / I) : L("e#DIV/0!", 0);
            break;
        case "DSTDEV":
            I > 1 ? L(M, Math.sqrt(E / (I - 1))) : L("e#DIV/0!", 0);
            break;
        case "DSTDEVP":
            I > 1 ? L(M, Math.sqrt(E / I)) : L("e#DIV/0!", 0);
            break;
        case "DVAR":
            I > 1 ? L(M, E / (I - 1)) : L("e#DIV/0!", 0);
            break;
        case "DVARP":
            I > 1 ? L(M, E / I) : L("e#DIV/0!", 0);
            break;
        case "DGET":
            1 == I ? L(M, N) : 0 == I ? L("e#VALUE!", 0) : L("e#NUM!", 0)
    }
}, SocialCalc.Formula.FunctionList.DAVERAGE = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DCOUNT = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DCOUNTA = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DGET = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DMAX = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DMIN = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DPRODUCT = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DSTDEV = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DSTDEVP = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DSUM = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DVAR = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FunctionList.DVARP = [SocialCalc.Formula.DSeriesFunctions, 3, "dfunc", "", "stat"], SocialCalc.Formula.FieldToColnum = function(e, t, o, a, l, n) {
    var r, i, c;
    if ("n" == n.charAt(0)) return r = l - 0, 0 >= r || r > o ? 0 : Math.floor(r);
    if ("t" != n.charAt(0)) return 0;
    for (l = l ? l.toLowerCase() : "", r = 0; o > r; r++)
        if (i = e.GetAssuredCell(SocialCalc.crToCoord(t + r, a)), c = i.datavalue, c = (c + "").toLowerCase(), c == l) return r + 1;
    return 0
}, SocialCalc.Formula.LookupFunctions = function(e, t, o, a) {
    var l, n, r, i, c, s, d, u, p, f, h, m, C, g, S, v, l, b = SocialCalc.Formula,
        y = b.OperandValueAndType,
        w = (b.LookupResultType, b.TypeLookupTable.plus, function(e, o) {
            t.push({
                type: e,
                value: o
            })
        });
    if (l = y(a, o), "string" == typeof l.value && (l.value = l.value.toLowerCase()), n = b.TopOfStackValueAndType(a, o), r = 1, "MATCH" == e) {
        if (o.length) {
            if (r = b.OperandAsNumber(a, o), "n" != r.type.charAt(0)) return void w("e#VALUE!", 0);
            if (o.length) return b.FunctionArgsError(e, t), 0;
            r = r.value - 0
        }
    } else {
        if (i = b.OperandAsNumber(a, o), "n" != i.type.charAt(0)) return void w("e#VALUE!", 0);
        if (i = Math.floor(i.value), o.length) {
            if (r = b.OperandAsNumber(a, o), "n" != r.type.charAt(0)) return void w("e#VALUE!", 0);
            if (o.length) return b.FunctionArgsError(e, t), 0;
            r = r.value ? 1 : 0
        }
    }
    if (l.type = l.type.charAt(0), "n" == l.type && (l.value = l.value - 0), "range" != n.type) return b.FunctionArgsError(e, t), 0;
    if (c = b.DecodeRangeParts(a, n.value, n.type), !c) return void w("e#REF!", 0);
    if (s = 0, d = 0, u = 0, p = 0, "HLOOKUP" == e) {
        if (u = 1, i > c.nrows) return void w("e#REF!", 0)
    } else if ("VLOOKUP" == e) {
        if (p = 1, i > c.ncols) return void w("e#REF!", 0)
    } else {
        if ("MATCH" != e) return b.FunctionArgsError(e, t), 0;
        if (c.ncols > 1) {
            if (c.nrows > 1) return void w("e#N/A", 0);
            u = 1
        } else p = 1
    }
    if (1 > i && "MATCH" != e) return w("e#VALUE!", 0), 0;
    for (;;) {
        if (v = SocialCalc.crToCoord(c.col1num + s, c.row1num + d), C = c.sheetdata.GetAssuredCell(v), g = C.datavalue, S = C.valuetype ? C.valuetype.charAt(0) : "b", "n" == S && (g -= 0), r) {
            if ("n" == l.type && "n" == S) {
                if (l.value == g) break;
                if (r > 0 && l.value > g || 0 > r && l.value < g) f = 1, h = s, m = d;
                else if (f) {
                    f = 2;
                    break
                }
            } else if ("t" == l.type && "t" == S) {
                if (g = "string" == typeof g ? g.toLowerCase() : "", l.value == g) break;
                if (r > 0 && l.value > g || 0 > r && l.value < g) f = 1, h = s, m = d;
                else if (f) {
                    f = 2;
                    break
                }
            }
        } else if ("n" == l.type && "n" == S) {
            if (l.value == g) break
        } else if ("t" == l.type && "t" == S && (g = "string" == typeof g ? g.toLowerCase() : "", l.value == g)) break;
        if (d += p, s += u, d >= c.nrows || s >= c.ncols) {
            if (f) {
                f = 2;
                break
            }
            return void w("e#N/A", 0)
        }
    }
    2 == f && (d = m, s = h), "MATCH" == e ? (g = s + d + 1, S = "n") : (v = SocialCalc.crToCoord(c.col1num + s + ("VLOOKUP" == e ? i - 1 : 0), c.row1num + d + ("HLOOKUP" == e ? i - 1 : 0)), C = c.sheetdata.GetAssuredCell(v), g = C.datavalue, S = C.valuetype), w(S, g)
}, SocialCalc.Formula.FunctionList.HLOOKUP = [SocialCalc.Formula.LookupFunctions, -3, "hlookup", "", "lookup"], SocialCalc.Formula.FunctionList.MATCH = [SocialCalc.Formula.LookupFunctions, -2, "match", "", "lookup"], SocialCalc.Formula.FunctionList.VLOOKUP = [SocialCalc.Formula.LookupFunctions, -3, "vlookup", "", "lookup"], SocialCalc.Formula.IndexFunction = function(e, t, o, a) {
    var l, n, r, i, c, s, d, u = SocialCalc.Formula,
        p = function(e, o) {
            t.push({
                type: e,
                value: o
            })
        };
    if (l = u.TopOfStackValueAndType(a, o), "range" != l.type) return u.FunctionArgsError(e, t), 0;
    if (r = u.DecodeRangeParts(a, l.value, l.type), n = r.sheetname ? "!" + r.sheetname : "", i = {
            value: 0
        }, c = {
            value: 0
        }, o.length) {
        if (i = u.OperandAsNumber(a, o), "n" != i.type.charAt(0) || i.value < 0) return void p("e#VALUE!", 0);
        if (o.length) {
            if (c = u.OperandAsNumber(a, o), "n" != c.type.charAt(0) || c.value < 0) return void p("e#VALUE!", 0);
            if (o.length) return u.FunctionArgsError(e, t), 0
        } else 1 == r.nrows && (c.value = i.value, i.value = 0)
    }
    return i.value > r.nrows || c.value > r.ncols ? void p("e#REF!", 0) : (0 == i.value ? 0 == c.value ? 1 == r.nrows && 1 == r.ncols ? (s = SocialCalc.crToCoord(r.col1num, r.row1num) + n, d = "coord") : (s = SocialCalc.crToCoord(r.col1num, r.row1num) + n + "|" + SocialCalc.crToCoord(r.col1num + r.ncols - 1, r.row1num + r.nrows - 1) + "|", d = "range") : 1 == r.nrows ? (s = SocialCalc.crToCoord(r.col1num + c.value - 1, r.row1num) + n, d = "coord") : (s = SocialCalc.crToCoord(r.col1num + c.value - 1, r.row1num) + n + "|" + SocialCalc.crToCoord(r.col1num + c.value - 1, r.row1num + r.nrows - 1) + "|", d = "range") : 0 == c.value ? 1 == r.ncols ? (s = SocialCalc.crToCoord(r.col1num, r.row1num + i.value - 1) + n, d = "coord") : (s = SocialCalc.crToCoord(r.col1num, r.row1num + i.value - 1) + n + "|" + SocialCalc.crToCoord(r.col1num + r.ncols - 1, r.row1num + i.value - 1) + "|", d = "range") : (s = SocialCalc.crToCoord(r.col1num + c.value - 1, r.row1num + i.value - 1) + n, d = "coord"), void p(d, s))
}, SocialCalc.Formula.FunctionList.INDEX = [SocialCalc.Formula.IndexFunction, -1, "index", "", "lookup"], SocialCalc.Formula.CountifSumifFunctions = function(e, t, o, a) {
    var l, n, r, i, c, s, d = 0,
        u = "",
        p = 0,
        f = SocialCalc.Formula,
        h = f.OperandValueAndType,
        m = f.LookupResultType,
        C = f.TypeLookupTable.plus,
        g = function(e, o) {
            t.push({
                type: e,
                value: o
            })
        };
    if (l = f.TopOfStackValueAndType(a, o), n = f.OperandAsText(a, o), "SUMIF" == e)
        if (1 == o.length) r = f.TopOfStackValueAndType(a, o);
        else {
            if (0 != o.length) return f.FunctionArgsError(e, t), 0;
            r = {
                value: l.value,
                type: l.type
            }
        }
    else r = {
        value: l.value,
        type: l.type
    };
    if ("n" == n.type.charAt(0) ? n.value = n.value + "" : "e" == n.type.charAt(0) ? n.value = null : "b" == n.type.charAt(0) && (n.value = null), "coord" != l.type && "range" != l.type) return f.FunctionArgsError(e, t), 0;
    if ("SUMIF" == e && "coord" != r.type && "range" != r.type) return f.FunctionArgsError(e, t), 0;
    for (o.push(l), i = [], i.push(r); o.length;) c = h(a, o), s = h(a, i), f.TestCriteria(c.value, c.type, n.value) && (p += 1, "n" == s.type.charAt(0) ? (d += s.value - 0, u = m(s.type, u || s.type, C)) : "e" == s.type.charAt(0) && "e" != u.charAt(0) && (u = s.type));
    u = u || "n", "SUMIF" == e ? g(u, d) : "COUNTIF" == e && g("n", p)
}, SocialCalc.Formula.FunctionList.COUNTIF = [SocialCalc.Formula.CountifSumifFunctions, 2, "rangec", "", "stat"], SocialCalc.Formula.FunctionList.SUMIF = [SocialCalc.Formula.CountifSumifFunctions, -2, "sumif", "", "stat"], SocialCalc.Formula.SumifsFunction = function(e, t, o, a) {
    var l, n, r, i, c, s, d = 0,
        u = "",
        p = SocialCalc.Formula,
        f = p.OperandValueAndType,
        h = p.LookupResultType,
        m = p.TypeLookupTable.plus,
        C = function(e, o) {
            t.push({
                type: e,
                value: o
            })
        };
    if (r = p.TopOfStackValueAndType(a, o), "coord" != r.type && "range" != r.type) return p.FunctionArgsError(e, t), 0;
    for (var g = [], S = []; o.length;) {
        if (l = p.TopOfStackValueAndType(a, o), n = p.OperandAsText(a, o), "n" == n.type.charAt(0) ? n.value = n.value + "" : "e" == n.type.charAt(0) ? n.value = null : "b" == n.type.charAt(0) && (n.value = null), "coord" != l.type && "range" != l.type) return p.FunctionArgsError(e, t), 0;
        g.push([l]), S.push(n)
    }
    for (i = [], i.push(r); i.length;) {
        s = f(a, i);
        for (var v = !0, b = 0; b < g.length; b++)
            if (c = f(a, g[b]), !p.TestCriteria(c.value, c.type, S[b].value)) {
                v = !1;
                break
            }
        v && ("n" == s.type.charAt(0) ? (d += s.value - 0, u = h(s.type, u || s.type, m)) : "e" == s.type.charAt(0) && "e" != u.charAt(0) && (u = s.type))
    }
    u = u || "n", C(u, d)
}, SocialCalc.Formula.FunctionList.SUMIFS = [SocialCalc.Formula.SumifsFunction, -3, "sumifs", "", "stat"], SocialCalc.Formula.IfFunction = function(e, t, o, a) {
    var l, n;
    if (l = SocialCalc.Formula.OperandValueAndType(a, o), n = l.type.charAt(0), "n" != n && "b" != n) return void t.push({
        type: "e#VALUE!",
        value: 0
    });
    var r, i;
    if (r = o.pop(), 1 == o.length) i = o.pop();
    else {
        if (0 != o.length) return void scf.FunctionArgsError(e, t);
        i = {
            type: "n",
            value: 0
        }
    }
    t.push(l.value ? r : i)
}, SocialCalc.Formula.FunctionList.IF = [SocialCalc.Formula.IfFunction, -2, "iffunc", "", "test"], SocialCalc.Formula.DateFunction = function(e, t, o, a) {
    var l = SocialCalc.Formula,
        n = 0,
        r = l.OperandAsNumber(a, o),
        i = l.OperandAsNumber(a, o),
        c = l.OperandAsNumber(a, o),
        s = l.LookupResultType(r.type, i.type, l.TypeLookupTable.twoargnumeric);
    s = l.LookupResultType(s, c.type, l.TypeLookupTable.twoargnumeric), "n" == s.charAt(0) && (n = SocialCalc.FormatNumber.convert_date_gregorian_to_julian(Math.floor(r.value), Math.floor(i.value), Math.floor(c.value)) - SocialCalc.FormatNumber.datevalues.julian_offset, s = "nd"), l.PushOperand(t, s, n)
}, SocialCalc.Formula.FunctionList.DATE = [SocialCalc.Formula.DateFunction, 3, "date", "", "datetime"], SocialCalc.Formula.TimeFunction = function(e, t, o, a) {
    var l = SocialCalc.Formula,
        n = 0,
        r = l.OperandAsNumber(a, o),
        i = l.OperandAsNumber(a, o),
        c = l.OperandAsNumber(a, o),
        s = l.LookupResultType(r.type, i.type, l.TypeLookupTable.twoargnumeric);
    s = l.LookupResultType(s, c.type, l.TypeLookupTable.twoargnumeric), "n" == s.charAt(0) && (n = (60 * r.value * 60 + 60 * i.value + c.value) / 86400, s = "nt"), l.PushOperand(t, s, n)
}, SocialCalc.Formula.FunctionList.TIME = [SocialCalc.Formula.TimeFunction, 3, "hms", "", "datetime"], SocialCalc.Formula.DMYFunctions = function(e, t, o, a) {
    var l, n, r, i = SocialCalc.Formula,
        c = 0,
        s = i.OperandAsNumber(a, o),
        d = i.LookupResultType(s.type, s.type, i.TypeLookupTable.oneargnumeric);
    if ("n" == d.charAt(0)) switch (l = SocialCalc.FormatNumber.convert_date_julian_to_gregorian(Math.floor(s.value + SocialCalc.FormatNumber.datevalues.julian_offset)), e) {
        case "DAY":
            c = l.day;
            break;
        case "MONTH":
            c = l.month;
            break;
        case "YEAR":
            c = l.year;
            break;
        case "WEEKDAY":
            if (n = {
                    value: 1
                }, o.length) {
                if (n = i.OperandAsNumber(a, o), "n" != n.type.charAt(0) || n.value < 1 || n.value > 3) return void i.PushOperand(t, "e#VALUE!", 0);
                if (o.length) return void i.FunctionArgsError(e, t)
            }
            r = 6, n.value > 1 && (r -= 1), c = Math.floor(s.value + r) % 7 + (n.value < 3 ? 1 : 0)
    }
    i.PushOperand(t, d, c)
}, SocialCalc.Formula.FunctionList.DAY = [SocialCalc.Formula.DMYFunctions, 1, "v", "", "datetime"], SocialCalc.Formula.FunctionList.MONTH = [SocialCalc.Formula.DMYFunctions, 1, "v", "", "datetime"], SocialCalc.Formula.FunctionList.YEAR = [SocialCalc.Formula.DMYFunctions, 1, "v", "", "datetime"], SocialCalc.Formula.FunctionList.WEEKDAY = [SocialCalc.Formula.DMYFunctions, -1, "weekday", "", "datetime"], SocialCalc.Formula.HMSFunctions = function(e, t, o, a) {
    var l, n, r, i, c = SocialCalc.Formula,
        s = 0,
        d = c.OperandAsNumber(a, o),
        u = c.LookupResultType(d.type, d.type, c.TypeLookupTable.oneargnumeric);
    if ("n" == u.charAt(0)) {
        if (d.value < 0) return void c.PushOperand(t, "e#NUM!", 0);
        i = d.value - Math.floor(d.value), i *= 24, l = Math.floor(i), i -= Math.floor(i), i *= 60, n = Math.floor(i), i -= Math.floor(i), i *= 60, r = Math.floor(i + (d.value >= 0 ? .5 : -.5)), "HOUR" == e ? s = l : "MINUTE" == e ? s = n : "SECOND" == e && (s = r)
    }
    c.PushOperand(t, u, s)
}, SocialCalc.Formula.FunctionList.HOUR = [SocialCalc.Formula.HMSFunctions, 1, "v", "", "datetime"], SocialCalc.Formula.FunctionList.MINUTE = [SocialCalc.Formula.HMSFunctions, 1, "v", "", "datetime"], SocialCalc.Formula.FunctionList.SECOND = [SocialCalc.Formula.HMSFunctions, 1, "v", "", "datetime"], SocialCalc.Formula.ExactFunction = function(e, t, o, a) {
    var l = SocialCalc.Formula,
        n = 0,
        r = "nl",
        i = l.OperandValueAndType(a, o),
        c = i.type.charAt(0),
        s = l.OperandValueAndType(a, o),
        d = s.type.charAt(0);
    "t" == c ? "t" == d ? n = i.value == s.value ? 1 : 0 : "b" == d ? n = i.value.length ? 0 : 1 : "n" == d ? n = i.value == s.value + "" ? 1 : 0 : "e" == d ? (n = s.value, r = s.type) : n = 0 : "n" == c ? "n" == d ? n = i.value - 0 == s.value - 0 ? 1 : 0 : "b" == d ? n = 0 : "t" == d ? n = i.value + "" == s.value ? 1 : 0 : "e" == d ? (n = s.value, r = s.type) : n = 0 : "b" == c ? "t" == d ? n = s.value.length ? 0 : 1 : "b" == d ? n = 1 : "n" == d ? n = 0 : "e" == d ? (n = s.value, r = s.type) : n = 0 : "e" == c && (n = i.value, r = i.type), l.PushOperand(t, r, n)
}, SocialCalc.Formula.FunctionList.EXACT = [SocialCalc.Formula.ExactFunction, 2, "", "", "text"], SocialCalc.Formula.ArgList = {
    FIND: [1, 1, 0],
    LEFT: [1, 0],
    LEN: [1],
    LOWER: [1],
    MID: [1, 0, 0],
    PROPER: [1],
    REPLACE: [1, 0, 0, 1],
    REPT: [1, 0],
    RIGHT: [1, 0],
    SUBSTITUTE: [1, 1, 1, 0],
    TRIM: [1],
    HEXCODE: [1],
    UPPER: [1]
}, SocialCalc.Formula.StringFunctions = function(e, t, o, a) {
    var l, n, r, i, c, s, d = SocialCalc.Formula,
        u = 0,
        p = "e#VALUE!",
        f = o.length,
        h = d.ArgList[e],
        m = [],
        C = [];
    for (l = 1; f >= l; l++) {
        if (l > h.length) return void d.FunctionArgsError(e, t);
        if (0 == h[l - 1] ? n = d.OperandAsNumber(a, o) : 1 == h[l - 1] ? n = d.OperandAsText(a, o) : -1 == h[l - 1] && (n = d.OperandValueAndType(a, o)), m[l] = n.value, C[l] = n.type, "e" == n.type.charAt(0)) return void d.PushOperand(t, n.type, u)
    }
    switch (e) {
        case "FIND":
            r = C[3] ? m[3] - 1 : 0, 0 > r ? u = "Start is before string" : (u = m[2].indexOf(m[1], r), u >= 0 ? (u += 1, p = "n") : u = "Not found");
            break;
        case "LEFT":
            i = C[2] ? m[2] - 0 : 1, 0 > i ? u = "Negative length" : (u = m[1].substring(0, i), p = "t");
            break;
        case "LEN":
            u = m[1].length, p = "n";
            break;
        case "LOWER":
            u = m[1].toLowerCase(), p = "t";
            break;
        case "MID":
            c = m[2] - 0, i = m[3] - 0, 1 > i || 1 > c ? u = "Bad arguments" : (u = m[1].substring(c - 1, c + i - 1), p = "t");
            break;
        case "PROPER":
            u = m[1].replace(/\b\w+\b/g, function(e) {
                return e.substring(0, 1).toUpperCase() + e.substring(1)
            }), p = "t";
            break;
        case "REPLACE":
            c = m[2] - 0, i = m[3] - 0, 0 > i || 1 > c ? u = "Bad arguments" : (u = m[1].substring(0, c - 1) + m[4] + m[1].substring(c - 1 + i), p = "t");
            break;
        case "REPT":
            if (s = m[2] - 0, 0 > s) u = "Negative count";
            else {
                for (u = ""; s > 0; s--) u += m[1];
                p = "t"
            }
            break;
        case "RIGHT":
            i = C[2] ? m[2] - 0 : 1, 0 > i ? u = "Negative length" : (u = m[1].slice(-i), p = "t");
            break;
        case "SUBSTITUTE":
            if (fulltext = m[1], oldtext = m[2], newtext = m[3], null != m[4]) {
                if (which = m[4] - 0, 0 >= which) {
                    u = "Non-positive instance number";
                    break
                }
            } else which = 0;
            for (s = 0, oldpos = 0, u = "";;) {
                if (pos = fulltext.indexOf(oldtext, oldpos), !(pos >= 0)) {
                    u += fulltext.substring(oldpos);
                    break
                }
                if (s++, u += fulltext.substring(oldpos, pos), 0 == which) u += newtext;
                else {
                    if (which == s) {
                        u += newtext + fulltext.substring(pos + oldtext.length);
                        break
                    }
                    u += oldtext
                }
                oldpos = pos + oldtext.length
            }
            p = "t";
            break;
        case "TRIM":
            u = m[1], u = u.replace(/^ */, ""), u = u.replace(/ *$/, ""), u = u.replace(/ +/g, " "), p = "t";
            break;
        case "HEXCODE":
            u = String(m[1]);
            var g = u.charCodeAt(0);
            if (g >= 55296 && 56319 >= g) {
                var S = u.charCodeAt(1);
                S >= 56320 && 57343 >= S && (g = 1024 * (g - 55296) + (S - 56320) + 65536)
            }
            u = g.toString(16).toUpperCase(), p = "t";
            break;
        case "UPPER":
            u = m[1].toUpperCase(), p = "t"
    }
    d.PushOperand(t, p, u)
}, SocialCalc.Formula.FunctionList.FIND = [SocialCalc.Formula.StringFunctions, -2, "find", "", "text"], SocialCalc.Formula.FunctionList.LEFT = [SocialCalc.Formula.StringFunctions, -2, "tc", "", "text"], SocialCalc.Formula.FunctionList.LEN = [SocialCalc.Formula.StringFunctions, 1, "txt", "", "text"], SocialCalc.Formula.FunctionList.LOWER = [SocialCalc.Formula.StringFunctions, 1, "txt", "", "text"], SocialCalc.Formula.FunctionList.MID = [SocialCalc.Formula.StringFunctions, 3, "mid", "", "text"], SocialCalc.Formula.FunctionList.PROPER = [SocialCalc.Formula.StringFunctions, 1, "v", "", "text"], SocialCalc.Formula.FunctionList.REPLACE = [SocialCalc.Formula.StringFunctions, 4, "replace", "", "text"], SocialCalc.Formula.FunctionList.REPT = [SocialCalc.Formula.StringFunctions, 2, "tc", "", "text"], SocialCalc.Formula.FunctionList.RIGHT = [SocialCalc.Formula.StringFunctions, -1, "tc", "", "text"], SocialCalc.Formula.FunctionList.SUBSTITUTE = [SocialCalc.Formula.StringFunctions, -3, "subs", "", "text"], SocialCalc.Formula.FunctionList.TRIM = [SocialCalc.Formula.StringFunctions, 1, "v", "", "text"], SocialCalc.Formula.FunctionList.HEXCODE = [SocialCalc.Formula.StringFunctions, 1, "v", "", "text"], SocialCalc.Formula.FunctionList.UPPER = [SocialCalc.Formula.StringFunctions, 1, "v", "", "text"], SocialCalc.Formula.IsFunctions = function(e, t, o, a) {
    var l = SocialCalc.Formula,
        n = 0,
        r = "nl",
        i = l.OperandValueAndType(a, o),
        c = i.type.charAt(0);
    switch (e) {
        case "ISBLANK":
            n = "b" == i.type ? 1 : 0;
            break;
        case "ISERR":
            n = "e" == c ? "e#N/A" == i.type ? 0 : 1 : 0;
            break;
        case "ISERROR":
            n = "e" == c ? 1 : 0;
            break;
        case "ISLOGICAL":
            n = "nl" == i.type ? 1 : 0;
            break;
        case "ISNA":
            n = "e#N/A" == i.type ? 1 : 0;
            break;
        case "ISNONTEXT":
            n = "t" == c ? 0 : 1;
            break;
        case "ISNUMBER":
            n = "n" == c ? 1 : 0;
            break;
        case "ISTEXT":
            n = "t" == c ? 1 : 0
    }
    l.PushOperand(t, r, n)
}, SocialCalc.Formula.FunctionList.ISBLANK = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"], SocialCalc.Formula.FunctionList.ISERR = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"], SocialCalc.Formula.FunctionList.ISERROR = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"], SocialCalc.Formula.FunctionList.ISLOGICAL = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"], SocialCalc.Formula.FunctionList.ISNA = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"], SocialCalc.Formula.FunctionList.ISNONTEXT = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"], SocialCalc.Formula.FunctionList.ISNUMBER = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"], SocialCalc.Formula.FunctionList.ISTEXT = [SocialCalc.Formula.IsFunctions, 1, "v", "", "test"], SocialCalc.Formula.NTVFunctions = function(e, t, o, a) {
    var l = SocialCalc.Formula,
        n = 0,
        r = "e#VALUE!",
        i = l.OperandValueAndType(a, o),
        c = i.type.charAt(0);
    switch (e) {
        case "N":
            n = "n" == c ? i.value - 0 : 0, r = "n";
            break;
        case "T":
            n = "t" == c ? i.value + "" : "", r = "t";
            break;
        case "VALUE":
            "n" == c || "b" == c ? (n = i.value || 0, r = "n") : "t" == c && (i = SocialCalc.DetermineValueType(i.value), "n" != i.type.charAt(0) ? (n = 0, r = "e#VALUE!") : (n = i.value - 0, r = "n"))
    }
    "e" == c && (r = i.type), l.PushOperand(t, r, n)
}, SocialCalc.Formula.FunctionList.N = [SocialCalc.Formula.NTVFunctions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.T = [SocialCalc.Formula.NTVFunctions, 1, "v", "", "text"], SocialCalc.Formula.FunctionList.VALUE = [SocialCalc.Formula.NTVFunctions, 1, "v", "", "text"], SocialCalc.Formula.Math1Functions = function(e, t, o, a) {
    var l, n, r, i = {},
        c = SocialCalc.Formula;
    if (l = c.OperandAsNumber(a, o), n = l.value, i.type = c.LookupResultType(l.type, l.type, c.TypeLookupTable.oneargnumeric), "n" == i.type) switch (e) {
        case "ABS":
            n = Math.abs(n);
            break;
        case "ACOS":
            n >= -1 && 1 >= n ? n = Math.acos(n) : i.type = "e#NUM!";
            break;
        case "ASIN":
            n >= -1 && 1 >= n ? n = Math.asin(n) : i.type = "e#NUM!";
            break;
        case "ATAN":
            n = Math.atan(n);
            break;
        case "COS":
            n = Math.cos(n);
            break;
        case "DEGREES":
            n = 180 * n / Math.PI;
            break;
        case "EVEN":
            n = 0 > n ? -n : n, n != Math.floor(n) ? n = Math.floor(n + 1) + Math.floor(n + 1) % 2 : n += n % 2, l.value < 0 && (n = -n);
            break;
        case "EXP":
            n = Math.exp(n);
            break;
        case "FACT":
            for (r = 1, n = Math.floor(n); n > 0; n--) r *= n;
            n = r;
            break;
        case "INT":
            n = Math.floor(n);
            break;
        case "LN":
            0 >= n && (i.type = "e#NUM!", i.error = SocialCalc.Constants.s_sheetfunclnarg), n = Math.log(n);
            break;
        case "LOG10":
            0 >= n && (i.type = "e#NUM!", i.error = SocialCalc.Constants.s_sheetfunclog10arg), n = Math.log(n) / Math.log(10);
            break;
        case "ODD":
            n = 0 > n ? -n : n, n != Math.floor(n) ? n = Math.floor(n + 1) + (1 - Math.floor(n + 1) % 2) : n += 1 - n % 2, l.value < 0 && (n = -n);
            break;
        case "RADIANS":
            n = n * Math.PI / 180;
            break;
        case "SIN":
            n = Math.sin(n);
            break;
        case "SQRT":
            n >= 0 ? n = Math.sqrt(n) : i.type = "e#NUM!";
            break;
        case "TAN":
            0 != Math.cos(n) ? n = Math.tan(n) : i.type = "e#NUM!"
    }
    return i.value = n, t.push(i), null
}, SocialCalc.Formula.FunctionList.ABS = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.ACOS = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.ASIN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.ATAN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.COS = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.DEGREES = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.EVEN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.EXP = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.FACT = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.INT = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.LN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.LOG10 = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.ODD = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.RADIANS = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.SIN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.SQRT = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.FunctionList.TAN = [SocialCalc.Formula.Math1Functions, 1, "v", "", "math"], SocialCalc.Formula.Math2Functions = function(e, t, o, a) {
    var l, n, r, i, c, s, d = {},
        u = SocialCalc.Formula;
    if (l = u.OperandAsNumber(a, o), n = u.OperandAsNumber(a, o), r = 0, d.type = u.LookupResultType(l.type, n.type, u.TypeLookupTable.twoargnumeric), "n" == d.type) switch (e) {
        case "ATAN2":
            0 == l.value && 0 == n.value ? d.type = "e#DIV/0!" : d.value = Math.atan2(n.value, l.value);
            break;
        case "POWER":
            d.value = Math.pow(l.value, n.value), isNaN(d.value) && (d.value = 0, d.type = "e#NUM!");
            break;
        case "MOD":
            0 == n.value ? d.type = "e#DIV/0!" : (i = l.value / n.value, i = Math.floor(i), d.value = l.value - i * n.value);
            break;
        case "TRUNC":
            if (c = 1, n.value >= 0) {
                for (n.value = Math.floor(n.value), s = 0; s < n.value; s++) c *= 10;
                d.value = Math.floor(Math.abs(l.value) * c) / c
            } else if (n.value < 0) {
                for (n.value = Math.floor(-n.value), s = 0; s < n.value; s++) c *= 10;
                d.value = Math.floor(Math.abs(l.value) / c) * c
            }
            l.value < 0 && (d.value = -d.value)
    }
    return t.push(d), null
}, SocialCalc.Formula.FunctionList.ATAN2 = [SocialCalc.Formula.Math2Functions, 2, "xy", "", "math"], SocialCalc.Formula.FunctionList.MOD = [SocialCalc.Formula.Math2Functions, 2, "", "", "math"], SocialCalc.Formula.FunctionList.POWER = [SocialCalc.Formula.Math2Functions, 2, "", "", "math"], SocialCalc.Formula.FunctionList.TRUNC = [SocialCalc.Formula.Math2Functions, 2, "valpre", "", "math"], SocialCalc.Formula.LogFunction = function(e, t, o, a) {
    var l, n, r = {},
        i = SocialCalc.Formula;
    if (r.value = 0, l = i.OperandAsNumber(a, o), r.type = i.LookupResultType(l.type, l.type, i.TypeLookupTable.oneargnumeric), 1 == o.length) {
        if (n = i.OperandAsNumber(a, o), "n" != n.type.charAt(0) || n.value <= 0) return i.FunctionSpecificError(e, t, "e#NUM!", SocialCalc.Constants.s_sheetfunclogsecondarg), 0
    } else {
        if (0 != o.length) return i.FunctionArgsError(e, t), 0;
        n = {
            value: Math.E,
            type: "n"
        }
    }
    if ("n" == r.type) {
        if (l.value <= 0) return i.FunctionSpecificError(e, t, "e#NUM!", SocialCalc.Constants.s_sheetfunclogfirstarg), 0;
        r.value = Math.log(l.value) / Math.log(n.value)
    }
    t.push(r)
}, SocialCalc.Formula.FunctionList.LOG = [SocialCalc.Formula.LogFunction, -1, "log", "", "math"], SocialCalc.Formula.RoundFunction = function(e, t, o, a) {
    var l, n, r, i, c = SocialCalc.Formula,
        s = 0,
        d = "e#VALUE!",
        u = c.OperandValueAndType(a, o),
        d = c.LookupResultType(u.type, u.type, c.TypeLookupTable.oneargnumeric);
    if (1 == o.length) {
        if (l = c.OperandValueAndType(a, o), "n" != l.type.charAt(0)) return c.FunctionSpecificError(e, t, "e#NUM!", SocialCalc.Constants.s_sheetfuncroundsecondarg), 0
    } else {
        if (0 != o.length) return c.FunctionArgsError(e, t), 0;
        l = {
            value: 0,
            type: "n"
        }
    }
    if ("n" == d)
        if (l.value = l.value - 0, 0 == l.value) s = Math.round(u.value);
        else if (l.value > 0) {
        for (n = 1, l.value = Math.floor(l.value), i = 0; i < l.value; i++) n *= 10;
        r = Math.round(u.value * n), s = r / n
    } else if (l.value < 0) {
        for (n = 1, l.value = Math.floor(-l.value), i = 0; i < l.value; i++) n *= 10;
        r = Math.round(u.value / n), s = r * n
    }
    c.PushOperand(t, d, s)
}, SocialCalc.Formula.FunctionList.ROUND = [SocialCalc.Formula.RoundFunction, -1, "vp", "", "math"], SocialCalc.Formula.CeilingFloorFunctions = function(e, t, o, a) {
    var l, n, r, i = SocialCalc.Formula,
        c = function(e, o) {
            t.push({
                type: e,
                value: o
            })
        };
    if (l = i.OperandValueAndType(a, o), r = l.type.charAt(0), "n" != r) return void c("e#VALUE!", 0);
    if (0 == l.value) return void c("n", 0);
    if (1 == o.length) {
        if (n = i.OperandValueAndType(a, o), r = l.type.charAt(0), "n" != r) return void c("e#VALUE!", 0)
    } else {
        if (0 != o.length) return void c("e#VALUE!", 0);
        n = {
            type: "n",
            value: l.value > 0 ? 1 : -1
        }
    }
    if (0 == n.value) return void c("n", 0);
    if (n.value * l.value < 0) return void c("e#NUM!", 0);
    switch (e) {
        case "CEILING":
            c("n", Math.ceil(l.value / n.value) * n.value);
            break;
        case "FLOOR":
            c("n", Math.floor(l.value / n.value) * n.value)
    }
}, SocialCalc.Formula.FunctionList.CEILING = [SocialCalc.Formula.CeilingFloorFunctions, -1, "vsig", "", "math"], SocialCalc.Formula.FunctionList.FLOOR = [SocialCalc.Formula.CeilingFloorFunctions, -1, "vsig", "", "math"], SocialCalc.Formula.AndOrFunctions = function(e, t, o, a) {
    var l, n, r = SocialCalc.Formula,
        i = "";
    for ("AND" == e ? n = 1 : "OR" == e && (n = 0); o.length;) l = r.OperandValueAndType(a, o), "n" == l.type.charAt(0) ? (l.value = l.value - 0, "AND" == e ? n = 0 != l.value ? n : 0 : "OR" == e && (n = 0 != l.value ? 1 : n), i = r.LookupResultType(l.type, i || "nl", r.TypeLookupTable.propagateerror)) : "e" == l.type.charAt(0) && "e" != i.charAt(0) && (i = l.type);
    i.length < 1 && (i = "e#VALUE!", n = 0), r.PushOperand(t, i, n)
}, SocialCalc.Formula.FunctionList.AND = [SocialCalc.Formula.AndOrFunctions, -1, "vn", "", "test"], SocialCalc.Formula.FunctionList.OR = [SocialCalc.Formula.AndOrFunctions, -1, "vn", "", "test"], SocialCalc.Formula.NotFunction = function(e, t, o, a) {
    var l = 0,
        n = SocialCalc.Formula,
        r = n.OperandValueAndType(a, o),
        i = n.LookupResultType(r.type, r.type, n.TypeLookupTable.propagateerror);
    "n" == r.type.charAt(0) || "b" == r.type ? (l = r.value - 0 != 0 ? 0 : 1, i = "nl") : "t" == r.type.charAt(0) && (i = "e#VALUE!"), n.PushOperand(t, i, l)
}, SocialCalc.Formula.FunctionList.NOT = [SocialCalc.Formula.NotFunction, 1, "v", "", "test"], SocialCalc.Formula.ChooseFunction = function(e, t, o, a) {
    var l, n, r, i = 0,
        c = SocialCalc.Formula,
        s = c.OperandAsNumber(a, o);
    for ("n" != s.type.charAt(0) && (s.value = 0), s.value = Math.floor(s.value), n = 0; o.length;)
        if (r = c.TopOfStackValueAndType(a, o), n += 1, s.value == n) {
            i = r.value, l = r.type;
            break
        }
    l ? c.PushOperand(t, l, i) : c.PushOperand(t, "e#VALUE!", 0)
}, SocialCalc.Formula.FunctionList.CHOOSE = [SocialCalc.Formula.ChooseFunction, -2, "choose", "", "lookup"], SocialCalc.Formula.ColumnsRowsFunctions = function(e, t, o, a) {
    var l, n, r = 0,
        i = SocialCalc.Formula,
        c = i.TopOfStackValueAndType(a, o);
    "coord" == c.type ? (r = 1, l = "n") : "range" == c.type ? (n = i.DecodeRangeParts(a, c.value), "COLUMNS" == e ? r = n.ncols : "ROWS" == e && (r = n.nrows), l = "n") : (r = 0, l = "e#VALUE!"), i.PushOperand(t, l, r)
}, SocialCalc.Formula.FunctionList.COLUMNS = [SocialCalc.Formula.ColumnsRowsFunctions, 1, "range", "", "lookup"], SocialCalc.Formula.FunctionList.ROWS = [SocialCalc.Formula.ColumnsRowsFunctions, 1, "range", "", "lookup"], SocialCalc.Formula.ZeroArgFunctions = function(e, t) {
    var o, a, l, n, r, i = {
        value: 0
    };
    switch (e) {
        case "FALSE":
            i.type = "nl", i.value = 0;
            break;
        case "NA":
            i.type = "e#N/A";
            break;
        case "NOW":
            o = new Date, a = o.getTimezoneOffset(), o = o.getTime() / 1e3, l = 25569, n = 86400, r = l + o / n - a / 1440, i.value = r, i.type = "ndt", SocialCalc.Formula.FreshnessInfo.volatile.NOW = !0;
            break;
        case "PI":
            i.type = "n", i.value = Math.PI;
            break;
        case "TODAY":
            o = new Date, a = o.getTimezoneOffset(), o = o.getTime() / 1e3, l = 25569, n = 86400, r = l + o / n - a / 1440, i.value = Math.floor(r), i.type = "nd", SocialCalc.Formula.FreshnessInfo.volatile.TODAY = !0;
            break;
        case "TRUE":
            i.type = "nl", i.value = 1;
            break;
        case "RAND":
            i.type = "n", i.value = Math.random(), SocialCalc.Formula.FreshnessInfo.volatile.RAND = !0
    }
    return t.push(i), null
}, SocialCalc.Formula.FunctionList.FALSE = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "test"], SocialCalc.Formula.FunctionList.NA = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "test"], SocialCalc.Formula.FunctionList.NOW = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "datetime"], SocialCalc.Formula.FunctionList.RAND = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "math"], SocialCalc.Formula.FunctionList.PI = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "math"], SocialCalc.Formula.FunctionList.TODAY = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "datetime"], SocialCalc.Formula.FunctionList.TRUE = [SocialCalc.Formula.ZeroArgFunctions, 0, "", "", "test"], SocialCalc.Formula.DDBFunction = function(e, t, o, a) {
    var l, n, r, i, c = SocialCalc.Formula,
        s = c.OperandAsNumber(a, o),
        d = c.OperandAsNumber(a, o),
        u = c.OperandAsNumber(a, o),
        p = c.OperandAsNumber(a, o);
    if (!(c.CheckForErrorValue(t, s) || c.CheckForErrorValue(t, d) || c.CheckForErrorValue(t, u) || c.CheckForErrorValue(t, p))) {
        if (u.value < 1) return c.FunctionSpecificError(e, t, "e#NUM!", SocialCalc.Constants.s_sheetfuncddblife), 0;
        if (l = {
                value: 2,
                type: "n"
            }, o.length > 0 && (l = c.OperandAsNumber(a, o)), 0 != o.length) return c.FunctionArgsError(e, t), 0;
        if (!c.CheckForErrorValue(t, l)) {
            for (n = 0, r = 0, i = 1; i <= p.value - 0 && i <= u.value; i++) n = (s.value - r) * (l.value / u.value), s.value - r - n < d.value && (n = s.value - r - d.value), r += n;
            c.PushOperand(t, "n$", n)
        }
    }
}, SocialCalc.Formula.FunctionList.DDB = [SocialCalc.Formula.DDBFunction, -4, "ddb", "", "financial"], SocialCalc.Formula.SLNFunction = function(e, t, o, a) {
    var l, n = SocialCalc.Formula,
        r = n.OperandAsNumber(a, o),
        i = n.OperandAsNumber(a, o),
        c = n.OperandAsNumber(a, o);
    if (!n.CheckForErrorValue(t, r) && !n.CheckForErrorValue(t, i) && !n.CheckForErrorValue(t, c)) {
        if (c.value < 1) return n.FunctionSpecificError(e, t, "e#NUM!", SocialCalc.Constants.s_sheetfuncslnlife), 0;
        l = (r.value - i.value) / c.value, n.PushOperand(t, "n$", l)
    }
}, SocialCalc.Formula.FunctionList.SLN = [SocialCalc.Formula.SLNFunction, 3, "csl", "", "financial"], SocialCalc.Formula.SYDFunction = function(e, t, o, a) {
    var l, n, r = SocialCalc.Formula,
        i = r.OperandAsNumber(a, o),
        c = r.OperandAsNumber(a, o),
        s = r.OperandAsNumber(a, o),
        d = r.OperandAsNumber(a, o);
    if (!(r.CheckForErrorValue(t, i) || r.CheckForErrorValue(t, c) || r.CheckForErrorValue(t, s) || r.CheckForErrorValue(t, d))) {
        if (s.value < 1 || d.value <= 0) return r.PushOperand(t, "e#NUM!", 0), 0;
        n = (s.value + 1) * s.value / 2, l = (i.value - c.value) * (s.value - d.value + 1) / n, r.PushOperand(t, "n$", l)
    }
}, SocialCalc.Formula.FunctionList.SYD = [SocialCalc.Formula.SYDFunction, 4, "cslp", "", "financial"], SocialCalc.Formula.InterestFunctions = function(e, t, o, a) {
    var l, n, r, i, c, s, d, u, p, f, h, m, C, g, S, v, b, y, w, x, u, T, k, F = SocialCalc.Formula,
        E = F.OperandAsNumber(a, o),
        _ = F.OperandAsNumber(a, o),
        P = F.OperandAsNumber(a, o);
    if (l = F.LookupResultType(E.type, _.type, F.TypeLookupTable.twoargnumeric), l = F.LookupResultType(l, P.type, F.TypeLookupTable.twoargnumeric), o.length && (r = F.OperandAsNumber(a, o), l = F.LookupResultType(l, r.type, F.TypeLookupTable.twoargnumeric), o.length && (i = F.OperandAsNumber(a, o), l = F.LookupResultType(l, i.type, F.TypeLookupTable.twoargnumeric), o.length))) {
        if ("RATE" != e) return F.FunctionArgsError(e, t), 0;
        c = F.OperandAsNumber(a, o), l = F.LookupResultType(l, c.type, F.TypeLookupTable.twoargnumeric)
    }
    if ("n" == l) switch (e) {
        case "FV":
            u = E.value, p = _.value, f = P.value, s = null != r ? r.value : 0, h = null != i && i.value ? 1 : 0, d = 0 == u ? -s - f * p : -(s * Math.pow(1 + u, p) + f * (1 + u * h) * (Math.pow(1 + u, p) - 1) / u), n = d, l = "n$";
            break;
        case "NPER":
            if (u = E.value, f = _.value, s = P.value, d = null != r ? r.value : 0, h = null != i && i.value ? 1 : 0, 0 == u) {
                if (0 == f) return void F.PushOperand(t, "e#NUM!", 0);
                p = (s + d) / -f
            } else {
                if (C = f * (1 + u * h) / u, g = s + C, 0 == g || -1 >= u) return void F.PushOperand(t, "e#NUM!", 0);
                if (S = (C - d) / g, 0 >= S) return void F.PushOperand(t, "e#NUM!", 0);
                v = Math.log(S), b = Math.log(1 + u), p = v / b
            }
            n = p, l = "n";
            break;
        case "PMT":
            if (u = E.value, p = _.value, s = P.value, d = null != r ? r.value : 0, h = null != i && i.value ? 1 : 0, 0 == p) return void F.PushOperand(t, "e#NUM!", 0);
            f = 0 == u ? (d - s) / p : (0 - d - s * Math.pow(1 + u, p)) / ((1 + u * h) * (Math.pow(1 + u, p) - 1) / u), n = f, l = "n$";
            break;
        case "PV":
            if (u = E.value, p = _.value, f = P.value, d = null != r ? r.value : 0, h = null != i && i.value ? 1 : 0, -1 == u) return void F.PushOperand(t, "e#DIV/0!", 0);
            s = 0 == u ? -d - f * p : (-d - f * (1 + u * h) * (Math.pow(1 + u, p) - 1) / u) / Math.pow(1 + u, p), n = s, l = "n$";
            break;
        case "RATE":
            for (p = E.value, f = _.value, s = P.value, d = null != r ? r.value : 0, h = null != i && i.value ? 1 : 0, m = null != c ? c.value : .1, w = 100, x = 0, delta = 1, epsilon = 1e-7, u = m || 1e-8;
                (delta >= 0 ? delta : -delta) > epsilon && u != T;)
                if (delta = d + s * Math.pow(1 + u, p) + f * (1 + u * h) * (Math.pow(1 + u, p) - 1) / u, null != y ? (k = (delta - y) / (u - T) || .001, T = u, u -= delta / k, y = delta) : (T = u, u = 1.1 * u, y = delta), x++, x >= w) return void F.PushOperand(t, "e#NUM!", 0);
            n = u, l = "n%"
    }
    F.PushOperand(t, l, n)
}, SocialCalc.Formula.FunctionList.FV = [SocialCalc.Formula.InterestFunctions, -3, "fv", "", "financial"], SocialCalc.Formula.FunctionList.NPER = [SocialCalc.Formula.InterestFunctions, -3, "nper", "", "financial"], SocialCalc.Formula.FunctionList.PMT = [SocialCalc.Formula.InterestFunctions, -3, "pmt", "", "financial"], SocialCalc.Formula.FunctionList.PV = [SocialCalc.Formula.InterestFunctions, -3, "pv", "", "financial"], SocialCalc.Formula.FunctionList.RATE = [SocialCalc.Formula.InterestFunctions, -3, "rate", "", "financial"], SocialCalc.Formula.NPVFunction = function(e, t, o, a) {
    var l, n, r, i, c, s = SocialCalc.Formula,
        n = s.OperandAsNumber(a, o);
    if (!s.CheckForErrorValue(t, n)) {
        for (r = 0, l = "n", i = 1; o.length;)
            if (c = s.OperandValueAndType(a, o), "n" == c.type.charAt(0)) {
                if (i *= 1 + n.value, 0 == i) return void s.PushOperand(t, "e#DIV/0!", 0);
                r += c.value / i, l = s.LookupResultType(c.type, l || c.type, s.TypeLookupTable.plus)
            } else if ("e" == c.type.charAt(0) && "e" != l.charAt(0)) {
            l = c.type;
            break
        }
        "n" == l.charAt(0) && (l = "n$"), s.PushOperand(t, l, r)
    }
}, SocialCalc.Formula.FunctionList.NPV = [SocialCalc.Formula.NPVFunction, -2, "npv", "", "financial"], SocialCalc.Formula.IRRFunction = function(e, t, o, a) {
    var l, n, r, i, c, s, d, u, p, f, h, m, C = [],
        g = [],
        S = SocialCalc.Formula;
    for (C.push(o.pop()); C.length;)
        if (l = S.OperandValueAndType(a, C), "n" == l.type.charAt(0)) g.push(l.value);
        else if ("e" == l.type.charAt(0)) return void S.PushOperand(t, "e#VALUE!", 0);
    if (!g.length) return void S.PushOperand(t, "e#NUM!", 0);
    if (n = {
            value: 0
        }, o.length) {
        if (n = S.OperandAsNumber(a, o), "n" != n.type.charAt(0) && "b" != n.type.charAt(0)) return void S.PushOperand(t, "e#VALUE!", 0);
        if (o.length) return void S.FunctionArgsError(e, t)
    }
    for (n.value = n.value || .1, i = 20, c = 0, s = 1e-7, d = n.value, f = 1;
        (f >= 0 ? f : -f) > s && d != u;) {
        for (f = 0, h = 1, m = 0; m < g.length; m++) {
            if (h *= 1 + d, 0 == h) return void S.PushOperand(t, "e#DIV/0!", 0);
            f += g[m] / h
        }
        if (null != r ? (p = (f - r) / (d - u), u = d, d -= f / p, r = f) : (u = d, d = 1.1 * d, r = f), c++, c >= i) return void S.PushOperand(t, "e#NUM!", 0)
    }
    S.PushOperand(t, "n%", d)
}, SocialCalc.Formula.FunctionList.IRR = [SocialCalc.Formula.IRRFunction, -1, "irr", "", "financial"], SocialCalc.Formula.SheetCache = {
    sheets: {},
    waitingForLoading: null,
    constants: {
        asloaded: 0,
        recalcing: 1,
        recalcdone: 2
    },
    loadsheet: null
}, SocialCalc.Formula.FindInSheetCache = function(e) {
    var t = SocialCalc.Formula.SheetCache,
        o = SocialCalc.Formula.NormalizeSheetName(e);
    return t.sheets[o] ? t.sheets[o].sheet : t.waitingForLoading ? null : t.loadsheet ? (alert("Using SocialCalc.Formula.SheetCache.loadsheet - deprecated"), SocialCalc.Formula.AddSheetToCache(o, t.loadsheet(o))) : (t.waitingForLoading = o, null)
}, SocialCalc.Formula.AddSheetToCache = function(e, t, o) {
    var a = null,
        l = SocialCalc.Formula.SheetCache,
        n = l.constants,
        r = SocialCalc.Formula.NormalizeSheetName(e);
    return t && (a = new SocialCalc.Sheet, a.ParseSheetSave(t)), l.sheets[r] = {
        sheet: a,
        recalcstate: n.asloaded,
        name: r
    }, SocialCalc.Formula.FreshnessInfo.sheets[r] = "undefined" == typeof o || o === !1, a
}, SocialCalc.Formula.NormalizeSheetName = function(e) {
    return SocialCalc.Callbacks.NormalizeSheetName ? SocialCalc.Callbacks.NormalizeSheetName(e) : e.toLowerCase()
}, SocialCalc.Formula.RemoteFunctionInfo = {
    waitingForServer: null
}, SocialCalc.Formula.FreshnessInfo = {
    sheets: {},
    "volatile": {},
    recalc_completed: !1
}, SocialCalc.Formula.FreshnessInfoReset = function() {
    var e = SocialCalc.Formula.FreshnessInfo,
        t = SocialCalc.Formula.SheetCache;
    for (var o in e.sheets) e.sheets[o] === !1 && delete t.sheets[o];
    e.sheets = {}, e.volatile = {}, e.recalc_completed = !1
}, SocialCalc.Formula.PlainCoord = function(e) {
    return -1 == e.indexOf("$") ? e : e.replace(/\$/g, "")
}, SocialCalc.Formula.OrderRangeParts = function(e, t) {
    var o, a, l = {};
    return o = SocialCalc.coordToCr(e), a = SocialCalc.coordToCr(t), o.col > a.col ? (l.c1 = a.col, l.c2 = o.col) : (l.c1 = o.col, l.c2 = a.col), o.row > a.row ? (l.r1 = a.row, l.r2 = o.row) : (l.r1 = o.row, l.r2 = a.row), l
}, SocialCalc.Formula.TestCriteria = function(e, t, o) {
    var a, l, n, r, i;
    if (null == o) return !1;
    if (o += "", a = o.charAt(0), "=" == a || "<" == a || ">" == a ? l = o.substring(1) : (a = o.substring(0, 2), "<=" == a || "<>" == a || ">=" == a ? l = o.substring(2) : (a = "none", l = o)), n = SocialCalc.DetermineValueType(l), !n.type) {
        if ("none" == a) return !1;
        if ("b" == t.charAt(0)) {
            if ("=" == a) return !0
        } else if ("<>" == a) return !0;
        return !1
    }
    if (r = !1, "n" == n.type.charAt(0) && "t" == t.charAt(0) && (i = SocialCalc.DetermineValueType(e), "n" == i.type.charAt(0) && (e = i.value, t = i.type)), "n" == t.charAt(0) && "n" == n.type.charAt(0)) switch (e -= 0, n.value = n.value - 0, a) {
            case "<":
                r = e < n.value;
                break;
            case "<=":
                r = e <= n.value;
                break;
            case "=":
            case "none":
                r = e == n.value;
                break;
            case ">=":
                r = e >= n.value;
                break;
            case ">":
                r = e > n.value;
                break;
            case "<>":
                r = e != n.value
        } else if ("e" == t.charAt(0)) r = !1;
        else if ("e" == n.type.charAt(0)) r = !1;
    else {
        if ("n" == t.charAt(0) && (e = SocialCalc.format_number_for_display(e, "n", "")), "n" == n.type.charAt(0)) return !1;
        switch (e = e ? e.toLowerCase() : "", n.value = n.value ? n.value.toLowerCase() : "", a) {
            case "<":
                r = e < n.value;
                break;
            case "<=":
                r = e <= n.value;
                break;
            case "=":
                r = e == n.value;
                break;
            case "none":
                r = e.substring(0, n.value.length) == n.value;
                break;
            case ">=":
                r = e >= n.value;
                break;
            case ">":
                r = e > n.value;
                break;
            case "<>":
                r = e != n.value
        }
    }
    return r
};
var SocialCalc;
SocialCalc || (SocialCalc = {}), SocialCalc.Popup = {}, SocialCalc.Popup.Types = {}, SocialCalc.Popup.Controls = {}, SocialCalc.Popup.Current = {}, SocialCalc.Popup.LocalizeString = function(e) {
    return e
}, SocialCalc.Popup.Create = function(e, t, o) {
    var a = SocialCalc.Popup.Types[e];
    a && a.Create && a.Create(e, t, o), SocialCalc.Popup.imagePrefix = SocialCalc.Constants.defaultImagePrefix
}, SocialCalc.Popup.SetValue = function(e, t) {
    var o = SocialCalc.Popup,
        a = o.Types,
        l = o.Controls;
    if (!l[e]) return void alert("Unknown control " + e);
    var n = l[e].type,
        r = a[n],
        i = l[e].data;
    r && r.Create && (r.SetValue(n, e, t), i.attribs && i.attribs.changedcallback && i.attribs.changedcallback(i.attribs, e, t))
}, SocialCalc.Popup.SetDisabled = function(e, t) {
    var o = SocialCalc.Popup,
        a = o.Types,
        l = o.Controls;
    if (!l[e]) return void alert("Unknown control " + e);
    var n = l[e].type,
        r = a[n];
    r && r.Create && (o.Current.id && e == o.Current.id && (r.Hide(n, o.Current.id), o.Current.id = null), r.SetDisabled(n, e, t))
}, SocialCalc.Popup.GetValue = function(e) {
    var t = SocialCalc.Popup,
        o = t.Types,
        a = t.Controls;
    if (!a[e]) return void alert("Unknown control " + e);
    var l = a[e].type,
        n = o[l];
    return n && n.Create ? n.GetValue(l, e) : null
}, SocialCalc.Popup.Initialize = function(e, t) {
    var o = SocialCalc.Popup,
        a = o.Types,
        l = o.Controls;
    if (!l[e]) return void alert("Unknown control " + e);
    var n = l[e].type,
        r = a[n];
    r && r.Initialize && r.Initialize(n, e, t)
}, SocialCalc.Popup.Reset = function(e) {
    {
        var t = SocialCalc.Popup,
            o = t.Types;
        t.Controls
    }
    o[e].Reset && o[e].Reset(e)
}, SocialCalc.Popup.CClick = function(e) {
    var t = SocialCalc.Popup,
        o = t.Types,
        a = t.Controls;
    if (!a[e]) return void alert("Unknown control " + e);
    if (!a[e].data || !a[e].data.disabled) {
        var l = a[e].type,
            n = o[l];
        if (t.Current.id && (o[a[t.Current.id].type].Hide(l, t.Current.id), e == t.Current.id)) return void(t.Current.id = null);
        n && n.Show && n.Show(l, e), t.Current.id = e
    }
}, SocialCalc.Popup.Close = function() {
    {
        var e = SocialCalc.Popup;
        e.Types, e.Controls
    }
    e.Current.id && e.CClick(e.Current.id)
}, SocialCalc.Popup.Cancel = function() {
    var e = SocialCalc.Popup,
        t = e.Types,
        o = e.Controls;
    if (e.Current.id) {
        var a = o[e.Current.id].type,
            l = t[a];
        l.Cancel(a, e.Current.id), e.Current.id = null
    }
}, SocialCalc.Popup.CreatePopupDiv = function(e, t) {
    var o, a = SocialCalc.Popup,
        l = a.Controls,
        n = l[e].data,
        r = document.createElement("div");
    return r.style.position = "absolute", o = SocialCalc.GetElementPosition(n.mainele), r.style.top = o.top + n.mainele.offsetHeight + "px", r.style.left = o.left + "px", r.style.zIndex = 100, r.style.backgroundColor = "#FFF", r.style.border = "1px solid black", t.width && (r.style.width = t.width), n.mainele.appendChild(r), t.title && (r.innerHTML = '<table cellspacing="0" cellpadding="0" style="border-bottom:1px solid black;"><tr><td style="font-size:10px;cursor:default;width:100%;background-color:#999;color:#FFF;">' + t.title + '</td><td style="font-size:10px;cursor:default;color:#666;" onclick="SocialCalc.Popup.Cancel();">&nbsp;X&nbsp;</td></tr></table>', t.moveable && (n.dragregistered = r.firstChild.firstChild.firstChild.firstChild, SocialCalc.DragRegister(n.dragregistered, !0, !0, {
        MouseDown: SocialCalc.DragFunctionStart,
        MouseMove: SocialCalc.DragFunctionPosition,
        MouseUp: SocialCalc.DragFunctionPosition,
        Disabled: null,
        positionobj: r
    }, n.mainele))), r
}, SocialCalc.Popup.EnsurePosition = function(e, t) {
    function o(e) {
        var t = SocialCalc.GetElementPosition(e);
        return t.height = e.offsetHeight, t.width = e.offsetWidth, t.bottom = t.top + t.height, t.right = t.left + t.width, t
    }
    var a = SocialCalc.Popup,
        l = a.Controls,
        n = l[e].data,
        r = n.mainele.firstChild;
    if (!r) return void alert("No main popup element firstChild.");
    var i = n.popupele,
        c = o(i),
        s = o(t),
        d = o(r),
        u = 0;
    d.bottom + c.height < s.bottom && d.left + c.width < s.right ? (i.style.top = d.bottom + "px", i.style.left = d.left + "px", u = 1) : d.top - c.height > s.top && d.left + c.width < s.right ? (i.style.top = d.top - c.height + "px", i.style.left = d.left + "px", u = 2) : d.bottom + c.height < s.bottom && d.right - c.width > s.left ? (i.style.top = d.bottom + "px", i.style.left = d.right - c.width + "px", u = 3) : d.top - c.height > s.top && d.right - c.width > s.left ? (i.style.top = d.top - c.height + "px", i.style.left = d.right - c.width + "px", u = 4) : d.bottom + c.height < s.bottom && c.width < s.width ? (i.style.top = d.bottom + "px", i.style.left = s.left + Math.floor((s.width - c.width) / 2) + "px", u = 5) : d.top - c.height > s.top && c.width < s.width ? (i.style.top = d.top - c.height + "px", i.style.left = s.left + Math.floor((s.width - c.width) / 2) + "px", u = 6) : c.height < s.height && d.right + c.width < s.right ? (i.style.top = s.top + Math.floor((s.height - c.height) / 2) + "px", i.style.left = d.right + "px", u = 7) : c.height < s.height && d.left - c.width > s.left && (i.style.top = s.top + Math.floor((s.height - c.height) / 2) + "px", i.style.left = d.left - c.width + "px", u = 8)
}, SocialCalc.Popup.DestroyPopupDiv = function(e, t) {
    e && (e.innerHTML = "", SocialCalc.DragUnregister(t), e.parentNode && e.parentNode.removeChild(e))
}, SocialCalc.Popup.RGBToHex = function(e) {
    var t = SocialCalc.Popup;
    if ("" == e) return "000000";
    var o = e.match(/(\d+)\D+(\d+)\D+(\d+)/);
    return o ? t.ToHex(o[1]) + t.ToHex(o[2]) + t.ToHex(o[3]) : "000000"
}, SocialCalc.Popup.HexDigits = "0123456789ABCDEF", SocialCalc.Popup.ToHex = function(e) {
    var t = SocialCalc.Popup,
        o = Math.floor(e / 16),
        a = e % 16;
    return t.HexDigits.charAt(o) + t.HexDigits.charAt(a)
}, SocialCalc.Popup.FromHex = function(e) {
    var t = SocialCalc.Popup,
        o = t.HexDigits.indexOf(e.charAt(0).toUpperCase()),
        a = t.HexDigits.indexOf(e.charAt(1).toUpperCase());
    return 16 * (o >= 0 ? o : 0) + (a >= 0 ? a : 0)
}, SocialCalc.Popup.HexToRGB = function(e) {
    var t = SocialCalc.Popup;
    return "rgb(" + t.FromHex(e.substring(1, 3)) + "," + t.FromHex(e.substring(3, 5)) + "," + t.FromHex(e.substring(5, 7)) + ")"
}, SocialCalc.Popup.makeRGB = function(e, t, o) {
    return "rgb(" + (e > 0 ? e : 0) + "," + (t > 0 ? t : 0) + "," + (o > 0 ? o : 0) + ")"
}, SocialCalc.Popup.splitRGB = function(e) {
    var t = e.match(/(\d+)\D+(\d+)\D+(\d+)\D/);
    return t ? {
        r: t[1] - 0,
        g: t[2] - 0,
        b: t[3] - 0
    } : {
        r: 0,
        g: 0,
        b: 0
    }
}, SocialCalc.Popup.Types.List = {}, SocialCalc.Popup.Types.List.Create = function(e, t, o) {
    var a = SocialCalc.Popup,
        l = (a.Types, a.Controls),
        n = {
            type: e,
            value: "",
            display: "",
            data: {}
        };
    l[t] = n;
    var r = n.data;
    r.attribs = o || {};
    var i = document.getElementById(t);
    return i ? (r.mainele = i, i.innerHTML = '<input style="cursor:pointer;width:100px;font-size:smaller;" onfocus="this.blur();" onclick="SocialCalc.Popup.CClick(\'' + t + '\');" value="">', void(r.options = [])) : void alert("Missing element " + t)
}, SocialCalc.Popup.Types.List.SetValue = function(e, t, a) {
    var l, n = SocialCalc.Popup,
        r = (n.Types, n.Controls),
        i = r[t].data;
    for (i.value = a, i.custom = !1, l = 0; l < i.options.length; l++)
        if (o = i.options[l], !(o.a && (o.a.skip || o.a.custom || o.a.cancel) || o.v != i.value)) {
            i.display = o.o;
            break
        }
    l == i.options.length && (i.display = "Custom", i.custom = !0), i.mainele && i.mainele.firstChild && (i.mainele.firstChild.value = i.display)
}, SocialCalc.Popup.Types.List.SetDisabled = function(e, t, o) {
    var a = SocialCalc.Popup,
        l = (a.Types, a.Controls),
        n = l[t].data;
    n.disabled = o, n.mainele && n.mainele.firstChild && (n.mainele.firstChild.disabled = o)
}, SocialCalc.Popup.Types.List.GetValue = function(e, t) {
    var o = SocialCalc.Popup,
        a = (o.Types, o.Controls),
        l = a[t].data;
    return l.value
}, SocialCalc.Popup.Types.List.Initialize = function(e, t, o) {
    var a, l = SocialCalc.Popup,
        n = (l.Types, l.Controls),
        r = n[t].data;
    for (a in o.attribs) r.attribs[a] = o.attribs[a];
    r.options = o ? o.options : [], o.value && l.SetValue(t, o.value)
}, SocialCalc.Popup.Types.List.Reset = function(e) {
    var t = SocialCalc.Popup,
        o = t.Types,
        a = t.Controls;
    t.Current.id && a[t.Current.id].type == e && (o[e].Hide(e, t.Current.id), t.Current.id = null)
}, SocialCalc.Popup.Types.List.Show = function(e, t) {
    var o, a = SocialCalc.Popup,
        l = (a.Types, a.Controls),
        n = l[t].data,
        r = "";
    n.popupele = a.CreatePopupDiv(t, n.attribs), n.custom ? (r = SocialCalc.Popup.Types.List.MakeCustom(e, t), o = document.createElement("div"), o.innerHTML = '<div style="cursor:default;padding:4px;background-color:#CCC;">' + r + "</div>", n.customele = o.firstChild.firstChild.childNodes[1], n.listdiv = null, n.contentele = o) : (r = SocialCalc.Popup.Types.List.MakeList(e, t), o = document.createElement("div"), o.innerHTML = '<div style="cursor:default;padding:4px;">' + r + "</div>", n.customele = null, n.listdiv = o.firstChild, n.contentele = o), n.mainele && n.mainele.firstChild && (n.mainele.firstChild.disabled = !0), n.popupele.appendChild(o), n.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(t, n.attribs.ensureWithin)
}, SocialCalc.Popup.Types.List.MakeList = function(e, t) {
    var o, a, l, n = SocialCalc.Popup,
        r = (n.Types, n.Controls),
        i = r[t].data,
        c = '<table cellspacing="0" cellpadding="0"><tr>',
        s = '<td style="vertical-align:top;">';
    for (c += s, i.ncols = 1, o = 0; o < i.options.length; o++) {
        if (a = i.options[o], a.a) {
            if (a.a.newcol) {
                c += "</td>" + s + "&nbsp;&nbsp;&nbsp;&nbsp;</td>" + s, i.ncols += 1;
                continue
            }
            if (a.a.skip) {
                c += '<div style="font-size:x-small;white-space:nowrap;">' + a.o + "</div>";
                continue
            }
        }
        l = a.v != i.value || a.a && (a.a.custom || a.a.cancel) ? "" : "background-color:#DDF;", c += '<div style="font-size:x-small;white-space:nowrap;' + l + '" onclick="SocialCalc.Popup.Types.List.ItemClicked(\'' + t + "','" + o + "');\" onmousemove=\"SocialCalc.Popup.Types.List.MouseMove('" + t + "',this);\">" + a.o + "</div>"
    }
    return c += "</td></tr></table>"
}, SocialCalc.Popup.Types.List.MakeCustom = function(e, t) {
    var o = SocialCalc.Popup.LocalizeString,
        a = SocialCalc.Popup,
        l = (a.Types, a.Controls),
        n = l[t].data,
        r = 'style="font-size:smaller;"',
        i = "",
        c = n.value;
    return c = SocialCalc.special_chars(c), i = '<div style="white-space:nowrap;"><br><input id="customvalue" value="' + c + '"><br><br><input ' + r + ' type="button" value="' + o("OK") + '" onclick="SocialCalc.Popup.Types.List.CustomOK(\'' + t + "');return false;\"><input " + r + ' type="button" value="' + o("List") + '" onclick="SocialCalc.Popup.Types.List.CustomToList(\'' + t + "');\"><input " + r + ' type="button" value="' + o("Cancel") + '" onclick="SocialCalc.Popup.Close();"><br></div>'
}, SocialCalc.Popup.Types.List.ItemClicked = function(e, t) {
    var o, a, l, n = SocialCalc.Popup,
        r = (n.Types, n.Controls),
        i = r[e].data,
        c = i.options[t].a;
    return c && c.custom ? (o = i.contentele, a = SocialCalc.Popup.Types.List.MakeCustom("List", e), l = document.createElement("div"), l.innerHTML = '<div style="cursor:default;padding:4px;background-color:#CCC;">' + a + "</div>", i.customele = l.firstChild.firstChild.childNodes[1], i.listdiv = null, i.contentele = l, i.popupele.replaceChild(l, o), void(i.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(e, i.attribs.ensureWithin))) : c && c.cancel ? void SocialCalc.Popup.Close() : (SocialCalc.Popup.SetValue(e, i.options[t].v), void SocialCalc.Popup.Close())
}, SocialCalc.Popup.Types.List.CustomToList = function(e) {
    var t, o, a, l = SocialCalc.Popup,
        n = (l.Types, l.Controls),
        r = n[e].data;
    t = r.contentele, o = SocialCalc.Popup.Types.List.MakeList("List", e), a = document.createElement("div"), a.innerHTML = '<div style="cursor:default;padding:4px;">' + o + "</div>", r.customele = null, r.listdiv = a.firstChild, r.contentele = a, r.popupele.replaceChild(a, t), r.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(e, r.attribs.ensureWithin)
}, SocialCalc.Popup.Types.List.CustomOK = function(e) {
    var t = SocialCalc.Popup,
        o = (t.Types, t.Controls),
        a = o[e].data;
    SocialCalc.Popup.SetValue(e, a.customele.value), SocialCalc.Popup.Close()
}, SocialCalc.Popup.Types.List.MouseMove = function(e, t) {
    var o, a, l = SocialCalc.Popup,
        n = (l.Types, l.Controls),
        r = n[e].data,
        i = r.listdiv;
    if (i) {
        var c = i.firstChild.firstChild.firstChild;
        for (o = 0; o < r.ncols; o++)
            for (a = 0; a < c.childNodes[2 * o].childNodes.length; a++) c.childNodes[2 * o].childNodes[a].style.backgroundColor = "#FFF";
        t.style.backgroundColor = "#DDF"
    }
}, SocialCalc.Popup.Types.List.Hide = function(e, t) {
    var o = SocialCalc.Popup,
        a = (o.Types, o.Controls),
        l = a[t].data;
    o.DestroyPopupDiv(l.popupele, l.dragregistered), l.popupele = null, l.mainele && l.mainele.firstChild && (l.mainele.firstChild.disabled = !1)
}, SocialCalc.Popup.Types.List.Cancel = function(e, t) {
    SocialCalc.Popup.Types.List.Hide(e, t)
}, SocialCalc.Popup.Types.ColorChooser = {}, SocialCalc.Popup.Types.ColorChooser.Create = function(e, t, o) {
    var a = SocialCalc.Popup,
        l = (a.Types, a.Controls),
        n = {
            type: e,
            value: "",
            display: "",
            data: {}
        };
    l[t] = n;
    var r = n.data;
    r.attribs = o || {};
    var i = r.attribs;
    r.value = "";
    var c = document.getElementById(t);
    return c ? (r.mainele = c, void(c.innerHTML = '<div style="cursor:pointer;border:1px solid black;vertical-align:top;width:' + (i.sampleWidth || "15px") + ";height:" + (i.sampleHeight || "15px") + ';" onclick="SocialCalc.Popup.Types.ColorChooser.ControlClicked(\'' + t + "');\">&nbsp;</div>")) : void alert("Missing element " + t)
}, SocialCalc.Popup.Types.ColorChooser.SetValue = function(e, t, o) {
    var a, l, n = SocialCalc.Popup,
        r = (n.Types, n.Controls),
        i = r[t].data,
        c = i.attribs;
    i.value = o, i.custom = !1, i.mainele && i.mainele.firstChild && (i.value ? (i.mainele.firstChild.style.backgroundColor = i.value, a = c.backgroundImage ? "url(" + n.imagePrefix + c.backgroundImage + ")" : "", l = "center center") : (i.mainele.firstChild.style.backgroundColor = "#FFF", c.backgroundImageDefault ? (a = "url(" + n.imagePrefix + c.backgroundImageDefault + ")", l = "center center") : (a = "url(" + n.imagePrefix + "defaultcolor.gif)", l = "left top")), i.mainele.firstChild.style.backgroundPosition = l, i.mainele.firstChild.style.backgroundImage = a)
}, SocialCalc.Popup.Types.ColorChooser.SetDisabled = function(e, t, o) {
    var a = SocialCalc.Popup,
        l = (a.Types, a.Controls),
        n = l[t].data,
        r = n.attribs;
    n.disabled = o, n.mainele && n.mainele.firstChild && (o ? (n.mainele.firstChild.style.backgroundColor = "#DDD", r.backgroundImageDisabled ? (img = "url(" + a.imagePrefix + r.backgroundImageDisabled + ")", pos = "center center") : (img = "url(" + a.imagePrefix + "defaultcolor.gif)", pos = "left top"), n.mainele.firstChild.style.backgroundPosition = pos, n.mainele.firstChild.style.backgroundImage = img) : a.SetValue(t, n.value))
}, SocialCalc.Popup.Types.ColorChooser.GetValue = function(e, t) {
    var o = SocialCalc.Popup,
        a = (o.Types, o.Controls),
        l = a[t].data;
    return l.value
}, SocialCalc.Popup.Types.ColorChooser.Initialize = function(e, t, o) {
    var a, l = SocialCalc.Popup,
        n = (l.Types, l.Controls),
        r = n[t].data;
    for (a in o.attribs) r.attribs[a] = o.attribs[a];
    o.value && l.SetValue(t, o.value)
}, SocialCalc.Popup.Types.ColorChooser.Reset = function(e) {
    var t = SocialCalc.Popup,
        o = t.Types,
        a = t.Controls;
    t.Current.id && a[t.Current.id].type == e && (o[e].Hide(e, t.Current.id), t.Current.id = null)
}, SocialCalc.Popup.Types.ColorChooser.Show = function(e, t) {
    var o, a, l = SocialCalc.Popup,
        n = (l.Types, l.Controls),
        r = n[t].data,
        i = "";
    r.oldvalue = r.value, r.popupele = l.CreatePopupDiv(t, r.attribs), r.custom ? (i = SocialCalc.Popup.Types.ColorChooser.MakeCustom(e, t), o = document.createElement("div"), o.innerHTML = '<div style="cursor:default;padding:4px;background-color:#CCC;">' + i + "</div>", r.customele = o.firstChild.firstChild.childNodes[2], r.contentele = o) : (a = SocialCalc.Popup.Types.ColorChooser.CreateGrid(e, t), o = document.createElement("div"), o.style.padding = "3px", o.style.backgroundColor = "#CCC", o.appendChild(a), r.customele = null, r.contentele = o), r.popupele.appendChild(o), r.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(t, r.attribs.ensureWithin)
}, SocialCalc.Popup.Types.ColorChooser.MakeCustom = function(e, t) {
    var o = SocialCalc.Popup,
        a = (o.Types, o.Controls),
        l = a[t].data,
        n = o.LocalizeString,
        r = 'style="font-size:smaller;"',
        i = "";
    return i = '<div style="white-space:nowrap;"><br>#<input id="customvalue" style="width:75px;" value="' + l.value + '"><br><br><input ' + r + ' type="button" value="' + n("OK") + '" onclick="SocialCalc.Popup.Types.ColorChooser.CustomOK(\'' + t + "');return false;\"><input " + r + ' type="button" value="' + n("Grid") + '" onclick="SocialCalc.Popup.Types.ColorChooser.CustomToGrid(\'' + t + "');\"><br></div>"
}, SocialCalc.Popup.Types.ColorChooser.ItemClicked = function(e) {
    {
        var t = SocialCalc.Popup,
            o = (t.Types, t.Controls);
        o[e].data
    }
    SocialCalc.Popup.Close()
}, SocialCalc.Popup.Types.ColorChooser.CustomToList = function(e) {
    {
        var t = SocialCalc.Popup,
            o = (t.Types, t.Controls);
        o[e].data
    }
}, SocialCalc.Popup.Types.ColorChooser.CustomOK = function(e) {
    var t = SocialCalc.Popup,
        o = (t.Types, t.Controls),
        a = o[e].data;
    t.SetValue(e, a.customele.value), t.Close()
}, SocialCalc.Popup.Types.ColorChooser.Hide = function(e, t) {
    var o = SocialCalc.Popup,
        a = (o.Types, o.Controls),
        l = a[t].data;
    o.DestroyPopupDiv(l.popupele, l.dragregistered), l.popupele = null
}, SocialCalc.Popup.Types.ColorChooser.Cancel = function(e, t) {
    var o = SocialCalc.Popup,
        a = (o.Types, o.Controls),
        l = a[t].data;
    o.SetValue(t, l.oldvalue), SocialCalc.Popup.Types.ColorChooser.Hide(e, t)
}, SocialCalc.Popup.Types.ColorChooser.CreateGrid = function(e, t) {
    var o, a, l, n, r, i = SocialCalc.Popup,
        c = i.Types,
        s = i.Controls,
        d = i.LocalizeString,
        u = s[t].data;
    u.grid = {};
    var p = u.grid,
        f = document.createElement("div");
    for (o = document.createElement("table"), o.cellSpacing = 0, o.cellPadding = 0, o.style.width = "100px", p.table = o, o = document.createElement("tbody"), p.table.appendChild(o), p.tbody = o, a = 0; 16 > a; a++) {
        for (l = document.createElement("tr"), n = 0; 5 > n; n++) r = {}, p[a + "," + n] = r, o = document.createElement("td"), o.style.fontSize = "1px", o.innerHTML = "&nbsp;", o.style.height = "10px", 1 >= n ? (o.style.width = "17px", o.style.borderRight = "3px solid white") : (o.style.width = "20px", o.style.backgroundRepeat = "no-repeat"), l.appendChild(o), r.ele = o;
        p.tbody.appendChild(l)
    }
    return f.appendChild(p.table), o = document.createElement("div"), o.style.marginTop = "3px", o.innerHTML = '<table cellspacing="0" cellpadding="0"><tr><td style="width:17px;background-color:#FFF;background-image:url(' + i.imagePrefix + 'defaultcolor.gif);height:16px;font-size:10px;cursor:pointer;" title="' + d("Default") + '">&nbsp;</td><td style="width:23px;height:16px;font-size:10px;text-align:center;cursor:pointer;" title="' + d("Custom") + '">#</td><td style="width:60px;height:16px;font-size:10px;text-align:center;cursor:pointer;">' + d("OK") + "</td></tr></table>", p.defaultbox = o.firstChild.firstChild.firstChild.childNodes[0], p.defaultbox.onclick = c.ColorChooser.DefaultClicked, p.custom = o.firstChild.firstChild.firstChild.childNodes[1], p.custom.onclick = c.ColorChooser.CustomClicked, p.msg = o.firstChild.firstChild.firstChild.childNodes[2], p.msg.onclick = c.ColorChooser.CloseOK, f.appendChild(o), p.table.onmousedown = c.ColorChooser.GridMouseDown, c.ColorChooser.DetermineColors(t), c.ColorChooser.SetColors(t), f
}, SocialCalc.Popup.Types.ColorChooser.gridToG = function(e, t, o) {
    return e[t + "," + o]
}, SocialCalc.Popup.Types.ColorChooser.DetermineColors = function(e) {
    var t, o, a = SocialCalc.Popup,
        l = a.Types,
        n = l.ColorChooser,
        r = a.Controls,
        i = r[e].data,
        c = i.grid,
        s = a.splitRGB(i.value);
    for (t = 2, o = 16 - Math.floor((s.r + 16) / 16), c["selectedrow" + t] = o, o = 0; 16 > o; o++) n.gridToG(c, o, t).rgb = a.makeRGB(17 * (15 - o), 0, 0);
    for (t = 3, o = 16 - Math.floor((s.g + 16) / 16), c["selectedrow" + t] = o, o = 0; 16 > o; o++) n.gridToG(c, o, t).rgb = a.makeRGB(0, 17 * (15 - o), 0);
    for (t = 4, o = 16 - Math.floor((s.b + 16) / 16), c["selectedrow" + t] = o, o = 0; 16 > o; o++) n.gridToG(c, o, t).rgb = a.makeRGB(0, 0, 17 * (15 - o));
    for (t = 1, o = 0; 16 > o; o++) n.gridToG(c, o, t).rgb = a.makeRGB(17 * (15 - o), 17 * (15 - o), 17 * (15 - o));
    t = 0;
    var d, u = [0, 68, 153, 204, 255],
        p = ["400", "310", "420", "440", "442", "340", "040", "042", "032", "044", "024", "004", "204", "314", "402", "414"];
    for (o = 0; 16 > o; o++) d = p[o], n.gridToG(c, o, t).rgb = "rgb(" + u[d.charAt(0) - 0] + "," + u[d.charAt(1) - 0] + "," + u[d.charAt(2) - 0] + ")"
}, SocialCalc.Popup.Types.ColorChooser.SetColors = function(e) {
    var t, o, a, l, n = SocialCalc.Popup,
        r = n.Types,
        i = r.ColorChooser,
        c = n.Controls,
        s = c[e].data,
        d = s.grid;
    for (t = 0; 16 > t; t++)
        for (o = 0; 5 > o; o++) a = i.gridToG(d, t, o), a.ele.style.backgroundColor = a.rgb, a.ele.title = n.RGBToHex(a.rgb), a.ele.style.backgroundImage = d["selectedrow" + o] == t ? "url(" + n.imagePrefix + "chooserarrow.gif)" : "";
    n.SetValue(e, s.value), d.msg.style.backgroundColor = s.value, l = n.splitRGB(s.value || "rgb(255,255,255)"), d.msg.style.color = l.r + l.g + l.b < 220 ? "#FFF" : "#000", s.value ? (d.msg.style.backgroundImage = "", d.msg.title = n.RGBToHex(s.value)) : (d.msg.style.backgroundColor = "#FFF", d.msg.style.backgroundImage = "url(" + n.imagePrefix + "defaultcolor.gif)", d.msg.title = "Default")
}, SocialCalc.Popup.Types.ColorChooser.GridMouseDown = function(e) {
    var t = e || window.event,
        o = SocialCalc.Popup,
        a = o.Types,
        l = a.ColorChooser,
        n = o.Controls,
        r = o.Current.id;
    if (r) {
        var i = n[r].data,
            c = i.grid;
        switch (t.type) {
            case "mousedown":
                c.mousedown = !0;
                break;
            case "mouseup":
                c.mousedown = !1;
                break;
            case "mousemove":
                if (!c.mousedown) return
        }
        var s = SocialCalc.GetElementPositionWithScroll(i.mainele),
            d = t.clientX - s.left,
            u = t.clientY - s.top,
            p = SocialCalc.GetElementPositionWithScroll(c.table);
        p.left -= s.left, p.top -= s.top;
        var f = Math.floor((u - p.top - 2) / 10);
        f = 0 > f ? 0 : f;
        var h = Math.floor((d - p.left) / 20);
        f = 0 > f ? 0 : f > 15 ? 15 : f, h = 0 > h ? 0 : h > 4 ? 4 : h;
        var m = l.gridToG(c, f, h).ele.style.backgroundColor,
            C = o.splitRGB(m),
            g = o.splitRGB(i.value);
        switch (h) {
            case 2:
                i.value = o.makeRGB(C.r, g.g, g.b);
                break;
            case 3:
                i.value = o.makeRGB(g.r, C.g, g.b);
                break;
            case 4:
                i.value = o.makeRGB(g.r, g.g, C.b);
                break;
            case 0:
            case 1:
                i.value = m
        }
        l.DetermineColors(r), l.SetColors(r)
    }
}, SocialCalc.Popup.Types.ColorChooser.ControlClicked = function(e) {
    var t = SocialCalc.Popup,
        o = t.Types,
        a = o.ColorChooser,
        l = (t.Controls, t.Current.id);
    return l && e == l ? void a.CloseOK() : void t.CClick(e)
}, SocialCalc.Popup.Types.ColorChooser.DefaultClicked = function(e) {
    var t = (e || window.event, SocialCalc.Popup),
        o = t.Types,
        a = (o.ColorChooser, t.Controls),
        l = t.Current.id;
    if (l) {
        var n = a[l].data;
        n.value = "", SocialCalc.Popup.SetValue(l, n.value), SocialCalc.Popup.Close()
    }
}, SocialCalc.Popup.Types.ColorChooser.CustomClicked = function(e) {
    var t = (e || window.event, SocialCalc.Popup),
        o = t.Types,
        a = (o.ColorChooser, t.Controls),
        l = t.Current.id;
    if (l) {
        var n, r, i, c = a[l].data;
        n = c.contentele, r = SocialCalc.Popup.Types.ColorChooser.MakeCustom("ColorChooser", l), i = document.createElement("div"), i.innerHTML = '<div style="cursor:default;padding:4px;background-color:#CCC;">' + r + "</div>", c.customele = i.firstChild.firstChild.childNodes[2], c.contentele = i, c.popupele.replaceChild(i, n), c.customele.value = t.RGBToHex(c.value), c.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(l, c.attribs.ensureWithin)
    }
}, SocialCalc.Popup.Types.ColorChooser.CustomToGrid = function(e) {
    var t, o, a = SocialCalc.Popup,
        l = (a.Types, a.Controls),
        n = l[e].data;
    SocialCalc.Popup.SetValue(e, a.HexToRGB("#" + n.customele.value));
    var t, r, o;
    t = n.contentele, r = SocialCalc.Popup.Types.ColorChooser.CreateGrid("ColorChooser", e), o = document.createElement("div"), o.style.padding = "3px", o.style.backgroundColor = "#CCC", o.appendChild(r), n.customele = null, n.contentele = o, n.popupele.replaceChild(o, t), n.attribs.ensureWithin && SocialCalc.Popup.EnsurePosition(e, n.attribs.ensureWithin)
}, SocialCalc.Popup.Types.ColorChooser.CustomOK = function(e) {
    var t = SocialCalc.Popup,
        o = (t.Types, t.Controls),
        a = o[e].data;
    SocialCalc.Popup.SetValue(e, t.HexToRGB("#" + a.customele.value)), SocialCalc.Popup.Close()
}, SocialCalc.Popup.Types.ColorChooser.CloseOK = function(e) {
    var t = (e || window.event, SocialCalc.Popup),
        o = t.Types,
        a = (o.ColorChooser, t.Controls),
        l = t.Current.id;
    if (l) {
        var n = a[l].data;
        SocialCalc.Popup.SetValue(l, n.value), SocialCalc.Popup.Close()
    }
};
var SocialCalc;
SocialCalc || (alert("Main SocialCalc code module needed"), SocialCalc = {}), SocialCalc.TableEditor || alert("SocialCalc TableEditor code module needed"), SocialCalc.CurrentSpreadsheetControlObject = null, SocialCalc.SpreadsheetControl = function(e) {
    var t = SocialCalc.Constants;
    this.parentNode = null, this.spreadsheetDiv = null, this.requestedHeight = 0, this.requestedWidth = 0, this.requestedSpaceBelow = 0, this.height = 0, this.width = 0, this.viewheight = 0, this.tabs = [], this.tabnums = {}, this.tabreplacements = {}, this.currentTab = -1, this.views = {}, this.sheet = null, this.context = null, this.editor = null, this.spreadsheetDiv = null, this.editorDiv = null, this.sortrange = "", this.moverange = "", this.idPrefix = e || "SocialCalc-", this.multipartBoundary = "SocialCalcSpreadsheetControlSave", this.imagePrefix = t.defaultImagePrefix, this.toolbarbackground = t.SCToolbarbackground, this.tabbackground = t.SCTabbackground, this.tabselectedCSS = t.SCTabselectedCSS, this.tabplainCSS = t.SCTabplainCSS, this.toolbartext = t.SCToolbartext, this.formulabarheight = t.SCFormulabarheight, this.statuslineheight = t.SCStatuslineheight, this.statuslineCSS = t.SCStatuslineCSS, this.ExportCallback = null, this.sheet = new SocialCalc.Sheet, this.context = new SocialCalc.RenderContext(this.sheet), this.context.showGrid = !0, this.context.showRCHeaders = !0, this.editor = new SocialCalc.TableEditor(this.context), this.editor.StatusCallback.statusline = {
        func: SocialCalc.SpreadsheetControlStatuslineCallback,
        params: {
            statuslineid: this.idPrefix + "statusline",
            recalcid1: this.idPrefix + "divider_recalc",
            recalcid2: this.idPrefix + "button_recalc"
        }
    }, SocialCalc.CurrentSpreadsheetControlObject = this, this.editor.MoveECellCallback.movefrom = function(e) {
        var t = SocialCalc.GetSpreadsheetControlObject();
        t.context.cursorsuffix = "", e.range2.hasrange && !e.cellhandles.noCursorSuffix && (e.ecell.row == e.range2.top && (e.ecell.col < e.range2.left || e.ecell.col > e.range2.right + 1) && (t.context.cursorsuffix = "insertleft"), e.ecell.col == e.range2.left && (e.ecell.row < e.range2.top || e.ecell.row > e.range2.bottom + 1) && (t.context.cursorsuffix = "insertup"))
    }, this.formulabuttons = {
        formulafunctions: {
            image: "insertformula.png",
            tooltip: "Functions",
            command: SocialCalc.SpreadsheetControl.DoFunctionList
        },
        multilineinput: {
            image: "listbox.png",
            tooltip: "Multi-line Input Box",
            command: SocialCalc.SpreadsheetControl.DoMultiline
        },
        link: {
            image: "inserthyperlink.png",
            tooltip: "Link Input Box",
            command: SocialCalc.SpreadsheetControl.DoLink
        },
        sum: {
            image: "autosum.png",
            tooltip: "Auto Sum",
            command: SocialCalc.SpreadsheetControl.DoSum
        }
    }, this.findbuttons = {
        last: {
            image: "upsearch.png",
            tooltip: "Find Previous",
            command: SocialCalc.SpreadsheetControl.SearchUp
        },
        next: {
            image: "downsearch.png",
            tooltip: "Find Next",
            command: SocialCalc.SpreadsheetControl.SearchDown
        }
    }, this.tabnums.edit = this.tabs.length, this.tabs.push({
        name: "edit",
        text: "Edit",
        html: ' <div id="%id.edittools" style="padding:10px 0px 0px 0px;">&nbsp;<img id="%id.button_undo" src="%img.undo.png" style="vertical-align:bottom;"> <img id="%id.button_redo" src="%img.redo.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_copy" src="%img.copy.png" style="vertical-align:bottom;"> <img id="%id.button_cut" src="%img.cut.png" style="vertical-align:bottom;"> <img id="%id.button_paste" src="%img.paste.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_delete" src="%img.delete.png" style="vertical-align:bottom;"> <img id="%id.button_pasteformats" src="%img.formatpaintbrush.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp;  <span id="%id.locktools"><img id="%id.button_lock" src="%img.lock.png" style="vertical-align:bottom;"> <img id="%id.button_unlock" src="%img.unlock.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp;</span> <img id="%id.button_filldown" src="%img.filldown.png" style="vertical-align:bottom;"> <img id="%id.button_fillright" src="%img.fillright.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_movefrom" src="%img.movefromoff.gif" style="vertical-align:bottom;"> <img id="%id.button_movepaste" src="%img.movepasteoff.gif" style="vertical-align:bottom;"> <img id="%id.button_moveinsert" src="%img.moveinsertoff.gif" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_alignleft" src="%img.alignleft.png" style="vertical-align:bottom;"> <img id="%id.button_aligncenter" src="%img.aligncenter.png" style="vertical-align:bottom;"> <img id="%id.button_alignright" src="%img.alignright.png" style="vertical-align:bottom;"> &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_borderon" src="%img.borderson.png" style="vertical-align:bottom;">  <img id="%id.button_borderoff" src="%img.bordersoff.png" style="vertical-align:bottom;">  <img id="%id.button_swapcolors" src="%img.swapcolors.png" style="vertical-align:bottom;">  &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_merge" src="%img.mergecells.png" style="vertical-align:bottom;">  &nbsp;<img src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_insertrow" src="%img.insertrows.png" style="vertical-align:bottom;">  <img id="%id.button_insertcol" src="%img.insertcolumns.png" style="vertical-align:bottom;">  <img id="%id.button_deleterow" src="%img.deleterows.png" style="vertical-align:bottom;">  <img id="%id.button_deletecol" src="%img.deletecolumns.png" style="vertical-align:bottom;">  <img id="%id.button_hiderow" src="%img.hiderow.png" style="vertical-align:bottom;">  <img id="%id.button_hidecol" src="%img.hidecol.png" style="vertical-align:bottom;">  &nbsp;<img id="%id.divider_recalc" src="%img.divider1.png" style="vertical-align:bottom;">&nbsp; <img id="%id.button_recalc" src="%img.recalc.png" style="vertical-align:bottom;">  </div>',
        oncreate: null,
        onclick: null
    }), this.tabnums.settings = this.tabs.length, this.tabs.push({
        name: "settings",
        text: "Format",
        html: '<div id="%id.settingstools" style="display:none;"> <div id="%id.sheetsettingstoolbar" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr><td>   <div style="%tbt.">%loc!SHEET SETTINGS!:</div>   </td></tr><tr><td>   <input id="%id.settings-savesheet" type="button" value="%loc!Save!" onclick="SocialCalc.SettingsControlSave(\'sheet\');">   <input type="button" value="%loc!Cancel!" onclick="SocialCalc.SettingsControlSave(\'cancel\');">   <input type="button" value="%loc!Show Cell Settings!" onclick="SocialCalc.SpreadsheetControlSettingsSwitch(\'cell\');return false;">   </td></tr></table> </div> <div id="%id.cellsettingstoolbar" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr><td>   <div style="%tbt.">%loc!CELL SETTINGS!: <span id="%id.settingsecell">&nbsp;</span></div>   </td></tr><tr><td>  <input id="%id.settings-savecell" type="button" value="%loc!Save!" onclick="SocialCalc.SettingsControlSave(\'cell\');">  <input type="button" value="%loc!Cancel!" onclick="SocialCalc.SettingsControlSave(\'cancel\');">  <input type="button" value="%loc!Show Sheet Settings!" onclick="SocialCalc.SpreadsheetControlSettingsSwitch(\'sheet\');return false;">  </td></tr></table> </div></div>',
        view: "settings",
        onclick: function(e) {
            SocialCalc.SettingsControls.idPrefix = e.idPrefix, SocialCalc.SettingControlReset();
            var t = e.sheet.EncodeSheetAttributes(),
                o = e.sheet.EncodeCellAttributes(e.editor.ecell.coord);
            SocialCalc.SettingsControlLoadPanel(e.views.settings.values.sheetspanel, t), SocialCalc.SettingsControlLoadPanel(e.views.settings.values.cellspanel, o), document.getElementById(e.idPrefix + "settingsecell").innerHTML = e.editor.ecell.coord, SocialCalc.SpreadsheetControlSettingsSwitch("cell"), e.views.settings.element.style.height = e.viewheight + "px", e.views.settings.element.firstChild.style.height = e.viewheight + "px";
            var a;
            a = e.editor.range.hasrange ? SocialCalc.crToCoord(e.editor.range.left, e.editor.range.top) + ":" + SocialCalc.crToCoord(e.editor.range.right, e.editor.range.bottom) : e.editor.ecell.coord, document.getElementById(e.idPrefix + "settings-savecell").value = SocialCalc.LocalizeString("Save to") + ": " + a
        },
        onclickFocus: !0
    }), this.views.settings = {
        name: "settings",
        values: {},
        oncreate: function(e, t) {
            var o = SocialCalc.Constants;
            t.values.sheetspanel = {
                colorchooser: {
                    id: e.idPrefix + "scolorchooser"
                },
                formatnumber: {
                    setting: "numberformat",
                    type: "PopupList",
                    id: e.idPrefix + "formatnumber",
                    initialdata: o.SCFormatNumberFormats
                },
                formattext: {
                    setting: "textformat",
                    type: "PopupList",
                    id: e.idPrefix + "formattext",
                    initialdata: o.SCFormatTextFormats
                },
                fontfamily: {
                    setting: "fontfamily",
                    type: "PopupList",
                    id: e.idPrefix + "fontfamily",
                    initialdata: o.SCFormatFontfamilies
                },
                fontlook: {
                    setting: "fontlook",
                    type: "PopupList",
                    id: e.idPrefix + "fontlook",
                    initialdata: o.SCFormatFontlook
                },
                fontsize: {
                    setting: "fontsize",
                    type: "PopupList",
                    id: e.idPrefix + "fontsize",
                    initialdata: o.SCFormatFontsizes
                },
                textalignhoriz: {
                    setting: "textalignhoriz",
                    type: "PopupList",
                    id: e.idPrefix + "textalignhoriz",
                    initialdata: o.SCFormatTextAlignhoriz
                },
                numberalignhoriz: {
                    setting: "numberalignhoriz",
                    type: "PopupList",
                    id: e.idPrefix + "numberalignhoriz",
                    initialdata: o.SCFormatNumberAlignhoriz
                },
                alignvert: {
                    setting: "alignvert",
                    type: "PopupList",
                    id: e.idPrefix + "alignvert",
                    initialdata: o.SCFormatAlignVertical
                },
                textcolor: {
                    setting: "textcolor",
                    type: "ColorChooser",
                    id: e.idPrefix + "textcolor"
                },
                bgcolor: {
                    setting: "bgcolor",
                    type: "ColorChooser",
                    id: e.idPrefix + "bgcolor"
                },
                padtop: {
                    setting: "padtop",
                    type: "PopupList",
                    id: e.idPrefix + "padtop",
                    initialdata: o.SCFormatPadsizes
                },
                padright: {
                    setting: "padright",
                    type: "PopupList",
                    id: e.idPrefix + "padright",
                    initialdata: o.SCFormatPadsizes
                },
                padbottom: {
                    setting: "padbottom",
                    type: "PopupList",
                    id: e.idPrefix + "padbottom",
                    initialdata: o.SCFormatPadsizes
                },
                padleft: {
                    setting: "padleft",
                    type: "PopupList",
                    id: e.idPrefix + "padleft",
                    initialdata: o.SCFormatPadsizes
                },
                colwidth: {
                    setting: "colwidth",
                    type: "PopupList",
                    id: e.idPrefix + "colwidth",
                    initialdata: o.SCFormatColwidth
                },
                recalc: {
                    setting: "recalc",
                    type: "PopupList",
                    id: e.idPrefix + "recalc",
                    initialdata: o.SCFormatRecalc
                },
                usermaxcol: {
                    setting: "usermaxcol",
                    type: "PopupList",
                    id: e.idPrefix + "usermaxcol",
                    initialdata: o.SCFormatUserMaxCol
                },
                usermaxrow: {
                    setting: "usermaxrow",
                    type: "PopupList",
                    id: e.idPrefix + "usermaxrow",
                    initialdata: o.SCFormatUserMaxRow
                }
            }, t.values.cellspanel = {
                name: "cell",
                colorchooser: {
                    id: e.idPrefix + "scolorchooser"
                },
                cformatnumber: {
                    setting: "numberformat",
                    type: "PopupList",
                    id: e.idPrefix + "cformatnumber",
                    initialdata: o.SCFormatNumberFormats
                },
                cformattext: {
                    setting: "textformat",
                    type: "PopupList",
                    id: e.idPrefix + "cformattext",
                    initialdata: o.SCFormatTextFormats
                },
                cfontfamily: {
                    setting: "fontfamily",
                    type: "PopupList",
                    id: e.idPrefix + "cfontfamily",
                    initialdata: o.SCFormatFontfamilies
                },
                cfontlook: {
                    setting: "fontlook",
                    type: "PopupList",
                    id: e.idPrefix + "cfontlook",
                    initialdata: o.SCFormatFontlook
                },
                cfontsize: {
                    setting: "fontsize",
                    type: "PopupList",
                    id: e.idPrefix + "cfontsize",
                    initialdata: o.SCFormatFontsizes
                },
                calignhoriz: {
                    setting: "alignhoriz",
                    type: "PopupList",
                    id: e.idPrefix + "calignhoriz",
                    initialdata: o.SCFormatTextAlignhoriz
                },
                calignvert: {
                    setting: "alignvert",
                    type: "PopupList",
                    id: e.idPrefix + "calignvert",
                    initialdata: o.SCFormatAlignVertical
                },
                ctextcolor: {
                    setting: "textcolor",
                    type: "ColorChooser",
                    id: e.idPrefix + "ctextcolor"
                },
                cbgcolor: {
                    setting: "bgcolor",
                    type: "ColorChooser",
                    id: e.idPrefix + "cbgcolor"
                },
                cbt: {
                    setting: "bt",
                    type: "BorderSide",
                    id: e.idPrefix + "cbt"
                },
                cbr: {
                    setting: "br",
                    type: "BorderSide",
                    id: e.idPrefix + "cbr"
                },
                cbb: {
                    setting: "bb",
                    type: "BorderSide",
                    id: e.idPrefix + "cbb"
                },
                cbl: {
                    setting: "bl",
                    type: "BorderSide",
                    id: e.idPrefix + "cbl"
                },
                cpadtop: {
                    setting: "padtop",
                    type: "PopupList",
                    id: e.idPrefix + "cpadtop",
                    initialdata: o.SCFormatPadsizes
                },
                cpadright: {
                    setting: "padright",
                    type: "PopupList",
                    id: e.idPrefix + "cpadright",
                    initialdata: o.SCFormatPadsizes
                },
                cpadbottom: {
                    setting: "padbottom",
                    type: "PopupList",
                    id: e.idPrefix + "cpadbottom",
                    initialdata: o.SCFormatPadsizes
                },
                cpadleft: {
                    setting: "padleft",
                    type: "PopupList",
                    id: e.idPrefix + "cpadleft",
                    initialdata: o.SCFormatPadsizes
                }
            }, SocialCalc.SettingsControlInitializePanel(t.values.sheetspanel), SocialCalc.SettingsControlInitializePanel(t.values.cellspanel)
        },
        replacements: {
            itemtitle: {
                regex: /\%itemtitle\./g,
                replacement: 'style="padding:12px 10px 0px 10px;font-weight:bold;text-align:right;vertical-align:top;font-size:small;"'
            },
            sectiontitle: {
                regex: /\%sectiontitle\./g,
                replacement: 'style="padding:16px 10px 0px 0px;font-weight:bold;vertical-align:top;font-size:small;color:#C00;"'
            },
            parttitle: {
                regex: /\%parttitle\./g,
                replacement: 'style="font-weight:bold;font-size:x-small;padding:0px 0px 3px 0px;"'
            },
            itembody: {
                regex: /\%itembody\./g,
                replacement: 'style="padding:12px 0px 0px 0px;vertical-align:top;font-size:small;"'
            },
            bodypart: {
                regex: /\%bodypart\./g,
                replacement: 'style="padding:0px 10px 0px 0px;font-size:small;vertical-align:top;"'
            }
        },
        divStyle: "border:1px solid black;overflow:auto;",
        html: '<div id="%id.scolorchooser" style="display:none;position:absolute;z-index:20;"></div><table cellspacing="0" cellpadding="0"> <tr><td style="vertical-align:top;"><table id="%id.sheetsettingstable" style="display:none;" cellspacing="0" cellpadding="0"><tr> <td %itemtitle.><br>%loc!Default Format!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Number!</div>     <span id="%id.formatnumber"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Text!</div>     <span id="%id.formattext"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Default Alignment!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Text Horizontal!</div>     <span id="%id.textalignhoriz"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Number Horizontal!</div>     <span id="%id.numberalignhoriz"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Vertical!</div>     <span id="%id.alignvert"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Default Font!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Family!</div>     <span id="%id.fontfamily"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Bold &amp; Italics!</div>     <span id="%id.fontlook"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Size!</div>     <span id="%id.fontsize"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Color!</div>     <div id="%id.textcolor"></div>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Background!</div>     <div id="%id.bgcolor"></div>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Default Padding!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Top!</div>     <span id="%id.padtop"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Right!</div>     <span id="%id.padright"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Bottom!</div>     <span id="%id.padbottom"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Left!</div>     <span id="%id.padleft"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Default Column Width!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>&nbsp;</div>     <span id="%id.colwidth"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Recalculation!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>&nbsp;</div>     <span id="%id.recalc"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Dimensions!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Columns!</div>     <span id="%id.usermaxcol"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Rows!</div>     <span id="%id.usermaxrow"></span>    </td>   </tr></table> </td></tr></table><table id="%id.cellsettingstable" cellspacing="0" cellpadding="0"><tr> <td %itemtitle.><br>%loc!Format!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Number!</div>     <span id="%id.cformatnumber"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Text!</div>     <span id="%id.cformattext"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Alignment!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Horizontal!</div>     <span id="%id.calignhoriz"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Vertical!</div>     <span id="%id.calignvert"></span>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Font!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Family!</div>     <span id="%id.cfontfamily"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Bold &amp; Italics!</div>     <span id="%id.cfontlook"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Size!</div>     <span id="%id.cfontsize"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Color!</div>     <div id="%id.ctextcolor"></div>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Background!</div>     <div id="%id.cbgcolor"></div>    </td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Borders!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0">    <tr><td %bodypart. colspan="3"><div %parttitle.>%loc!Top Border!</div></td>     <td %bodypart. colspan="3"><div %parttitle.>%loc!Right Border!</div></td>     <td %bodypart. colspan="3"><div %parttitle.>%loc!Bottom Border!</div></td>     <td %bodypart. colspan="3"><div %parttitle.>%loc!Left Border!</div></td>    </tr><tr>    <td %bodypart.>     <input id="%id.cbt-onoff-bcb" onclick="SocialCalc.SettingsControlOnchangeBorder(this);" type="checkbox">    </td>    <td %bodypart.>     <div id="%id.cbt-color"></div>    </td>    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>    <td %bodypart.>     <input id="%id.cbr-onoff-bcb" onclick="SocialCalc.SettingsControlOnchangeBorder(this);" type="checkbox">    </td>    <td %bodypart.>     <div id="%id.cbr-color"></div>    </td>    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>    <td %bodypart.>     <input id="%id.cbb-onoff-bcb" onclick="SocialCalc.SettingsControlOnchangeBorder(this);" type="checkbox">    </td>    <td %bodypart.>     <div id="%id.cbb-color"></div>    </td>    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>    <td %bodypart.>     <input id="%id.cbl-onoff-bcb" onclick="SocialCalc.SettingsControlOnchangeBorder(this);" type="checkbox">    </td>    <td %bodypart.>     <div id="%id.cbl-color"></div>    </td>    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>   </tr></table> </td></tr><tr> <td %itemtitle.><br>%loc!Padding!:</td> <td %itembody.>   <table cellspacing="0" cellpadding="0"><tr>    <td %bodypart.>     <div %parttitle.>%loc!Top!</div>     <span id="%id.cpadtop"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Right!</div>     <span id="%id.cpadright"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Bottom!</div>     <span id="%id.cpadbottom"></span>    </td>    <td %bodypart.>     <div %parttitle.>%loc!Left!</div>     <span id="%id.cpadleft"></span>    </td>   </tr></table> </td></tr></table> </td><td style="vertical-align:top;padding:12px 0px 0px 12px;">  <div style="width:100px;height:100px;overflow:hidden;border:1px solid black;background-color:#EEE;padding:6px;">   <table cellspacing="0" cellpadding="0"><tr>    <td id="sample-text" style="height:100px;width:100px;"><div>%loc!This is a<br>sample!</div><div>-1234.5</div></td>   </tr></table>  </div> </td></tr></table><br>'
    }, this.tabnums.sort = this.tabs.length, this.tabs.push({
        name: "sort",
        text: "Sort",
        html: ' <div id="%id.sorttools" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr>   <td style="vertical-align:top;padding-right:4px;width:160px;">    <div style="%tbt.">%loc!Set Cells To Sort!</div>    <select id="%id.sortlist" size="1" onfocus="%s.CmdGotFocus(this);"><option selected>[select range]</option><option value="all">Sort All</option></select>    <input type="button" value="%loc!OK!" onclick="%s.DoCmd(this, \'ok-setsort\');" style="font-size:x-small;">   </td>   <td style="vertical-align:middle;padding-right:16px;width:100px;text-align:right;">    <div style="%tbt.">&nbsp;</div>    <input type="button" id="%id.sortbutton" value="%loc!Sort Cells! A1:A1" onclick="%s.DoCmd(this, \'dosort\');" style="visibility:hidden;">   </td>   <td style="vertical-align:top;padding-right:16px;">    <table cellspacing="0" cellpadding="0"><tr>     <td style="vertical-align:top;">      <div style="%tbt.">%loc!Major Sort!</div>      <select id="%id.majorsort" size="1" onfocus="%s.CmdGotFocus(this);"></select>     </td><td>      <input type="radio" name="majorsort" id="%id.majorsortup" value="up" checked><span style="font-size:x-small;color:#555753;">%loc!Up!</span><br>      <input type="radio" name="majorsort" id="%id.majorsortdown" value="down"><span style="font-size:x-small;color:#555753;">%loc!Down!</span>     </td>    </tr></table>   </td>   <td style="vertical-align:top;padding-right:16px;">    <table cellspacing="0" cellpadding="0"><tr>     <td style="vertical-align:top;">      <div style="%tbt.">%loc!Minor Sort!</div>      <select id="%id.minorsort" size="1" onfocus="%s.CmdGotFocus(this);"></select>     </td><td>      <input type="radio" name="minorsort" id="%id.minorsortup" value="up" checked><span style="font-size:x-small;color:#555753;">%loc!Up!</span><br>      <input type="radio" name="minorsort" id="%id.minorsortdown" value="down"><span style="font-size:x-small;color:#555753;">%loc!Down!</span>     </td>    </tr></table>   </td>   <td style="vertical-align:top;padding-right:16px;">    <table cellspacing="0" cellpadding="0"><tr>     <td style="vertical-align:top;">      <div style="%tbt.">%loc!Last Sort!</div>      <select id="%id.lastsort" size="1" onfocus="%s.CmdGotFocus(this);"></select>     </td><td>      <input type="radio" name="lastsort" id="%id.lastsortup" value="up" checked><span style="font-size:x-small;color:#555753;">%loc!Up!</span><br>      <input type="radio" name="lastsort" id="%id.lastsortdown" value="down"><span style="font-size:x-small;color:#555753;">%loc!Down!</span>     </td>    </tr></table>   </td>  </tr></table> </div>',
        onclick: SocialCalc.SpreadsheetControlSortOnclick
    }), this.editor.SettingsCallbacks.sort = {
        save: SocialCalc.SpreadsheetControlSortSave,
        load: SocialCalc.SpreadsheetControlSortLoad
    }, this.tabnums.audit = this.tabs.length, this.tabs.push({
        name: "audit",
        text: "Audit",
        html: '<div id="%id.audittools" style="display:none;"> <div style="%tbt.">&nbsp;</div></div>',
        view: "audit",
        onclick: function(e) {
            var t, o, a = SocialCalc.LocalizeString,
                l = '<table cellspacing="0" cellpadding="0" style="margin-bottom:10px;"><tr><td style="font-size:small;padding:6px;"><b>' + a("Audit Trail This Session") + ":</b><br><br>",
                n = e.sheet.changes.stack,
                r = e.sheet.changes.tos;
            for (t = 0; t < n.length; t++)
                for (t == r + 1 && (l += '<br></td></tr><tr><td style="font-size:small;background-color:#EEE;padding:6px;">' + a("UNDONE STEPS") + ":<br>"), o = 0; o < n[t].command.length; o++) l += SocialCalc.special_chars(n[t].command[o]) + "<br>";
            e.views.audit.element.innerHTML = l + "</td></tr></table>", SocialCalc.CmdGotFocus(!0)
        },
        onclickFocus: !0
    }), this.views.audit = {
        name: "audit",
        divStyle: "border:1px solid black;overflow:auto;",
        html: "Audit Trail"
    }, this.tabnums.comment = this.tabs.length, this.tabs.push({
        name: "comment",
        text: "Comment",
        html: '<div id="%id.commenttools" style="display:none;"><table cellspacing="0" cellpadding="0"><tr><td><textarea id="%id.commenttext" style="font-size:small;height:32px;width:600px;overflow:auto;" onfocus="%s.CmdGotFocus(this);"></textarea></td><td style="vertical-align:top;">&nbsp;<input type="button" value="%loc!Save!" onclick="%s.SpreadsheetControlCommentSet();" style="font-size:x-small;"></td></tr></table></div>',
        view: "sheet",
        onclick: SocialCalc.SpreadsheetControlCommentOnclick,
        onunclick: SocialCalc.SpreadsheetControlCommentOnunclick
    }), this.tabnums.names = this.tabs.length, this.tabs.push({
        name: "names",
        text: "Names",
        html: '<div id="%id.namestools" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr>   <td style="vertical-align:top;padding-right:24px;">    <div style="%tbt.">%loc!Existing Names!</div>    <select id="%id.nameslist" size="1" onchange="%s.SpreadsheetControlNamesChangedName();" onfocus="%s.CmdGotFocus(this);"><option selected>[New]</option></select>   </td>   <td style="vertical-align:top;padding-right:6px;">    <div style="%tbt.">%loc!Name!</div>    <input type="text" id="%id.namesname" style="font-size:x-small;width:75px;" onfocus="%s.CmdGotFocus(this);">   </td>   <td style="vertical-align:top;padding-right:6px;">    <div style="%tbt.">%loc!Description!</div>    <input type="text" id="%id.namesdesc" style="font-size:x-small;width:150px;" onfocus="%s.CmdGotFocus(this);">   </td>   <td style="vertical-align:top;padding-right:6px;">    <div style="%tbt.">%loc!Value!</div>    <input type="text" id="%id.namesvalue" width="16" style="font-size:x-small;width:100px;" onfocus="%s.CmdGotFocus(this);">   </td>   <td style="vertical-align:top;padding-right:12px;width:100px;">    <div style="%tbt.">%loc!Set Value To!</div>    <input type="button" id="%id.namesrangeproposal" value="A1" onclick="%s.SpreadsheetControlNamesSetValue();" style="font-size:x-small;">   </td>   <td style="vertical-align:top;padding-right:6px;">    <div style="%tbt.">&nbsp;</div>    <input type="button" value="%loc!Save!" onclick="%s.SpreadsheetControlNamesSave();" style="font-size:x-small;">    <input type="button" value="%loc!Delete!" onclick="%s.SpreadsheetControlNamesDelete()" style="font-size:x-small;">   </td>  </tr></table></div>',
        view: "sheet",
        onclick: SocialCalc.SpreadsheetControlNamesOnclick,
        onunclick: SocialCalc.SpreadsheetControlNamesOnunclick
    }), this.tabnums.clipboard = this.tabs.length, this.tabs.push({
        name: "clipboard",
        text: "Clipboard",
        html: '<div id="%id.clipboardtools" style="display:none;">  <table cellspacing="0" cellpadding="0"><tr>   <td style="vertical-align:top;padding-right:24px;">    <div style="%tbt.">     &nbsp;    </div>   </td>  </tr></table></div>',
        view: "clipboard",
        onclick: SocialCalc.SpreadsheetControlClipboardOnclick,
        onclickFocus: "clipboardtext"
    }), this.views.clipboard = {
        name: "clipboard",
        divStyle: "overflow:auto;",
        html: ' <div style="font-size:x-small;padding:5px 0px 10px 0px;">  <b>%loc!Display Clipboard in!:</b>  <input type="radio" id="%id.clipboardformat-tab" name="%id.clipboardformat" checked onclick="%s.SpreadsheetControlClipboardFormat(\'tab\');"> %loc!Tab-delimited format! &nbsp;  <input type="radio" id="%id.clipboardformat-csv" name="%id.clipboardformat" onclick="%s.SpreadsheetControlClipboardFormat(\'csv\');"> %loc!CSV format! &nbsp;  <input type="radio" id="%id.clipboardformat-scsave" name="%id.clipboardformat" onclick="%s.SpreadsheetControlClipboardFormat(\'scsave\');"> %loc!SocialCalc-save format! </div> <input type="button" value="%loc!Load SocialCalc Clipboard With This!" style="font-size:x-small;" onclick="%s.SpreadsheetControlClipboardLoad();">&nbsp;  <input type="button" value="%loc!Clear SocialCalc Clipboard!" style="font-size:x-small;" onclick="%s.SpreadsheetControlClipboardClear();">&nbsp;  <br> <textarea id="%id.clipboardtext" style="font-size:small;height:350px;width:800px;overflow:auto;" onfocus="%s.CmdGotFocus(this);"></textarea>'
    }
}, SocialCalc.SpreadsheetControl.prototype.InitializeSpreadsheetControl = function(e, t, o, a) {
    return SocialCalc.InitializeSpreadsheetControl(this, e, t, o, a)
}, SocialCalc.SpreadsheetControl.prototype.DoOnResize = function() {
    return SocialCalc.DoOnResize(this)
}, SocialCalc.SpreadsheetControl.prototype.SizeSSDiv = function() {
    return SocialCalc.SizeSSDiv(this)
}, SocialCalc.SpreadsheetControl.prototype.ExecuteCommand = function(e, t) {
    return SocialCalc.SpreadsheetControlExecuteCommand(this, e, t)
}, SocialCalc.SpreadsheetControl.prototype.CreateSheetHTML = function() {
    return SocialCalc.SpreadsheetControlCreateSheetHTML(this)
}, SocialCalc.SpreadsheetControl.prototype.CreateSpreadsheetSave = function(e) {
    return SocialCalc.SpreadsheetControlCreateSpreadsheetSave(this, e)
}, SocialCalc.SpreadsheetControl.prototype.DecodeSpreadsheetSave = function(e) {
    return SocialCalc.SpreadsheetControlDecodeSpreadsheetSave(this, e)
}, SocialCalc.SpreadsheetControl.prototype.CreateCellHTML = function(e) {
    return SocialCalc.SpreadsheetControlCreateCellHTML(this, e)
}, SocialCalc.SpreadsheetControl.prototype.CreateCellHTMLSave = function(e) {
    return SocialCalc.SpreadsheetControlCreateCellHTMLSave(this, e)
}, SocialCalc.SpreadsheetControl.prototype.ParseSheetSave = function(e) {
    return this.sheet.ParseSheetSave(e)
}, SocialCalc.SpreadsheetControl.prototype.CreateSheetSave = function() {
    return this.sheet.CreateSheetSave()
}, SocialCalc.InitializeSpreadsheetControl = function(e, t, o, a, l) {
    var n, r, i, c, s, d, u, p, f = SocialCalc.Constants,
        h = SocialCalc.LocalizeString,
        m = SocialCalc.LocalizeSubstrings,
        C = e.tabs,
        g = e.views;
    for (e.requestedHeight = o, e.requestedWidth = a, e.requestedSpaceBelow = l, "string" == typeof t && (t = document.getElementById(t)), null == t && alert("SocialCalc.SpreadsheetControl not given parent node."), e.parentNode = t, e.spreadsheetDiv = document.createElement("div"), e.SizeSSDiv(), r = t.firstChild; null != r; r = t.firstChild) t.removeChild(r);
    for (n = '<div><div style="' + e.toolbarbackground + 'padding:12px 10px 10px 4px;height:40px;">', i = 0; i < C.length; i++) n += C[i].html;
    for (n += '</div><div style="' + e.tabbackground + 'margin:0px 0px 8px 0px;"><table cellpadding="0" cellspacing="0"><tr>', i = 0; i < C.length; i++) n += '  <td id="%id.' + C[i].name + 'tab" style="' + (0 == i ? e.tabselectedCSS : e.tabplainCSS) + '" onclick="%s.SetTab(this);">' + h(C[i].text) + "</td>";
    n += " </tr></table></div></div>", e.currentTab = 0;
    for (d in e.tabreplacements) n = n.replace(e.tabreplacements[d].regex, e.tabreplacements[d].replacement);
    n = n.replace(/\%s\./g, "SocialCalc."), n = n.replace(/\%id\./g, e.idPrefix), n = n.replace(/\%tbt\./g, e.toolbartext), n = n.replace(/\%img\./g, e.imagePrefix), n = m(n), e.spreadsheetDiv.innerHTML = n, t.appendChild(e.spreadsheetDiv), e.Buttons = {
        button_undo: {
            tooltip: "Undo",
            command: "undo"
        },
        button_redo: {
            tooltip: "Redo",
            command: "redo"
        },
        button_copy: {
            tooltip: "Copy",
            command: "copy"
        },
        button_cut: {
            tooltip: "Cut",
            command: "cut"
        },
        button_paste: {
            tooltip: "Paste",
            command: "paste"
        },
        button_pasteformats: {
            tooltip: "Paste Formats",
            command: "pasteformats"
        },
        button_lock: {
            tooltip: "Lock Cell",
            command: "lock"
        },
        button_unlock: {
            tooltip: "Unlock Cell",
            command: "unlock"
        },
        button_delete: {
            tooltip: "Delete Cell Contents",
            command: "delete"
        },
        button_filldown: {
            tooltip: "Fill Down",
            command: "filldown"
        },
        button_fillright: {
            tooltip: "Fill Right",
            command: "fillright"
        },
        button_movefrom: {
            tooltip: "Set/Clear Move From",
            command: "movefrom"
        },
        button_movepaste: {
            tooltip: "Move Paste",
            command: "movepaste"
        },
        button_moveinsert: {
            tooltip: "Move Insert",
            command: "moveinsert"
        },
        button_alignleft: {
            tooltip: "Align Left",
            command: "align-left"
        },
        button_aligncenter: {
            tooltip: "Align Center",
            command: "align-center"
        },
        button_alignright: {
            tooltip: "Align Right",
            command: "align-right"
        },
        button_borderon: {
            tooltip: "Borders On",
            command: "borderon"
        },
        button_borderoff: {
            tooltip: "Borders Off",
            command: "borderoff"
        },
        button_swapcolors: {
            tooltip: "Swap Colors",
            command: "swapcolors"
        },
        button_merge: {
            tooltip: "Merge/Unmerge Cells",
            command: "merge"
        },
        button_insertrow: {
            tooltip: "Insert Row Before",
            command: "insertrow"
        },
        button_insertcol: {
            tooltip: "Insert Column Before",
            command: "insertcol"
        },
        button_deleterow: {
            tooltip: "Delete Row",
            command: "deleterow"
        },
        button_deletecol: {
            tooltip: "Delete Column",
            command: "deletecol"
        },
        button_hiderow: {
            tooltip: "Hide Row",
            command: "hiderow"
        },
        button_hidecol: {
            tooltip: "Hide Column",
            command: "hidecol"
        },
        button_recalc: {
            tooltip: "Recalculate",
            command: "recalc"
        }
    };
    for (u in e.Buttons) p = document.getElementById(e.idPrefix + u), p ? (p.style.border = "1px solid " + f.ISCButtonBorderNormal, SocialCalc.TooltipRegister(p, h(e.Buttons[u].tooltip), {}, e.spreadsheetDiv), SocialCalc.ButtonRegister(e.editor, p, {
        normalstyle: "border:1px solid " + f.ISCButtonBorderNormal + ";backgroundColor:" + f.ISCButtonBorderNormal + ";",
        hoverstyle: "border:1px solid " + f.ISCButtonBorderHover + ";backgroundColor:" + f.ISCButtonBorderNormal + ";",
        downstyle: "border:1px solid " + f.ISCButtonBorderDown + ";backgroundColor:" + f.ISCButtonDownBackground + ";"
    }, {
        MouseDown: SocialCalc.DoButtonCmd,
        command: e.Buttons[u].command
    })) : alert("Button " + (e.idPrefix + u) + " missing");
    e.formulabarDiv = document.createElement("div"), e.formulabarDiv.style.height = e.formulabarheight + "px", e.formulabarDiv.innerHTML = '<input type="text" size="60" value="">&nbsp;', e.spreadsheetDiv.appendChild(e.formulabarDiv);
    new SocialCalc.InputBox(e.formulabarDiv.firstChild, e.editor);
    for (u in e.formulabuttons) p = document.createElement("img"), p.id = e.idPrefix + u, p.src = (e.formulabuttons[u].skipImagePrefix ? "" : e.imagePrefix) + e.formulabuttons[u].image, p.style.verticalAlign = "middle", p.style.border = "1px solid #FFF", p.style.marginLeft = "4px", SocialCalc.TooltipRegister(p, h(e.formulabuttons[u].tooltip), {}, e.spreadsheetDiv), SocialCalc.ButtonRegister(e.editor, p, {
        normalstyle: "border:1px solid #FFF;backgroundColor:#FFF;",
        hoverstyle: "border:1px solid #CCC;backgroundColor:#FFF;",
        downstyle: "border:1px solid #000;backgroundColor:#FFF;"
    }, {
        MouseDown: e.formulabuttons[u].command,
        Disabled: function() {
            return e.editor.ECellReadonly()
        }
    }), e.formulabarDiv.appendChild(p);
    var S = $("<input id='searchbarinput' value='' placeholder='Search sheet…'>"),
        v = $("<span id='searchbar'></span>");
    v.append("<div id='searchstatus'></div>"), v.append(S);
    for (u in e.findbuttons) p = document.createElement("img"), p.id = e.idPrefix + u, p.src = e.imagePrefix + e.findbuttons[u].image, p.style.verticalAlign = "middle", p.style.border = "1px solid #FFF", SocialCalc.TooltipRegister(p, h(e.findbuttons[u].tooltip), {}, e.formulabardiv), SocialCalc.ButtonRegister(e.editor, p, {
        normalstyle: "border:1px solid #FFF;backgroundColor:#FFF;",
        hoverstyle: "border:1px solid #CCC;backgroundColor:#FFF;",
        downstyle: "border:1px solid #000;backgroundColor:#FFF;"
    }, {
        MouseDown: e.findbuttons[u].command,
        Disabled: function() {
            return !1
        }
    }), v[0].appendChild(p);
    for (new_custom_sheet = SocialCalc.GetSpreadsheetControlObject(), $(document).on("keyup", ".searchbarinput", function(e) {
            var t = e.keyCode || e.which;
            if (13 == t) {
                curr_obj = $(this);
                var o = curr_obj.attr("id"),
                    a = SocialCalc.GetSpreadsheetControlObject(),
                    l = a.sheet.filtertext ? JSON.parse(a.sheet.filtertext) : {};
                "" != curr_obj.val() ? l[o] = curr_obj.val() : delete l[o], a.sheet.filtertext = JSON.stringify(l), a.editor.ScrollRelativeBoth(0, 1), a.editor.ScrollRelativeBoth(0, -1), SocialCalc.SpreadsheetControl.FindInSheet()
            } else key_val = $(this).parent().attr("id").replace("searchcol_", ""), id_val = $(this).attr("id"), width_val = $(this).parent().width(), dyna_div = $("<div  class='custom_auto_complete'  style='position:fixed;'/>"), dyna_div.css("width", width_val), $(".custom_auto_complete").remove(), search_content = $(this).val(), searched_results = $(new_custom_sheet.sheet.filtersList[key_val]).filter(function() {
                return this.toString().search(search_content) >= 0
            }), filter_array = $(searched_results).slice(0, 9), dyna_ul = $("<ul>"), dyna_ul.append($("<li class='get_search' value=''>&nbsp;</li>")), $.each(filter_array, function(e, t) {
                dyna_ul.append($("<li class='get_search' value=" + e + ">" + t + "</li>"))
            }), dyna_div.append(dyna_ul), $(this).parent().append(dyna_div)
        }), $(document).click(function(e) {
            $(e.target).hasClass("get_search") || $(".custom_auto_complete").remove()
        }), $(document).on("click", ".get_search", function() {
            curr_obj = $(this).parents(".filtersRow").find("input"), curr_obj.val($(this).text().trim()), " " == $(this).text() && curr_obj.val("");
            var e = curr_obj.attr("id"),
                t = SocialCalc.GetSpreadsheetControlObject(),
                o = t.sheet.filtertext ? JSON.parse(t.sheet.filtertext) : {};
            "" != curr_obj.val() ? o[e] = curr_obj.val() : delete o[e], t.sheet.filtertext = JSON.stringify(o), t.editor.ScrollRelativeBoth(0, 1), t.editor.ScrollRelativeBoth(0, -1), SocialCalc.SpreadsheetControl.FindInSheet()
        }), S.on("input", SocialCalc.SpreadsheetControl.FindInSheet), S.on("focus", function() {
            SocialCalc.Keyboard.passThru = !0
        }), S.on("blur", function() {
            SocialCalc.Keyboard.passThru = !1
        }), S.keyup(function(e) {
            13 == e.keyCode && (e.shiftKey ? SocialCalc.SpreadsheetControl.SearchUp() : SocialCalc.SpreadsheetControl.SearchDown())
        }), e.formulabarDiv.appendChild(v[0]), i = 0; i < C.length; i++) C[i].oncreate && C[i].oncreate(e, C[i].name);
    e.nonviewheight = e.statuslineheight + e.spreadsheetDiv.firstChild.offsetHeight + e.spreadsheetDiv.lastChild.offsetHeight, e.viewheight = e.height - e.nonviewheight, e.editorDiv = e.editor.CreateTableEditor(e.width, e.viewheight), e.spreadsheetDiv.appendChild(e.editorDiv);
    for (c in g) {
        n = g[c].html;
        for (d in g[c].replacements) n = n.replace(g[c].replacements[d].regex, g[c].replacements[d].replacement);
        n = n.replace(/\%s\./g, "SocialCalc."), n = n.replace(/\%id\./g, e.idPrefix), n = n.replace(/\%tbt\./g, e.toolbartext), n = n.replace(/\%img\./g, e.imagePrefix), s = document.createElement("div"), SocialCalc.setStyles(s, g[c].divStyle), s.style.display = "none", s.style.width = e.width + "px", s.style.height = e.viewheight + "px", s.id = e.idPrefix + g[c].name + "view", n = m(n), s.innerHTML = n, e.spreadsheetDiv.appendChild(s), g[c].element = s, g[c].oncreate && g[c].oncreate(e, g[c])
    }
    if (g.sheet = {
            name: "sheet",
            element: e.editorDiv
        }, e.statuslineDiv = document.createElement("div"), e.statuslineDiv.style.cssText = e.statuslineCSS, e.statuslineDiv.style.height = e.statuslineheight - (e.statuslineDiv.style.paddingTop.slice(0, -2) - 0) - (e.statuslineDiv.style.paddingBottom.slice(0, -2) - 0) + "px", e.statuslineDiv.id = e.idPrefix + "statusline", e.spreadsheetDiv.appendChild(e.statuslineDiv), e.spreadsheetDiv.addEventListener) e.spreadsheetDiv.addEventListener("mousedown", function() {
        SocialCalc.SetSpreadsheetControlObject(e)
    }, !1), e.spreadsheetDiv.addEventListener("mouseover", function() {
        SocialCalc.SetSpreadsheetControlObject(e)
    }, !1);
    else {
        if (!e.spreadsheetDiv.attachEvent) throw SocialCalc.Constants.s_BrowserNotSupported;
        e.spreadsheetDiv.attachEvent("onmousedown", function() {
            SocialCalc.SetSpreadsheetControlObject(e)
        }), e.spreadsheetDiv.attachEvent("onmouseover", function() {
            SocialCalc.SetSpreadsheetControlObject(e)
        })
    }
}, SocialCalc.LocalizeString = function(e) {
    var t = SocialCalc.LocalizeStringList[e];
    return t || (t = SocialCalc.Constants["s_loc_" + e.toLowerCase().replace(/\s/g, "_").replace(/\W/g, "X")] || e, SocialCalc.LocalizeStringList[e] = t), t
}, SocialCalc.LocalizeStringList = {}, SocialCalc.LocalizeSubstrings = function(e) {
    var t = SocialCalc.LocalizeString;
    return e.replace(/%(loc|ssc)!(.*?)!/g, function(e, o, a) {
        return "ssc" == o ? SocialCalc.Constants[a] || alert("Missing constant: " + a) : t(a)
    })
}, SocialCalc.GetSpreadsheetControlObject = function() {
    var e = SocialCalc.CurrentSpreadsheetControlObject;
    return e ? e : void 0
}, SocialCalc.SetSpreadsheetControlObject = function(e) {
    SocialCalc.CurrentSpreadsheetControlObject = e, SocialCalc.Keyboard.focusTable && e && (SocialCalc.Keyboard.focusTable = e.editor)
}, SocialCalc.DoOnResize = function(e) {
    var t, o = e.views,
        a = e.SizeSSDiv();
    if (a) {
        for (vname in o) t = o[vname].element, t.style.width = e.width + "px", t.style.height = e.height - e.nonviewheight + "px";
        e.editor.ResizeTableEditor(e.width, e.height - e.nonviewheight)
    }
}, SocialCalc.SizeSSDiv = function(e) {
    var t, o, a, l, n, r = 10,
        i = 10;
    return a = !1, t = SocialCalc.GetViewportInfo(), o = SocialCalc.GetElementPosition(e.parentNode), o.bottom = 0, o.right = 0, l = e.parentNode.style, l.marginTop && (o.top += l.marginTop.slice(0, -2) - 0), l.marginBottom && (o.bottom += l.marginBottom.slice(0, -2) - 0), l.marginLeft && (o.left += l.marginLeft.slice(0, -2) - 0), l.marginRight && (o.right += l.marginRight.slice(0, -2) - 0), n = e.requestedHeight || t.height - (o.top + o.bottom + i) - (e.requestedSpaceBelow || 0), e.height != n && (e.height = n, e.spreadsheetDiv.style.height = n + "px", a = !0), n = e.requestedWidth || t.width - (o.left + o.right + r) || 700, e.width != n && (e.width = n, e.spreadsheetDiv.style.width = n + "px", a = !0), e.spreadsheetDiv.style.position = "relative", a
}, SocialCalc.SetTab = function(e) {
    var t, o, a, l, n, r, i, c = {},
        s = {},
        d = SocialCalc.GetSpreadsheetControlObject(),
        u = d.tabs,
        p = d.views;
    if (t = "string" == typeof e ? e : e.id.slice(d.idPrefix.length, -3), d.editor.busy && (!u[d.currentTab].view || "sheet" == u[d.currentTab].view))
        for (n = 0; n < u.length; n++)
            if (u[n].name == t && u[n].view && "sheet" != u[n].view) return;
    for (d.tabs[d.currentTab].onunclick && d.tabs[d.currentTab].onunclick(d, d.tabs[d.currentTab].name), n = 0; n < u.length; n++) o = u[n].name, c[o] = document.getElementById(d.idPrefix + o + "tab"), s[o] = document.getElementById(d.idPrefix + o + "tools"), o == t ? (a = n, s[o].style.display = "block", c[o].style.cssText = d.tabselectedCSS) : (s[o].style.display = "none", c[o].style.cssText = d.tabplainCSS);
    d.currentTab = a, u[a].onclick && u[a].onclick(d, t);
    for (r in p) !u[a].view && "sheet" == r || u[a].view == r ? (p[r].element.style.display = "block", l = r) : p[r].element.style.display = "none";
    u[a].onclickFocus ? (i = u[a].onclickFocus, "string" == typeof i && (i = document.getElementById(d.idPrefix + i), i.focus()), SocialCalc.CmdGotFocus(i)) : SocialCalc.KeyboardFocus(), p[l].needsresize && p[l].onresize && (p[l].needsresize = !1, p[l].onresize(d, p[l])), "sheet" == l ? (d.statuslineDiv.style.display = "block", d.editor.ScheduleRender()) : d.statuslineDiv.style.display = "none"
}, SocialCalc.SpreadsheetControlStatuslineCallback = function(e, t, o, a) {
    var l, n, r = document.getElementById(a.statuslineid);
    switch (r && (r.innerHTML = e.GetStatuslineString(t, o, a)), t) {
        case "cmdendnorender":
        case "calcfinished":
        case "doneposcalc":
            if (l = document.getElementById(a.recalcid1), n = document.getElementById(a.recalcid2), !l || !n) break;
            "yes" == e.context.sheetobj.attribs.needsrecalc ? (l.style.display = "inline", n.style.display = "inline") : (l.style.display = "none", n.style.display = "none")
    }
}, SocialCalc.UpdateSortRangeProposal = function(e) {
    var t = document.getElementById(SocialCalc.GetSpreadsheetControlObject().idPrefix + "sortlist");
    t.options[0].text = e.range.hasrange ? SocialCalc.crToCoord(e.range.left, e.range.top) + ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom) : SocialCalc.LocalizeString("[select range]")
}, SocialCalc.LoadColumnChoosers = function(e) {
    var t, o, a, l, n, r, i, c = SocialCalc.LocalizeString;
    e.sortrange && -1 == e.sortrange.indexOf(":") ? (o = SocialCalc.Formula.LookupName(e.sheet, e.sortrange || ""), "range" == o.type ? (a = o.value.match(/^(.*)\|(.*)\|$/), t = a[1] + ":" + a[2]) : t = "A1:A1") : t = e.sortrange;
    var s = SocialCalc.ParseRange(t);
    r = document.getElementById(e.idPrefix + "majorsort"), i = r.selectedIndex, r.options.length = 0, r.options[r.options.length] = new Option(c("[None]"), "");
    for (var l = s.cr1.col; l <= s.cr2.col; l++) n = SocialCalc.rcColname(l), r.options[r.options.length] = new Option(c("Column ") + n, n);
    r.selectedIndex = i > 1 && i <= s.cr2.col - s.cr1.col + 1 ? i : 1, r = document.getElementById(e.idPrefix + "minorsort"), i = r.selectedIndex, r.options.length = 0, r.options[r.options.length] = new Option(c("[None]"), "");
    for (var l = s.cr1.col; l <= s.cr2.col; l++) n = SocialCalc.rcColname(l), r.options[r.options.length] = new Option(n, n);
    r.selectedIndex = i > 0 && i <= s.cr2.col - s.cr1.col + 1 ? i : 0, r = document.getElementById(e.idPrefix + "lastsort"), i = r.selectedIndex, r.options.length = 0, r.options[r.options.length] = new Option(c("[None]"), "");
    for (var l = s.cr1.col; l <= s.cr2.col; l++) n = SocialCalc.rcColname(l), r.options[r.options.length] = new Option(n, n);
    r.selectedIndex = i > 0 && i <= s.cr2.col - s.cr1.col + 1 ? i : 0
}, SocialCalc.CmdGotFocus = function(e) {
    SocialCalc.Keyboard.passThru = e
}, SocialCalc.DoButtonCmd = function(e, t, o) {
    SocialCalc.DoCmd(o.element, o.functionobj.command)
}, SocialCalc.DoCmd = function(e, t) {
    var o, a, l, n, r, i, c, s, d, u, p, f, h, m, C, g, S, v, b, y, w, x = SocialCalc.GetSpreadsheetControlObject(),
        T = x.editor;
    switch (t) {
        case "undo":
            x.ExecuteCommand("undo", "");
            break;
        case "redo":
            x.ExecuteCommand("redo", "");
            break;
        case "fill-rowcolstuff":
        case "fill-text":
            for (l = t.substring(5), r = document.getElementById(x.idPrefix + l + "list"), r.length = 0, n = 0; n < SocialCalc.SpreadsheetCmdTable[l].length; n++) r.options[n] = new Option(SocialCalc.SpreadsheetCmdTable[l][n].t);
            t = "changed-" + l;
        case "changed-rowcolstuff":
        case "changed-text":
            for (l = t.substring(8), r = document.getElementById(x.idPrefix + l + "list"), i = SocialCalc.SpreadsheetCmdTable.slists[SocialCalc.SpreadsheetCmdTable[l][r.selectedIndex].s], c = document.getElementById(x.idPrefix + l + "slist"), c.length = 0, n = 0; n < (i.length || 0); n++) c.options[n] = new Option(i[n].t, i[n].s);
            return;
        case "ok-rowcolstuff":
        case "ok-text":
            l = t.substring(3), r = document.getElementById(x.idPrefix + l + "list"), c = document.getElementById(x.idPrefix + l + "slist"), o = SocialCalc.SpreadsheetCmdTable[l][r.selectedIndex].c, a = c[c.selectedIndex].value, SocialCalc.SpreadsheetControlExecuteCommand(e, o, a);
            break;
        case "ok-setsort":
            if (p = document.getElementById(x.idPrefix + "sortlist"), 0 == p.selectedIndex) x.sortrange = T.range.hasrange ? SocialCalc.crToCoord(T.range.left, T.range.top) + ":" + SocialCalc.crToCoord(T.range.right, T.range.bottom) : T.ecell.coord + ":" + T.ecell.coord;
            else {
                var k = p.options[p.selectedIndex].value;
                if ("all" == k) {
                    var F = x.sheet.cells,
                        E = -1,
                        _ = -1,
                        P = -1,
                        R = -1;
                    for (var A in F) {
                        S = F[A];
                        var D = SocialCalc.coordToCr(A);
                        (-1 == P || D.row < P) && (P = D.row), (-1 == E || D.col < E) && (E = D.col), (-1 == R || D.row > R) && (R = D.row), (-1 == _ || D.col > _) && (_ = D.col)
                    }
                    x.sortrange = SocialCalc.crToCoord(E, P) + ":" + SocialCalc.crToCoord(_, R), p.options[p.selectedIndex].text += " (" + x.sortrange + ")"
                } else x.sortrange = p.options[p.selectedIndex].value
            }
            return f = document.getElementById(x.idPrefix + "sortbutton"), f.value = SocialCalc.LocalizeString("Sort ") + x.sortrange, f.style.visibility = "visible", SocialCalc.LoadColumnChoosers(x), e && e.blur && e.blur(), void SocialCalc.KeyboardFocus();
        case "dosort":
            if (x.sortrange && -1 == x.sortrange.indexOf(":")) {
                if (m = SocialCalc.Formula.LookupName(x.sheet, x.sortrange || ""), "range" != m.type) return;
                C = m.value.match(/^(.*)\|(.*)\|$/), h = C[1] + ":" + C[2]
            } else h = x.sortrange;
            if ("A1:A1" == h) return;
            s = "sort " + h + " ", d = document.getElementById(x.idPrefix + "majorsort"), u = document.getElementById(x.idPrefix + "majorsortup"), s += d.options[d.selectedIndex].value + (u.checked ? " up" : " down"), d = document.getElementById(x.idPrefix + "minorsort"), d.selectedIndex > 0 && (u = document.getElementById(x.idPrefix + "minorsortup"), s += " " + d.options[d.selectedIndex].value + (u.checked ? " up" : " down")), d = document.getElementById(x.idPrefix + "lastsort"), d.selectedIndex > 0 && (u = document.getElementById(x.idPrefix + "lastsortup"), s += " " + d.options[d.selectedIndex].value + (u.checked ? " up" : " down")), x.ExecuteCommand(s, "");
            break;
        case "merge":
            o = SocialCalc.SpreadsheetCmdLookup[t] || "", a = SocialCalc.SpreadsheetCmdSLookup[t] || "", x.ExecuteCommand(o, a), T.range.hasrange && (T.MoveECell(SocialCalc.crToCoord(T.range.left, T.range.top)), T.RangeRemove());
            break;
        case "movefrom":
            T.range2.hasrange ? (x.context.cursorsuffix = "", T.Range2Remove(), x.ExecuteCommand("redisplay", "")) : T.range.hasrange ? (T.range2.top = T.range.top, T.range2.right = T.range.right, T.range2.bottom = T.range.bottom, T.range2.left = T.range.left, T.range2.hasrange = !0, T.MoveECell(SocialCalc.crToCoord(T.range.left, T.range.top))) : (T.range2.top = T.ecell.row, T.range2.right = T.ecell.col, T.range2.bottom = T.ecell.row, T.range2.left = T.ecell.col, T.range2.hasrange = !0), s = T.range2.hasrange ? "" : "off", f = document.getElementById(x.idPrefix + "button_movefrom"), f.src = x.imagePrefix + "movefrom" + s + ".gif", f = document.getElementById(x.idPrefix + "button_movepaste"), f.src = x.imagePrefix + "movepaste" + s + ".gif", f = document.getElementById(x.idPrefix + "button_moveinsert"), f.src = x.imagePrefix + "moveinsert" + s + ".gif", T.range2.hasrange && T.RangeRemove();
            break;
        case "movepaste":
        case "moveinsert":
            T.range2.hasrange && (x.context.cursorsuffix = "", o = t + " " + SocialCalc.crToCoord(T.range2.left, T.range2.top) + ":" + SocialCalc.crToCoord(T.range2.right, T.range2.bottom) + " " + T.ecell.coord, x.ExecuteCommand(o, ""), T.Range2Remove(), f = document.getElementById(x.idPrefix + "button_movefrom"), f.src = x.imagePrefix + "movefromoff.gif", f = document.getElementById(x.idPrefix + "button_movepaste"), f.src = x.imagePrefix + "movepasteoff.gif", f = document.getElementById(x.idPrefix + "button_moveinsert"), f.src = x.imagePrefix + "moveinsertoff.gif");
            break;
        case "swapcolors":
            g = x.sheet, S = g.GetAssuredCell(T.ecell.coord), y = g.attribs.defaultcolor ? g.colors[g.attribs.defaultcolor] : "rgb(0,0,0)", w = g.attribs.defaultbgcolor ? g.colors[g.attribs.defaultbgcolor] : "rgb(255,255,255)", v = S.color ? g.colors[S.color] : y, v == w && (v = ""), b = S.bgcolor ? g.colors[S.bgcolor] : w, b == y && (b = ""), x.ExecuteCommand("set %C color " + b + "%Nset %C bgcolor " + v, "");
            break;
        default:
            o = SocialCalc.SpreadsheetCmdLookup[t] || "", a = SocialCalc.SpreadsheetCmdSLookup[t] || "", x.ExecuteCommand(o, a)
    }
    e && e.blur && e.blur(), SocialCalc.KeyboardFocus()
}, SocialCalc.SpreadsheetCmdLookup = {
    copy: "copy %C all",
    cut: "cut %C all",
    paste: "paste %C all",
    pasteformats: "paste %C formats",
    lock: "set %C readonly yes",
    unlock: "set %C readonly no",
    "delete": "erase %C formulas",
    filldown: "filldown %C all",
    fillright: "fillright %C all",
    erase: "erase %C all",
    borderon: "set %C bt %S%Nset %C br %S%Nset %C bb %S%Nset %C bl %S",
    borderoff: "set %C bt %S%Nset %C br %S%Nset %C bb %S%Nset %C bl %S",
    merge: "merge %C",
    unmerge: "unmerge %C",
    "align-left": "set %C cellformat left",
    "align-center": "set %C cellformat center",
    "align-right": "set %C cellformat right",
    "align-default": "set %C cellformat",
    insertrow: "insertrow %C",
    insertcol: "insertcol %C",
    deleterow: "deleterow %C",
    deletecol: "deletecol %C",
    hiderow: "set %H hide yes",
    hidecol: "set %W hide yes",
    undo: "undo",
    redo: "redo",
    recalc: "recalc"
}, SocialCalc.SpreadsheetCmdSLookup = {
    borderon: "1px solid rgb(0,0,0)",
    borderoff: ""
}, SocialCalc.SpreadsheetControlExecuteCommand = function(e, t, o) {
    var a = SocialCalc.GetSpreadsheetControlObject(),
        l = a.editor,
        n = {};
    n.P = "%", n.N = "\n", l.range.hasrange ? (n.R = SocialCalc.crToCoord(l.range.left, l.range.top) + ":" + SocialCalc.crToCoord(l.range.right, l.range.bottom), n.C = n.R, n.W = SocialCalc.rcColname(l.range.left) + ":" + SocialCalc.rcColname(l.range.right), n.H = l.range.top + ":" + l.range.bottom) : l.ecell ? (n.C = l.ecell.coord, n.R = l.ecell.coord + ":" + l.ecell.coord, n.W = SocialCalc.rcColname(SocialCalc.coordToCr(l.ecell.coord).col), n.H = SocialCalc.coordToCr(l.ecell.coord).row) : (n.C = "A1", n.R = "A1:A1", n.W = SocialCalc.rcColname(SocialCalc.coordToCr("A1").col), n.H = SocialCalc.coordToCr("A1").row), n.S = o, t = t.replace(/%C/g, n.C), t = t.replace(/%R/g, n.R), t = t.replace(/%N/g, n.N), t = t.replace(/%S/g, n.S), t = t.replace(/%W/g, n.W), t = t.replace(/%H/g, n.H), t = t.replace(/%P/g, n.P), l.EditorScheduleSheetCommands(t, !0, !1)
}, SocialCalc.SpreadsheetControlCreateSheetHTML = function(e) {
    var t, o, a, l = "";
    return t = new SocialCalc.RenderContext(e.sheet), o = document.createElement("div"), a = t.RenderSheet(null, {
        type: "html"
    }), o.appendChild(a), delete t, l = o.innerHTML, delete a, delete o, l
}, SocialCalc.SpreadsheetControlCreateCellHTML = function(e, t, o) {
    var a = "",
        l = e.sheet.cells[t];
    return l ? (a = void 0 == l.displaystring ? SocialCalc.FormatValueForDisplay(e.sheet, l.datavalue, t, o || e.context.defaultHTMLlinkstyle) : l.displaystring, "&nbsp;" == a && (a = ""), a) : ""
}, SocialCalc.SpreadsheetControlCreateCellHTMLSave = function(e, t, o) {
    var a, l, n, r, i, c, s, d, u = [];
    for (d = t ? SocialCalc.ParseRange(t) : {
            cr1: {
                row: 1,
                col: 1
            },
            cr2: {
                row: e.sheet.attribs.lastrow,
                col: e.sheet.attribs.lastcol
            }
        }, a = d.cr1, l = d.cr2, u.push("version:1.0"), n = a.row; n <= l.row; n++)
        for (r = a.col; r <= l.col; r++) i = SocialCalc.crToCoord(r, n), c = e.sheet.cells[i], c && (s = void 0 == c.displaystring ? SocialCalc.FormatValueForDisplay(e.sheet, c.datavalue, i, o || e.context.defaultHTMLlinkstyle) : c.displaystring, "&nbsp;" != s && u.push(i + ":" + SocialCalc.encodeForSave(s)));
    return u.push(""), u.join("\n")
}, SocialCalc.SpreadsheetControl.DoFunctionList = function() {
    var e, t, o, a = SocialCalc.Formula,
        l = SocialCalc.Constants,
        n = l.function_classlist,
        r = SocialCalc.GetSpreadsheetControlObject(),
        i = r.idPrefix + "function";
    if (o = document.getElementById(i + "dialog"), !o) {
        for (a.FillFunctionInfo(), t = '<table><tr><td><span style="font-size:x-small;font-weight:bold">%loc!Category!</span><br><select id="' + i + 'class" size="' + n.length + '" style="width:120px;" onchange="SocialCalc.SpreadsheetControl.FunctionClassChosen(this.options[this.selectedIndex].value);">', e = 0; e < n.length; e++) t += '<option value="' + n[e] + '"' + (0 == e ? " selected>" : ">") + SocialCalc.special_chars(a.FunctionClasses[n[e]].name) + "</option>";
        t += '</select></td><td>&nbsp;&nbsp;</td><td id="' + i + 'list"><span style="font-size:x-small;font-weight:bold">%loc!Functions!</span><br><select id="' + i + 'name" size="' + n.length + '" style="width:240px;" onchange="SocialCalc.SpreadsheetControl.FunctionChosen(this.options[this.selectedIndex].value);" ondblclick="SocialCalc.SpreadsheetControl.DoFunctionPaste();">', t += SocialCalc.SpreadsheetControl.GetFunctionNamesStr("all"), t += '</td></tr><tr><td colspan="3"><div id="' + i + 'desc" style="width:380px;height:80px;overflow:auto;font-size:x-small;">' + SocialCalc.SpreadsheetControl.GetFunctionInfoStr(a.FunctionClasses[n[0]].items[0]) + '</div><div style="width:380px;text-align:right;padding-top:6px;font-size:small;"><input type="button" value="%loc!Paste!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoFunctionPaste();">&nbsp;<input type="button" value="%loc!Cancel!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.HideFunctions();"></div></td></tr></table>';
        var c = document.createElement("div");
        c.id = i + "dialog", c.style.position = "absolute";
        var s = SocialCalc.GetViewportInfo(),
            d = SocialCalc.GetElementPositionWithScroll(r.spreadsheetDiv);
        c.style.top = s.height / 3 - d.top + "px", c.style.left = s.width / 3 - d.left + "px", c.style.zIndex = 100, c.style.backgroundColor = "#FFF", c.style.border = "1px solid black", c.style.width = "400px", t = '<table cellspacing="0" cellpadding="0" style="border-bottom:1px solid black;"><tr><td style="font-size:10px;cursor:default;width:100%;background-color:#999;color:#FFF;">&nbsp;%loc!Function List!</td><td style="font-size:10px;cursor:default;color:#666;" onclick="SocialCalc.SpreadsheetControl.HideFunctions();">&nbsp;X&nbsp;</td></tr></table><div style="background-color:#DDD;">' + t + "</div>", t = SocialCalc.LocalizeSubstrings(t), c.innerHTML = t, SocialCalc.DragRegister(c.firstChild.firstChild.firstChild.firstChild, !0, !0, {
            MouseDown: SocialCalc.DragFunctionStart,
            MouseMove: SocialCalc.DragFunctionPosition,
            MouseUp: SocialCalc.DragFunctionPosition,
            Disabled: null,
            positionobj: c
        }, r.spreadsheetDiv), r.spreadsheetDiv.appendChild(c), o = document.getElementById(i + "name"), o.focus(), SocialCalc.CmdGotFocus(o)
    }
}, SocialCalc.SpreadsheetControl.GetFunctionNamesStr = function(e) {
    var t, o, a = SocialCalc.Formula,
        l = "";
    for (o = a.FunctionClasses[e], t = 0; t < o.items.length; t++) l += '<option value="' + o.items[t] + '"' + (0 == t ? " selected>" : ">") + o.items[t] + "</option>";
    return l
}, SocialCalc.SpreadsheetControl.FillFunctionNames = function(e, t) {
    var o, a, l = SocialCalc.Formula;
    for (t.length = 0, a = l.FunctionClasses[e], o = 0; o < a.items.length; o++) t.options[o] = new Option(a.items[o], a.items[o]), 0 == o && (t.options[o].selected = !0)
}, SocialCalc.SpreadsheetControl.GetFunctionInfoStr = function(e) {
    var t = SocialCalc.Formula,
        o = t.FunctionList[e],
        a = SocialCalc.special_chars,
        l = "<b>" + e + "(" + a(t.FunctionArgString(e)) + ")</b><br>";
    return l += a(o[3])
}, SocialCalc.SpreadsheetControl.FunctionClassChosen = function(e) {
    var t = SocialCalc.GetSpreadsheetControlObject(),
        o = t.idPrefix + "function",
        a = SocialCalc.Formula;
    SocialCalc.SpreadsheetControl.FillFunctionNames(e, document.getElementById(o + "name")), SocialCalc.SpreadsheetControl.FunctionChosen(a.FunctionClasses[e].items[0])
}, SocialCalc.SpreadsheetControl.FunctionChosen = function(e) {
    var t = SocialCalc.GetSpreadsheetControlObject(),
        o = t.idPrefix + "function";
    document.getElementById(o + "desc").innerHTML = SocialCalc.SpreadsheetControl.GetFunctionInfoStr(e)
}, SocialCalc.SpreadsheetControl.HideFunctions = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = document.getElementById(e.idPrefix + "functiondialog");
    t.innerHTML = "", SocialCalc.DragUnregister(t), SocialCalc.KeyboardFocus(), t.parentNode && t.parentNode.removeChild(t)
}, SocialCalc.SpreadsheetControl.DoFunctionPaste = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = e.editor,
        o = document.getElementById(e.idPrefix + "functionname"),
        a = document.getElementById(e.idPrefix + "multilinetextarea"),
        l = o.value + "(";
    SocialCalc.SpreadsheetControl.HideFunctions(), a ? (a.value += l, a.focus(), SocialCalc.CmdGotFocus(a)) : t.EditorAddToInput(l, "=")
}, SocialCalc.SpreadsheetControl.DoMultiline = function() {
    var e, t, o, a = SocialCalc.LocalizeSubstrings,
        l = (SocialCalc.Constants, SocialCalc.GetSpreadsheetControlObject()),
        n = l.editor,
        r = n.workingvalues,
        l = SocialCalc.GetSpreadsheetControlObject(),
        i = l.idPrefix + "multiline";
    if (t = document.getElementById(i + "dialog"), !t) {
        switch (n.state) {
            case "start":
                r.ecoord = n.ecell.coord, r.erow = n.ecell.row, r.ecol = n.ecell.col, n.RangeRemove(), o = SocialCalc.GetCellContents(n.context.sheetobj, r.ecoord);
                break;
            case "input":
            case "inputboxdirect":
                o = n.inputBox.GetText()
        }
        n.inputBox.element.disabled = !0, o = SocialCalc.special_chars(o), e = '<textarea id="' + i + 'textarea" style="width:380px;height:120px;margin:10px 0px 0px 6px;">' + o + '</textarea><div style="width:380px;text-align:right;padding:6px 0px 4px 6px;font-size:small;">' + a('<input type="button" value="%loc!Set Cell Contents!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoMultilinePaste();">&nbsp;<input type="button" value="%loc!Clear!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoMultilineClear();">&nbsp;<input type="button" value="%loc!Cancel!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.HideMultiline();"></div></div>');
        var c = document.createElement("div");
        c.id = i + "dialog", c.style.position = "absolute";
        var s = SocialCalc.GetViewportInfo(),
            d = SocialCalc.GetElementPositionWithScroll(l.spreadsheetDiv);
        c.style.top = s.height / 3 - d.top + "px", c.style.left = s.width / 3 - d.left + "px", c.style.zIndex = 100, c.style.backgroundColor = "#FFF", c.style.border = "1px solid black", c.style.width = "400px", c.innerHTML = '<table cellspacing="0" cellpadding="0" style="border-bottom:1px solid black;"><tr><td style="font-size:10px;cursor:default;width:100%;background-color:#999;color:#FFF;">' + a("&nbsp;%loc!Multi-line Input Box!") + '</td><td style="font-size:10px;cursor:default;color:#666;" onclick="SocialCalc.SpreadsheetControl.HideMultiline();">&nbsp;X&nbsp;</td></tr></table><div style="background-color:#DDD;">' + e + "</div>", SocialCalc.DragRegister(c.firstChild.firstChild.firstChild.firstChild, !0, !0, {
            MouseDown: SocialCalc.DragFunctionStart,
            MouseMove: SocialCalc.DragFunctionPosition,
            MouseUp: SocialCalc.DragFunctionPosition,
            Disabled: null,
            positionobj: c
        }, l.spreadsheetDiv), l.spreadsheetDiv.appendChild(c), t = document.getElementById(i + "textarea"), t.focus(), SocialCalc.CmdGotFocus(t)
    }
}, SocialCalc.SpreadsheetControl.HideMultiline = function() {
    var e = (SocialCalc.Constants, SocialCalc.GetSpreadsheetControlObject()),
        t = e.editor,
        o = document.getElementById(e.idPrefix + "multilinedialog");
    switch (o.innerHTML = "", SocialCalc.DragUnregister(o), SocialCalc.KeyboardFocus(), o.parentNode && o.parentNode.removeChild(o), t.state) {
        case "start":
            t.inputBox.DisplayCellContents(null);
            break;
        case "input":
        case "inputboxdirect":
            t.inputBox.element.disabled = !1, t.inputBox.Focus()
    }
}, SocialCalc.SpreadsheetControl.DoMultilineClear = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = document.getElementById(e.idPrefix + "multilinetextarea");
    t.value = "", t.focus()
}, SocialCalc.SpreadsheetControl.DoMultilinePaste = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = e.editor,
        o = t.workingvalues,
        a = document.getElementById(e.idPrefix + "multilinetextarea"),
        l = a.value;
    switch (SocialCalc.SpreadsheetControl.HideMultiline(), t.state) {
        case "start":
            o.partialexpr = "", o.ecoord = t.ecell.coord, o.erow = t.ecell.row, o.ecol = t.ecell.col;
            break;
        case "input":
        case "inputboxdirect":
            t.inputBox.Blur(), t.inputBox.ShowInputBox(!1), t.state = "start"
    }
    t.EditorSaveEdit(l)
}, SocialCalc.SpreadsheetControl.DoLink = function() {
    var e, t, o, a, l, n, r = SocialCalc.LocalizeString,
        i = (SocialCalc.Constants, SocialCalc.GetSpreadsheetControlObject()),
        c = i.editor,
        s = c.workingvalues,
        i = SocialCalc.GetSpreadsheetControlObject(),
        d = i.idPrefix + "link";
    if (t = document.getElementById(d + "dialog"), !t) {
        switch (c.state) {
            case "start":
                s.ecoord = c.ecell.coord, s.erow = c.ecell.row, s.ecol = c.ecell.col, c.RangeRemove(), o = SocialCalc.GetCellContents(c.context.sheetobj, s.ecoord);
                break;
            case "input":
            case "inputboxdirect":
                o = c.inputBox.GetText()
        }
        c.inputBox.element.disabled = !0, "'" == o.charAt(0) && (o = o.slice(1));
        var u = SocialCalc.ParseCellLinkText(o);
        o = SocialCalc.special_chars(o), a = i.sheet.cells[c.ecell.coord], l = a && a.textvalueformat ? "" : " checked", n = u.newwin ? " checked" : "", e = '<div style="padding:6px 0px 4px 6px;"><span style="font-size:smaller;">' + r("Description") + '</span><br><input type="text" id="' + d + 'desc" style="width:380px;" value="' + SocialCalc.special_chars(u.desc) + '"><br><span style="font-size:smaller;">' + r("URL") + '</span><br><input type="text" id="' + d + 'url" style="width:380px;" value="' + SocialCalc.special_chars(u.url) + '"><br>', SocialCalc.Callbacks.MakePageLink && (e += '<span style="font-size:smaller;">' + r("Page Name") + '</span><br><input type="text" id="' + d + 'pagename" style="width:380px;" value="' + SocialCalc.special_chars(u.pagename) + '"><br><span style="font-size:smaller;">' + r("Workspace") + '</span><br><input type="text" id="' + d + 'workspace" style="width:380px;" value="' + SocialCalc.special_chars(u.workspace) + '"><br>'), e += SocialCalc.LocalizeSubstrings('<input type="checkbox" id="' + d + 'format"' + l + '>&nbsp;<span style="font-size:smaller;">%loc!Set to Link format!</span><br><input type="checkbox" id="' + d + 'popup"' + n + '>&nbsp;<span style="font-size:smaller;">%loc!Show in new browser window!</span></div><div style="width:380px;text-align:right;padding:6px 0px 4px 6px;font-size:small;"><input type="button" value="%loc!Set Cell Contents!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoLinkPaste();">&nbsp;<input type="button" value="%loc!Clear!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.DoLinkClear();">&nbsp;<input type="button" value="%loc!Cancel!" style="font-size:smaller;" onclick="SocialCalc.SpreadsheetControl.HideLink();"></div></div>');
        var p = document.createElement("div");
        p.id = d + "dialog", p.style.position = "absolute";
        var f = SocialCalc.GetViewportInfo(),
            h = SocialCalc.GetElementPositionWithScroll(i.spreadsheetDiv);
        p.style.top = f.height / 3 - h.top + "px", p.style.left = f.width / 3 - h.left + "px", p.style.zIndex = 100, p.style.backgroundColor = "#FFF", p.style.border = "1px solid black", p.style.width = "400px", p.innerHTML = '<table cellspacing="0" cellpadding="0" style="border-bottom:1px solid black;"><tr><td style="font-size:10px;cursor:default;width:100%;background-color:#999;color:#FFF;">&nbsp;' + r("Link Input Box") + '</td><td style="font-size:10px;cursor:default;color:#666;" onclick="SocialCalc.SpreadsheetControl.HideLink();">&nbsp;X&nbsp;</td></tr></table><div style="background-color:#DDD;">' + e + "</div>", SocialCalc.DragRegister(p.firstChild.firstChild.firstChild.firstChild, !0, !0, {
            MouseDown: SocialCalc.DragFunctionStart,
            MouseMove: SocialCalc.DragFunctionPosition,
            MouseUp: SocialCalc.DragFunctionPosition,
            Disabled: null,
            positionobj: p
        }, i.spreadsheetDiv), i.spreadsheetDiv.appendChild(p), t = document.getElementById(d + "url"), t.focus(), SocialCalc.CmdGotFocus(t)
    }
}, SocialCalc.SpreadsheetControl.HideLink = function() {
    var e = (SocialCalc.Constants, SocialCalc.GetSpreadsheetControlObject()),
        t = e.editor,
        o = document.getElementById(e.idPrefix + "linkdialog");
    switch (o.innerHTML = "", SocialCalc.DragUnregister(o), SocialCalc.KeyboardFocus(), o.parentNode && o.parentNode.removeChild(o), t.state) {
        case "start":
            t.inputBox.DisplayCellContents(null);
            break;
        case "input":
        case "inputboxdirect":
            t.inputBox.element.disabled = !1, t.inputBox.Focus()
    }
}, SocialCalc.SpreadsheetControl.DoLinkClear = function() {
    var e = SocialCalc.GetSpreadsheetControlObject();
    document.getElementById(e.idPrefix + "linkdesc").value = "", document.getElementById(e.idPrefix + "linkpagename").value = "", document.getElementById(e.idPrefix + "linkworkspace").value = "";
    var t = document.getElementById(e.idPrefix + "linkurl");
    t.value = "", t.focus()
}, SocialCalc.SpreadsheetControl.DoLinkPaste = function() {
    var e, t, o, a, l = SocialCalc.GetSpreadsheetControlObject(),
        n = l.editor,
        r = n.workingvalues,
        i = document.getElementById(l.idPrefix + "linkdesc"),
        c = document.getElementById(l.idPrefix + "linkurl"),
        s = document.getElementById(l.idPrefix + "linkpagename"),
        d = document.getElementById(l.idPrefix + "linkworkspace"),
        u = document.getElementById(l.idPrefix + "linkformat"),
        p = document.getElementById(l.idPrefix + "linkpopup"),
        f = "";
    switch (p.checked ? (e = "<<", t = ">>", o = "[[", a = "]]") : (e = "<", t = ">", o = "[", a = "]"), f = s && s.value ? d.value ? i.value + "{" + d.value + o + s.value + a + "}" : i.value + o + s.value + a : i.value + e + c.value + t, SocialCalc.SpreadsheetControl.HideLink(), n.state) {
        case "start":
            r.partialexpr = "", r.ecoord = n.ecell.coord, r.erow = n.ecell.row, r.ecol = n.ecell.col;
            break;
        case "input":
        case "inputboxdirect":
            n.inputBox.Blur(), n.inputBox.ShowInputBox(!1), n.state = "start"
    }
    u.checked && SocialCalc.SpreadsheetControlExecuteCommand(null, "set %C textvalueformat text-link", ""), n.EditorSaveEdit(f)
}, SocialCalc.SpreadsheetControl.DoSum = function() {
    var e, t, o, a, l, n, r, i = SocialCalc.GetSpreadsheetControlObject(),
        c = i.editor,
        s = c.context.sheetobj;
    if (c.range.hasrange) l = SocialCalc.crToCoord(c.range.left, c.range.top) + ":" + SocialCalc.crToCoord(c.range.right, c.range.bottom), e = "set " + SocialCalc.crToCoord(c.range.right, c.range.bottom + 1) + " formula sum(" + l + ")";
    else if (o = c.ecell.row - 1, a = c.ecell.col, 1 >= o) e = "set " + c.ecell.coord + " constant e#REF! 0 #REF!";
    else {
        for (r = !1; o > 0;) {
            if (n = SocialCalc.crToCoord(a, o), t = s.GetAssuredCell(n), t.datatype && "t" != t.datatype) r = !0;
            else if (r) {
                o++;
                break
            }
            o--
        }
        e = "set " + c.ecell.coord + " formula sum(" + SocialCalc.crToCoord(a, o) + ":" + SocialCalc.crToCoord(a, c.ecell.row - 1) + ")"
    }
    c.EditorScheduleSheetCommands(e, !0, !1)
}, SocialCalc.SpreadsheetControl.FindInSheet = function() {
    var e = $("#searchstatus"),
        t = SocialCalc.GetSpreadsheetControlObject();
    t.sheet.search_cells = [], t.sheet.selected_search_cell = void 0;
    var o = t.sheet.filtertext ? JSON.parse(t.sheet.filtertext) : [];
    t.sheet.Customcells = t.sheet.Customcells ? t.sheet.Customcells : t.sheet.cells;
    var a, l, n = t.sheet.Customcells,
        r = new RegExp(this.value, "im"),
        i = [];
    searchedrow = {}, searchedIds = [];
    var c = [],
        s = [];
    for (var d in n) {
        var u = SocialCalc.coordToCr(d);
        s = c[u.row] ? c[u.row] : [], s.push(d), s.sort(), c[u.row] = s
    }
    c = c.filter(Boolean), $.each(c, function(e, s) {
        var u = 1,
            p = SocialCalc.coordToCr(s[0]);
        $.each(o, function(e) {
            if (d = e + p.row, a = n[d]) {
                var i = SocialCalc.coordToCr(d);
                r = new RegExp(o[SocialCalc.rcColname(i.col)], "im"), "yes" !== t.sheet.rowattribs.hide[i.row] && "yes" !== t.sheet.colattribs.hide[SocialCalc.rcColname(i.col)] && (l = "c" === a.datatype ? a.displaystring : String(a.datavalue)) && l.match(r) || (u = 0)
            } else u = 0
        }), 1 == u ? i.push(s[0]) : delete c[e]
    }), c = c.filter(Boolean), $.each(c, function(e, o) {
        $.each(o, function(t, o) {
            tmp_ele = n[o], tmp_idx = e + 1;
            var a = SocialCalc.coordToCr(o);
            searchedIds.push(a.row), col_val = SocialCalc.rcColname(a.col), searchedrow[o] = n[o]
        }), t.editor.customlastRow = e + 1
    }), t.sheet.cellsids = $.unique(searchedIds), t.sheet.cells = searchedrow, t.editor.ecell.row = 1, t.sheet.search_cells = i, i.length ? (t.sheet.selected_search_cell = 0, t.editor.MoveECell(searchedrow[0]), e.text("1 of " + i.length)) : (t.sheet.selected_search_cell = void 0, e.text("No Matches"))
}, SocialCalc.SpreadsheetControl.SearchSheet = function(e) {
    var t = SocialCalc.GetSpreadsheetControlObject(),
        o = t.sheet,
        a = o.search_cells ? o.search_cells : [];
    if (a.length) {
        var l = o.selected_search_cell;
        l === (0 === e ? 0 : a.length - 1) ? l = 0 === e ? a.length - 1 : 0 : l += 0 === e ? -1 : 1;
        var n = a[l];
        o.selected_search_cell = l, t.editor.MoveECell(n), document.getElementById("searchstatus").textContent = String(l + 1) + " of " + a.length
    }
}, SocialCalc.SpreadsheetControl.SearchUp = function() {
    SocialCalc.SpreadsheetControl.SearchSheet(0)
}, SocialCalc.SpreadsheetControl.SearchDown = function() {
    SocialCalc.SpreadsheetControl.SearchSheet(1)
}, SocialCalc.SpreadsheetControlSortOnclick = function(e) {
    var t, o, a = [],
        l = document.getElementById(e.idPrefix + "sortlist");
    SocialCalc.LoadColumnChoosers(e), e.editor.RangeChangeCallback.sort = SocialCalc.UpdateSortRangeProposal;
    for (t in e.sheet.names) a.push(t);
    for (a.sort(), l.length = 0, l.options[0] = new Option(SocialCalc.LocalizeString("[select range]")), l.options[1] = new Option(SocialCalc.LocalizeString("Sort All"), "all"), n_options = l.options.length, o = 0; o < a.length; o++) t = a[o], l.options[o + n_options] = new Option(t, t), t == e.sortrange && (l.options[o + n_options].selected = !0);
    "" == e.sortrange && (l.options[0].selected = !0), SocialCalc.UpdateSortRangeProposal(e.editor), SocialCalc.KeyboardFocus()
}, SocialCalc.SpreadsheetControlSortSave = function() {
    var e, t, o, a = SocialCalc.GetSpreadsheetControlObject();
    return e = "sort:" + SocialCalc.encodeForSave(a.sortrange) + ":", t = document.getElementById(a.idPrefix + "majorsort"), o = document.getElementById(a.idPrefix + "majorsortup"), e += t.selectedIndex + (o.checked ? ":up" : ":down"), t = document.getElementById(a.idPrefix + "minorsort"), t.selectedIndex > 0 ? (o = document.getElementById(a.idPrefix + "minorsortup"), e += ":" + t.selectedIndex + (o.checked ? ":up" : ":down")) : e += "::", t = document.getElementById(a.idPrefix + "lastsort"), t.selectedIndex > 0 ? (o = document.getElementById(a.idPrefix + "lastsortup"), e += ":" + t.selectedIndex + (o.checked ? ":up" : ":down")) : e += "::", e + "\n"
}, SocialCalc.SpreadsheetControlSortLoad = function(e, t, o) {
    var a, l, n = SocialCalc.GetSpreadsheetControlObject();
    return a = o.split(":"), n.sortrange = SocialCalc.decodeFromSave(a[1]), l = document.getElementById(n.idPrefix + "sortbutton"), n.sortrange ? (l.value = SocialCalc.LocalizeString("Sort ") + n.sortrange, l.style.visibility = "visible") : l.style.visibility = "hidden", SocialCalc.LoadColumnChoosers(n), sele = document.getElementById(n.idPrefix + "majorsort"), sele.selectedIndex = a[2] - 0, document.getElementById(n.idPrefix + "majorsort" + a[3]).checked = !0, sele = document.getElementById(n.idPrefix + "minorsort"), a[4] ? (sele.selectedIndex = a[4] - 0, document.getElementById(n.idPrefix + "minorsort" + a[5]).checked = !0) : (sele.selectedIndex = 0, document.getElementById(n.idPrefix + "minorsortup").checked = !0), sele = document.getElementById(n.idPrefix + "lastsort"), a[6] ? (sele.selectedIndex = a[6] - 0, document.getElementById(n.idPrefix + "lastsort" + a[7]).checked = !0) : (sele.selectedIndex = 0, document.getElementById(n.idPrefix + "lastsortup").checked = !0), !0
}, SocialCalc.SpreadsheetControlCommentOnclick = function(e, t) {
    e.editor.MoveECellCallback.comment = SocialCalc.SpreadsheetControlCommentMoveECell, SocialCalc.SpreadsheetControlCommentDisplay(e, t), SocialCalc.KeyboardFocus()
}, SocialCalc.SpreadsheetControlCommentDisplay = function(e) {
    var t = "";
    e.editor.ecell && e.editor.ecell.coord && e.sheet.cells[e.editor.ecell.coord] && (t = e.sheet.cells[e.editor.ecell.coord].comment || ""), document.getElementById(e.idPrefix + "commenttext").value = t
}, SocialCalc.SpreadsheetControlCommentMoveECell = function() {
    SocialCalc.SpreadsheetControlCommentDisplay(SocialCalc.GetSpreadsheetControlObject(), "comment")
}, SocialCalc.SpreadsheetControlCommentSet = function() {
    var e = SocialCalc.GetSpreadsheetControlObject();
    e.ExecuteCommand("set %C comment " + SocialCalc.encodeForSave(document.getElementById(e.idPrefix + "commenttext").value));
    var t = SocialCalc.GetEditorCellElement(e.editor, e.editor.ecell.row, e.editor.ecell.col);
    e.editor.ECellReadonly() || (t.element.title = document.getElementById(e.idPrefix + "commenttext").value, e.editor.UpdateCellCSS(t, e.editor.ecell.row, e.editor.ecell.col)), SocialCalc.KeyboardFocus()
}, SocialCalc.SpreadsheetControlCommentOnunclick = function(e) {
    delete e.editor.MoveECellCallback.comment
}, SocialCalc.SpreadsheetControlNamesOnclick = function(e) {
    document.getElementById(e.idPrefix + "namesname").value = "", document.getElementById(e.idPrefix + "namesdesc").value = "", document.getElementById(e.idPrefix + "namesvalue").value = "", e.editor.RangeChangeCallback.names = SocialCalc.SpreadsheetControlNamesRangeChange, e.editor.MoveECellCallback.names = SocialCalc.SpreadsheetControlNamesRangeChange, SocialCalc.SpreadsheetControlNamesRangeChange(e.editor), SocialCalc.SpreadsheetControlNamesFillNameList(), SocialCalc.SpreadsheetControlNamesChangedName()
}, SocialCalc.SpreadsheetControlNamesFillNameList = function() {
    var e, t, o = SocialCalc.LocalizeString,
        a = [],
        l = SocialCalc.GetSpreadsheetControlObject(),
        n = document.getElementById(l.idPrefix + "nameslist"),
        r = document.getElementById(l.idPrefix + "namesname").value.toUpperCase().replace(/[^A-Z0-9_\.]/g, "");
    for (e in l.sheet.names) a.push(e);
    for (a.sort(), n.length = 0, n.options[0] = new Option(a.length > 0 ? o("[New]") : o("[None]")), t = 0; t < a.length; t++) e = a[t], n.options[t + 1] = new Option(e, e), e == r && (n.options[t + 1].selected = !0);
    "" == r && (n.options[0].selected = !0)
}, SocialCalc.SpreadsheetControlNamesChangedName = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = document.getElementById(e.idPrefix + "nameslist"),
        o = t.options[t.selectedIndex].value;
    e.sheet.names[o] ? (document.getElementById(e.idPrefix + "namesname").value = o, document.getElementById(e.idPrefix + "namesdesc").value = e.sheet.names[o].desc || "", document.getElementById(e.idPrefix + "namesvalue").value = e.sheet.names[o].definition || "") : (document.getElementById(e.idPrefix + "namesname").value = "", document.getElementById(e.idPrefix + "namesdesc").value = "", document.getElementById(e.idPrefix + "namesvalue").value = "")
}, SocialCalc.SpreadsheetControlNamesRangeChange = function(e) {
    var t = SocialCalc.GetSpreadsheetControlObject(),
        o = document.getElementById(t.idPrefix + "namesrangeproposal");
    o.value = e.range.hasrange ? SocialCalc.crToCoord(e.range.left, e.range.top) + ":" + SocialCalc.crToCoord(e.range.right, e.range.bottom) : e.ecell.coord
}, SocialCalc.SpreadsheetControlNamesOnunclick = function(e) {
    delete e.editor.RangeChangeCallback.names, delete e.editor.MoveECellCallback.names
}, SocialCalc.SpreadsheetControlNamesSetValue = function() {
    var e = SocialCalc.GetSpreadsheetControlObject();
    document.getElementById(e.idPrefix + "namesvalue").value = document.getElementById(e.idPrefix + "namesrangeproposal").value, SocialCalc.KeyboardFocus()
}, SocialCalc.SpreadsheetControlNamesSave = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = document.getElementById(e.idPrefix + "namesname").value;
    SocialCalc.SetTab(e.tabs[0].name), SocialCalc.KeyboardFocus(), "" != t && e.ExecuteCommand("name define " + t + " " + document.getElementById(e.idPrefix + "namesvalue").value + "\nname desc " + t + " " + document.getElementById(e.idPrefix + "namesdesc").value)
}, SocialCalc.SpreadsheetControlNamesDelete = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = document.getElementById(e.idPrefix + "namesname").value;
    SocialCalc.SetTab(e.tabs[0].name), SocialCalc.KeyboardFocus(), "" != t && e.ExecuteCommand("name delete " + t), SocialCalc.KeyboardFocus()
}, SocialCalc.SpreadsheetControlClipboardOnclick = function(e) {
    var e = SocialCalc.GetSpreadsheetControlObject();
    clipele = document.getElementById(e.idPrefix + "clipboardtext"), document.getElementById(e.idPrefix + "clipboardformat-tab").checked = !0, clipele.value = SocialCalc.ConvertSaveToOtherFormat(SocialCalc.Clipboard.clipboard, "tab")
}, SocialCalc.SpreadsheetControlClipboardFormat = function(e) {
    var t = SocialCalc.GetSpreadsheetControlObject();
    clipele = document.getElementById(t.idPrefix + "clipboardtext"), clipele.value = SocialCalc.ConvertSaveToOtherFormat(SocialCalc.Clipboard.clipboard, e)
}, SocialCalc.SpreadsheetControlClipboardLoad = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = "tab";
    SocialCalc.SetTab(e.tabs[0].name), SocialCalc.KeyboardFocus(), document.getElementById(e.idPrefix + "clipboardformat-csv").checked ? t = "csv" : document.getElementById(e.idPrefix + "clipboardformat-scsave").checked && (t = "scsave"), e.editor.EditorScheduleSheetCommands("loadclipboard " + SocialCalc.encodeForSave(SocialCalc.ConvertOtherFormatToSave(document.getElementById(e.idPrefix + "clipboardtext").value, t)), !0, !1)
}, SocialCalc.SpreadsheetControlClipboardClear = function() {
    var e = SocialCalc.GetSpreadsheetControlObject(),
        t = document.getElementById(e.idPrefix + "clipboardtext");
    t.value = "", e.editor.EditorScheduleSheetCommands("clearclipboard", !0, !1), t.focus()
}, SocialCalc.SpreadsheetControlClipboardExport = function() {
    var e = SocialCalc.GetSpreadsheetControlObject();
    e.ExportCallback && e.ExportCallback(e), SocialCalc.SetTab(e.tabs[0].name), SocialCalc.KeyboardFocus()
}, SocialCalc.SpreadsheetControlSettingsSwitch = function(e) {
    SocialCalc.SettingControlReset();
    var t = SocialCalc.GetSpreadsheetControlObject(),
        o = document.getElementById(t.idPrefix + "sheetsettingstable"),
        a = document.getElementById(t.idPrefix + "cellsettingstable"),
        l = document.getElementById(t.idPrefix + "sheetsettingstoolbar"),
        n = document.getElementById(t.idPrefix + "cellsettingstoolbar");
    "sheet" == e ? (o.style.display = "block", a.style.display = "none", l.style.display = "block", n.style.display = "none", SocialCalc.SettingsControlSetCurrentPanel(t.views.settings.values.sheetspanel)) : (o.style.display = "none", a.style.display = "block", l.style.display = "none", n.style.display = "block", SocialCalc.SettingsControlSetCurrentPanel(t.views.settings.values.cellspanel))
}, SocialCalc.SettingsControlSave = function(e) {
    var t, o, a = SocialCalc.GetSpreadsheetControlObject(),
        l = SocialCalc.SettingsControls,
        n = l.CurrentPanel,
        r = SocialCalc.SettingsControlUnloadPanel(n);
    SocialCalc.SetTab(a.tabs[0].name), SocialCalc.KeyboardFocus(), "sheet" == e ? o = a.sheet.DecodeSheetAttributes(r) : "cell" == e && (a.editor.range.hasrange && (t = SocialCalc.crToCoord(a.editor.range.left, a.editor.range.top) + ":" + SocialCalc.crToCoord(a.editor.range.right, a.editor.range.bottom)), o = a.sheet.DecodeCellAttributes(a.editor.ecell.coord, r, t)), o && a.editor.EditorScheduleSheetCommands(o, !0, !1)
}, SocialCalc.SpreadsheetControlCreateSpreadsheetSave = function(e, t) {
    var o, a, l, n = "",
        r = "";
    if (t)
        for (a in t) l = "\n" != t[a].charAt(t[a] - 1) ? "\n" : "", n += "--" + e.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n" + t[a] + l, r += "part:" + a + "\n";
    return o = "socialcalc:version:1.0\nMIME-Version: 1.0\nContent-Type: multipart/mixed; boundary=" + e.multipartBoundary + "\n--" + e.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n# SocialCalc Spreadsheet Control Save\nversion:1.0\npart:sheet\npart:edit\npart:audit\n" + r + "--" + e.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n" + e.CreateSheetSave() + "--" + e.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n" + e.editor.SaveEditorSettings() + "--" + e.multipartBoundary + "\nContent-type: text/plain; charset=UTF-8\n\n" + e.sheet.CreateAuditString() + n + "--" + e.multipartBoundary + "--\n"
}, SocialCalc.SpreadsheetControlDecodeSpreadsheetSave = function(e, t) {
    var o, a, l, n, r, i, c, s, d, u, d, p, f = {},
        h = [];
    if (o = t.search(/^MIME-Version:\s1\.0/im), 0 > o) return f;
    if (a = /^Content-Type:\s*multipart\/mixed;\s*boundary=(\S+)/gim, a.lastIndex = o, l = a.exec(t), a.lastIndex <= 0) return f;
    if (n = l[1], r = new RegExp("^--" + n + "(?:\r\n|\n)", "mg"), r.lastIndex = a.lastIndex, l = r.exec(t), i = /(?:\r\n|\n)(?:\r\n|\n)/gm, i.lastIndex = r.lastIndex, l = i.exec(t), !l) return f;
    if (c = i.lastIndex, r.lastIndex = c, l = r.exec(t), !l) return f;
    for (s = l.index, d = t.substring(c, s).split(/\r\n|\n/), u = 0; u < d.length; u++) switch (line = d[u], p = line.split(":"), p[0]) {
        case "version":
            break;
        case "part":
            h.push(p[1])
    }
    for (pnum = 0; pnum < h.length; pnum++) {
        if (i.lastIndex = s, l = i.exec(t), !l) return f;
        if (c = i.lastIndex, pnum == h.length - 1 && (r = new RegExp("^--" + n + "--$", "mg")), r.lastIndex = c, l = r.exec(t), !l) return f;
        s = l.index, f[h[pnum]] = {
            start: c,
            end: s
        }
    }
    return f
}, SocialCalc.SettingsControls = {
    Controls: {},
    CurrentPanel: null
}, SocialCalc.SettingsControlSetCurrentPanel = function(e) {
    SocialCalc.SettingsControls.CurrentPanel = e, SocialCalc.SettingsControls.PopupChangeCallback({
        panelobj: e
    }, "", null)
}, SocialCalc.SettingsControlInitializePanel = function(e) {
    var t, o = SocialCalc.SettingsControls;
    for (t in e) "name" != t && (ctrl = o.Controls[e[t].type], ctrl && ctrl.Initialize && ctrl.Initialize(e, t))
}, SocialCalc.SettingsControlLoadPanel = function(e, t) {
    var o, a = SocialCalc.SettingsControls;
    for (o in e) "name" != o && (ctrl = a.Controls[e[o].type], ctrl && ctrl.SetValue && ctrl.SetValue(e, o, t[e[o].setting]))
}, SocialCalc.SettingsControlUnloadPanel = function(e) {
    var t, o = SocialCalc.SettingsControls,
        a = {};
    for (t in e) "name" != t && (ctrl = o.Controls[e[t].type], ctrl && ctrl.GetValue && (a[e[t].setting] = ctrl.GetValue(e, t)));
    return a
}, SocialCalc.SettingsControls.PopupChangeCallback = function(e) {
    var t = SocialCalc.Constants,
        o = document.getElementById("sample-text");
    if (o && e && e.panelobj) {
        var a, l, n, r, i, c = SocialCalc.CurrentSpreadsheetControlObject.idPrefix,
            s = "cell" == e.panelobj.name ? "c" : "";
        n = t.defaultCellLayout.match(/^padding.(\S+) (\S+) (\S+) (\S+).vertical.align.(\S+);$/) || [];
        var d = {
            color: ["textcolor"],
            backgroundColor: ["bgcolor", "#FFF"],
            fontSize: ["fontsize", t.defaultCellFontSize],
            fontFamily: ["fontfamily"],
            paddingTop: ["padtop", n[1]],
            paddingRight: ["padright", n[2]],
            paddingBottom: ["padbottom", n[3]],
            paddingLeft: ["padleft", n[4]],
            verticalAlign: ["alignvert", n[5]]
        };
        for (l in d) a = SocialCalc.Popup.GetValue(c + s + d[l][0]) || d[l][1] || "", o.style[l] = a;
        if ("c" == s) {
            d = {
                borderTop: "cbt",
                borderRight: "cbr",
                borderBottom: "cbb",
                borderLeft: "cbl"
            };
            for (l in d) a = SocialCalc.SettingsControls.BorderSideGetValue(e.panelobj, d[l]), o.style[l] = a ? a.val || "" : "";
            a = SocialCalc.Popup.GetValue(c + "calignhoriz"), o.style.textAlign = a || "left", o.childNodes[1].style.textAlign = a || "right"
        } else o.style.border = "", a = SocialCalc.Popup.GetValue(c + "textalignhoriz"), o.style.textAlign = a || "left", a = SocialCalc.Popup.GetValue(c + "numberalignhoriz"), o.childNodes[1].style.textAlign = a || "right";
        a = SocialCalc.Popup.GetValue(c + s + "fontlook"), n = a ? a.match(/^(\S+) (\S+)$/) || [] : [], o.style.fontStyle = n[1] || "", o.style.fontWeight = n[2] || "", a = SocialCalc.Popup.GetValue(c + s + "formatnumber") || "General", r = SocialCalc.FormatNumber.formatNumberWithFormat(9.8765, a, ""), i = SocialCalc.FormatNumber.formatNumberWithFormat(-1234.5, a, ""), "??-???-??&nbsp;??:??:??" != i && (r += "<br>" + i), o.childNodes[1].innerHTML = r
    }
}, SocialCalc.SettingsControls.PopupListSetValue = function(e, t, o) {
    if (!o) return void alert(t + " no value");
    var a = SocialCalc.Popup;
    o.def ? a.SetValue(e[t].id, "") : a.SetValue(e[t].id, o.val)
}, SocialCalc.SettingsControls.PopupListGetValue = function(e, t) {
    var o = e[t];
    if (!o) return null;
    var a = SocialCalc.Popup.GetValue(o.id);
    return a ? {
        def: !1,
        val: a
    } : {
        def: !0,
        val: 0
    }
}, SocialCalc.SettingsControls.PopupListInitialize = function(e, t) {
    var o, a, l, n, r = SocialCalc.SettingsControls,
        i = e[t].initialdata || r.Controls[e[t].type].InitialData || "";
    i = SocialCalc.LocalizeSubstrings(i);
    var c = i.split(/\|/),
        s = [];
    for (o = 0; o < (c.length || 0); o++) a = c[o], l = a.indexOf(":"), n = a.substring(0, l), -1 != n.indexOf("\\") && (n = n.replace(/\\c/g, ":"), n = n.replace(/\\b/g, "\\")), n = SocialCalc.special_chars(n), s[o] = "[custom]" == n ? {
        o: SocialCalc.Constants.s_PopupListCustom,
        v: a.substring(l + 1),
        a: {
            custom: !0
        }
    } : "[cancel]" == n ? {
        o: SocialCalc.Constants.s_PopupListCancel,
        v: "",
        a: {
            cancel: !0
        }
    } : "[break]" == n ? {
        o: "-----",
        v: "",
        a: {
            skip: !0
        }
    } : "[newcol]" == n ? {
        o: "",
        v: "",
        a: {
            newcol: !0
        }
    } : {
        o: n,
        v: a.substring(l + 1)
    };
    SocialCalc.Popup.Create("List", e[t].id, {}), SocialCalc.Popup.Initialize(e[t].id, {
        options: s,
        attribs: {
            changedcallback: SocialCalc.SettingsControls.PopupChangeCallback,
            panelobj: e
        }
    })
}, SocialCalc.SettingsControls.PopupListReset = function() {
    SocialCalc.Popup.Reset("List")
}, SocialCalc.SettingsControls.Controls.PopupList = {
    SetValue: SocialCalc.SettingsControls.PopupListSetValue,
    GetValue: SocialCalc.SettingsControls.PopupListGetValue,
    Initialize: SocialCalc.SettingsControls.PopupListInitialize,
    OnReset: SocialCalc.SettingsControls.PopupListReset,
    ChangedCallback: null
}, SocialCalc.SettingsControls.ColorChooserSetValue = function(e, t, o) {
    if (!o) return void alert(t + " no value");
    var a = SocialCalc.Popup;
    o.def ? a.SetValue(e[t].id, "") : a.SetValue(e[t].id, o.val)
}, SocialCalc.SettingsControls.ColorChooserGetValue = function(e, t) {
    var o = SocialCalc.Popup.GetValue(e[t].id);
    return o ? {
        def: !1,
        val: o
    } : {
        def: !0,
        val: 0
    }
}, SocialCalc.SettingsControls.ColorChooserInitialize = function(e, t) {
    SocialCalc.SettingsControls;
    SocialCalc.Popup.Create("ColorChooser", e[t].id, {}), SocialCalc.Popup.Initialize(e[t].id, {
        attribs: {
            title: "&nbsp;",
            moveable: !0,
            width: "106px",
            changedcallback: SocialCalc.SettingsControls.PopupChangeCallback,
            panelobj: e
        }
    })
}, SocialCalc.SettingsControls.ColorChooserReset = function() {
    SocialCalc.Popup.Reset("ColorChooser")
}, SocialCalc.SettingsControls.Controls.ColorChooser = {
    SetValue: SocialCalc.SettingsControls.ColorChooserSetValue,
    GetValue: SocialCalc.SettingsControls.ColorChooserGetValue,
    Initialize: SocialCalc.SettingsControls.ColorChooserInitialize,
    OnReset: SocialCalc.SettingsControls.ColorChooserReset,
    ChangedCallback: null
}, SocialCalc.SettingsControls.BorderSideSetValue = function(e, t, o) {
    var a, l, n, r = (SocialCalc.SettingsControls, e[t].id);
    return o ? (a = document.getElementById(r + "-onoff-bcb"), void(a && (o.val ? (a.checked = !0, a.value = o.val, n = o.val.match(/(\S+)\s+(\S+)\s+(\S.+)/), l = r + "-color", SocialCalc.Popup.SetValue(l, n[3]), SocialCalc.Popup.SetDisabled(l, !1)) : (a.checked = !1, a.value = o.val, l = r + "-color", SocialCalc.Popup.SetValue(l, ""), SocialCalc.Popup.SetDisabled(l, !0))))) : void alert(t + " no value")
}, SocialCalc.SettingsControls.BorderSideGetValue = function(e, t) {
    var o, a, l = (SocialCalc.SettingsControls, e[t].id);
    return (o = document.getElementById(l + "-onoff-bcb")) ? o.checked ? (a = SocialCalc.Popup.GetValue(l + "-color"), a = "1px solid " + (a || "rgb(0,0,0)"), {
        def: !1,
        val: a
    }) : {
        def: !1,
        val: ""
    } : void 0
}, SocialCalc.SettingsControls.BorderSideInitialize = function(e, t) {
    var o = (SocialCalc.SettingsControls, e[t].id);
    SocialCalc.Popup.Create("ColorChooser", o + "-color", {}), SocialCalc.Popup.Initialize(o + "-color", {
        attribs: {
            title: "&nbsp;",
            width: "106px",
            moveable: !0,
            changedcallback: SocialCalc.SettingsControls.PopupChangeCallback,
            panelobj: e
        }
    })
}, SocialCalc.SettingsControlOnchangeBorder = function(e) {
    var t = SocialCalc.SettingsControls,
        o = t.CurrentPanel,
        a = e.id.match(/(^.*\-)(\w+)\-(\w+)\-(\w+)$/);
    if (a) {
        var l = (a[1], a[2]),
            n = (a[3], a[4]),
            r = o[l].type;
        switch (n) {
            case "bcb":
                e.checked ? t.Controls[r].SetValue(t.CurrentPanel, l, {
                    def: !1,
                    val: e.value || "1px solid rgb(0,0,0)"
                }) : t.Controls[r].SetValue(t.CurrentPanel, l, {
                    def: !1,
                    val: ""
                })
        }
    }
}, SocialCalc.SettingsControls.Controls.BorderSide = {
    SetValue: SocialCalc.SettingsControls.BorderSideSetValue,
    GetValue: SocialCalc.SettingsControls.BorderSideGetValue,
    OnClick: SocialCalc.SettingsControls.ColorComboOnClick,
    Initialize: SocialCalc.SettingsControls.BorderSideInitialize,
    InitialData: {
        thickness: "1 pixel:1px",
        style: "Solid:solid"
    },
    ChangedCallback: null
}, SocialCalc.SettingControlReset = function() {
    var e, t = SocialCalc.SettingsControls;
    for (e in t.Controls) t.Controls[e].OnReset && t.Controls[e].OnReset(e)
}, SocialCalc.OtherSaveParts = {}, SocialCalc.CtrlSEditor = function(e) {
    var t, o;
    if (e.length > 0) t = SocialCalc.special_chars(SocialCalc.OtherSaveParts[e] || "");
    else {
        t = "Listing of Parts\n";
        for (o in SocialCalc.OtherSaveParts) t += SocialCalc.special_chars("\nPart: " + o + "\n=====\n" + SocialCalc.OtherSaveParts[o] + "\n")
    }
    var a = document.createElement("div");
    a.style.cssText = "position:absolute;z-index:500;width:300px;height:300px;left:100px;top:200px;border:1px solid black;background-color:#EEE;text-align:center;", a.id = "socialcalc-editbox", a.innerHTML = e + '<br><br><textarea id="socialcalc-editbox-textarea" style="width:250px;height:200px;">' + t + "</textarea><br><br><input type=button onclick=\"SocialCalc.CtrlSEditorDone ('socialcalc-editbox', '" + e + '\');" value="OK">', document.body.appendChild(a);
    var l = document.getElementById("socialcalc-editbox-textarea");
    l.focus(), SocialCalc.CmdGotFocus(l)
}, SocialCalc.CtrlSEditorDone = function(e, t) {
    var o = document.getElementById(e + "-textarea"),
        a = o.value;
    t.length > 0 && (a.length > 0 ? SocialCalc.OtherSaveParts[t] = a : delete SocialCalc.OtherSaveParts[t]);
    var l = document.getElementById(e);
    SocialCalc.KeyboardFocus(), l.parentNode.removeChild(l)
};
var SocialCalc;
SocialCalc || (alert("Main SocialCalc code module needed"), SocialCalc = {}), SocialCalc.TableEditor || alert("SocialCalc TableEditor code module needed"), SocialCalc.CurrentSpreadsheetViewerObject = null, SocialCalc.SpreadsheetViewer = function(e) {
        var t = SocialCalc.Constants;
        this.parentNode = null, this.spreadsheetDiv = null, this.requestedHeight = 0, this.requestedWidth = 0, this.requestedSpaceBelow = 0, this.height = 0, this.width = 0, this.viewheight = 0, this.sheet = null, this.context = null, this.editor = null, this.spreadsheetDiv = null, this.editorDiv = null, this.sortrange = "", this.idPrefix = e || "SocialCalc-", this.imagePrefix = t.defaultImagePrefix, this.statuslineheight = t.SVStatuslineheight, this.statuslineCSS = t.SVStatuslineCSS, this.sheet = new SocialCalc.Sheet, this.context = new SocialCalc.RenderContext(this.sheet), this.context.showGrid = !0, this.context.showRCHeaders = !0, this.editor = new SocialCalc.TableEditor(this.context), this.editor.noEdit = !0, this.editor.StatusCallback.statusline = {
            func: SocialCalc.SpreadsheetViewerStatuslineCallback,
            params: {}
        }, this.hasStatusLine = !0, this.statuslineHTML = '<table cellspacing="0" cellpadding="0"><tr><td width="100%" style="overflow:hidden;">{status}</td><td>&nbsp;</td></tr></table>', this.statuslineFull = !0, this.noRecalc = !0, this.repeatingMacroTimer = null, this.repeatingMacroInterval = 60, this.repeatingMacroCommands = "", SocialCalc.CurrentSpreadsheetViewerObject = this
    }, SocialCalc.SpreadsheetViewer.prototype.InitializeSpreadsheetViewer = function(e, t, o, a) {
        return SocialCalc.InitializeSpreadsheetViewer(this, e, t, o, a)
    }, SocialCalc.SpreadsheetViewer.prototype.LoadSave = function(e) {
        return SocialCalc.SpreadsheetViewerLoadSave(this, e)
    }, SocialCalc.SpreadsheetViewer.prototype.DoOnResize = function() {
        return SocialCalc.DoOnResize(this)
    }, SocialCalc.SpreadsheetViewer.prototype.SizeSSDiv = function() {
        return SocialCalc.SizeSSDiv(this)
    }, SocialCalc.SpreadsheetViewer.prototype.DecodeSpreadsheetSave = function(e) {
        return SocialCalc.SpreadsheetViewerDecodeSpreadsheetSave(this, e)
    }, SocialCalc.SpreadsheetViewer.prototype.ParseSheetSave = function(e) {
        return this.sheet.ParseSheetSave(e)
    }, SocialCalc.InitializeSpreadsheetViewer = function(e, t, o, a, l) {
        {
            var n;
            SocialCalc.Constants, SocialCalc.LocalizeString, SocialCalc.LocalizeSubstrings, e.tabs, e.views
        }
        for (e.requestedHeight = o, e.requestedWidth = a, e.requestedSpaceBelow = l, "string" == typeof t && (t = document.getElementById(t)), null == t && alert("SocialCalc.SpreadsheetControl not given parent node."), e.parentNode = t, e.spreadsheetDiv = document.createElement("div"), e.SizeSSDiv(), n = t.firstChild; null != n; n = t.firstChild) t.removeChild(n);
        t.appendChild(e.spreadsheetDiv), e.nonviewheight = e.hasStatusLine ? e.statuslineheight : 0, e.viewheight = e.height - e.nonviewheight, e.editorDiv = e.editor.CreateTableEditor(e.width, e.viewheight), e.spreadsheetDiv.appendChild(e.editorDiv), e.hasStatusLine && (e.statuslineDiv = document.createElement("div"), e.statuslineDiv.style.cssText = e.statuslineCSS, e.statuslineDiv.style.height = e.statuslineheight - (e.statuslineDiv.style.paddingTop.slice(0, -2) - 0) - (e.statuslineDiv.style.paddingBottom.slice(0, -2) - 0) + "px", e.statuslineDiv.id = e.idPrefix + "statusline", e.spreadsheetDiv.appendChild(e.statuslineDiv), e.editor.StatusCallback.statusline = {
            func: SocialCalc.SpreadsheetViewerStatuslineCallback,
            params: {
                spreadsheetobj: e
            }
        })
    }, SocialCalc.SpreadsheetViewerLoadSave = function(e, t) {
        var o, a, l, n, r = e.DecodeSpreadsheetSave(t);
        r && (r.sheet && (e.sheet.ResetSheet(), e.sheet.ParseSheetSave(t.substring(r.sheet.start, r.sheet.end))), r.edit && e.editor.LoadEditorSettings(t.substring(r.edit.start, r.edit.end)), r.startupmacro && e.editor.EditorScheduleSheetCommands(t.substring(r.startupmacro.start, r.startupmacro.end), !1, !0), r.repeatingmacro && (o = t.substring(r.repeatingmacro.start, r.repeatingmacro.end), o = o.replace("\r", ""), a = o.indexOf("\n"), a > 0 && (l = o.substring(0, a) - 0, n = l, e.repeatingMacroInterval = l, e.repeatingMacroCommands = o.substring(a + 1), n > 0 && (e.repeatingMacroTimer = window.setTimeout(SocialCalc.SpreadsheetViewerDoRepeatingMacro, 1e3 * e.repeatingMacroInterval))))), "off" == e.editor.context.sheetobj.attribs.recalc || e.noRecalc ? e.editor.ScheduleRender() : e.editor.EditorScheduleSheetCommands("recalc")
    }, SocialCalc.SpreadsheetViewerDoRepeatingMacro = function() {
        var e = SocialCalc.GetSpreadsheetViewerObject(),
            t = e.editor;
        e.repeatingMacroTimer = null, SocialCalc.SheetCommandInfo.CmdExtensionCallbacks.repeatmacro = {
            func: SocialCalc.SpreadsheetViewerRepeatMacroCommand,
            data: null
        }, t.EditorScheduleSheetCommands(e.repeatingMacroCommands)
    }, SocialCalc.SpreadsheetViewerRepeatMacroCommand = function(e, t, o, a) {
        var l = SocialCalc.GetSpreadsheetViewerObject(),
            n = a.RestOfString(),
            r = n - 0;
        r > 0 || (r = l.repeatingMacroInterval), l.repeatingMacroInterval = r, l.repeatingMacroTimer = window.setTimeout(SocialCalc.SpreadsheetViewerDoRepeatingMacro, 1e3 * l.repeatingMacroInterval)
    }, SocialCalc.SpreadsheetViewerStopRepeatingMacro = function() {
        var e = SocialCalc.GetSpreadsheetViewerObject();
        e.repeatingMacroTimer && (window.clearTimeout(e.repeatingMacroTimer), e.repeatingMacroTimer = null)
    }, SocialCalc.SpreadsheetViewerDoButtonCmd = function(e, t, o) {
        var a = o.element,
            l = o.functionobj.command,
            n = SocialCalc.GetSpreadsheetViewerObject(),
            r = n.editor;
        switch (l) {
            case "recalc":
                r.EditorScheduleSheetCommands("recalc")
        }
        a && a.blur && a.blur(), SocialCalc.KeyboardFocus()
    }, SocialCalc.LocalizeString = function(e) {
        var t = SocialCalc.LocalizeStringList[e];
        return t || (t = SocialCalc.Constants["s_loc_" + e.toLowerCase().replace(/\s/g, "_").replace(/\W/g, "X")] || e, SocialCalc.LocalizeStringList[e] = t), t
    }, SocialCalc.LocalizeStringList = {}, SocialCalc.LocalizeSubstrings = function(e) {
        var t = SocialCalc.LocalizeString;
        return e.replace(/%(loc|ssc)!(.*?)!/g, function(e, o, a) {
            return "ssc" == o ? SocialCalc.Constants[a] || alert("Missing constant: " + a) : t(a)
        })
    }, SocialCalc.GetSpreadsheetViewerObject = function() {
        var e = SocialCalc.CurrentSpreadsheetViewerObject;
        if (e) return e;
        throw "No current SpreadsheetViewer object."
    }, SocialCalc.DoOnResize = function(e) {
        var t, o = e.views,
            a = e.SizeSSDiv();
        if (a) {
            for (vname in o) t = o[vname].element, t.style.width = e.width + "px", t.style.height = e.height - e.nonviewheight + "px";
            e.editor.ResizeTableEditor(e.width, e.height - e.nonviewheight)
        }
    }, SocialCalc.SizeSSDiv = function(e) {
        var t, o, a, l, n, r = 10,
            i = 10;
        return a = !1, t = SocialCalc.GetViewportInfo(), o = SocialCalc.GetElementPosition(e.parentNode), o.bottom = 0, o.right = 0, l = e.parentNode.style, l.marginTop && (o.top += l.marginTop.slice(0, -2) - 0), l.marginBottom && (o.bottom += l.marginBottom.slice(0, -2) - 0), l.marginLeft && (o.left += l.marginLeft.slice(0, -2) - 0), l.marginRight && (o.right += l.marginRight.slice(0, -2) - 0), n = e.requestedHeight || t.height - (o.top + o.bottom + i) - (e.requestedSpaceBelow || 0), e.height != n && (e.height = n, e.spreadsheetDiv.style.height = n + "px", a = !0), n = e.requestedWidth || t.width - (o.left + o.right + r) || 700, e.width != n && (e.width = n, e.spreadsheetDiv.style.width = n + "px", a = !0), e.spreadsheetDiv.style.position = "relative", a
    }, SocialCalc.SpreadsheetViewerStatuslineCallback = function(e, t, o, a) {
        var l = a.spreadsheetobj,
            n = "";
        switch (l && l.statuslineDiv && (n = l.statuslineFull ? e.GetStatuslineString(t, o, a) : e.ecell.coord, n = l.statuslineHTML.replace(/\{status\}/, n), l.statuslineDiv.innerHTML = n), t) {
            case "cmdendnorender":
            case "calcfinished":
            case "doneposcalc":
        }
    }, SocialCalc.CmdGotFocus = function(e) {
        SocialCalc.Keyboard.passThru = e
    }, SocialCalc.SpreadsheetViewerCreateSheetHTML = function(e) {
        var t, o, a, l = "";
        return t = new SocialCalc.RenderContext(e.sheet), o = document.createElement("div"), a = t.RenderSheet(null, {
            type: "html"
        }), o.appendChild(a), delete t, l = o.innerHTML, delete a, delete o, l
    }, SocialCalc.SpreadsheetViewerDecodeSpreadsheetSave = function(e, t) {
        var o, a, l, n, r, i, c, s, d, u, d, p, f = {},
            h = [],
            m = /[^\n]\r[^\n]/;
        if (m.test(t) && (t = t.replace(/([^\n])\r([^\n])/g, "$1\r\n$2")), o = t.search(/^MIME-Version:\s1\.0/im), 0 > o) return f;
        if (a = /^Content-Type:\s*multipart\/mixed;\s*boundary=(\S+)/gim, a.lastIndex = o, l = a.exec(t), a.lastIndex <= 0) return f;
        if (n = l[1], r = new RegExp("^--" + n + "(?:\r\n|\n)", "mg"), r.lastIndex = a.lastIndex, l = r.exec(t), i = /(?:\r\n|\n)(?:\r\n|\n)/gm, i.lastIndex = r.lastIndex, l = i.exec(t), !l) return f;
        if (c = i.lastIndex, r.lastIndex = c, l = r.exec(t), !l) return f;
        for (s = l.index, d = t.substring(c, s).split(/\r\n|\n/), u = 0; u < d.length; u++) switch (line = d[u], p = line.split(":"), p[0]) {
            case "version":
                break;
            case "part":
                h.push(p[1])
        }
        for (pnum = 0; pnum < h.length; pnum++) {
            if (i.lastIndex = s, l = i.exec(t), !l) return f;
            if (c = i.lastIndex, pnum == h.length - 1 && (r = new RegExp("^--" + n + "--$", "mg")), r.lastIndex = c, l = r.exec(t), !l) return f;
            s = l.index, f[h[pnum]] = {
                start: c,
                end: s
            }
        }
        return f
    },
    function() {
        Class = function(classDefinition, classWrapper) {
            if (!classDefinition) throw "Class requires a class definition string as its first argument";
            if (!classWrapper) throw "Class requires a class wrapper function as its second argument";
            if (!classDefinition.match(/^([\w\.]+)(?:\(\s*([\w\.]+)\s*\))?(?:\s+(.*?)\s*)?$/)) throw "Can't parse Class Definition: '" + classDefinition + "'";
            var className = RegExp.$1,
                baseClassName = RegExp.$2 || "",
                options = [];
            RegExp.$3 && (options = RegExp.$3.split(/\s+/));
            for (var incValues = [], strict = !0, i = 0, l = options.length; l > i; i++) {
                var option = options[i];
                "-nostrict" == option && (strict = !1), option.match(/^-inc=(.+)$/) && (incValues = RegExp.$1.split(","))
            }
            for (var parts = className.split("."), klass = Class.global, i = 0; i < parts.length; i++) klass[parts[i]] || (klass[parts[i]] = function() {
                try {
                    this.init()
                } catch (e) {}
            }), klass = klass[parts[i]];
            klass.className = className, klass.isa = function(baseName) {
                klass.baseClassName = baseName, baseName && (klass.prototype = eval("new " + baseName + "()"), klass.prototype.superFunc = function(name) {
                    return eval(baseName).prototype[name]
                })
            }, klass.isa(baseClassName), klass.global = Class.global, klass.addGlobal = function() {
                return this.newGlobals++, Class.global
            }, klass.extend = function(e) {
                if ("object" != typeof e) throw "extend requires an object of name:value pairs";
                for (var t in e) klass.prototype[t] = e[t]
            };
            for (var ii = 0, ll = incValues.length; ll > ii; ii++) {
                var value = incValues[ii];
                incValues[ii] = "proto" == value ? klass.prototype : "this" == value ? klass : Class.global[value]
            }
            return strict ? Class.eval_strict(classWrapper, klass, incValues) : classWrapper.apply(klass, incValues), klass
        }
    }(), Class.global = this, Class.eval_strict = function(e, t, o) {
        var a, l = 0;
        for (var n in Class.global) l++, a = n;
        t.newGlobals = 0, e.apply(t, o);
        var r = 0;
        for (var n in Class.global) r++;
        if (l + t.newGlobals != r) throw "Class '" + t.className + "' defines " + (r - l) + " new global JavaScript variables without using this.addGlobal()";
        delete t.newGlobals
    }, Class("Document.Emitter", function() {
        var proto = this.prototype;
        proto.className = "Document.Emitter", proto.instantiate = function() {
            return eval("new " + this.className + "()")
        }, proto.init = function() {
            this.output = ""
        }, proto.content = function() {
            return this.output
        }, proto.insert = function(e) {
            this.output += e.output
        }
    }), Class("Document.Emitter.HTML(Document.Emitter)", function() {
        var e = this.prototype;
        e.className = "Document.Emitter.HTML", e.begin_node = function(e) {
            var t = e.type;
            switch (t) {
                case "asis":
                case "line":
                    return;
                case "br":
                case "hr":
                    return void(this.output += "<" + t + " />");
                case "html":
                    return void(this.output += '<span class="wafl">Raw HTML section. Edit in Wiki Text mode.</span>');
                case "waflparagraph":
                case "waflphrase":
                case "im":
                    if (e._wafl.match(/^image:\s*(\S+)(?:\s+size=(\w+))?/)) {
                        var o = "if (typeof(ss) != 'undefined' && ss.editor) { var recalc = function () { try { ss.editor.DoPositionCalculations() } catch (e) { setTimeout(recalc, 500) } }; recalc() } if (!window.image_dimension_cache) window.image_dimension_cache = {};window.image_dimension_cache['/data/wafl/" + e._label.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "\\'").replace(/\\/g, "\\\\") + "'] = [ this.offsetWidth, this.offsetHeight ]; this.style.width = this.offsetWidth + 'px'; this.style.height = this.offsetHeight + 'px'",
                            a = RegExp.$1,
                            l = RegExp.$2;
                        switch (l) {
                            case "small":
                                l = "100";
                                break;
                            case "medium":
                                l = "300";
                                break;
                            case "large":
                                l = "600"
                        }
                        return l && (l = ' width="' + l + '"'), void(this.output += '<img src="' + a.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '" onload="' + o + '"' + l + " />")
                    }
                    return void(this.output += '<span class="wafl">' + e._label.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "\\'").replace(/\\/g, "\\\\") + "</span>");
                case "a":
                case "wikilink":
                    return void(this.output += '<a href="' + encodeURI(e._href) + '">');
                case "file":
                    return void(this.output += '<a title="(network resource)" href="' + encodeURI(e._href) + '">');
                case "ul":
                case "ol":
                case "table":
                case "tr":
                    return void(this.output += "<" + t + ">\n");
                default:
                    return void(this.output += "<" + t + ">")
            }
        }, e.end_node = function(e) {
            var t = e.type;
            switch (t) {
                case "asis":
                case "br":
                case "hr":
                case "html":
                case "waflparagraph":
                case "waflphrase":
                case "im":
                    return;
                case "line":
                    return void(this.output += "<br />");
                case "file":
                case "wikilink":
                    return void(this.output += "</a>");
                default:
                    return void(this.output += 0 == t.search(/^(?:p|ul|ol|li|h\d|table|tr|td)$/) ? "</" + t + ">\n" : "</" + t + ">")
            }
        }, e.text_node = function(e) {
            this.output += e.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        }
    }), Class("Document.Parser", function() {
        var proto = this.prototype;
        proto.className = "Document.Parser", proto.init = function() {}, proto.parse = function(e, t) {
            return this.input = -1 == e.search(/\n$/) ? e + "\n" : e, t && (this.receiver = t), this.receiver.init(), this.grammar = this.create_grammar(), this.parse_blocks("top"), this.receiver.content()
        }, proto.create_grammar = function() {
            throw "Please define create_grammar in a derived class of Document.Parser."
        }, proto.parse_blocks = function(e) {
            var t = this.grammar[e].blocks;
            if (t)
                for (; this.input.length;) {
                    for (var o = this.input.length, a = 0; a < t.length; a++) {
                        var l = t[a],
                            n = this.find_match("matched_block", l);
                        if (n) {
                            this.input = this.input.substr(n.end), this.handle_match(l, n);
                            break
                        }
                    }
                    if (this.input.length >= o) throw this.classname + ": Reduction error for:\n" + this.input + "\n" + JSON.stringify(this)
                }
        }, proto.handle_match = function(e, t) {
            var o = this.grammar[e],
                a = o.blocks ? "parse_blocks" : "parse_phrases";
            this.subparse(a, t, e, o.filter)
        }, proto.find_match = function(e, t) {
            var o = this.grammar[t].match;
            if (!o) throw "no regexp for type: " + t;
            var a = this.input.match(o);
            if (a) {
                var l = this[e].call(this, a, this.grammar[t].lookbehind);
                return l.type = this.grammar[t].type || t, l
            }
        }, proto.parse_phrases = function(e) {
            var t = this.grammar[e].phrases;
            if (!t) return void this.receiver.text_node(this.input || "");
            for (; this.input.length;) {
                for (var o = null, a = 0; a < t.length; a++) {
                    var l = t[a],
                        n = this.find_match("matched_phrase", l);
                    if (n && (!o || n.begin < o.begin) && (o = n, 0 == o.begin)) break
                }
                if (!o) {
                    this.receiver.text_node(this.input || "");
                    break
                }
                0 != o.begin && this.receiver.text_node(this.input.substr(0, o.begin) || ""), this.input = this.input.substr(o.end), this.handle_match(o.type, o)
            }
        }, proto.subparse = function(func, match, type, filter) {
            match.type = this.grammar[type].type, null == match.type && (match.type = type);
            var filtered_text = filter ? filter(match) : null;
            match.type && this.receiver.begin_node(match);
            var parser = eval("new " + this.className + "()");
            parser.input = null == filtered_text ? match.text : filtered_text, parser.grammar = this.grammar, parser.receiver = this.receiver.instantiate(), parser[func].call(parser, type), this.receiver.insert(parser.receiver), match.type && this.receiver.end_node(match)
        }, proto.matched_block = function(e) {
            return {
                begin: e.index,
                text: e[1],
                end: e[0].length,
                1: e[2],
                2: e[3],
                3: e[4]
            }
        }, proto.matched_phrase = function(e, t) {
            if (t) {
                var o = e[2],
                    a = this.input.indexOf(e[1]);
                return {
                    text: o,
                    begin: a,
                    end: a + e[1].length,
                    1: RegExp.$2,
                    2: RegExp.$3,
                    3: RegExp.$4
                }
            }
            return {
                begin: e.index,
                text: e[1],
                end: e.index + e[0].length,
                1: e[2],
                2: e[3],
                3: e[4]
            }
        }
    }), Class("Document.Parser.Wikitext(Document.Parser)", function() {
        var e = this.prototype;
        e.className = "Document.Parser.Wikitext", e.init = function() {}, e.create_grammar = function() {
            var e = ["pre", "html", "hr", "hx", "waflparagraph", "ul", "ol", "blockquote", "p", "empty", "else"],
                t = ["waflphrase", "asis", "wikilink", "wikilink2", "a", "im", "mail", "file", "tt", "b", "i", "del", "a"],
                o = function(e, o) {
                    return o = "\\" + (o || e), e = "\\" + e, {
                        match: new RegExp("(?:^|[^" + e + "\\w])(" + e + "(?=\\S)(?!" + o + ")(.*?)" + o + "(?=[^" + o + "\\w]|$))"),
                        phrases: "\\`" == e ? null : t,
                        lookbehind: !0
                    }
                },
                a = {
                    yahoo: "yahoo",
                    ymsgr: "yahoo",
                    callto: "callto",
                    callme: "callto",
                    skype: "callto",
                    aim: "aim"
                },
                l = {
                    aim: "AIM: %1",
                    yahoo: "Yahoo: %1",
                    callto: "Skype: %1"
                },
                n = "(\\b(";
            for (var r in a) n += r + "|";
            n = n.replace(/\|$/, ")\\:([^\\s\\>\\)]+))");
            var i = function(e, t) {
                var o = new RegExp("(^|\n)" + t + " *", "g");
                return {
                    match: new RegExp("^(" + e + "+ .*\n(?:[*-+#]+ .*\n)*)(?:s*\n)?"),
                    blocks: ["ul", "ol", "subl", "li"],
                    filter: function(e) {
                        return e.text.replace(o, "$1")
                    }
                }
            };
            return {
                _all_blocks: e,
                _all_phrases: t,
                top: {
                    blocks: e
                },
                ol: i("#", "[*#]"),
                ul: i("[-+*]", "[-+*#]"),
                blockquote: {
                    match: /^((?:>[^\n]*\n)+)(?:\s*\n)?/,
                    blocks: ["blockquote", "line"],
                    filter: function(e) {
                        return e.text.replace(/(^|\n)>\ ?/g, "$1")
                    }
                },
                line: {
                    match: /([^\n]*)\n/,
                    phrases: t
                },
                subl: {
                    type: "li",
                    match: /^(([^\n]*)\n[*#]+\ [^\n]*\n(?:[*#]+\ [^\n]*\n)*)(?:\s*\n)?/,
                    blocks: ["ul", "ol", "li2"]
                },
                li: {
                    match: /([^\n]*)\n/,
                    phrases: t
                },
                li2: {
                    type: "",
                    match: /([^\n]*)\n/,
                    phrases: t
                },
                html: {
                    match: /^(\.html\ *\n(?:[^\n]*\n)*?\.html)\ *\n(?:\s*\n)?/,
                    filter: function(e) {
                        return e._html = e.text, ""
                    }
                },
                pre: {
                    match: /^\.pre\ *\n((?:[^\n]*\n)*?)\.pre\ *\n(?:\s*\n)?/
                },
                hr: {
                    match: /^--+(?:\s*\n)?/
                },
                hx: {
                    match: /^((\^+) *([^\n]*?)(\s+=+)?\s*?\n+)/,
                    phrases: t,
                    filter: function(e) {
                        return e.type = "h" + e[1].length, e[2]
                    }
                },
                p: {
                    match: /^((?:(?!(?:(?:\^+|\#+|\*+|\-+) |\>|\.\w+\s*\n|\{[^\}]+\}\s*\n))[^\n]*\S[^\n]*\n)+(?:(?=^|\n)\s*\n)*)/,
                    phrases: t,
                    filter: function(e) {
                        return e.text.replace(/\n$/, "")
                    }
                },
                empty: {
                    match: /^(\s*\n)/,
                    filter: function(e) {
                        e.type = ""
                    }
                },
                "else": {
                    match: /^(([^\n]*)\n)/,
                    phrases: [],
                    filter: function(e) {
                        e.type = "p"
                    }
                },
                waflparagraph: {
                    match: /^\{(.*)\}[\ \t]*\n(?:\s*\n)?/,
                    filter: function(e) {
                        return e._wafl = e._label = e.text, ""
                    }
                },
                waflphrase: {
                    match: /(?:^|[\s\-])((?:"([^\n]+?)")?\{([\w-]+(?=[\:\ \}])(?:\s*:)?\s*[^\n]*?\s*)\}(?=[\W_]|$))/,
                    filter: function(e) {
                        return e._wafl = e[2], e._label = e[1] || e._wafl, ""
                    },
                    lookbehind: !0
                },
                asis: {
                    match: /(\{\{([^\n]*?)\}\}(\}*))/,
                    filter: function(e) {
                        return e.type = "", e[1] + e[2]
                    }
                },
                wikilink: {
                    match: /(?:^|[_\W])(\[()(?=[^\s\[\]])(.*?)\](?=[_\W]|$))/,
                    filter: function(e) {
                        return e._href = "?" + e[2], e.text || e[2]
                    },
                    lookbehind: !0
                },
                wikilink2: {
                    type: "wikilink",
                    match: /(?:"([^"]*)"\s*)(\[(?=[^\s\[\]])(.*?)\](?=[_\W]|$))/,
                    filter: function(e) {
                        return e._href = "?" + e[2], e[1] || e[2]
                    }
                },
                a: {
                    match: /((?:"([^"]*)"\s*)?<?((?:http|https|ftp|irc|file):(?:\/\/)?[\;\/\?\:\@\&\=\+\$\,\[\]\#A-Za-z0-9\-\_\.\!\~\*\'\(\)]+[A-Za-z0-9\/#])>?)/,
                    filter: function(e) {
                        return e._href = e[2], e[1] || e[2]
                    }
                },
                file: {
                    match: /((?:"([^"]*)")?<(\\\\[^\s\>\)]+)>)/,
                    filter: function(e) {
                        var t = e[2].replace(/^\\\\/, "");
                        return e._href = "file://" + t.replace(/\\/g, "/"), e[1] || t
                    }
                },
                im: {
                    match: new RegExp(n),
                    filter: function(e) {
                        return e._wafl = e[1] + ": " + e[2], e._label = (l[a[e[1]]] || "%1").replace(/%1/g, e[2]), ""
                    }
                },
                mail: {
                    match: /([\w+%\-\.]+@(?:[\w\-]+\.)+[\w\-]+)/,
                    filter: function(e) {
                        e.type = "a", e._href = "mailto:" + e.text.replace(/%/g, "%25")
                    }
                },
                tt: o("`"),
                b: o("*"),
                i: o("_"),
                del: o("-")
            }
        }
    }), ! function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function o(e) {
            var t = e.length,
                o = nt.type(e);
            return "function" === o || nt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === o || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
        }

        function a(e, t, o) {
            if (nt.isFunction(t)) return nt.grep(e, function(e, a) {
                return !!t.call(e, a, e) !== o
            });
            if (t.nodeType) return nt.grep(e, function(e) {
                return e === t !== o
            });
            if ("string" == typeof t) {
                if (ft.test(t)) return nt.filter(t, e, o);
                t = nt.filter(t, e)
            }
            return nt.grep(e, function(e) {
                return nt.inArray(e, t) >= 0 !== o
            })
        }

        function l(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function n(e) {
            var t = yt[e] = {};
            return nt.each(e.match(bt) || [], function(e, o) {
                t[o] = !0
            }), t
        }

        function r() {
            mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", i, !1), e.removeEventListener("load", i, !1)) : (mt.detachEvent("onreadystatechange", i), e.detachEvent("onload", i))
        }

        function i() {
            (mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (r(), nt.ready())
        }

        function c(e, t, o) {
            if (void 0 === o && 1 === e.nodeType) {
                var a = "data-" + t.replace(Ft, "-$1").toLowerCase();
                if (o = e.getAttribute(a), "string" == typeof o) {
                    try {
                        o = "true" === o ? !0 : "false" === o ? !1 : "null" === o ? null : +o + "" === o ? +o : kt.test(o) ? nt.parseJSON(o) : o
                    } catch (l) {}
                    nt.data(e, t, o)
                } else o = void 0
            }
            return o
        }

        function s(e) {
            var t;
            for (t in e)
                if (("data" !== t || !nt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function d(e, t, o, a) {
            if (nt.acceptData(e)) {
                var l, n, r = nt.expando,
                    i = e.nodeType,
                    c = i ? nt.cache : e,
                    s = i ? e[r] : e[r] && r;
                if (s && c[s] && (a || c[s].data) || void 0 !== o || "string" != typeof t) return s || (s = i ? e[r] = X.pop() || nt.guid++ : r), c[s] || (c[s] = i ? {} : {
                    toJSON: nt.noop
                }), ("object" == typeof t || "function" == typeof t) && (a ? c[s] = nt.extend(c[s], t) : c[s].data = nt.extend(c[s].data, t)), n = c[s], a || (n.data || (n.data = {}), n = n.data), void 0 !== o && (n[nt.camelCase(t)] = o), "string" == typeof t ? (l = n[t], null == l && (l = n[nt.camelCase(t)])) : l = n, l
            }
        }

        function u(e, t, o) {
            if (nt.acceptData(e)) {
                var a, l, n = e.nodeType,
                    r = n ? nt.cache : e,
                    i = n ? e[nt.expando] : nt.expando;
                if (r[i]) {
                    if (t && (a = o ? r[i] : r[i].data)) {
                        nt.isArray(t) ? t = t.concat(nt.map(t, nt.camelCase)) : t in a ? t = [t] : (t = nt.camelCase(t), t = t in a ? [t] : t.split(" ")), l = t.length;
                        for (; l--;) delete a[t[l]];
                        if (o ? !s(a) : !nt.isEmptyObject(a)) return
                    }(o || (delete r[i].data, s(r[i]))) && (n ? nt.cleanData([e], !0) : at.deleteExpando || r != r.window ? delete r[i] : r[i] = null)
                }
            }
        }

        function p() {
            return !0
        }

        function f() {
            return !1
        }

        function h() {
            try {
                return mt.activeElement
            } catch (e) {}
        }

        function m(e) {
            var t = Ot.split("|"),
                o = e.createDocumentFragment();
            if (o.createElement)
                for (; t.length;) o.createElement(t.pop());
            return o
        }

        function C(e, t) {
            var o, a, l = 0,
                n = typeof e.getElementsByTagName !== Tt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Tt ? e.querySelectorAll(t || "*") : void 0;
            if (!n)
                for (n = [], o = e.childNodes || e; null != (a = o[l]); l++) !t || nt.nodeName(a, t) ? n.push(a) : nt.merge(n, C(a, t));
            return void 0 === t || t && nt.nodeName(e, t) ? nt.merge([e], n) : n
        }

        function g(e) {
            At.test(e.type) && (e.defaultChecked = e.checked)
        }

        function S(e, t) {
            return nt.nodeName(e, "table") && nt.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function v(e) {
            return e.type = (null !== nt.find.attr(e, "type")) + "/" + e.type, e
        }

        function b(e) {
            var t = Xt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function y(e, t) {
            for (var o, a = 0; null != (o = e[a]); a++) nt._data(o, "globalEval", !t || nt._data(t[a], "globalEval"))
        }

        function w(e, t) {
            if (1 === t.nodeType && nt.hasData(e)) {
                var o, a, l, n = nt._data(e),
                    r = nt._data(t, n),
                    i = n.events;
                if (i) {
                    delete r.handle, r.events = {};
                    for (o in i)
                        for (a = 0, l = i[o].length; l > a; a++) nt.event.add(t, o, i[o][a])
                }
                r.data && (r.data = nt.extend({}, r.data))
            }
        }

        function x(e, t) {
            var o, a, l;
            if (1 === t.nodeType) {
                if (o = t.nodeName.toLowerCase(), !at.noCloneEvent && t[nt.expando]) {
                    l = nt._data(t);
                    for (a in l.events) nt.removeEvent(t, a, l.handle);
                    t.removeAttribute(nt.expando)
                }
                "script" === o && t.text !== e.text ? (v(t).text = e.text, b(t)) : "object" === o ? (t.parentNode && (t.outerHTML = e.outerHTML), at.html5Clone && e.innerHTML && !nt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === o && At.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === o ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === o || "textarea" === o) && (t.defaultValue = e.defaultValue)
            }
        }

        function T(t, o) {
            var a = nt(o.createElement(t)).appendTo(o.body),
                l = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(a[0]).display : nt.css(a[0], "display");
            return a.detach(), l
        }

        function k(e) {
            var t = mt,
                o = eo[e];
            return o || (o = T(e, t), "none" !== o && o || (Qt = (Qt || nt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Qt[0].contentWindow || Qt[0].contentDocument).document, t.write(), t.close(), o = T(e, t), Qt.detach()), eo[e] = o), o
        }

        function F(e, t) {
            return {
                get: function() {
                    var o = e();
                    return null != o ? o ? void delete this.get : (this.get = t).apply(this, arguments) : void 0
                }
            }
        }

        function E(e, t) {
            if (t in e) return t;
            for (var o = t.charAt(0).toUpperCase() + t.slice(1), a = t, l = ho.length; l--;)
                if (t = ho[l] + o, t in e) return t;
            return a
        }

        function _(e, t) {
            for (var o, a, l, n = [], r = 0, i = e.length; i > r; r++) a = e[r], a.style && (n[r] = nt._data(a, "olddisplay"), o = a.style.display, t ? (n[r] || "none" !== o || (a.style.display = ""), "" === a.style.display && Pt(a) && (n[r] = nt._data(a, "olddisplay", k(a.nodeName)))) : n[r] || (l = Pt(a), (o && "none" !== o || !l) && nt._data(a, "olddisplay", l ? o : nt.css(a, "display"))));
            for (r = 0; i > r; r++) a = e[r], a.style && (t && "none" !== a.style.display && "" !== a.style.display || (a.style.display = t ? n[r] || "" : "none"));
            return e
        }

        function P(e, t, o) {
            var a = so.exec(t);
            return a ? Math.max(0, a[1] - (o || 0)) + (a[2] || "px") : t
        }

        function R(e, t, o, a, l) {
            for (var n = o === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; 4 > n; n += 2) "margin" === o && (r += nt.css(e, o + _t[n], !0, l)), a ? ("content" === o && (r -= nt.css(e, "padding" + _t[n], !0, l)), "margin" !== o && (r -= nt.css(e, "border" + _t[n] + "Width", !0, l))) : (r += nt.css(e, "padding" + _t[n], !0, l), "padding" !== o && (r += nt.css(e, "border" + _t[n] + "Width", !0, l)));
            return r
        }

        function A(e, t, o) {
            var a = !0,
                l = "width" === t ? e.offsetWidth : e.offsetHeight,
                n = to(e),
                r = at.boxSizing() && "border-box" === nt.css(e, "boxSizing", !1, n);
            if (0 >= l || null == l) {
                if (l = oo(e, t, n), (0 > l || null == l) && (l = e.style[t]), lo.test(l)) return l;
                a = r && (at.boxSizingReliable() || l === e.style[t]), l = parseFloat(l) || 0
            }
            return l + R(e, t, o || (r ? "border" : "content"), a, n) + "px"
        }

        function D(e, t, o, a, l) {
            return new D.prototype.init(e, t, o, a, l)
        }

        function L() {
            return setTimeout(function() {
                mo = void 0
            }), mo = nt.now()
        }

        function N(e, t) {
            var o, a = {
                    height: e
                },
                l = 0;
            for (t = t ? 1 : 0; 4 > l; l += 2 - t) o = _t[l], a["margin" + o] = a["padding" + o] = e;
            return t && (a.opacity = a.width = e), a
        }

        function M(e, t, o) {
            for (var a, l = (yo[t] || []).concat(yo["*"]), n = 0, r = l.length; r > n; n++)
                if (a = l[n].call(o, t, e)) return a
        }

        function I(e, t, o) {
            var a, l, n, r, i, c, s, d, u = this,
                p = {},
                f = e.style,
                h = e.nodeType && Pt(e),
                m = nt._data(e, "fxshow");
            o.queue || (i = nt._queueHooks(e, "fx"), null == i.unqueued && (i.unqueued = 0, c = i.empty.fire, i.empty.fire = function() {
                i.unqueued || c()
            }), i.unqueued++, u.always(function() {
                u.always(function() {
                    i.unqueued--, nt.queue(e, "fx").length || i.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (o.overflow = [f.overflow, f.overflowX, f.overflowY], s = nt.css(e, "display"), d = k(e.nodeName), "none" === s && (s = d), "inline" === s && "none" === nt.css(e, "float") && (at.inlineBlockNeedsLayout && "inline" !== d ? f.zoom = 1 : f.display = "inline-block")), o.overflow && (f.overflow = "hidden", at.shrinkWrapBlocks() || u.always(function() {
                f.overflow = o.overflow[0], f.overflowX = o.overflow[1], f.overflowY = o.overflow[2]
            }));
            for (a in t)
                if (l = t[a], go.exec(l)) {
                    if (delete t[a], n = n || "toggle" === l, l === (h ? "hide" : "show")) {
                        if ("show" !== l || !m || void 0 === m[a]) continue;
                        h = !0
                    }
                    p[a] = m && m[a] || nt.style(e, a)
                }
            if (!nt.isEmptyObject(p)) {
                m ? "hidden" in m && (h = m.hidden) : m = nt._data(e, "fxshow", {}), n && (m.hidden = !h), h ? nt(e).show() : u.done(function() {
                    nt(e).hide()
                }), u.done(function() {
                    var t;
                    nt._removeData(e, "fxshow");
                    for (t in p) nt.style(e, t, p[t])
                });
                for (a in p) r = M(h ? m[a] : 0, a, u), a in m || (m[a] = r.start, h && (r.end = r.start, r.start = "width" === a || "height" === a ? 1 : 0))
            }
        }

        function O(e, t) {
            var o, a, l, n, r;
            for (o in e)
                if (a = nt.camelCase(o), l = t[a], n = e[o], nt.isArray(n) && (l = n[1], n = e[o] = n[0]), o !== a && (e[a] = n, delete e[o]), r = nt.cssHooks[a], r && "expand" in r) {
                    n = r.expand(n), delete e[a];
                    for (o in n) o in e || (e[o] = n[o], t[o] = l)
                } else t[a] = l
        }

        function B(e, t, o) {
            var a, l, n = 0,
                r = bo.length,
                i = nt.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (l) return !1;
                    for (var t = mo || L(), o = Math.max(0, s.startTime + s.duration - t), a = o / s.duration || 0, n = 1 - a, r = 0, c = s.tweens.length; c > r; r++) s.tweens[r].run(n);
                    return i.notifyWith(e, [s, n, o]), 1 > n && c ? o : (i.resolveWith(e, [s]), !1)
                },
                s = i.promise({
                    elem: e,
                    props: nt.extend({}, t),
                    opts: nt.extend(!0, {
                        specialEasing: {}
                    }, o),
                    originalProperties: t,
                    originalOptions: o,
                    startTime: mo || L(),
                    duration: o.duration,
                    tweens: [],
                    createTween: function(t, o) {
                        var a = nt.Tween(e, s.opts, t, o, s.opts.specialEasing[t] || s.opts.easing);
                        return s.tweens.push(a), a
                    },
                    stop: function(t) {
                        var o = 0,
                            a = t ? s.tweens.length : 0;
                        if (l) return this;
                        for (l = !0; a > o; o++) s.tweens[o].run(1);
                        return t ? i.resolveWith(e, [s, t]) : i.rejectWith(e, [s, t]), this
                    }
                }),
                d = s.props;
            for (O(d, s.opts.specialEasing); r > n; n++)
                if (a = bo[n].call(s, e, d, s.opts)) return a;
            return nt.map(d, M, s), nt.isFunction(s.opts.start) && s.opts.start.call(e, s), nt.fx.timer(nt.extend(c, {
                elem: e,
                anim: s,
                queue: s.opts.queue
            })), s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always)
        }

        function z(e) {
            return function(t, o) {
                "string" != typeof t && (o = t, t = "*");
                var a, l = 0,
                    n = t.toLowerCase().match(bt) || [];
                if (nt.isFunction(o))
                    for (; a = n[l++];) "+" === a.charAt(0) ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(o)) : (e[a] = e[a] || []).push(o)
            }
        }

        function H(e, t, o, a) {
            function l(i) {
                var c;
                return n[i] = !0, nt.each(e[i] || [], function(e, i) {
                    var s = i(t, o, a);
                    return "string" != typeof s || r || n[s] ? r ? !(c = s) : void 0 : (t.dataTypes.unshift(s), l(s), !1)
                }), c
            }
            var n = {},
                r = e === $o;
            return l(t.dataTypes[0]) || !n["*"] && l("*")
        }

        function U(e, t) {
            var o, a, l = nt.ajaxSettings.flatOptions || {};
            for (a in t) void 0 !== t[a] && ((l[a] ? e : o || (o = {}))[a] = t[a]);
            return o && nt.extend(!0, e, o), e
        }

        function j(e, t, o) {
            for (var a, l, n, r, i = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), void 0 === l && (l = e.mimeType || t.getResponseHeader("Content-Type"));
            if (l)
                for (r in i)
                    if (i[r] && i[r].test(l)) {
                        c.unshift(r);
                        break
                    }
            if (c[0] in o) n = c[0];
            else {
                for (r in o) {
                    if (!c[0] || e.converters[r + " " + c[0]]) {
                        n = r;
                        break
                    }
                    a || (a = r)
                }
                n = n || a
            }
            return n ? (n !== c[0] && c.unshift(n), o[n]) : void 0
        }

        function V(e, t, o, a) {
            var l, n, r, i, c, s = {},
                d = e.dataTypes.slice();
            if (d[1])
                for (r in e.converters) s[r.toLowerCase()] = e.converters[r];
            for (n = d.shift(); n;)
                if (e.responseFields[n] && (o[e.responseFields[n]] = t), !c && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = n, n = d.shift())
                    if ("*" === n) n = c;
                    else if ("*" !== c && c !== n) {
                if (r = s[c + " " + n] || s["* " + n], !r)
                    for (l in s)
                        if (i = l.split(" "), i[1] === n && (r = s[c + " " + i[0]] || s["* " + i[0]])) {
                            r === !0 ? r = s[l] : s[l] !== !0 && (n = i[0], d.unshift(i[1]));
                            break
                        }
                if (r !== !0)
                    if (r && e["throws"]) t = r(t);
                    else try {
                        t = r(t)
                    } catch (u) {
                        return {
                            state: "parsererror",
                            error: r ? u : "No conversion from " + c + " to " + n
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function G(e, t, o, a) {
            var l;
            if (nt.isArray(t)) nt.each(t, function(t, l) {
                o || qo.test(e) ? a(e, l) : G(e + "[" + ("object" == typeof l ? t : "") + "]", l, o, a)
            });
            else if (o || "object" !== nt.type(t)) a(e, t);
            else
                for (l in t) G(e + "[" + l + "]", t[l], o, a)
        }

        function $() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function W() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function K(e) {
            return nt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var X = [],
            q = X.slice,
            Y = X.concat,
            J = X.push,
            Z = X.indexOf,
            Q = {},
            et = Q.toString,
            tt = Q.hasOwnProperty,
            ot = "".trim,
            at = {},
            lt = "1.11.0",
            nt = function(e, t) {
                return new nt.fn.init(e, t)
            },
            rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            it = /^-ms-/,
            ct = /-([\da-z])/gi,
            st = function(e, t) {
                return t.toUpperCase()
            };
        nt.fn = nt.prototype = {
            jquery: lt,
            constructor: nt,
            selector: "",
            length: 0,
            toArray: function() {
                return q.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : q.call(this)
            },
            pushStack: function(e) {
                var t = nt.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return nt.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(nt.map(this, function(t, o) {
                    return e.call(t, o, t)
                }))
            },
            slice: function() {
                return this.pushStack(q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    o = +e + (0 > e ? t : 0);
                return this.pushStack(o >= 0 && t > o ? [this[o]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: J,
            sort: X.sort,
            splice: X.splice
        }, nt.extend = nt.fn.extend = function() {
            var e, t, o, a, l, n, r = arguments[0] || {},
                i = 1,
                c = arguments.length,
                s = !1;
            for ("boolean" == typeof r && (s = r, r = arguments[i] || {}, i++), "object" == typeof r || nt.isFunction(r) || (r = {}), i === c && (r = this, i--); c > i; i++)
                if (null != (l = arguments[i]))
                    for (a in l) e = r[a], o = l[a], r !== o && (s && o && (nt.isPlainObject(o) || (t = nt.isArray(o))) ? (t ? (t = !1, n = e && nt.isArray(e) ? e : []) : n = e && nt.isPlainObject(e) ? e : {}, r[a] = nt.extend(s, n, o)) : void 0 !== o && (r[a] = o));
            return r
        }, nt.extend({
            expando: "jQuery" + (lt + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === nt.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === nt.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== nt.type(e) || e.nodeType || nt.isWindow(e)) return !1;
                try {
                    if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (o) {
                    return !1
                }
                if (at.ownLast)
                    for (t in e) return tt.call(e, t);
                for (t in e);
                return void 0 === t || tt.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[et.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && nt.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(it, "ms-").replace(ct, st)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, a) {
                var l, n = 0,
                    r = e.length,
                    i = o(e);
                if (a) {
                    if (i)
                        for (; r > n && (l = t.apply(e[n], a), l !== !1); n++);
                    else
                        for (n in e)
                            if (l = t.apply(e[n], a), l === !1) break
                } else if (i)
                    for (; r > n && (l = t.call(e[n], n, e[n]), l !== !1); n++);
                else
                    for (n in e)
                        if (l = t.call(e[n], n, e[n]), l === !1) break; return e
            },
            trim: ot && !ot.call("﻿ ") ? function(e) {
                return null == e ? "" : ot.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(rt, "")
            },
            makeArray: function(e, t) {
                var a = t || [];
                return null != e && (o(Object(e)) ? nt.merge(a, "string" == typeof e ? [e] : e) : J.call(a, e)), a
            },
            inArray: function(e, t, o) {
                var a;
                if (t) {
                    if (Z) return Z.call(t, e, o);
                    for (a = t.length, o = o ? 0 > o ? Math.max(0, a + o) : o : 0; a > o; o++)
                        if (o in t && t[o] === e) return o
                }
                return -1
            },
            merge: function(e, t) {
                for (var o = +t.length, a = 0, l = e.length; o > a;) e[l++] = t[a++];
                if (o !== o)
                    for (; void 0 !== t[a];) e[l++] = t[a++];
                return e.length = l, e
            },
            grep: function(e, t, o) {
                for (var a, l = [], n = 0, r = e.length, i = !o; r > n; n++) a = !t(e[n], n), a !== i && l.push(e[n]);
                return l
            },
            map: function(e, t, a) {
                var l, n = 0,
                    r = e.length,
                    i = o(e),
                    c = [];
                if (i)
                    for (; r > n; n++) l = t(e[n], n, a), null != l && c.push(l);
                else
                    for (n in e) l = t(e[n], n, a), null != l && c.push(l);
                return Y.apply([], c)
            },
            guid: 1,
            proxy: function(e, t) {
                var o, a, l;
                return "string" == typeof t && (l = e[t], t = e, e = l), nt.isFunction(e) ? (o = q.call(arguments, 2), a = function() {
                    return e.apply(t || this, o.concat(q.call(arguments)))
                }, a.guid = e.guid = e.guid || nt.guid++, a) : void 0
            },
            now: function() {
                return +new Date
            },
            support: at
        }), nt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Q["[object " + t + "]"] = t.toLowerCase()
        });
        var dt = function(e) {
            function t(e, t, o, a) {
                var l, n, r, i, c, s, u, h, m, C;
                if ((t ? t.ownerDocument || t : H) !== D && A(t), t = t || D, o = o || [], !e || "string" != typeof e) return o;
                if (1 !== (i = t.nodeType) && 9 !== i) return [];
                if (N && !a) {
                    if (l = St.exec(e))
                        if (r = l[1]) {
                            if (9 === i) {
                                if (n = t.getElementById(r), !n || !n.parentNode) return o;
                                if (n.id === r) return o.push(n), o
                            } else if (t.ownerDocument && (n = t.ownerDocument.getElementById(r)) && B(t, n) && n.id === r) return o.push(n), o
                        } else {
                            if (l[2]) return Q.apply(o, t.getElementsByTagName(e)), o;
                            if ((r = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return Q.apply(o, t.getElementsByClassName(r)), o
                        }
                    if (x.qsa && (!M || !M.test(e))) {
                        if (h = u = z, m = t, C = 9 === i && e, 1 === i && "object" !== t.nodeName.toLowerCase()) {
                            for (s = p(e), (u = t.getAttribute("id")) ? h = u.replace(bt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", c = s.length; c--;) s[c] = h + f(s[c]);
                            m = vt.test(e) && d(t.parentNode) || t, C = s.join(",")
                        }
                        if (C) try {
                            return Q.apply(o, m.querySelectorAll(C)), o
                        } catch (g) {} finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return y(e.replace(ct, "$1"), t, o, a)
            }

            function o() {
                function e(o, a) {
                    return t.push(o + " ") > T.cacheLength && delete e[t.shift()], e[o + " "] = a
                }
                var t = [];
                return e
            }

            function a(e) {
                return e[z] = !0, e
            }

            function l(e) {
                var t = D.createElement("div");
                try {
                    return !!e(t)
                } catch (o) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function n(e, t) {
                for (var o = e.split("|"), a = e.length; a--;) T.attrHandle[o[a]] = t
            }

            function r(e, t) {
                var o = t && e,
                    a = o && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (a) return a;
                if (o)
                    for (; o = o.nextSibling;)
                        if (o === t) return -1;
                return e ? 1 : -1
            }

            function i(e) {
                return function(t) {
                    var o = t.nodeName.toLowerCase();
                    return "input" === o && t.type === e
                }
            }

            function c(e) {
                return function(t) {
                    var o = t.nodeName.toLowerCase();
                    return ("input" === o || "button" === o) && t.type === e
                }
            }

            function s(e) {
                return a(function(t) {
                    return t = +t, a(function(o, a) {
                        for (var l, n = e([], o.length, t), r = n.length; r--;) o[l = n[r]] && (o[l] = !(a[l] = o[l]))
                    })
                })
            }

            function d(e) {
                return e && typeof e.getElementsByTagName !== K && e
            }

            function u() {}

            function p(e, o) {
                var a, l, n, r, i, c, s, d = G[e + " "];
                if (d) return o ? 0 : d.slice(0);
                for (i = e, c = [], s = T.preFilter; i;) {
                    (!a || (l = st.exec(i))) && (l && (i = i.slice(l[0].length) || i), c.push(n = [])), a = !1, (l = dt.exec(i)) && (a = l.shift(), n.push({
                        value: a,
                        type: l[0].replace(ct, " ")
                    }), i = i.slice(a.length));
                    for (r in T.filter) !(l = ht[r].exec(i)) || s[r] && !(l = s[r](l)) || (a = l.shift(), n.push({
                        value: a,
                        type: r,
                        matches: l
                    }), i = i.slice(a.length));
                    if (!a) break
                }
                return o ? i.length : i ? t.error(e) : G(e, c).slice(0)
            }

            function f(e) {
                for (var t = 0, o = e.length, a = ""; o > t; t++) a += e[t].value;
                return a
            }

            function h(e, t, o) {
                var a = t.dir,
                    l = o && "parentNode" === a,
                    n = j++;
                return t.first ? function(t, o, n) {
                    for (; t = t[a];)
                        if (1 === t.nodeType || l) return e(t, o, n)
                } : function(t, o, r) {
                    var i, c, s = [U, n];
                    if (r) {
                        for (; t = t[a];)
                            if ((1 === t.nodeType || l) && e(t, o, r)) return !0
                    } else
                        for (; t = t[a];)
                            if (1 === t.nodeType || l) {
                                if (c = t[z] || (t[z] = {}), (i = c[a]) && i[0] === U && i[1] === n) return s[2] = i[2];
                                if (c[a] = s, s[2] = e(t, o, r)) return !0
                            }
                }
            }

            function m(e) {
                return e.length > 1 ? function(t, o, a) {
                    for (var l = e.length; l--;)
                        if (!e[l](t, o, a)) return !1;
                    return !0
                } : e[0]
            }

            function C(e, t, o, a, l) {
                for (var n, r = [], i = 0, c = e.length, s = null != t; c > i; i++)(n = e[i]) && (!o || o(n, a, l)) && (r.push(n), s && t.push(i));
                return r
            }

            function g(e, t, o, l, n, r) {
                return l && !l[z] && (l = g(l)), n && !n[z] && (n = g(n, r)), a(function(a, r, i, c) {
                    var s, d, u, p = [],
                        f = [],
                        h = r.length,
                        m = a || b(t || "*", i.nodeType ? [i] : i, []),
                        g = !e || !a && t ? m : C(m, p, e, i, c),
                        S = o ? n || (a ? e : h || l) ? [] : r : g;
                    if (o && o(g, S, i, c), l)
                        for (s = C(S, f), l(s, [], i, c), d = s.length; d--;)(u = s[d]) && (S[f[d]] = !(g[f[d]] = u));
                    if (a) {
                        if (n || e) {
                            if (n) {
                                for (s = [], d = S.length; d--;)(u = S[d]) && s.push(g[d] = u);
                                n(null, S = [], s, c)
                            }
                            for (d = S.length; d--;)(u = S[d]) && (s = n ? tt.call(a, u) : p[d]) > -1 && (a[s] = !(r[s] = u))
                        }
                    } else S = C(S === r ? S.splice(h, S.length) : S), n ? n(null, r, S, c) : Q.apply(r, S)
                })
            }

            function S(e) {
                for (var t, o, a, l = e.length, n = T.relative[e[0].type], r = n || T.relative[" "], i = n ? 1 : 0, c = h(function(e) {
                        return e === t
                    }, r, !0), s = h(function(e) {
                        return tt.call(t, e) > -1
                    }, r, !0), d = [function(e, o, a) {
                        return !n && (a || o !== _) || ((t = o).nodeType ? c(e, o, a) : s(e, o, a))
                    }]; l > i; i++)
                    if (o = T.relative[e[i].type]) d = [h(m(d), o)];
                    else {
                        if (o = T.filter[e[i].type].apply(null, e[i].matches), o[z]) {
                            for (a = ++i; l > a && !T.relative[e[a].type]; a++);
                            return g(i > 1 && m(d), i > 1 && f(e.slice(0, i - 1).concat({
                                value: " " === e[i - 2].type ? "*" : ""
                            })).replace(ct, "$1"), o, a > i && S(e.slice(i, a)), l > a && S(e = e.slice(a)), l > a && f(e))
                        }
                        d.push(o)
                    }
                return m(d)
            }

            function v(e, o) {
                var l = o.length > 0,
                    n = e.length > 0,
                    r = function(a, r, i, c, s) {
                        var d, u, p, f = 0,
                            h = "0",
                            m = a && [],
                            g = [],
                            S = _,
                            v = a || n && T.find.TAG("*", s),
                            b = U += null == S ? 1 : Math.random() || .1,
                            y = v.length;
                        for (s && (_ = r !== D && r); h !== y && null != (d = v[h]); h++) {
                            if (n && d) {
                                for (u = 0; p = e[u++];)
                                    if (p(d, r, i)) {
                                        c.push(d);
                                        break
                                    }
                                s && (U = b)
                            }
                            l && ((d = !p && d) && f--, a && m.push(d))
                        }
                        if (f += h, l && h !== f) {
                            for (u = 0; p = o[u++];) p(m, g, r, i);
                            if (a) {
                                if (f > 0)
                                    for (; h--;) m[h] || g[h] || (g[h] = J.call(c));
                                g = C(g)
                            }
                            Q.apply(c, g), s && !a && g.length > 0 && f + o.length > 1 && t.uniqueSort(c)
                        }
                        return s && (U = b, _ = S), m
                    };
                return l ? a(r) : r
            }

            function b(e, o, a) {
                for (var l = 0, n = o.length; n > l; l++) t(e, o[l], a);
                return a
            }

            function y(e, t, o, a) {
                var l, n, r, i, c, s = p(e);
                if (!a && 1 === s.length) {
                    if (n = s[0] = s[0].slice(0), n.length > 2 && "ID" === (r = n[0]).type && x.getById && 9 === t.nodeType && N && T.relative[n[1].type]) {
                        if (t = (T.find.ID(r.matches[0].replace(yt, wt), t) || [])[0], !t) return o;
                        e = e.slice(n.shift().value.length)
                    }
                    for (l = ht.needsContext.test(e) ? 0 : n.length; l-- && (r = n[l], !T.relative[i = r.type]);)
                        if ((c = T.find[i]) && (a = c(r.matches[0].replace(yt, wt), vt.test(n[0].type) && d(t.parentNode) || t))) {
                            if (n.splice(l, 1), e = a.length && f(n), !e) return Q.apply(o, a), o;
                            break
                        }
                }
                return E(e, s)(a, t, !N, o, vt.test(e) && d(t.parentNode) || t), o
            }
            var w, x, T, k, F, E, _, P, R, A, D, L, N, M, I, O, B, z = "sizzle" + -new Date,
                H = e.document,
                U = 0,
                j = 0,
                V = o(),
                G = o(),
                $ = o(),
                W = function(e, t) {
                    return e === t && (R = !0), 0
                },
                K = "undefined",
                X = 1 << 31,
                q = {}.hasOwnProperty,
                Y = [],
                J = Y.pop,
                Z = Y.push,
                Q = Y.push,
                et = Y.slice,
                tt = Y.indexOf || function(e) {
                    for (var t = 0, o = this.length; o > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ot = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                at = "[\\x20\\t\\r\\n\\f]",
                lt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                nt = lt.replace("w", "w#"),
                rt = "\\[" + at + "*(" + lt + ")" + at + "*(?:([*^$|!~]?=)" + at + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + at + "*\\]",
                it = ":(" + lt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + rt.replace(3, 8) + ")*)|.*)\\)|)",
                ct = new RegExp("^" + at + "+|((?:^|[^\\\\])(?:\\\\.)*)" + at + "+$", "g"),
                st = new RegExp("^" + at + "*," + at + "*"),
                dt = new RegExp("^" + at + "*([>+~]|" + at + ")" + at + "*"),
                ut = new RegExp("=" + at + "*([^\\]'\"]*?)" + at + "*\\]", "g"),
                pt = new RegExp(it),
                ft = new RegExp("^" + nt + "$"),
                ht = {
                    ID: new RegExp("^#(" + lt + ")"),
                    CLASS: new RegExp("^\\.(" + lt + ")"),
                    TAG: new RegExp("^(" + lt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + it),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + at + "*(even|odd|(([+-]|)(\\d*)n|)" + at + "*(?:([+-]|)" + at + "*(\\d+)|))" + at + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ot + ")$", "i"),
                    needsContext: new RegExp("^" + at + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + at + "*((?:-\\d)?\\d*)" + at + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                Ct = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                St = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                vt = /[+~]/,
                bt = /'|\\/g,
                yt = new RegExp("\\\\([\\da-f]{1,6}" + at + "?|(" + at + ")|.)", "ig"),
                wt = function(e, t, o) {
                    var a = "0x" + t - 65536;
                    return a !== a || o ? t : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                };
            try {
                Q.apply(Y = et.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
            } catch (xt) {
                Q = {
                    apply: Y.length ? function(e, t) {
                        Z.apply(e, et.call(t))
                    } : function(e, t) {
                        for (var o = e.length, a = 0; e[o++] = t[a++];);
                        e.length = o - 1
                    }
                }
            }
            x = t.support = {}, F = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, A = t.setDocument = function(e) {
                var t, o = e ? e.ownerDocument || e : H,
                    a = o.defaultView;
                return o !== D && 9 === o.nodeType && o.documentElement ? (D = o, L = o.documentElement, N = !F(o), a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                    A()
                }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                    A()
                })), x.attributes = l(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = l(function(e) {
                    return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(o.getElementsByClassName) && l(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), x.getById = l(function(e) {
                    return L.appendChild(e).id = z, !o.getElementsByName || !o.getElementsByName(z).length
                }), x.getById ? (T.find.ID = function(e, t) {
                    if (typeof t.getElementById !== K && N) {
                        var o = t.getElementById(e);
                        return o && o.parentNode ? [o] : []
                    }
                }, T.filter.ID = function(e) {
                    var t = e.replace(yt, wt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(yt, wt);
                    return function(e) {
                        var o = typeof e.getAttributeNode !== K && e.getAttributeNode("id");
                        return o && o.value === t
                    }
                }), T.find.TAG = x.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== K ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var o, a = [],
                        l = 0,
                        n = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; o = n[l++];) 1 === o.nodeType && a.push(o);
                        return a
                    }
                    return n
                }, T.find.CLASS = x.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== K && N ? t.getElementsByClassName(e) : void 0
                }, I = [], M = [], (x.qsa = gt.test(o.querySelectorAll)) && (l(function(e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + at + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + at + "*(?:value|" + ot + ")"), e.querySelectorAll(":checked").length || M.push(":checked")
                }), l(function(e) {
                    var t = o.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + at + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
                })), (x.matchesSelector = gt.test(O = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && l(function(e) {
                    x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), I.push("!=", it)
                }), M = M.length && new RegExp(M.join("|")), I = I.length && new RegExp(I.join("|")), t = gt.test(L.compareDocumentPosition), B = t || gt.test(L.contains) ? function(e, t) {
                    var o = 9 === e.nodeType ? e.documentElement : e,
                        a = t && t.parentNode;
                    return e === a || !(!a || 1 !== a.nodeType || !(o.contains ? o.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, W = t ? function(e, t) {
                    if (e === t) return R = !0, 0;
                    var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return a ? a : (a = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & a || !x.sortDetached && t.compareDocumentPosition(e) === a ? e === o || e.ownerDocument === H && B(H, e) ? -1 : t === o || t.ownerDocument === H && B(H, t) ? 1 : P ? tt.call(P, e) - tt.call(P, t) : 0 : 4 & a ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return R = !0, 0;
                    var a, l = 0,
                        n = e.parentNode,
                        i = t.parentNode,
                        c = [e],
                        s = [t];
                    if (!n || !i) return e === o ? -1 : t === o ? 1 : n ? -1 : i ? 1 : P ? tt.call(P, e) - tt.call(P, t) : 0;
                    if (n === i) return r(e, t);
                    for (a = e; a = a.parentNode;) c.unshift(a);
                    for (a = t; a = a.parentNode;) s.unshift(a);
                    for (; c[l] === s[l];) l++;
                    return l ? r(c[l], s[l]) : c[l] === H ? -1 : s[l] === H ? 1 : 0
                }, o) : D
            }, t.matches = function(e, o) {
                return t(e, null, null, o)
            }, t.matchesSelector = function(e, o) {
                if ((e.ownerDocument || e) !== D && A(e), o = o.replace(ut, "='$1']"), !(!x.matchesSelector || !N || I && I.test(o) || M && M.test(o))) try {
                    var a = O.call(e, o);
                    if (a || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
                } catch (l) {}
                return t(o, D, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== D && A(e), B(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== D && A(e);
                var o = T.attrHandle[t.toLowerCase()],
                    a = o && q.call(T.attrHandle, t.toLowerCase()) ? o(e, t, !N) : void 0;
                return void 0 !== a ? a : x.attributes || !N ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, o = [],
                    a = 0,
                    l = 0;
                if (R = !x.detectDuplicates, P = !x.sortStable && e.slice(0), e.sort(W), R) {
                    for (; t = e[l++];) t === e[l] && (a = o.push(l));
                    for (; a--;) e.splice(o[a], 1)
                }
                return P = null, e
            }, k = t.getText = function(e) {
                var t, o = "",
                    a = 0,
                    l = e.nodeType;
                if (l) {
                    if (1 === l || 9 === l || 11 === l) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) o += k(e)
                    } else if (3 === l || 4 === l) return e.nodeValue
                } else
                    for (; t = e[a++];) o += k(t);
                return o
            }, T = t.selectors = {
                cacheLength: 50,
                createPseudo: a,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(yt, wt), e[3] = (e[4] || e[5] || "").replace(yt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, o = !e[5] && e[2];
                        return ht.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : o && pt.test(o) && (t = p(o, !0)) && (t = o.indexOf(")", o.length - t) - o.length) && (e[0] = e[0].slice(0, t), e[2] = o.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(yt, wt).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = V[e + " "];
                        return t || (t = new RegExp("(^|" + at + ")" + e + "(" + at + "|$)")) && V(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== K && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, o, a) {
                        return function(l) {
                            var n = t.attr(l, e);
                            return null == n ? "!=" === o : o ? (n += "", "=" === o ? n === a : "!=" === o ? n !== a : "^=" === o ? a && 0 === n.indexOf(a) : "*=" === o ? a && n.indexOf(a) > -1 : "$=" === o ? a && n.slice(-a.length) === a : "~=" === o ? (" " + n + " ").indexOf(a) > -1 : "|=" === o ? n === a || n.slice(0, a.length + 1) === a + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, o, a, l) {
                        var n = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            i = "of-type" === t;
                        return 1 === a && 0 === l ? function(e) {
                            return !!e.parentNode
                        } : function(t, o, c) {
                            var s, d, u, p, f, h, m = n !== r ? "nextSibling" : "previousSibling",
                                C = t.parentNode,
                                g = i && t.nodeName.toLowerCase(),
                                S = !c && !i;
                            if (C) {
                                if (n) {
                                    for (; m;) {
                                        for (u = t; u = u[m];)
                                            if (i ? u.nodeName.toLowerCase() === g : 1 === u.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [r ? C.firstChild : C.lastChild], r && S) {
                                    for (d = C[z] || (C[z] = {}), s = d[e] || [], f = s[0] === U && s[1], p = s[0] === U && s[2], u = f && C.childNodes[f]; u = ++f && u && u[m] || (p = f = 0) || h.pop();)
                                        if (1 === u.nodeType && ++p && u === t) {
                                            d[e] = [U, f, p];
                                            break
                                        }
                                } else if (S && (s = (t[z] || (t[z] = {}))[e]) && s[0] === U) p = s[1];
                                else
                                    for (;
                                        (u = ++f && u && u[m] || (p = f = 0) || h.pop()) && ((i ? u.nodeName.toLowerCase() !== g : 1 !== u.nodeType) || !++p || (S && ((u[z] || (u[z] = {}))[e] = [U, p]), u !== t)););
                                return p -= l, p === a || p % a === 0 && p / a >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var l, n = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return n[z] ? n(o) : n.length > 1 ? (l = [e, e, "", o], T.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                            for (var a, l = n(e, o), r = l.length; r--;) a = tt.call(e, l[r]), e[a] = !(t[a] = l[r])
                        }) : function(e) {
                            return n(e, 0, l)
                        }) : n
                    }
                },
                pseudos: {
                    not: a(function(e) {
                        var t = [],
                            o = [],
                            l = E(e.replace(ct, "$1"));
                        return l[z] ? a(function(e, t, o, a) {
                            for (var n, r = l(e, null, a, []), i = e.length; i--;)(n = r[i]) && (e[i] = !(t[i] = n))
                        }) : function(e, a, n) {
                            return t[0] = e, l(t, null, n, o), !o.pop()
                        }
                    }),
                    has: a(function(e) {
                        return function(o) {
                            return t(e, o).length > 0
                        }
                    }),
                    contains: a(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: a(function(e) {
                        return ft.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(yt, wt).toLowerCase(),
                            function(t) {
                                var o;
                                do
                                    if (o = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return o = o.toLowerCase(), o === e || 0 === o.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var o = e.location && e.location.hash;
                        return o && o.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === L
                    },
                    focus: function(e) {
                        return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Ct.test(e.nodeName)
                    },
                    input: function(e) {
                        return mt.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, o) {
                        return [0 > o ? o + t : o]
                    }),
                    even: s(function(e, t) {
                        for (var o = 0; t > o; o += 2) e.push(o);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var o = 1; t > o; o += 2) e.push(o);
                        return e
                    }),
                    lt: s(function(e, t, o) {
                        for (var a = 0 > o ? o + t : o; --a >= 0;) e.push(a);
                        return e
                    }),
                    gt: s(function(e, t, o) {
                        for (var a = 0 > o ? o + t : o; ++a < t;) e.push(a);
                        return e
                    })
                }
            }, T.pseudos.nth = T.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[w] = i(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[w] = c(w);
            return u.prototype = T.filters = T.pseudos, T.setFilters = new u, E = t.compile = function(e, t) {
                var o, a = [],
                    l = [],
                    n = $[e + " "];
                if (!n) {
                    for (t || (t = p(e)), o = t.length; o--;) n = S(t[o]), n[z] ? a.push(n) : l.push(n);
                    n = $(e, v(l, a))
                }
                return n
            }, x.sortStable = z.split("").sort(W).join("") === z, x.detectDuplicates = !!R, A(), x.sortDetached = l(function(e) {
                return 1 & e.compareDocumentPosition(D.createElement("div"))
            }), l(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || n("type|href|height|width", function(e, t, o) {
                return o ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), x.attributes && l(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || n("value", function(e, t, o) {
                return o || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), l(function(e) {
                return null == e.getAttribute("disabled")
            }) || n(ot, function(e, t, o) {
                var a;
                return o ? void 0 : e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
            }), t
        }(e);
        nt.find = dt, nt.expr = dt.selectors, nt.expr[":"] = nt.expr.pseudos, nt.unique = dt.uniqueSort, nt.text = dt.getText, nt.isXMLDoc = dt.isXML, nt.contains = dt.contains;
        var ut = nt.expr.match.needsContext,
            pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ft = /^.[^:#\[\.,]*$/;
        nt.filter = function(e, t, o) {
            var a = t[0];
            return o && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? nt.find.matchesSelector(a, e) ? [a] : [] : nt.find.matches(e, nt.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, nt.fn.extend({
            find: function(e) {
                var t, o = [],
                    a = this,
                    l = a.length;
                if ("string" != typeof e) return this.pushStack(nt(e).filter(function() {
                    for (t = 0; l > t; t++)
                        if (nt.contains(a[t], this)) return !0
                }));
                for (t = 0; l > t; t++) nt.find(e, a[t], o);
                return o = this.pushStack(l > 1 ? nt.unique(o) : o), o.selector = this.selector ? this.selector + " " + e : e, o
            },
            filter: function(e) {
                return this.pushStack(a(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(a(this, e || [], !0))
            },
            is: function(e) {
                return !!a(this, "string" == typeof e && ut.test(e) ? nt(e) : e || [], !1).length
            }
        });
        var ht, mt = e.document,
            Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = nt.fn.init = function(e, t) {
                var o, a;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ct.exec(e), !o || !o[1] && t) return !t || t.jquery ? (t || ht).find(e) : this.constructor(t).find(e);
                    if (o[1]) {
                        if (t = t instanceof nt ? t[0] : t, nt.merge(this, nt.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : mt, !0)), pt.test(o[1]) && nt.isPlainObject(t))
                            for (o in t) nt.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                        return this
                    }
                    if (a = mt.getElementById(o[2]), a && a.parentNode) {
                        if (a.id !== o[2]) return ht.find(e);
                        this.length = 1, this[0] = a
                    }
                    return this.context = mt, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : nt.isFunction(e) ? "undefined" != typeof ht.ready ? ht.ready(e) : e(nt) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), nt.makeArray(e, this))
            };
        gt.prototype = nt.fn, ht = nt(mt);
        var St = /^(?:parents|prev(?:Until|All))/,
            vt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        nt.extend({
            dir: function(e, t, o) {
                for (var a = [], l = e[t]; l && 9 !== l.nodeType && (void 0 === o || 1 !== l.nodeType || !nt(l).is(o));) 1 === l.nodeType && a.push(l), l = l[t];
                return a
            },
            sibling: function(e, t) {
                for (var o = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && o.push(e);
                return o
            }
        }), nt.fn.extend({
            has: function(e) {
                var t, o = nt(e, this),
                    a = o.length;
                return this.filter(function() {
                    for (t = 0; a > t; t++)
                        if (nt.contains(this, o[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var o, a = 0, l = this.length, n = [], r = ut.test(e) || "string" != typeof e ? nt(e, t || this.context) : 0; l > a; a++)
                    for (o = this[a]; o && o !== t; o = o.parentNode)
                        if (o.nodeType < 11 && (r ? r.index(o) > -1 : 1 === o.nodeType && nt.find.matchesSelector(o, e))) {
                            n.push(o);
                            break
                        }
                return this.pushStack(n.length > 1 ? nt.unique(n) : n)
            },
            index: function(e) {
                return e ? "string" == typeof e ? nt.inArray(this[0], nt(e)) : nt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(nt.unique(nt.merge(this.get(), nt(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), nt.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return nt.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, o) {
                return nt.dir(e, "parentNode", o)
            },
            next: function(e) {
                return l(e, "nextSibling")
            },
            prev: function(e) {
                return l(e, "previousSibling")
            },
            nextAll: function(e) {
                return nt.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return nt.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, o) {
                return nt.dir(e, "nextSibling", o)
            },
            prevUntil: function(e, t, o) {
                return nt.dir(e, "previousSibling", o)
            },
            siblings: function(e) {
                return nt.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return nt.sibling(e.firstChild)
            },
            contents: function(e) {
                return nt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : nt.merge([], e.childNodes)
            }
        }, function(e, t) {
            nt.fn[e] = function(o, a) {
                var l = nt.map(this, t, o);
                return "Until" !== e.slice(-5) && (a = o), a && "string" == typeof a && (l = nt.filter(a, l)), this.length > 1 && (vt[e] || (l = nt.unique(l)), St.test(e) && (l = l.reverse())), this.pushStack(l)
            }
        });
        var bt = /\S+/g,
            yt = {};
        nt.Callbacks = function(e) {
            e = "string" == typeof e ? yt[e] || n(e) : nt.extend({}, e);
            var t, o, a, l, r, i, c = [],
                s = !e.once && [],
                d = function(n) {
                    for (o = e.memory && n, a = !0, r = i || 0, i = 0, l = c.length, t = !0; c && l > r; r++)
                        if (c[r].apply(n[0], n[1]) === !1 && e.stopOnFalse) {
                            o = !1;
                            break
                        }
                    t = !1, c && (s ? s.length && d(s.shift()) : o ? c = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (c) {
                            var a = c.length;
                            ! function n(t) {
                                nt.each(t, function(t, o) {
                                    var a = nt.type(o);
                                    "function" === a ? e.unique && u.has(o) || c.push(o) : o && o.length && "string" !== a && n(o)
                                })
                            }(arguments), t ? l = c.length : o && (i = a, d(o))
                        }
                        return this
                    },
                    remove: function() {
                        return c && nt.each(arguments, function(e, o) {
                            for (var a;
                                (a = nt.inArray(o, c, a)) > -1;) c.splice(a, 1), t && (l >= a && l--, r >= a && r--)
                        }), this
                    },
                    has: function(e) {
                        return e ? nt.inArray(e, c) > -1 : !(!c || !c.length)
                    },
                    empty: function() {
                        return c = [], l = 0, this
                    },
                    disable: function() {
                        return c = s = o = void 0, this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return s = void 0, o || u.disable(), this
                    },
                    locked: function() {
                        return !s
                    },
                    fireWith: function(e, o) {
                        return !c || a && !s || (o = o || [], o = [e, o.slice ? o.slice() : o], t ? s.push(o) : d(o)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!a
                    }
                };
            return u
        }, nt.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", nt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", nt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", nt.Callbacks("memory")]
                    ],
                    o = "pending",
                    a = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return l.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return nt.Deferred(function(o) {
                                nt.each(t, function(t, n) {
                                    var r = nt.isFunction(e[t]) && e[t];
                                    l[n[1]](function() {
                                        var e = r && r.apply(this, arguments);
                                        e && nt.isFunction(e.promise) ? e.promise().done(o.resolve).fail(o.reject).progress(o.notify) : o[n[0] + "With"](this === a ? o.promise() : this, r ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? nt.extend(e, a) : a
                        }
                    },
                    l = {};
                return a.pipe = a.then, nt.each(t, function(e, n) {
                    var r = n[2],
                        i = n[3];
                    a[n[1]] = r.add, i && r.add(function() {
                        o = i
                    }, t[1 ^ e][2].disable, t[2][2].lock), l[n[0]] = function() {
                        return l[n[0] + "With"](this === l ? a : this, arguments), this
                    }, l[n[0] + "With"] = r.fireWith
                }), a.promise(l), e && e.call(l, l), l
            },
            when: function(e) {
                var t, o, a, l = 0,
                    n = q.call(arguments),
                    r = n.length,
                    i = 1 !== r || e && nt.isFunction(e.promise) ? r : 0,
                    c = 1 === i ? e : nt.Deferred(),
                    s = function(e, o, a) {
                        return function(l) {
                            o[e] = this, a[e] = arguments.length > 1 ? q.call(arguments) : l, a === t ? c.notifyWith(o, a) : --i || c.resolveWith(o, a)
                        }
                    };
                if (r > 1)
                    for (t = new Array(r), o = new Array(r), a = new Array(r); r > l; l++) n[l] && nt.isFunction(n[l].promise) ? n[l].promise().done(s(l, a, n)).fail(c.reject).progress(s(l, o, t)) : --i;
                return i || c.resolveWith(a, n), c.promise()
            }
        });
        var wt;
        nt.fn.ready = function(e) {
            return nt.ready.promise().done(e), this
        }, nt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? nt.readyWait++ : nt.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--nt.readyWait : !nt.isReady) {
                    if (!mt.body) return setTimeout(nt.ready);
                    nt.isReady = !0, e !== !0 && --nt.readyWait > 0 || (wt.resolveWith(mt, [nt]), nt.fn.trigger && nt(mt).trigger("ready").off("ready"))
                }
            }
        }), nt.ready.promise = function(t) {
            if (!wt)
                if (wt = nt.Deferred(), "complete" === mt.readyState) setTimeout(nt.ready);
                else if (mt.addEventListener) mt.addEventListener("DOMContentLoaded", i, !1), e.addEventListener("load", i, !1);
            else {
                mt.attachEvent("onreadystatechange", i), e.attachEvent("onload", i);
                var o = !1;
                try {
                    o = null == e.frameElement && mt.documentElement
                } catch (a) {}
                o && o.doScroll && ! function l() {
                    if (!nt.isReady) {
                        try {
                            o.doScroll("left")
                        } catch (e) {
                            return setTimeout(l, 50)
                        }
                        r(), nt.ready()
                    }
                }()
            }
            return wt.promise(t)
        };
        var xt, Tt = "undefined";
        for (xt in nt(at)) break;
        at.ownLast = "0" !== xt, at.inlineBlockNeedsLayout = !1, nt(function() {
                var e, t, o = mt.getElementsByTagName("body")[0];
                o && (e = mt.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = mt.createElement("div"), o.appendChild(e).appendChild(t), typeof t.style.zoom !== Tt && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (at.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (o.style.zoom = 1)), o.removeChild(e), e = t = null)
            }),
            function() {
                var e = mt.createElement("div");
                if (null == at.deleteExpando) {
                    at.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        at.deleteExpando = !1
                    }
                }
                e = null
            }(), nt.acceptData = function(e) {
                var t = nt.noData[(e.nodeName + " ").toLowerCase()],
                    o = +e.nodeType || 1;
                return 1 !== o && 9 !== o ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
            };
        var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Ft = /([A-Z])/g;
        nt.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? nt.cache[e[nt.expando]] : e[nt.expando], !!e && !s(e)
            },
            data: function(e, t, o) {
                return d(e, t, o)
            },
            removeData: function(e, t) {
                return u(e, t)
            },
            _data: function(e, t, o) {
                return d(e, t, o, !0)
            },
            _removeData: function(e, t) {
                return u(e, t, !0)
            }
        }), nt.fn.extend({
            data: function(e, t) {
                var o, a, l, n = this[0],
                    r = n && n.attributes;
                if (void 0 === e) {
                    if (this.length && (l = nt.data(n), 1 === n.nodeType && !nt._data(n, "parsedAttrs"))) {
                        for (o = r.length; o--;) a = r[o].name, 0 === a.indexOf("data-") && (a = nt.camelCase(a.slice(5)), c(n, a, l[a]));
                        nt._data(n, "parsedAttrs", !0)
                    }
                    return l
                }
                return "object" == typeof e ? this.each(function() {
                    nt.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    nt.data(this, e, t)
                }) : n ? c(n, e, nt.data(n, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    nt.removeData(this, e)
                })
            }
        }), nt.extend({
            queue: function(e, t, o) {
                var a;
                return e ? (t = (t || "fx") + "queue", a = nt._data(e, t), o && (!a || nt.isArray(o) ? a = nt._data(e, t, nt.makeArray(o)) : a.push(o)), a || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var o = nt.queue(e, t),
                    a = o.length,
                    l = o.shift(),
                    n = nt._queueHooks(e, t),
                    r = function() {
                        nt.dequeue(e, t)
                    };
                "inprogress" === l && (l = o.shift(), a--), l && ("fx" === t && o.unshift("inprogress"), delete n.stop, l.call(e, r, n)), !a && n && n.empty.fire()
            },
            _queueHooks: function(e, t) {
                var o = t + "queueHooks";
                return nt._data(e, o) || nt._data(e, o, {
                    empty: nt.Callbacks("once memory").add(function() {
                        nt._removeData(e, t + "queue"), nt._removeData(e, o)
                    })
                })
            }
        }), nt.fn.extend({
            queue: function(e, t) {
                var o = 2;
                return "string" != typeof e && (t = e, e = "fx", o--), arguments.length < o ? nt.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var o = nt.queue(this, e, t);
                    nt._queueHooks(this, e), "fx" === e && "inprogress" !== o[0] && nt.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    nt.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var o, a = 1,
                    l = nt.Deferred(),
                    n = this,
                    r = this.length,
                    i = function() {
                        --a || l.resolveWith(n, [n])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) o = nt._data(n[r], e + "queueHooks"), o && o.empty && (a++, o.empty.add(i));
                return i(), l.promise(t)
            }
        });
        var Et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            _t = ["Top", "Right", "Bottom", "Left"],
            Pt = function(e, t) {
                return e = t || e, "none" === nt.css(e, "display") || !nt.contains(e.ownerDocument, e)
            },
            Rt = nt.access = function(e, t, o, a, l, n, r) {
                var i = 0,
                    c = e.length,
                    s = null == o;
                if ("object" === nt.type(o)) {
                    l = !0;
                    for (i in o) nt.access(e, t, i, o[i], !0, n, r)
                } else if (void 0 !== a && (l = !0, nt.isFunction(a) || (r = !0), s && (r ? (t.call(e, a), t = null) : (s = t, t = function(e, t, o) {
                        return s.call(nt(e), o)
                    })), t))
                    for (; c > i; i++) t(e[i], o, r ? a : a.call(e[i], i, t(e[i], o)));
                return l ? e : s ? t.call(e) : c ? t(e[0], o) : n
            },
            At = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = mt.createDocumentFragment(),
                t = mt.createElement("div"),
                o = mt.createElement("input");
            if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", at.leadingWhitespace = 3 === t.firstChild.nodeType, at.tbody = !t.getElementsByTagName("tbody").length, at.htmlSerialize = !!t.getElementsByTagName("link").length, at.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML, o.type = "checkbox", o.checked = !0, e.appendChild(o), at.appendChecked = o.checked, t.innerHTML = "<textarea>x</textarea>", at.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", at.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, at.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    at.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == at.deleteExpando) {
                at.deleteExpando = !0;
                try {
                    delete t.test
                } catch (a) {
                    at.deleteExpando = !1
                }
            }
            e = t = o = null
        }(),
        function() {
            var t, o, a = mt.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) o = "on" + t, (at[t + "Bubbles"] = o in e) || (a.setAttribute(o, "t"), at[t + "Bubbles"] = a.attributes[o].expando === !1);
            a = null
        }();
        var Dt = /^(?:input|select|textarea)$/i,
            Lt = /^key/,
            Nt = /^(?:mouse|contextmenu)|click/,
            Mt = /^(?:focusinfocus|focusoutblur)$/,
            It = /^([^.]*)(?:\.(.+)|)$/;
        nt.event = {
            global: {},
            add: function(e, t, o, a, l) {
                var n, r, i, c, s, d, u, p, f, h, m, C = nt._data(e);
                if (C) {
                    for (o.handler && (c = o, o = c.handler, l = c.selector), o.guid || (o.guid = nt.guid++), (r = C.events) || (r = C.events = {}), (d = C.handle) || (d = C.handle = function(e) {
                            return typeof nt === Tt || e && nt.event.triggered === e.type ? void 0 : nt.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = e), t = (t || "").match(bt) || [""], i = t.length; i--;) n = It.exec(t[i]) || [], f = m = n[1], h = (n[2] || "").split(".").sort(), f && (s = nt.event.special[f] || {}, f = (l ? s.delegateType : s.bindType) || f, s = nt.event.special[f] || {}, u = nt.extend({
                        type: f,
                        origType: m,
                        data: a,
                        handler: o,
                        guid: o.guid,
                        selector: l,
                        needsContext: l && nt.expr.match.needsContext.test(l),
                        namespace: h.join(".")
                    }, c), (p = r[f]) || (p = r[f] = [], p.delegateCount = 0, s.setup && s.setup.call(e, a, h, d) !== !1 || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), s.add && (s.add.call(e, u), u.handler.guid || (u.handler.guid = o.guid)), l ? p.splice(p.delegateCount++, 0, u) : p.push(u), nt.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, o, a, l) {
                var n, r, i, c, s, d, u, p, f, h, m, C = nt.hasData(e) && nt._data(e);
                if (C && (d = C.events)) {
                    for (t = (t || "").match(bt) || [""], s = t.length; s--;)
                        if (i = It.exec(t[s]) || [], f = m = i[1], h = (i[2] || "").split(".").sort(), f) {
                            for (u = nt.event.special[f] || {}, f = (a ? u.delegateType : u.bindType) || f, p = d[f] || [], i = i[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = n = p.length; n--;) r = p[n], !l && m !== r.origType || o && o.guid !== r.guid || i && !i.test(r.namespace) || a && a !== r.selector && ("**" !== a || !r.selector) || (p.splice(n, 1), r.selector && p.delegateCount--, u.remove && u.remove.call(e, r));
                            c && !p.length && (u.teardown && u.teardown.call(e, h, C.handle) !== !1 || nt.removeEvent(e, f, C.handle), delete d[f])
                        } else
                            for (f in d) nt.event.remove(e, f + t[s], o, a, !0);
                    nt.isEmptyObject(d) && (delete C.handle, nt._removeData(e, "events"))
                }
            },
            trigger: function(t, o, a, l) {
                var n, r, i, c, s, d, u, p = [a || mt],
                    f = tt.call(t, "type") ? t.type : t,
                    h = tt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (i = d = a = a || mt, 3 !== a.nodeType && 8 !== a.nodeType && !Mt.test(f + nt.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), r = f.indexOf(":") < 0 && "on" + f, t = t[nt.expando] ? t : new nt.Event(f, "object" == typeof t && t), t.isTrigger = l ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), o = null == o ? [t] : nt.makeArray(o, [t]), s = nt.event.special[f] || {}, l || !s.trigger || s.trigger.apply(a, o) !== !1)) {
                    if (!l && !s.noBubble && !nt.isWindow(a)) {
                        for (c = s.delegateType || f, Mt.test(c + f) || (i = i.parentNode); i; i = i.parentNode) p.push(i), d = i;
                        d === (a.ownerDocument || mt) && p.push(d.defaultView || d.parentWindow || e)
                    }
                    for (u = 0;
                        (i = p[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? c : s.bindType || f, n = (nt._data(i, "events") || {})[t.type] && nt._data(i, "handle"), n && n.apply(i, o), n = r && i[r], n && n.apply && nt.acceptData(i) && (t.result = n.apply(i, o), t.result === !1 && t.preventDefault());
                    if (t.type = f, !l && !t.isDefaultPrevented() && (!s._default || s._default.apply(p.pop(), o) === !1) && nt.acceptData(a) && r && a[f] && !nt.isWindow(a)) {
                        d = a[r], d && (a[r] = null), nt.event.triggered = f;
                        try {
                            a[f]()
                        } catch (m) {}
                        nt.event.triggered = void 0, d && (a[r] = d)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = nt.event.fix(e);
                var t, o, a, l, n, r = [],
                    i = q.call(arguments),
                    c = (nt._data(this, "events") || {})[e.type] || [],
                    s = nt.event.special[e.type] || {};
                if (i[0] = e, e.delegateTarget = this, !s.preDispatch || s.preDispatch.call(this, e) !== !1) {
                    for (r = nt.event.handlers.call(this, e, c), t = 0;
                        (l = r[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = l.elem, n = 0;
                            (a = l.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, o = ((nt.event.special[a.origType] || {}).handle || a.handler).apply(l.elem, i), void 0 !== o && (e.result = o) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return s.postDispatch && s.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var o, a, l, n, r = [],
                    i = t.delegateCount,
                    c = e.target;
                if (i && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (l = [], n = 0; i > n; n++) a = t[n], o = a.selector + " ", void 0 === l[o] && (l[o] = a.needsContext ? nt(o, this).index(c) >= 0 : nt.find(o, this, null, [c]).length), l[o] && l.push(a);
                            l.length && r.push({
                                elem: c,
                                handlers: l
                            })
                        }
                return i < t.length && r.push({
                    elem: this,
                    handlers: t.slice(i)
                }), r
            },
            fix: function(e) {
                if (e[nt.expando]) return e;
                var t, o, a, l = e.type,
                    n = e,
                    r = this.fixHooks[l];
                for (r || (this.fixHooks[l] = r = Nt.test(l) ? this.mouseHooks : Lt.test(l) ? this.keyHooks : {}), a = r.props ? this.props.concat(r.props) : this.props, e = new nt.Event(n), t = a.length; t--;) o = a[t], e[o] = n[o];
                return e.target || (e.target = n.srcElement || mt), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, n) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var o, a, l, n = t.button,
                        r = t.fromElement;
                    return null == e.pageX && null != t.clientX && (a = e.target.ownerDocument || mt, l = a.documentElement, o = a.body, e.pageX = t.clientX + (l && l.scrollLeft || o && o.scrollLeft || 0) - (l && l.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (l && l.scrollTop || o && o.scrollTop || 0) - (l && l.clientTop || o && o.clientTop || 0)), !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r), e.which || void 0 === n || (e.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== h() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return nt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return nt.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, o, a) {
                var l = nt.extend(new nt.Event, o, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                a ? nt.event.trigger(l, null, t) : nt.event.dispatch.call(t, l), l.isDefaultPrevented() && o.preventDefault()
            }
        }, nt.removeEvent = mt.removeEventListener ? function(e, t, o) {
            e.removeEventListener && e.removeEventListener(t, o, !1)
        } : function(e, t, o) {
            var a = "on" + t;
            e.detachEvent && (typeof e[a] === Tt && (e[a] = null), e.detachEvent(a, o))
        }, nt.Event = function(e, t) {
            return this instanceof nt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? p : f) : this.type = e, t && nt.extend(this, t), this.timeStamp = e && e.timeStamp || nt.now(), void(this[nt.expando] = !0)) : new nt.Event(e, t)
        }, nt.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = p, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = p, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = p, this.stopPropagation()
            }
        }, nt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            nt.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var o, a = this,
                        l = e.relatedTarget,
                        n = e.handleObj;
                    return (!l || l !== a && !nt.contains(a, l)) && (e.type = n.origType, o = n.handler.apply(this, arguments), e.type = t), o
                }
            }
        }), at.submitBubbles || (nt.event.special.submit = {
            setup: function() {
                return nt.nodeName(this, "form") ? !1 : void nt.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        o = nt.nodeName(t, "input") || nt.nodeName(t, "button") ? t.form : void 0;
                    o && !nt._data(o, "submitBubbles") && (nt.event.add(o, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), nt._data(o, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && nt.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return nt.nodeName(this, "form") ? !1 : void nt.event.remove(this, "._submit")
            }
        }), at.changeBubbles || (nt.event.special.change = {
            setup: function() {
                return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (nt.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), nt.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), nt.event.simulate("change", this, e, !0)
                })), !1) : void nt.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Dt.test(t.nodeName) && !nt._data(t, "changeBubbles") && (nt.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || nt.event.simulate("change", this.parentNode, e, !0)
                    }), nt._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return nt.event.remove(this, "._change"), !Dt.test(this.nodeName)
            }
        }), at.focusinBubbles || nt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var o = function(e) {
                nt.event.simulate(t, e.target, nt.event.fix(e), !0)
            };
            nt.event.special[t] = {
                setup: function() {
                    var a = this.ownerDocument || this,
                        l = nt._data(a, t);
                    l || a.addEventListener(e, o, !0), nt._data(a, t, (l || 0) + 1)
                },
                teardown: function() {
                    var a = this.ownerDocument || this,
                        l = nt._data(a, t) - 1;
                    l ? nt._data(a, t, l) : (a.removeEventListener(e, o, !0), nt._removeData(a, t))
                }
            }
        }), nt.fn.extend({
            on: function(e, t, o, a, l) {
                var n, r;
                if ("object" == typeof e) {
                    "string" != typeof t && (o = o || t, t = void 0);
                    for (n in e) this.on(n, t, o, e[n], l);
                    return this
                }
                if (null == o && null == a ? (a = t, o = t = void 0) : null == a && ("string" == typeof t ? (a = o, o = void 0) : (a = o, o = t, t = void 0)), a === !1) a = f;
                else if (!a) return this;
                return 1 === l && (r = a, a = function(e) {
                    return nt().off(e), r.apply(this, arguments)
                }, a.guid = r.guid || (r.guid = nt.guid++)), this.each(function() {
                    nt.event.add(this, e, a, o, t)
                })
            },
            one: function(e, t, o, a) {
                return this.on(e, t, o, a, 1)
            },
            off: function(e, t, o) {
                var a, l;
                if (e && e.preventDefault && e.handleObj) return a = e.handleObj, nt(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                if ("object" == typeof e) {
                    for (l in e) this.off(l, t, e[l]);
                    return this
                }
                return (t === !1 || "function" == typeof t) && (o = t, t = void 0), o === !1 && (o = f), this.each(function() {
                    nt.event.remove(this, e, o, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    nt.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var o = this[0];
                return o ? nt.event.trigger(e, t, o, !0) : void 0
            }
        });
        var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Bt = / jQuery\d+="(?:null|\d+)"/g,
            zt = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
            Ht = /^\s+/,
            Ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            jt = /<([\w:]+)/,
            Vt = /<tbody/i,
            Gt = /<|&#?\w+;/,
            $t = /<(?:script|style|link)/i,
            Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Kt = /^$|\/(?:java|ecma)script/i,
            Xt = /^true\/(.*)/,
            qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Yt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: at.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Jt = m(mt),
            Zt = Jt.appendChild(mt.createElement("div"));
        Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, nt.extend({
            clone: function(e, t, o) {
                var a, l, n, r, i, c = nt.contains(e.ownerDocument, e);
                if (at.html5Clone || nt.isXMLDoc(e) || !zt.test("<" + e.nodeName + ">") ? n = e.cloneNode(!0) : (Zt.innerHTML = e.outerHTML, Zt.removeChild(n = Zt.firstChild)), !(at.noCloneEvent && at.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || nt.isXMLDoc(e)))
                    for (a = C(n), i = C(e), r = 0; null != (l = i[r]); ++r) a[r] && x(l, a[r]);
                if (t)
                    if (o)
                        for (i = i || C(e), a = a || C(n), r = 0; null != (l = i[r]); r++) w(l, a[r]);
                    else w(e, n);
                return a = C(n, "script"), a.length > 0 && y(a, !c && C(e, "script")), a = i = l = null, n
            },
            buildFragment: function(e, t, o, a) {
                for (var l, n, r, i, c, s, d, u = e.length, p = m(t), f = [], h = 0; u > h; h++)
                    if (n = e[h], n || 0 === n)
                        if ("object" === nt.type(n)) nt.merge(f, n.nodeType ? [n] : n);
                        else if (Gt.test(n)) {
                    for (i = i || p.appendChild(t.createElement("div")), c = (jt.exec(n) || ["", ""])[1].toLowerCase(), d = Yt[c] || Yt._default, i.innerHTML = d[1] + n.replace(Ut, "<$1></$2>") + d[2], l = d[0]; l--;) i = i.lastChild;
                    if (!at.leadingWhitespace && Ht.test(n) && f.push(t.createTextNode(Ht.exec(n)[0])), !at.tbody)
                        for (n = "table" !== c || Vt.test(n) ? "<table>" !== d[1] || Vt.test(n) ? 0 : i : i.firstChild, l = n && n.childNodes.length; l--;) nt.nodeName(s = n.childNodes[l], "tbody") && !s.childNodes.length && n.removeChild(s);
                    for (nt.merge(f, i.childNodes), i.textContent = ""; i.firstChild;) i.removeChild(i.firstChild);
                    i = p.lastChild
                } else f.push(t.createTextNode(n));
                for (i && p.removeChild(i), at.appendChecked || nt.grep(C(f, "input"), g), h = 0; n = f[h++];)
                    if ((!a || -1 === nt.inArray(n, a)) && (r = nt.contains(n.ownerDocument, n), i = C(p.appendChild(n), "script"), r && y(i), o))
                        for (l = 0; n = i[l++];) Kt.test(n.type || "") && o.push(n);
                return i = null, p
            },
            cleanData: function(e, t) {
                for (var o, a, l, n, r = 0, i = nt.expando, c = nt.cache, s = at.deleteExpando, d = nt.event.special; null != (o = e[r]); r++)
                    if ((t || nt.acceptData(o)) && (l = o[i], n = l && c[l])) {
                        if (n.events)
                            for (a in n.events) d[a] ? nt.event.remove(o, a) : nt.removeEvent(o, a, n.handle);
                        c[l] && (delete c[l], s ? delete o[i] : typeof o.removeAttribute !== Tt ? o.removeAttribute(i) : o[i] = null, X.push(l))
                    }
            }
        }), nt.fn.extend({
            text: function(e) {
                return Rt(this, function(e) {
                    return void 0 === e ? nt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || mt).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var o, a = e ? nt.filter(e, this) : this, l = 0; null != (o = a[l]); l++) t || 1 !== o.nodeType || nt.cleanData(C(o)), o.parentNode && (t && nt.contains(o.ownerDocument, o) && y(C(o, "script")), o.parentNode.removeChild(o));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && nt.cleanData(C(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && nt.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return nt.clone(this, e, t)
                })
            },
            html: function(e) {
                return Rt(this, function(e) {
                    var t = this[0] || {},
                        o = 0,
                        a = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Bt, "") : void 0;
                    if (!("string" != typeof e || $t.test(e) || !at.htmlSerialize && zt.test(e) || !at.leadingWhitespace && Ht.test(e) || Yt[(jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Ut, "<$1></$2>");
                        try {
                            for (; a > o; o++) t = this[o] || {}, 1 === t.nodeType && (nt.cleanData(C(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (l) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, nt.cleanData(C(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = Y.apply([], e);
                var o, a, l, n, r, i, c = 0,
                    s = this.length,
                    d = this,
                    u = s - 1,
                    p = e[0],
                    f = nt.isFunction(p);
                if (f || s > 1 && "string" == typeof p && !at.checkClone && Wt.test(p)) return this.each(function(o) {
                    var a = d.eq(o);
                    f && (e[0] = p.call(this, o, a.html())), a.domManip(e, t)
                });
                if (s && (i = nt.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                    for (n = nt.map(C(i, "script"), v), l = n.length; s > c; c++) a = i, c !== u && (a = nt.clone(a, !0, !0), l && nt.merge(n, C(a, "script"))), t.call(this[c], a, c);
                    if (l)
                        for (r = n[n.length - 1].ownerDocument, nt.map(n, b), c = 0; l > c; c++) a = n[c], Kt.test(a.type || "") && !nt._data(a, "globalEval") && nt.contains(r, a) && (a.src ? nt._evalUrl && nt._evalUrl(a.src) : nt.globalEval((a.text || a.textContent || a.innerHTML || "").replace(qt, "")));
                    i = o = null
                }
                return this
            }
        }), nt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            nt.fn[e] = function(e) {
                for (var o, a = 0, l = [], n = nt(e), r = n.length - 1; r >= a; a++) o = a === r ? this : this.clone(!0), nt(n[a])[t](o), J.apply(l, o.get());
                return this.pushStack(l)
            }
        });
        var Qt, eo = {};
        ! function() {
            var e, t, o = mt.createElement("div"),
                a = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = o.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", at.opacity = /^0.5/.test(e.style.opacity), at.cssFloat = !!e.style.cssFloat, o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === o.style.backgroundClip, e = o = null, at.shrinkWrapBlocks = function() {
                var e, o, l, n;
                if (null == t) {
                    if (e = mt.getElementsByTagName("body")[0], !e) return;
                    n = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", o = mt.createElement("div"), l = mt.createElement("div"), e.appendChild(o).appendChild(l), t = !1, typeof l.style.zoom !== Tt && (l.style.cssText = a + ";width:1px;padding:1px;zoom:1", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", t = 3 !== l.offsetWidth), e.removeChild(o), e = o = l = null
                }
                return t
            }
        }();
        var to, oo, ao = /^margin/,
            lo = new RegExp("^(" + Et + ")(?!px)[a-z%]+$", "i"),
            no = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (to = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, oo = function(e, t, o) {
            var a, l, n, r, i = e.style;
            return o = o || to(e), r = o ? o.getPropertyValue(t) || o[t] : void 0, o && ("" !== r || nt.contains(e.ownerDocument, e) || (r = nt.style(e, t)), lo.test(r) && ao.test(t) && (a = i.width, l = i.minWidth, n = i.maxWidth, i.minWidth = i.maxWidth = i.width = r, r = o.width, i.width = a, i.minWidth = l, i.maxWidth = n)), void 0 === r ? r : r + ""
        }) : mt.documentElement.currentStyle && (to = function(e) {
            return e.currentStyle
        }, oo = function(e, t, o) {
            var a, l, n, r, i = e.style;
            return o = o || to(e), r = o ? o[t] : void 0, null == r && i && i[t] && (r = i[t]), lo.test(r) && !no.test(t) && (a = i.left, l = e.runtimeStyle, n = l && l.left, n && (l.left = e.currentStyle.left), i.left = "fontSize" === t ? "1em" : r, r = i.pixelLeft + "px", i.left = a, n && (l.left = n)), void 0 === r ? r : r + "" || "auto"
        }), ! function() {
            function t() {
                var t, o, a = mt.getElementsByTagName("body")[0];
                a && (t = mt.createElement("div"), o = mt.createElement("div"), t.style.cssText = s, a.appendChild(t).appendChild(o), o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", nt.swap(a, null != a.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    l = 4 === o.offsetWidth
                }), n = !0, r = !1, i = !0, e.getComputedStyle && (r = "1%" !== (e.getComputedStyle(o, null) || {}).top, n = "4px" === (e.getComputedStyle(o, null) || {
                    width: "4px"
                }).width), a.removeChild(t), o = a = null)
            }
            var o, a, l, n, r, i, c = mt.createElement("div"),
                s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = c.getElementsByTagName("a")[0], o.style.cssText = "float:left;opacity:.5", at.opacity = /^0.5/.test(o.style.opacity), at.cssFloat = !!o.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", at.clearCloneStyle = "content-box" === c.style.backgroundClip, o = c = null, nt.extend(at, {
                reliableHiddenOffsets: function() {
                    if (null != a) return a;
                    var e, t, o, l = mt.createElement("div"),
                        n = mt.getElementsByTagName("body")[0];
                    return n ? (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = mt.createElement("div"), e.style.cssText = s, n.appendChild(e).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = l.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", o = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", a = o && 0 === t[0].offsetHeight, n.removeChild(e), l = n = null, a) : void 0
                },
                boxSizing: function() {
                    return null == l && t(), l
                },
                boxSizingReliable: function() {
                    return null == n && t(), n
                },
                pixelPosition: function() {
                    return null == r && t(), r
                },
                reliableMarginRight: function() {
                    var t, o, a, l;
                    if (null == i && e.getComputedStyle) {
                        if (t = mt.getElementsByTagName("body")[0], !t) return;
                        o = mt.createElement("div"), a = mt.createElement("div"), o.style.cssText = s, t.appendChild(o).appendChild(a), l = a.appendChild(mt.createElement("div")), l.style.cssText = a.style.cssText = d, l.style.marginRight = l.style.width = "0", a.style.width = "1px", i = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight), t.removeChild(o)
                    }
                    return i
                }
            })
        }(), nt.swap = function(e, t, o, a) {
            var l, n, r = {};
            for (n in t) r[n] = e.style[n], e.style[n] = t[n];
            l = o.apply(e, a || []);
            for (n in t) e.style[n] = r[n];
            return l
        };
        var ro = /alpha\([^)]*\)/i,
            io = /opacity\s*=\s*([^)]*)/,
            co = /^(none|table(?!-c[ea]).+)/,
            so = new RegExp("^(" + Et + ")(.*)$", "i"),
            uo = new RegExp("^([+-])=(" + Et + ")", "i"),
            po = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            fo = {
                letterSpacing: 0,
                fontWeight: 400
            },
            ho = ["Webkit", "O", "Moz", "ms"];
        nt.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var o = oo(e, "opacity");
                            return "" === o ? "1" : o
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": at.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, o, a) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var l, n, r, i = nt.camelCase(t),
                        c = e.style;
                    if (t = nt.cssProps[i] || (nt.cssProps[i] = E(c, i)), r = nt.cssHooks[t] || nt.cssHooks[i], void 0 === o) return r && "get" in r && void 0 !== (l = r.get(e, !1, a)) ? l : c[t];
                    if (n = typeof o, "string" === n && (l = uo.exec(o)) && (o = (l[1] + 1) * l[2] + parseFloat(nt.css(e, t)), n = "number"), null != o && o === o && ("number" !== n || nt.cssNumber[i] || (o += "px"), at.clearCloneStyle || "" !== o || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(r && "set" in r && void 0 === (o = r.set(e, o, a))))) try {
                        c[t] = "", c[t] = o
                    } catch (s) {}
                }
            },
            css: function(e, t, o, a) {
                var l, n, r, i = nt.camelCase(t);
                return t = nt.cssProps[i] || (nt.cssProps[i] = E(e.style, i)), r = nt.cssHooks[t] || nt.cssHooks[i], r && "get" in r && (n = r.get(e, !0, o)), void 0 === n && (n = oo(e, t, a)), "normal" === n && t in fo && (n = fo[t]), "" === o || o ? (l = parseFloat(n), o === !0 || nt.isNumeric(l) ? l || 0 : n) : n
            }
        }), nt.each(["height", "width"], function(e, t) {
            nt.cssHooks[t] = {
                get: function(e, o, a) {
                    return o ? 0 === e.offsetWidth && co.test(nt.css(e, "display")) ? nt.swap(e, po, function() {
                        return A(e, t, a)
                    }) : A(e, t, a) : void 0
                },
                set: function(e, o, a) {
                    var l = a && to(e);
                    return P(e, o, a ? R(e, t, a, at.boxSizing() && "border-box" === nt.css(e, "boxSizing", !1, l), l) : 0)
                }
            }
        }), at.opacity || (nt.cssHooks.opacity = {
            get: function(e, t) {
                return io.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var o = e.style,
                    a = e.currentStyle,
                    l = nt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    n = a && a.filter || o.filter || "";
                o.zoom = 1, (t >= 1 || "" === t) && "" === nt.trim(n.replace(ro, "")) && o.removeAttribute && (o.removeAttribute("filter"), "" === t || a && !a.filter) || (o.filter = ro.test(n) ? n.replace(ro, l) : n + " " + l)
            }
        }), nt.cssHooks.marginRight = F(at.reliableMarginRight, function(e, t) {
            return t ? nt.swap(e, {
                display: "inline-block"
            }, oo, [e, "marginRight"]) : void 0
        }), nt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            nt.cssHooks[e + t] = {
                expand: function(o) {
                    for (var a = 0, l = {}, n = "string" == typeof o ? o.split(" ") : [o]; 4 > a; a++) l[e + _t[a] + t] = n[a] || n[a - 2] || n[0];
                    return l
                }
            }, ao.test(e) || (nt.cssHooks[e + t].set = P)
        }), nt.fn.extend({
            css: function(e, t) {
                return Rt(this, function(e, t, o) {
                    var a, l, n = {},
                        r = 0;
                    if (nt.isArray(t)) {
                        for (a = to(e), l = t.length; l > r; r++) n[t[r]] = nt.css(e, t[r], !1, a);
                        return n
                    }
                    return void 0 !== o ? nt.style(e, t, o) : nt.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return _(this, !0)
            },
            hide: function() {
                return _(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Pt(this) ? nt(this).show() : nt(this).hide()
                })
            }
        }), nt.Tween = D, D.prototype = {
            constructor: D,
            init: function(e, t, o, a, l, n) {
                this.elem = e, this.prop = o, this.easing = l || "swing", this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = n || (nt.cssNumber[o] ? "" : "px")
            },
            cur: function() {
                var e = D.propHooks[this.prop];
                return e && e.get ? e.get(this) : D.propHooks._default.get(this)
            },
            run: function(e) {
                var t, o = D.propHooks[this.prop];
                return this.pos = t = this.options.duration ? nt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), o && o.set ? o.set(this) : D.propHooks._default.set(this), this
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = nt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    nt.fx.step[e.prop] ? nt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[nt.cssProps[e.prop]] || nt.cssHooks[e.prop]) ? nt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, nt.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, nt.fx = D.prototype.init, nt.fx.step = {};
        var mo, Co, go = /^(?:toggle|show|hide)$/,
            So = new RegExp("^(?:([+-])=|)(" + Et + ")([a-z%]*)$", "i"),
            vo = /queueHooks$/,
            bo = [I],
            yo = {
                "*": [function(e, t) {
                    var o = this.createTween(e, t),
                        a = o.cur(),
                        l = So.exec(t),
                        n = l && l[3] || (nt.cssNumber[e] ? "" : "px"),
                        r = (nt.cssNumber[e] || "px" !== n && +a) && So.exec(nt.css(o.elem, e)),
                        i = 1,
                        c = 20;
                    if (r && r[3] !== n) {
                        n = n || r[3], l = l || [], r = +a || 1;
                        do i = i || ".5", r /= i, nt.style(o.elem, e, r + n); while (i !== (i = o.cur() / a) && 1 !== i && --c)
                    }
                    return l && (r = o.start = +r || +a || 0, o.unit = n, o.end = l[1] ? r + (l[1] + 1) * l[2] : +l[2]), o
                }]
            };
        nt.Animation = nt.extend(B, {
                tweener: function(e, t) {
                    nt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var o, a = 0, l = e.length; l > a; a++) o = e[a], yo[o] = yo[o] || [], yo[o].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? bo.unshift(e) : bo.push(e)
                }
            }), nt.speed = function(e, t, o) {
                var a = e && "object" == typeof e ? nt.extend({}, e) : {
                    complete: o || !o && t || nt.isFunction(e) && e,
                    duration: e,
                    easing: o && t || t && !nt.isFunction(t) && t
                };
                return a.duration = nt.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in nt.fx.speeds ? nt.fx.speeds[a.duration] : nt.fx.speeds._default, (null == a.queue || a.queue === !0) && (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                    nt.isFunction(a.old) && a.old.call(this), a.queue && nt.dequeue(this, a.queue)
                }, a
            }, nt.fn.extend({
                fadeTo: function(e, t, o, a) {
                    return this.filter(Pt).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, o, a)
                },
                animate: function(e, t, o, a) {
                    var l = nt.isEmptyObject(e),
                        n = nt.speed(t, o, a),
                        r = function() {
                            var t = B(this, nt.extend({}, e), n);
                            (l || nt._data(this, "finish")) && t.stop(!0)
                        };
                    return r.finish = r, l || n.queue === !1 ? this.each(r) : this.queue(n.queue, r)
                },
                stop: function(e, t, o) {
                    var a = function(e) {
                        var t = e.stop;
                        delete e.stop, t(o)
                    };
                    return "string" != typeof e && (o = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            l = null != e && e + "queueHooks",
                            n = nt.timers,
                            r = nt._data(this);
                        if (l) r[l] && r[l].stop && a(r[l]);
                        else
                            for (l in r) r[l] && r[l].stop && vo.test(l) && a(r[l]);
                        for (l = n.length; l--;) n[l].elem !== this || null != e && n[l].queue !== e || (n[l].anim.stop(o), t = !1, n.splice(l, 1));
                        (t || !o) && nt.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(function() {
                        var t, o = nt._data(this),
                            a = o[e + "queue"],
                            l = o[e + "queueHooks"],
                            n = nt.timers,
                            r = a ? a.length : 0;
                        for (o.finish = !0, nt.queue(this, e, []), l && l.stop && l.stop.call(this, !0), t = n.length; t--;) n[t].elem === this && n[t].queue === e && (n[t].anim.stop(!0), n.splice(t, 1));
                        for (t = 0; r > t; t++) a[t] && a[t].finish && a[t].finish.call(this);
                        delete o.finish
                    })
                }
            }), nt.each(["toggle", "show", "hide"], function(e, t) {
                var o = nt.fn[t];
                nt.fn[t] = function(e, a, l) {
                    return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(N(t, !0), e, a, l)
                }
            }), nt.each({
                slideDown: N("show"),
                slideUp: N("hide"),
                slideToggle: N("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                nt.fn[e] = function(e, o, a) {
                    return this.animate(t, e, o, a)
                }
            }), nt.timers = [], nt.fx.tick = function() {
                var e, t = nt.timers,
                    o = 0;
                for (mo = nt.now(); o < t.length; o++) e = t[o], e() || t[o] !== e || t.splice(o--, 1);
                t.length || nt.fx.stop(), mo = void 0
            }, nt.fx.timer = function(e) {
                nt.timers.push(e), e() ? nt.fx.start() : nt.timers.pop()
            }, nt.fx.interval = 13, nt.fx.start = function() {
                Co || (Co = setInterval(nt.fx.tick, nt.fx.interval))
            }, nt.fx.stop = function() {
                clearInterval(Co), Co = null
            }, nt.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, nt.fn.delay = function(e, t) {
                return e = nt.fx ? nt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, o) {
                    var a = setTimeout(t, e);
                    o.stop = function() {
                        clearTimeout(a)
                    }
                })
            },
            function() {
                var e, t, o, a, l = mt.createElement("div");
                l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = l.getElementsByTagName("a")[0], o = mt.createElement("select"), a = o.appendChild(mt.createElement("option")), t = l.getElementsByTagName("input")[0], e.style.cssText = "top:1px", at.getSetAttribute = "t" !== l.className, at.style = /top/.test(e.getAttribute("style")), at.hrefNormalized = "/a" === e.getAttribute("href"), at.checkOn = !!t.value, at.optSelected = a.selected, at.enctype = !!mt.createElement("form").enctype, o.disabled = !0, at.optDisabled = !a.disabled, t = mt.createElement("input"), t.setAttribute("value", ""), at.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), at.radioValue = "t" === t.value, e = t = o = a = l = null
            }();
        var wo = /\r/g;
        nt.fn.extend({
            val: function(e) {
                var t, o, a, l = this[0];
                return arguments.length ? (a = nt.isFunction(e), this.each(function(o) {
                    var l;
                    1 === this.nodeType && (l = a ? e.call(this, o, nt(this).val()) : e, null == l ? l = "" : "number" == typeof l ? l += "" : nt.isArray(l) && (l = nt.map(l, function(e) {
                        return null == e ? "" : e + ""
                    })), t = nt.valHooks[this.type] || nt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, l, "value") || (this.value = l))
                })) : l ? (t = nt.valHooks[l.type] || nt.valHooks[l.nodeName.toLowerCase()], t && "get" in t && void 0 !== (o = t.get(l, "value")) ? o : (o = l.value, "string" == typeof o ? o.replace(wo, "") : null == o ? "" : o)) : void 0
            }
        }), nt.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = nt.find.attr(e, "value");
                        return null != t ? t : nt.text(e)
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, o, a = e.options, l = e.selectedIndex, n = "select-one" === e.type || 0 > l, r = n ? null : [], i = n ? l + 1 : a.length, c = 0 > l ? i : n ? l : 0; i > c; c++)
                            if (o = a[c], !(!o.selected && c !== l || (at.optDisabled ? o.disabled : null !== o.getAttribute("disabled")) || o.parentNode.disabled && nt.nodeName(o.parentNode, "optgroup"))) {
                                if (t = nt(o).val(), n) return t;
                                r.push(t)
                            }
                        return r
                    },
                    set: function(e, t) {
                        for (var o, a, l = e.options, n = nt.makeArray(t), r = l.length; r--;)
                            if (a = l[r], nt.inArray(nt.valHooks.option.get(a), n) >= 0) try {
                                a.selected = o = !0
                            } catch (i) {
                                a.scrollHeight
                            } else a.selected = !1;
                        return o || (e.selectedIndex = -1), l
                    }
                }
            }
        }), nt.each(["radio", "checkbox"], function() {
            nt.valHooks[this] = {
                set: function(e, t) {
                    return nt.isArray(t) ? e.checked = nt.inArray(nt(e).val(), t) >= 0 : void 0
                }
            }, at.checkOn || (nt.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var xo, To, ko = nt.expr.attrHandle,
            Fo = /^(?:checked|selected)$/i,
            Eo = at.getSetAttribute,
            _o = at.input;
        nt.fn.extend({
            attr: function(e, t) {
                return Rt(this, nt.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    nt.removeAttr(this, e)
                })
            }
        }), nt.extend({
            attr: function(e, t, o) {
                var a, l, n = e.nodeType;
                return e && 3 !== n && 8 !== n && 2 !== n ? typeof e.getAttribute === Tt ? nt.prop(e, t, o) : (1 === n && nt.isXMLDoc(e) || (t = t.toLowerCase(), a = nt.attrHooks[t] || (nt.expr.match.bool.test(t) ? To : xo)), void 0 === o ? a && "get" in a && null !== (l = a.get(e, t)) ? l : (l = nt.find.attr(e, t), null == l ? void 0 : l) : null !== o ? a && "set" in a && void 0 !== (l = a.set(e, o, t)) ? l : (e.setAttribute(t, o + ""), o) : void nt.removeAttr(e, t)) : void 0
            },
            removeAttr: function(e, t) {
                var o, a, l = 0,
                    n = t && t.match(bt);
                if (n && 1 === e.nodeType)
                    for (; o = n[l++];) a = nt.propFix[o] || o, nt.expr.match.bool.test(o) ? _o && Eo || !Fo.test(o) ? e[a] = !1 : e[nt.camelCase("default-" + o)] = e[a] = !1 : nt.attr(e, o, ""), e.removeAttribute(Eo ? o : a)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!at.radioValue && "radio" === t && nt.nodeName(e, "input")) {
                            var o = e.value;
                            return e.setAttribute("type", t), o && (e.value = o), t
                        }
                    }
                }
            }
        }), To = {
            set: function(e, t, o) {
                return t === !1 ? nt.removeAttr(e, o) : _o && Eo || !Fo.test(o) ? e.setAttribute(!Eo && nt.propFix[o] || o, o) : e[nt.camelCase("default-" + o)] = e[o] = !0, o
            }
        }, nt.each(nt.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var o = ko[t] || nt.find.attr;
            ko[t] = _o && Eo || !Fo.test(t) ? function(e, t, a) {
                var l, n;
                return a || (n = ko[t], ko[t] = l, l = null != o(e, t, a) ? t.toLowerCase() : null, ko[t] = n), l
            } : function(e, t, o) {
                return o ? void 0 : e[nt.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), _o && Eo || (nt.attrHooks.value = {
            set: function(e, t, o) {
                return nt.nodeName(e, "input") ? void(e.defaultValue = t) : xo && xo.set(e, t, o)
            }
        }), Eo || (xo = {
            set: function(e, t, o) {
                var a = e.getAttributeNode(o);
                return a || e.setAttributeNode(a = e.ownerDocument.createAttribute(o)), a.value = t += "", "value" === o || t === e.getAttribute(o) ? t : void 0
            }
        }, ko.id = ko.name = ko.coords = function(e, t, o) {
            var a;
            return o ? void 0 : (a = e.getAttributeNode(t)) && "" !== a.value ? a.value : null
        }, nt.valHooks.button = {
            get: function(e, t) {
                var o = e.getAttributeNode(t);
                return o && o.specified ? o.value : void 0
            },
            set: xo.set
        }, nt.attrHooks.contenteditable = {
            set: function(e, t, o) {
                xo.set(e, "" === t ? !1 : t, o)
            }
        }, nt.each(["width", "height"], function(e, t) {
            nt.attrHooks[t] = {
                set: function(e, o) {
                    return "" === o ? (e.setAttribute(t, "auto"), o) : void 0
                }
            }
        })), at.style || (nt.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Po = /^(?:input|select|textarea|button|object)$/i,
            Ro = /^(?:a|area)$/i;
        nt.fn.extend({
            prop: function(e, t) {
                return Rt(this, nt.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = nt.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (t) {}
                })
            }
        }), nt.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, o) {
                var a, l, n, r = e.nodeType;
                return e && 3 !== r && 8 !== r && 2 !== r ? (n = 1 !== r || !nt.isXMLDoc(e), n && (t = nt.propFix[t] || t, l = nt.propHooks[t]), void 0 !== o ? l && "set" in l && void 0 !== (a = l.set(e, o, t)) ? a : e[t] = o : l && "get" in l && null !== (a = l.get(e, t)) ? a : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = nt.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Po.test(e.nodeName) || Ro.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), at.hrefNormalized || nt.each(["href", "src"], function(e, t) {
            nt.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), at.optSelected || (nt.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), nt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            nt.propFix[this.toLowerCase()] = this
        }), at.enctype || (nt.propFix.enctype = "encoding");
        var Ao = /[\t\r\n\f]/g;
        nt.fn.extend({
            addClass: function(e) {
                var t, o, a, l, n, r, i = 0,
                    c = this.length,
                    s = "string" == typeof e && e;
                if (nt.isFunction(e)) return this.each(function(t) {
                    nt(this).addClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(bt) || []; c > i; i++)
                        if (o = this[i], a = 1 === o.nodeType && (o.className ? (" " + o.className + " ").replace(Ao, " ") : " ")) {
                            for (n = 0; l = t[n++];) a.indexOf(" " + l + " ") < 0 && (a += l + " ");
                            r = nt.trim(a), o.className !== r && (o.className = r)
                        }
                return this
            },
            removeClass: function(e) {
                var t, o, a, l, n, r, i = 0,
                    c = this.length,
                    s = 0 === arguments.length || "string" == typeof e && e;
                if (nt.isFunction(e)) return this.each(function(t) {
                    nt(this).removeClass(e.call(this, t, this.className))
                });
                if (s)
                    for (t = (e || "").match(bt) || []; c > i; i++)
                        if (o = this[i], a = 1 === o.nodeType && (o.className ? (" " + o.className + " ").replace(Ao, " ") : "")) {
                            for (n = 0; l = t[n++];)
                                for (; a.indexOf(" " + l + " ") >= 0;) a = a.replace(" " + l + " ", " ");
                            r = e ? nt.trim(a) : "", o.className !== r && (o.className = r)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var o = typeof e;
                return "boolean" == typeof t && "string" === o ? t ? this.addClass(e) : this.removeClass(e) : this.each(nt.isFunction(e) ? function(o) {
                    nt(this).toggleClass(e.call(this, o, this.className, t), t)
                } : function() {
                    if ("string" === o)
                        for (var t, a = 0, l = nt(this), n = e.match(bt) || []; t = n[a++];) l.hasClass(t) ? l.removeClass(t) : l.addClass(t);
                    else(o === Tt || "boolean" === o) && (this.className && nt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : nt._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", o = 0, a = this.length; a > o; o++)
                    if (1 === this[o].nodeType && (" " + this[o].className + " ").replace(Ao, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), nt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            nt.fn[t] = function(e, o) {
                return arguments.length > 0 ? this.on(t, null, e, o) : this.trigger(t)
            }
        }), nt.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, o) {
                return this.on(e, null, t, o)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, o, a) {
                return this.on(t, e, o, a)
            },
            undelegate: function(e, t, o) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", o)
            }
        });
        var Do = nt.now(),
            Lo = /\?/,
            No = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        nt.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var o, a = null,
                l = nt.trim(t + "");
            return l && !nt.trim(l.replace(No, function(e, t, l, n) {
                return o && t && (a = 0), 0 === a ? e : (o = l || t, a += !n - !l, "")
            })) ? Function("return " + l)() : nt.error("Invalid JSON: " + t)
        }, nt.parseXML = function(t) {
            var o, a;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (a = new DOMParser, o = a.parseFromString(t, "text/xml")) : (o = new ActiveXObject("Microsoft.XMLDOM"), o.async = "false", o.loadXML(t))
            } catch (l) {
                o = void 0
            }
            return o && o.documentElement && !o.getElementsByTagName("parsererror").length || nt.error("Invalid XML: " + t), o
        };
        var Mo, Io, Oo = /#.*$/,
            Bo = /([?&])_=[^&]*/,
            zo = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ho = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Uo = /^(?:GET|HEAD)$/,
            jo = /^\/\//,
            Vo = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Go = {},
            $o = {},
            Wo = "*/".concat("*");
        try {
            Io = location.href
        } catch (Ko) {
            Io = mt.createElement("a"), Io.href = "", Io = Io.href
        }
        Mo = Vo.exec(Io.toLowerCase()) || [], nt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Io,
                type: "GET",
                isLocal: Ho.test(Mo[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Wo,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": nt.parseJSON,
                    "text xml": nt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? U(U(e, nt.ajaxSettings), t) : U(nt.ajaxSettings, e)
            },
            ajaxPrefilter: z(Go),
            ajaxTransport: z($o),
            ajax: function(e, t) {
                function o(e, t, o, a) {
                    var l, d, g, S, b, w = t;
                    2 !== v && (v = 2, i && clearTimeout(i), s = void 0, r = a || "", y.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (S = j(u, y, o)), S = V(u, S, y, l), l ? (u.ifModified && (b = y.getResponseHeader("Last-Modified"), b && (nt.lastModified[n] = b), b = y.getResponseHeader("etag"), b && (nt.etag[n] = b)), 204 === e || "HEAD" === u.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = S.state, d = S.data, g = S.error, l = !g)) : (g = w, (e || !w) && (w = "error", 0 > e && (e = 0))), y.status = e, y.statusText = (t || w) + "", l ? h.resolveWith(p, [d, w, y]) : h.rejectWith(p, [y, w, g]), y.statusCode(C), C = void 0, c && f.trigger(l ? "ajaxSuccess" : "ajaxError", [y, u, l ? d : g]), m.fireWith(p, [y, w]), c && (f.trigger("ajaxComplete", [y, u]), --nt.active || nt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var a, l, n, r, i, c, s, d, u = nt.ajaxSetup({}, t),
                    p = u.context || u,
                    f = u.context && (p.nodeType || p.jquery) ? nt(p) : nt.event,
                    h = nt.Deferred(),
                    m = nt.Callbacks("once memory"),
                    C = u.statusCode || {},
                    g = {},
                    S = {},
                    v = 0,
                    b = "canceled",
                    y = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === v) {
                                if (!d)
                                    for (d = {}; t = zo.exec(r);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === v ? r : null
                        },
                        setRequestHeader: function(e, t) {
                            var o = e.toLowerCase();
                            return v || (e = S[o] = S[o] || e, g[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return v || (u.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > v)
                                    for (t in e) C[t] = [C[t], e[t]];
                                else y.always(e[y.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || b;
                            return s && s.abort(t), o(0, t), this
                        }
                    };
                if (h.promise(y).complete = m.add, y.success = y.done, y.error = y.fail, u.url = ((e || u.url || Io) + "").replace(Oo, "").replace(jo, Mo[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = nt.trim(u.dataType || "*").toLowerCase().match(bt) || [""], null == u.crossDomain && (a = Vo.exec(u.url.toLowerCase()), u.crossDomain = !(!a || a[1] === Mo[1] && a[2] === Mo[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Mo[3] || ("http:" === Mo[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = nt.param(u.data, u.traditional)), H(Go, u, t, y), 2 === v) return y;
                c = u.global, c && 0 === nt.active++ && nt.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Uo.test(u.type), n = u.url, u.hasContent || (u.data && (n = u.url += (Lo.test(n) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Bo.test(n) ? n.replace(Bo, "$1_=" + Do++) : n + (Lo.test(n) ? "&" : "?") + "_=" + Do++)), u.ifModified && (nt.lastModified[n] && y.setRequestHeader("If-Modified-Since", nt.lastModified[n]), nt.etag[n] && y.setRequestHeader("If-None-Match", nt.etag[n])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && y.setRequestHeader("Content-Type", u.contentType), y.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Wo + "; q=0.01" : "") : u.accepts["*"]);
                for (l in u.headers) y.setRequestHeader(l, u.headers[l]);
                if (u.beforeSend && (u.beforeSend.call(p, y, u) === !1 || 2 === v)) return y.abort();
                b = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) y[l](u[l]);
                if (s = H($o, u, t, y)) {
                    y.readyState = 1, c && f.trigger("ajaxSend", [y, u]), u.async && u.timeout > 0 && (i = setTimeout(function() {
                        y.abort("timeout")
                    }, u.timeout));
                    try {
                        v = 1, s.send(g, o)
                    } catch (w) {
                        if (!(2 > v)) throw w;
                        o(-1, w)
                    }
                } else o(-1, "No Transport");
                return y
            },
            getJSON: function(e, t, o) {
                return nt.get(e, t, o, "json")
            },
            getScript: function(e, t) {
                return nt.get(e, void 0, t, "script")
            }
        }), nt.each(["get", "post"], function(e, t) {
            nt[t] = function(e, o, a, l) {
                return nt.isFunction(o) && (l = l || a, a = o, o = void 0), nt.ajax({
                    url: e,
                    type: t,
                    dataType: l,
                    data: o,
                    success: a
                })
            }
        }), nt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            nt.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), nt._evalUrl = function(e) {
            return nt.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, nt.fn.extend({
            wrapAll: function(e) {
                if (nt.isFunction(e)) return this.each(function(t) {
                    nt(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = nt(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(nt.isFunction(e) ? function(t) {
                    nt(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = nt(this),
                        o = t.contents();
                    o.length ? o.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = nt.isFunction(e);
                return this.each(function(o) {
                    nt(this).wrapAll(t ? e.call(this, o) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    nt.nodeName(this, "body") || nt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), nt.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !at.reliableHiddenOffsets() && "none" === (e.style && e.style.display || nt.css(e, "display"))
        }, nt.expr.filters.visible = function(e) {
            return !nt.expr.filters.hidden(e)
        };
        var Xo = /%20/g,
            qo = /\[\]$/,
            Yo = /\r?\n/g,
            Jo = /^(?:submit|button|image|reset|file)$/i,
            Zo = /^(?:input|select|textarea|keygen)/i;
        nt.param = function(e, t) {
            var o, a = [],
                l = function(e, t) {
                    t = nt.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = nt.ajaxSettings && nt.ajaxSettings.traditional), nt.isArray(e) || e.jquery && !nt.isPlainObject(e)) nt.each(e, function() {
                l(this.name, this.value)
            });
            else
                for (o in e) G(o, e[o], t, l);
            return a.join("&").replace(Xo, "+")
        }, nt.fn.extend({
            serialize: function() {
                return nt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = nt.prop(this, "elements");
                    return e ? nt.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !nt(this).is(":disabled") && Zo.test(this.nodeName) && !Jo.test(e) && (this.checked || !At.test(e))
                }).map(function(e, t) {
                    var o = nt(this).val();
                    return null == o ? null : nt.isArray(o) ? nt.map(o, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Yo, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: o.replace(Yo, "\r\n")
                    }
                }).get()
            }
        }), nt.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $() || W()
        } : $;
        var Qo = 0,
            ea = {},
            ta = nt.ajaxSettings.xhr();
        e.ActiveXObject && nt(e).on("unload", function() {
            for (var e in ea) ea[e](void 0, !0)
        }), at.cors = !!ta && "withCredentials" in ta, ta = at.ajax = !!ta, ta && nt.ajaxTransport(function(e) {
            if (!e.crossDomain || at.cors) {
                var t;
                return {
                    send: function(o, a) {
                        var l, n = e.xhr(),
                            r = ++Qo;
                        if (n.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (l in e.xhrFields) n[l] = e.xhrFields[l];
                        e.mimeType && n.overrideMimeType && n.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        for (l in o) void 0 !== o[l] && n.setRequestHeader(l, o[l] + "");
                        n.send(e.hasContent && e.data || null), t = function(o, l) {
                            var i, c, s;
                            if (t && (l || 4 === n.readyState))
                                if (delete ea[r], t = void 0, n.onreadystatechange = nt.noop, l) 4 !== n.readyState && n.abort();
                                else {
                                    s = {}, i = n.status, "string" == typeof n.responseText && (s.text = n.responseText);
                                    try {
                                        c = n.statusText
                                    } catch (d) {
                                        c = ""
                                    }
                                    i || !e.isLocal || e.crossDomain ? 1223 === i && (i = 204) : i = s.text ? 200 : 404
                                }
                            s && a(i, c, s, n.getAllResponseHeaders())
                        }, e.async ? 4 === n.readyState ? setTimeout(t) : n.onreadystatechange = ea[r] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), nt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return nt.globalEval(e), e
                }
            }
        }), nt.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), nt.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, o = mt.head || nt("head")[0] || mt.documentElement;
                return {
                    send: function(a, l) {
                        t = mt.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, o) {
                            (o || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, o || l(200, "success"))
                        }, o.insertBefore(t, o.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var oa = [],
            aa = /(=)\?(?=&|$)|\?\?/;
        nt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = oa.pop() || nt.expando + "_" + Do++;
                return this[e] = !0, e
            }
        }), nt.ajaxPrefilter("json jsonp", function(t, o, a) {
            var l, n, r, i = t.jsonp !== !1 && (aa.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && aa.test(t.data) && "data");
            return i || "jsonp" === t.dataTypes[0] ? (l = t.jsonpCallback = nt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, i ? t[i] = t[i].replace(aa, "$1" + l) : t.jsonp !== !1 && (t.url += (Lo.test(t.url) ? "&" : "?") + t.jsonp + "=" + l), t.converters["script json"] = function() {
                return r || nt.error(l + " was not called"), r[0]
            }, t.dataTypes[0] = "json", n = e[l], e[l] = function() {
                r = arguments
            }, a.always(function() {
                e[l] = n, t[l] && (t.jsonpCallback = o.jsonpCallback, oa.push(l)), r && nt.isFunction(n) && n(r[0]), r = n = void 0
            }), "script") : void 0
        }), nt.parseHTML = function(e, t, o) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (o = t, t = !1), t = t || mt;
            var a = pt.exec(e),
                l = !o && [];
            return a ? [t.createElement(a[1])] : (a = nt.buildFragment([e], t, l), l && l.length && nt(l).remove(), nt.merge([], a.childNodes))
        };
        var la = nt.fn.load;
        nt.fn.load = function(e, t, o) {
            if ("string" != typeof e && la) return la.apply(this, arguments);
            var a, l, n, r = this,
                i = e.indexOf(" ");
            return i >= 0 && (a = e.slice(i, e.length), e = e.slice(0, i)), nt.isFunction(t) ? (o = t, t = void 0) : t && "object" == typeof t && (n = "POST"), r.length > 0 && nt.ajax({
                url: e,
                type: n,
                dataType: "html",
                data: t
            }).done(function(e) {
                l = arguments, r.html(a ? nt("<div>").append(nt.parseHTML(e)).find(a) : e)
            }).complete(o && function(e, t) {
                r.each(o, l || [e.responseText, t, e])
            }), this
        }, nt.expr.filters.animated = function(e) {
            return nt.grep(nt.timers, function(t) {
                return e === t.elem
            }).length
        };
        var na = e.document.documentElement;
        nt.offset = {
            setOffset: function(e, t, o) {
                var a, l, n, r, i, c, s, d = nt.css(e, "position"),
                    u = nt(e),
                    p = {};
                "static" === d && (e.style.position = "relative"), i = u.offset(), n = nt.css(e, "top"), c = nt.css(e, "left"), s = ("absolute" === d || "fixed" === d) && nt.inArray("auto", [n, c]) > -1, s ? (a = u.position(), r = a.top, l = a.left) : (r = parseFloat(n) || 0, l = parseFloat(c) || 0), nt.isFunction(t) && (t = t.call(e, o, i)), null != t.top && (p.top = t.top - i.top + r), null != t.left && (p.left = t.left - i.left + l), "using" in t ? t.using.call(e, p) : u.css(p)
            }
        }, nt.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    nt.offset.setOffset(this, e, t)
                });
                var t, o, a = {
                        top: 0,
                        left: 0
                    },
                    l = this[0],
                    n = l && l.ownerDocument;
                return n ? (t = n.documentElement, nt.contains(t, l) ? (typeof l.getBoundingClientRect !== Tt && (a = l.getBoundingClientRect()), o = K(n), {
                    top: a.top + (o.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: a.left + (o.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : a) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, o = {
                            top: 0,
                            left: 0
                        },
                        a = this[0];
                    return "fixed" === nt.css(a, "position") ? t = a.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), nt.nodeName(e[0], "html") || (o = e.offset()), o.top += nt.css(e[0], "borderTopWidth", !0), o.left += nt.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - o.top - nt.css(a, "marginTop", !0),
                        left: t.left - o.left - nt.css(a, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || na; e && !nt.nodeName(e, "html") && "static" === nt.css(e, "position");) e = e.offsetParent;
                    return e || na
                })
            }
        }), nt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var o = /Y/.test(t);
            nt.fn[e] = function(a) {
                return Rt(this, function(e, a, l) {
                    var n = K(e);
                    return void 0 === l ? n ? t in n ? n[t] : n.document.documentElement[a] : e[a] : void(n ? n.scrollTo(o ? nt(n).scrollLeft() : l, o ? l : nt(n).scrollTop()) : e[a] = l)
                }, e, a, arguments.length, null)
            }
        }), nt.each(["top", "left"], function(e, t) {
            nt.cssHooks[t] = F(at.pixelPosition, function(e, o) {
                return o ? (o = oo(e, t), lo.test(o) ? nt(e).position()[t] + "px" : o) : void 0
            })
        }), nt.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            nt.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(o, a) {
                nt.fn[a] = function(a, l) {
                    var n = arguments.length && (o || "boolean" != typeof a),
                        r = o || (a === !0 || l === !0 ? "margin" : "border");
                    return Rt(this, function(t, o, a) {
                        var l;
                        return nt.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (l = t.documentElement, Math.max(t.body["scroll" + e], l["scroll" + e], t.body["offset" + e], l["offset" + e], l["client" + e])) : void 0 === a ? nt.css(t, o, r) : nt.style(t, o, a, r)
                    }, t, n ? a : void 0, n, null)
                }
            })
        }), nt.fn.size = function() {
            return this.length
        }, nt.fn.andSelf = nt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return nt
        });
        var ra = e.jQuery,
            ia = e.$;
        return nt.noConflict = function(t) {
            return e.$ === nt && (e.$ = ia), t && e.jQuery === nt && (e.jQuery = ra), nt
        }, typeof t === Tt && (e.jQuery = e.$ = nt), nt
    }),
    function() {
        var e;
        e = function(e) {
            var t, o;
            return t = !1, e(function() {
                var a;
                return a = (document.body || document.documentElement).style, t = void 0 !== a.animation || void 0 !== a.WebkitAnimation || void 0 !== a.MozAnimation || void 0 !== a.MsAnimation || void 0 !== a.OAnimation, e(window).bind("keyup.vex", function(e) {
                    return 27 === e.keyCode ? o.closeByEscape() : void 0
                })
            }), o = {
                globalID: 1,
                animationEndEvent: "animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend",
                baseClassNames: {
                    vex: "vex",
                    content: "vex-content",
                    overlay: "vex-overlay",
                    close: "vex-close",
                    closing: "vex-closing",
                    open: "vex-open"
                },
                defaultOptions: {
                    content: "",
                    showCloseButton: !0,
                    escapeButtonCloses: !0,
                    overlayClosesOnClick: !0,
                    appendLocation: "body",
                    className: "",
                    css: {},
                    overlayClassName: "",
                    overlayCSS: {},
                    contentClassName: "",
                    contentCSS: {},
                    closeClassName: "",
                    closeCSS: {}
                },
                open: function(t) {
                    return t = e.extend({}, o.defaultOptions, t), t.id = o.globalID, o.globalID += 1, t.$vex = e("<div>").addClass(o.baseClassNames.vex).addClass(t.className).css(t.css).data({
                        vex: t
                    }), t.$vexOverlay = e("<div>").addClass(o.baseClassNames.overlay).addClass(t.overlayClassName).css(t.overlayCSS).data({
                        vex: t
                    }), t.overlayClosesOnClick && t.$vexOverlay.bind("click.vex", function(t) {
                        return t.target === this ? o.close(e(this).data().vex.id) : void 0
                    }), t.$vex.append(t.$vexOverlay), t.$vexContent = e("<div>").addClass(o.baseClassNames.content).addClass(t.contentClassName).css(t.contentCSS).append(t.content).data({
                        vex: t
                    }), t.$vex.append(t.$vexContent), t.showCloseButton && (t.$closeButton = e("<div>").addClass(o.baseClassNames.close).addClass(t.closeClassName).css(t.closeCSS).data({
                        vex: t
                    }).bind("click.vex", function() {
                        return o.close(e(this).data().vex.id)
                    }), t.$vexContent.append(t.$closeButton)), e(t.appendLocation).append(t.$vex), o.setupBodyClassName(t.$vex), t.afterOpen && t.afterOpen(t.$vexContent, t), setTimeout(function() {
                        return t.$vexContent.trigger("vexOpen", t)
                    }, 0), t.$vexContent
                },
                getAllVexes: function() {
                    return e("." + o.baseClassNames.vex + ':not(".' + o.baseClassNames.closing + '") .' + o.baseClassNames.content)
                },
                getVexByID: function(t) {
                    return o.getAllVexes().filter(function() {
                        return e(this).data().vex.id === t
                    })
                },
                close: function(e) {
                    var t;
                    if (!e) {
                        if (t = o.getAllVexes().last(), !t.length) return !1;
                        e = t.data().vex.id
                    }
                    return o.closeByID(e)
                },
                closeAll: function() {
                    var t;
                    return t = o.getAllVexes().map(function() {
                        return e(this).data().vex.id
                    }).toArray(), (null != t ? t.length : void 0) ? (e.each(t.reverse(), function(e, t) {
                        return o.closeByID(t)
                    }), !0) : !1
                },
                closeByID: function(a) {
                    var l, n, r, i, c;
                    return n = o.getVexByID(a), n.length ? (l = n.data().vex.$vex, c = e.extend({}, n.data().vex), r = function() {
                        return c.beforeClose ? c.beforeClose(n, c) : void 0
                    }, i = function() {
                        return n.trigger("vexClose", c), l.remove(), c.afterClose ? c.afterClose(n, c) : void 0
                    }, t ? (r(), l.unbind(o.animationEndEvent).bind(o.animationEndEvent, function() {
                        return i()
                    }).addClass(o.baseClassNames.closing)) : (r(), i()), !0) : void 0
                },
                closeByEscape: function() {
                    var t, a, l;
                    return l = o.getAllVexes().map(function() {
                        return e(this).data().vex.id
                    }).toArray(), (null != l ? l.length : void 0) ? (a = Math.max.apply(Math, l), t = o.getVexByID(a), t.data().vex.escapeButtonCloses !== !0 ? !1 : o.closeByID(a)) : !1
                },
                setupBodyClassName: function(t) {
                    return t.bind("vexOpen.vex", function() {
                        return e("body").addClass(o.baseClassNames.open)
                    }).bind("vexClose.vex", function() {
                        return o.getAllVexes().length ? void 0 : e("body").removeClass(o.baseClassNames.open)
                    })
                },
                hideLoading: function() {
                    return e(".vex-loading-spinner").remove()
                },
                showLoading: function() {
                    return o.hideLoading(), e("body").append('<div class="vex-loading-spinner ' + o.defaultOptions.className + '"></div>')
                }
            }
        }, "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : window.vex = e(jQuery)
    }.call(this),
    function() {
        var e;
        e = function(e, t) {
            var o, a;
            return null == t ? e.error("Vex is required to use vex.dialog") : (o = function(t) {
                var o;
                return o = {}, e.each(t.serializeArray(), function() {
                    return o[this.name] ? (o[this.name].push || (o[this.name] = [o[this.name]]), o[this.name].push(this.value || "")) : o[this.name] = this.value || ""
                }), o
            }, a = {}, a.buttons = {
                YES: {
                    text: "OK",
                    type: "submit",
                    className: "vex-dialog-button-primary"
                },
                NO: {
                    text: "Cancel",
                    type: "button",
                    className: "vex-dialog-button-secondary",
                    click: function(e) {
                        return e.data().vex.value = !1, t.close(e.data().vex.id)
                    }
                }
            }, a.defaultOptions = {
                callback: function() {},
                afterOpen: function() {},
                message: "Message",
                input: '<input name="vex" type="hidden" value="_vex-empty-value" />',
                value: !1,
                buttons: [a.buttons.YES, a.buttons.NO],
                showCloseButton: !1,
                onSubmit: function(l) {
                    var n, r;
                    return n = e(this), r = n.parent(), l.preventDefault(), l.stopPropagation(), r.data().vex.value = a.getFormValueOnSubmit(o(n)), t.close(r.data().vex.id)
                },
                focusFirstInput: !0
            }, a.defaultAlertOptions = {
                message: "Alert",
                buttons: [a.buttons.YES]
            }, a.defaultConfirmOptions = {
                message: "Confirm"
            }, a.open = function(o) {
                var l;
                return o = e.extend({}, t.defaultOptions, a.defaultOptions, o), o.content = a.buildDialogForm(o), o.beforeClose = function(e) {
                    return o.callback(e.data().vex.value)
                }, l = t.open(o), o.focusFirstInput && l.find('input[type="submit"], textarea, input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="email"], input[type="month"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="text"], input[type="time"], input[type="url"], input[type="week"]').first().focus(), l
            }, a.alert = function(t) {
                return "string" == typeof t && (t = {
                    message: t
                }), t = e.extend({}, a.defaultAlertOptions, t), a.open(t)
            }, a.confirm = function(t) {
                return "string" == typeof t ? e.error("dialog.confirm(options) requires options.callback.") : (t = e.extend({}, a.defaultConfirmOptions, t), a.open(t))
            }, a.prompt = function(t) {
                var o;
                return "string" == typeof t ? e.error("dialog.prompt(options) requires options.callback.") : (o = {
                    message: '<label for="vex">' + (t.label || "Prompt:") + "</label>",
                    input: '<input name="vex" type="text" class="vex-dialog-prompt-input" placeholder="' + (t.placeholder || "") + '"  value="' + (t.value || "") + '" />'
                }, t = e.extend({}, o, t), a.open(t))
            }, a.buildDialogForm = function(t) {
                var o, l, n;
                return o = e('<form class="vex-dialog-form" />'), n = e('<div class="vex-dialog-message" />'), l = e('<div class="vex-dialog-input" />'), o.append(n.append(t.message)).append(l.append(t.input)).append(a.buttonsToDOM(t.buttons)).bind("submit.vex", t.onSubmit), o
            }, a.getFormValueOnSubmit = function(e) {
                return e.vex || "" === e.vex ? "_vex-empty-value" === e.vex ? !0 : e.vex : e
            }, a.buttonsToDOM = function(o) {
                var a;
                return a = e('<div class="vex-dialog-buttons" />'), e.each(o, function(l, n) {
                    return a.append(e('<input type="' + n.type + '" />').val(n.text).addClass(n.className + " vex-dialog-button " + (0 === l ? "vex-first " : "") + (l === o.length - 1 ? "vex-last " : "")).bind("click.vex", function(o) {
                        return n.click ? n.click(e(this).parents("." + t.baseClassNames.content), o) : void 0
                    }))
                }), a
            }, a)
        }, "function" == typeof define && define.amd ? define(["jquery", "vex"], e) : "object" == typeof exports ? module.exports = e(require("jquery"), require("vex")) : window.vex.dialog = e(window.jQuery, window.vex)
    }.call(this);
//# sourceMappingURL=ethercalc.js.map
