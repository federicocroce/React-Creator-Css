/*import React from 'react';

class UploadImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.onprogress = function (data) {
      if (data.lengthComputable) {
        var progress = parseInt(((data.loaded / data.total) * 100), 10);
        console.log(progress);
      }
    }

    // reader.readAsDataURL(file)
  }


  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} />
          <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
      </div>
    )
  }

}

export default UploadImg;*/


import React from 'react';
import { Field } from 'redux-form';



/*class renderInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    // reader.onloadend = () => {
    //   let result = {
    //     file: file,
    //     imagePreviewUrl: reader.result
    //   }
    //   onChange(result)
    // }

    reader.readAsDataURL(file)

  }

  render() {
    const { input: { value } } = this.props

    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

    return (
      <div>
        <input type="file" value={value} onChange={this.onChange} />
        {$imagePreview}
      </div>
    )
  }
}*/

/*class renderInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    const { input: { value } } = this.props

    return (<input
      type="file"
      value={value}
      onChange={this.onChange}
    />)
  }
}

const UploadImg = props => {

  return (
    <Field
      type="file"
      name="poster"
      component={renderInput}
    />
  )
}*/

class renderInput extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render() {
    const { input: { value } } = this.props

    return (<input
      type="file"
      value={value}
      onChange={this.onChange}
    />)
  }
}

const UploadImg = props => {

  return (
    <Field
      type="file"
      name="poster"
      component={renderInput}
    />
  )
}

export default UploadImg;
