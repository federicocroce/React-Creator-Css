{
	"ControllerBase": {
		"prefix": "ctrl",
		"body": [
			"(function(){",
			"\t 'usestrict';",
			"",
			"\t angular.module('clemente.controllers')",
			"\t .controller('$controllerName', $controllerName);",
			"",
			"\t function $controllerName('$scope') {",
			"",
			"\t \t $scope.data = {};",
			"",
			"\t }",
			"})();"
		],
		"description": "Controller"
	},
	"Print to console": {
		"prefix": "algo",
		"body": [
			"for (var ${1:index} = 0; ${1:index} < ${2:array}.length; ${1:index}++) {",
			"\tvar ${3:element} = ${2:array}[${1:index}];",
			"\t$0",
			"}"
		],
		"description": "Log output to console"
	},
	"SClassComponent": {
		"prefix": "SClassComponent",
		"body": [
			"import React from 'react';\n",
			"class ${1:className} extends React.Component {\n",
			"\tconstructor(props) {",
			"\t\tsuper(props);",
			"\t}\n",
			"\trender() {",
			"\t\treturn (",
			"\t\t\t<div>",
			"\t\t\t\t<h1>${2:title}</h1>",
			"\t\t\t</div>",
			"\t\t);",
			"\t}",
			"}\n",
			"export default ${1:className};"
		],
		"description": "Custom Component"
	},
	"SFunctionComponent": {
		"prefix": "SFunctionComponent",
		"body": [
			"import React from 'react';\n",
			"const ${1:functionName} = props => {\n",
			"\treturn (",
			"\t\t<div>",
			"\t\t\t<h1>${2:title}</h1>",
			"\t\t</div>",
			"\t);",
			"}\n",
			"export default ${1:functionName};"
		],
		"description": "Custom Component"
	},
	"SClassComponentRedux": {
		"prefix": "SClassComponentRedux",
		"body": [
			"import React from 'react';",
			"import { connect } from 'react-redux';",
			"import { withRouter } from 'react-router-dom';\n",
			"class ${1:className} extends React.Component {\n",
			"\tconstructor(props) {",
			"\t\tsuper(props);",
			"\t}\n",
			"componentDidMount() {",
			"\tthis.props.clear();",
			"\tif (this.props.${2:name}.list.length == 0)",
			"\tthis.props.fetchObjects();",
			"}\n",
			"\trender() {\n",
			"\t\t\t\tconst props = this.props;\n",
			"\t\treturn (",
			"\t\t\t<div>",
			"\t\t\t\t<div className='list-container'>",
			"\t\t\t\t\t{props.${2:name}.list.length > 0 ? props.${2:name}.list.map((item, index) => { return <Post key={index} index={index} object={item} /> }) : <Spinner/>}",
			"\t\t\t\t</div>\n",
			"\t\t\t\t<React.components.Button className='primary-button' label='VOLVER' back />\n",
			"\t\t\t</div>",
			"\t\t);",
			"\t}",
			"}\n",
			"const mapStateToProps = (state) => {",
			"\treturn {",
			"\t\tstate: state",
			"\t};",
			"}\n",
			"const mapDispatchToProps = dispatch => {",
			"\treturn {",
			"\t\tfetchObjects() {",
			"\t\t\tReact.actions.actionsPost.fetchObjects(dispatch)",
			"\t\t},",
			"\t\tclear() {",
			"\t\t\tdispatch(React.actions.actionsPost.clear());",
			"\t\t},",
			"\t};",
			"}\n",
			"export default withRouter(connect(",
			"\tmapStateToProps,",
			"\tmapDispatchToProps",
			")(${1:functionName}));"
		],
		"description": "SClassComponentRedux"
	},
	"SFunctionComponentRedux": {
		"prefix": "SFunctionComponentRedux",
		"body": [
			"import React from 'react';",
			"import { withRouter } from 'react-router-dom';\n",
			"const ${1:functionName} = props => {\n",
			"\treturn (",
			"\t\t<div>",
			"\t\t\t<h1>${2:title}</h1>",
			"\t\t</div>",
			"\t);",
			"}\n",
			"const mapStateToProps = (state) => {",
			"\treturn {",
			"\t\t state: state",
			"};",
			"}\n",
			"const mapDispatchToProps = dispatch => {",
			"\treturn {",
			"\t\tfetchObjects() {",
			"\t\t\tfetchObjects(dispatch)",
			"\t\t}",
			"\t};",
			"}\n",
			"export default withRouter(connect(",
			"\tmapStateToProps,",
			"\tmapDispatchToProps",
			")(${1:functionName}));"
		],
		"description": "SFunctionComponentRedux"
	},
	"SFunctionComponentForm": {
		"prefix": "SFunctionComponentForm",
		"body": [
			"import React from 'react';",
			"import { connect } from 'react-redux';",
			"import { reduxForm, Field } from 'redux-form';",
			"import { withRouter } from 'react-router-dom';\n",
			"const ${1:functionName}ReduxForm = props => {\n",
			"\tconst selected = props.state.${2:name}.selected\n",
			"\tconst isNewUpadte${1:functionName} = () => React.functions.isUndefinedOrNullOrEmpty(props.initialValues);\n",
			"\tconst submit = values => isNewUpadte${1:functionName}() ? React.actions.actions${1:functionName}.create${1:functionName}(values) : React.actions.actions${1:functionName}.update${1:functionName}(values, Object.keys(selected)[0]);\n",
			"\tconst remove = () =>{",
			"\t\tprops.clear();",
			"\t\tReact.config.storeHistory.history.goBack();",
			"\t\tReact.actions.actionsPost.remove(Object.keys(selected)[0]);",
			"\t}\n",
			"\treturn (",
			"\t\t<form onSubmit={props.handleSubmit(submit.bind(this))}>",
			"\t\t\t<h1>${3:title}</h1>",
			"\t\t\t<React.components.Button type='submit' className='primary-button' label='SUBMIT' />",
			"\t\t\t<React.components.Button className='primary-button' label='Eliminar' onClick={() => remove(selected, props)} />",
			"\t\t\t<React.components.Button className='primary-button' label='VOLVER' onClick={() => props.clear()} back />",
			"\t\t</form>",
			"\t);",
			"}\n",
			"${1:functionName}ReduxForm = reduxForm({",
			"\tform: '${1:functionName}'",
			"})(${1:functionName}ReduxForm)\n",
			"const mapStateToProps = (state) => {",
			"\tconst initialValues = state\n",
			"\treturn {",
			"\t\tstate: state,",
			"\t\tinitialValues: initialValues,",
			"\t};",
			"}\n",
			"const mapDispatchToProps = dispatch => {",
			"\treturn {",
			"\t\tclear() {",
			"\t\t\tdispatch(React.actions.actions${1:functionName}.clear());",
			"\t\t},",
			"\t};",
			"}\n",
			"${1:functionName}ReduxForm = withRouter(connect(",
			"\tmapStateToProps,",
			"\tmapDispatchToProps",
			")(${1:functionName}ReduxForm));\n",
			"export default ${1:functionName}ReduxForm;"
		],
		"description": "SFunctionComponentForm"
	},
	"SClassComponentForm": {
		"prefix": "SClassComponentForm",
		"body": [
			"import React from 'react';",
			"import { connect } from 'react-redux';",
			"import { reduxForm, Field } from 'redux-form';",
			"import { withRouter } from 'react-router-dom';\n",
			"class ${1:className}ReduxForm extends React.Component {\n",
			"\trender() {",
			"\t\tconst submit = values => {\n",
			"\t\tconsole.log(values);",
			"\t\t}\n",
			"\t\treturn (",
			"\t\t\t<form onSubmit={props.handleSubmit(submit.bind(this))}>",
			"\t\t\t\t<h1>${2:title}</h1>",
			"\t\t\t\t<React.components.Button type='submit' className='primary-button' label='SUBMIT' />",
			"\t\t\t\t<React.components.Button className='primary-button' label='VOLVER' onClick={() => back(props)} back />",
			"\t\t\t</form>",
			"\t\t);",
			"\t}",
			"}\n",
			"${1:functionName}ReduxForm = reduxForm({",
			"\tform: '${1:functionName}'",
			"})(${1:functionName}ReduxForm)\n",
			"const mapStateToProps = (state) => {",
			"\tconst initialValues = state\n",
			"\treturn {",
			"\t\tstate: state,",
			"\t\tinitialValues: initialValues,",
			"\t};",
			"}\n",
			"const mapDispatchToProps = dispatch => {",
			"\treturn {",
			"\t\tclearPost() {",
			"\t\t},",
			"\t\tfetchTexo() {",
			"\t\t}",
			"\t};",
			"}\n",
			"${1:functionName}ReduxForm = withRouter(connect(",
			"\tmapStateToProps,",
			"\tmapDispatchToProps",
			")(${1:functionName}ReduxForm));\n",
			"export default ${1:functionName}ReduxForm;"
		],
		"description": "SClassComponentForm"
	},
	"SButton": {
		"prefix": "SButton",
		"body": [
			"<React.components.Button className='${1:primary-button}' label='${2:label}' onClick={() => ${3:callback}()} ${4:back} />"
		],
		"description": "SButton"
	},
	"SInputText": {
		"prefix": "SInputText",
		"body": [
			"<React.components.InputText name='${1:name}' style='${2:inline}' placeholderFloating='${3:mainPlaceholder}' customPlaceholder='${4:secondPlaceholder}' type='${5:text}' validate={React.config.fieldValidations.validations.${1:name}} />"
		],
		"description": "SInputText"
	},
	"SCheckbox": {
		"prefix": "SCheckbox",
		"body": [
			"const ${1:checkboxProps} = {",
			"\tname: 'checkboxOptions',",
			"\tstyle: 'inline',",
			"\ttype: 'checkbox',",
			"\toptions: [",
			"\t\t{",
			"\t\t\tvalue: 'checkbox1',",
			"\t\t\tlabel: 'Checkbox 1'",
			"\t\t},",
			"\t\t{",
			"\t\t\tvalue: 'checkbox2',",
			"\t\t\tlabel: 'Checkbox 2'",
			"\t\t},",
			"\t\t{",
			"\t\t\tvalue: 'checkbox3',",
			"\t\t\tlabel: 'Checkbox 3'",
			"\t\t}",
			"\t]",
			"}\n",
			"<React.components.SwitchesGroup switchesProps={${1:checkboxProps}} />"
		],
		"description": "SCheckbox"
	},
	"SRadio": {
		"prefix": "SRadio",
		"body": [
			"const ${1:radioButtonsProps} = {",
			"\tname: 'radioOptions',",
			"\tstyle: 'inline',",
			"\ttype: 'radio',",
			"\toptions: [",
			"\t\t{",
			"\t\t\tvalue: 'radio1',",
			"\t\t\tlabel: 'Radio 1'",
			"\t\t},",
			"\t\t{",
			"\t\t\tvalue: 'radio2',",
			"\t\t\tlabel: 'Radio 2'",
			"\t\t},",
			"\t\t{",
			"\t\t\tvalue: 'radio3',",
			"\t\t\tlabel: 'Radio 3'",
			"\t\t}",
			"\t]",
			"}\n",
			"<React.components.SwitchesGroup switchesProps={${1:radioButtonsProps}} />"
		],
		"description": "SRadio"
	},
	"SFirebaseABM": {
		"prefix": "SFirebaseABM",
		"body": [
			"import React from 'react';",
			"import * as firebase from 'firebase';\n",
			"const dbRef = firebase.database().ref('/').child('${1:child}');\n",
			"const actions = {};\n",
			"actions.fetchObjects = dispatch => React.config.firebaseApp.fetchObjects(dbRef, dispatch, 'FETCH_${2:name}');",
			"actions.create = post =>  React.config.firebaseApp.create(dbRef, post);",
			"actions.remove = (key) => React.config.firebaseApp.remove(dbRef, key);",
			"actions.update = (post, key) => React.config.firebaseApp.update(dbRef, post, key);",
			"actions.fetchObject = (dispatch) => React.config.firebaseApp.fetchObject(dbRefText, dispatch, '${2:action}');\n",
			"export default actions;"
		],
		"description": "SFirebaseABM"
	},
	"SIsUndefinedOrNullOrEmpty": {
		"prefix": "SIsUndefinedOrNullOrEmpty",
		"body": [
			"React.functions.isUndefinedOrNullOrEmpty(${1:props});"
		],
		"description": "SIsUndefinedOrNullOrEmpty"
	}
}