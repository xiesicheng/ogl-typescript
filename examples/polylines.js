(function () {
    'use strict';

    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */

    function length(a) {
      let x = a[0];
      let y = a[1];
      let z = a[2];
      return Math.sqrt(x * x + y * y + z * z);
    }
    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */

    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }
    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */

    function set(out, x, y, z) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }
    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out;
    }
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out;
    }
    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    function multiply(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      return out;
    }
    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    function divide(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      return out;
    }
    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */

    function scale(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      return out;
    }
    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} distance between a and b
     */

    function distance(a, b) {
      let x = b[0] - a[0];
      let y = b[1] - a[1];
      let z = b[2] - a[2];
      return Math.sqrt(x * x + y * y + z * z);
    }
    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} squared distance between a and b
     */

    function squaredDistance(a, b) {
      let x = b[0] - a[0];
      let y = b[1] - a[1];
      let z = b[2] - a[2];
      return x * x + y * y + z * z;
    }
    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */

    function squaredLength(a) {
      let x = a[0];
      let y = a[1];
      let z = a[2];
      return x * x + y * y + z * z;
    }
    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */

    function negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      return out;
    }
    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to invert
     * @returns {vec3} out
     */

    function inverse(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      return out;
    }
    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */

    function normalize(out, a) {
      let x = a[0];
      let y = a[1];
      let z = a[2];
      let len = x * x + y * y + z * z;

      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
      }

      out[0] = a[0] * len;
      out[1] = a[1] * len;
      out[2] = a[2] * len;
      return out;
    }
    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */

    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    function cross(out, a, b) {
      let ax = a[0],
          ay = a[1],
          az = a[2];
      let bx = b[0],
          by = b[1],
          bz = b[2];
      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out;
    }
    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec3} out
     */

    function lerp(out, a, b, t) {
      let ax = a[0];
      let ay = a[1];
      let az = a[2];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      return out;
    }
    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */

    function transformMat4(out, a, m) {
      let x = a[0],
          y = a[1],
          z = a[2];
      let w = m[3] * x + m[7] * y + m[11] * z + m[15];
      w = w || 1.0;
      out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
      out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
      out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
      return out;
    }
    /**
     * Same as above but doesn't apply translation.
     * Useful for rays.
     */

    function scaleRotateMat4(out, a, m) {
      let x = a[0],
          y = a[1],
          z = a[2];
      let w = m[3] * x + m[7] * y + m[11] * z + m[15];
      w = w || 1.0;
      out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
      out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
      out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
      return out;
    }
    /**
     * Transforms the vec3 with a quat
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */

    function transformQuat(out, a, q) {
      // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
      let x = a[0],
          y = a[1],
          z = a[2];
      let qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3];
      let uvx = qy * z - qz * y;
      let uvy = qz * x - qx * z;
      let uvz = qx * y - qy * x;
      let uuvx = qy * uvz - qz * uvy;
      let uuvy = qz * uvx - qx * uvz;
      let uuvz = qx * uvy - qy * uvx;
      let w2 = qw * 2;
      uvx *= w2;
      uvy *= w2;
      uvz *= w2;
      uuvx *= 2;
      uuvy *= 2;
      uuvz *= 2;
      out[0] = x + uvx + uuvx;
      out[1] = y + uvy + uuvy;
      out[2] = z + uvz + uuvz;
      return out;
    }
    /**
     * Get the angle between two 3D vectors
     * @param {vec3} a The first operand
     * @param {vec3} b The second operand
     * @returns {Number} The angle in radians
     */

    const angle = function () {
      const tempA = [0, 0, 0];
      const tempB = [0, 0, 0];
      return function (a, b) {
        copy(tempA, a);
        copy(tempB, b);
        normalize(tempA, tempA);
        normalize(tempB, tempB);
        let cosine = dot(tempA, tempB);

        if (cosine > 1.0) {
          return 0;
        } else if (cosine < -1.0) {
          return Math.PI;
        } else {
          return Math.acos(cosine);
        }
      };
    }();
    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }

    const isArrayLike = term => {
      if (term.length) return true;
      return false;
    };
    const isMesh = node => {
      return !!node.draw;
    };

    class Vec3 extends Array {
      // TODO: only be used in Camera class
      constructor(x = 0, y = x, z = x) {
        super(x, y, z);
        this.constant = void 0;
        return this;
      }

      get x() {
        return this[0];
      }

      get y() {
        return this[1];
      }

      get z() {
        return this[2];
      }

      set x(v) {
        this[0] = v;
      }

      set y(v) {
        this[1] = v;
      }

      set z(v) {
        this[2] = v;
      }

      set(x, y = x, z = x) {
        if (isArrayLike(x)) return this.copy(x);
        set(this, x, y, z);
        return this;
      }

      copy(v) {
        copy(this, v);
        return this;
      }

      add(va, vb) {
        if (vb) add(this, va, vb);else add(this, this, va);
        return this;
      }

      sub(va, vb) {
        if (vb) subtract(this, va, vb);else subtract(this, this, va);
        return this;
      }

      multiply(v) {
        if (v.length) multiply(this, this, v);else scale(this, this, v);
        return this;
      }

      divide(v) {
        if (v.length) divide(this, this, v);else scale(this, this, 1 / v);
        return this;
      }

      inverse(v = this) {
        inverse(this, v);
        return this;
      } // Can't use 'length' as Array.prototype uses it


      len() {
        return length(this);
      }

      distance(v) {
        if (v) return distance(this, v);else return length(this);
      }

      squaredLen() {
        return squaredLength(this);
      }

      squaredDistance(v) {
        if (v) return squaredDistance(this, v);else return squaredLength(this);
      }

      negate(v = this) {
        negate(this, v);
        return this;
      }

      cross(va, vb) {
        if (vb) cross(this, va, vb);else cross(this, this, va);
        return this;
      }

      scale(v) {
        scale(this, this, v);
        return this;
      }

      normalize() {
        normalize(this, this);
        return this;
      }

      dot(v) {
        return dot(this, v);
      }

      equals(v) {
        return exactEquals(this, v);
      }

      applyMatrix4(mat4) {
        transformMat4(this, this, mat4);
        return this;
      }

      scaleRotateMatrix4(mat4) {
        scaleRotateMat4(this, this, mat4);
        return this;
      }

      applyQuaternion(q) {
        transformQuat(this, this, q);
        return this;
      }

      angle(v) {
        return angle(this, v);
      }

      lerp(v, t) {
        lerp(this, this, v, t);
        return this;
      }

      clone() {
        return new Vec3(this[0], this[1], this[2]);
      }

      fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        return this;
      }

      toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
      }

      transformDirection(mat4) {
        const x = this[0];
        const y = this[1];
        const z = this[2];
        this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
        this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
        this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;
        return this.normalize();
      }

    }

    // attribute params
    const tempVec3 = new Vec3();
    let ID = 1;
    let ATTR_ID = 1; // export interface Attributes {
    //     position: { size: number, data: UInt16Array; },
    //     normal: { size: number, data: normal; },
    //     uv: { size: number, data: uv; },
    //     index: { data: index; },
    // }

    // To stop inifinite warnings
    let isBoundsWarned = false;
    class Geometry {
      constructor(gl, attributes = {}) {
        this.gl = void 0;
        this.id = void 0;
        this.attributes = void 0;
        this.VAOs = void 0;
        this.drawRange = void 0;
        this.instancedCount = void 0;
        this.glState = void 0;
        this.isInstanced = void 0;
        this.bounds = void 0;
        this.raycast = 'box';
        if (!gl.canvas) console.error('gl not passed as fist argument to Geometry');
        this.gl = gl;
        this.attributes = attributes;
        this.id = ID++; // Store one VAO per program attribute locations order

        this.VAOs = {};
        this.drawRange = {
          start: 0,
          count: 0
        };
        this.instancedCount = 0; // Unbind current VAO so that new buffers don't get added to active mesh

        this.gl.renderer.bindVertexArray(null);
        this.gl.renderer.currentGeometry = null; // Alias for state store to avoid redundant calls for global state

        this.glState = this.gl.renderer.state; // create the buffers

        for (let key in attributes) {
          this.addAttribute(key, attributes[key]);
        }
      }

      addAttribute(key, attr) {
        this.attributes[key] = attr; // Set options

        attr.id = ATTR_ID++; // TODO: currently unused, remove?

        attr.size = attr.size || 1;
        attr.type = attr.type || (attr.data.constructor === Float32Array ? this.gl.FLOAT : attr.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT); // Uint32Array

        attr.target = key === 'index' ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
        attr.normalized = attr.normalized || false;
        attr.stride = attr.stride || 0;
        attr.offset = attr.offset || 0;
        attr.count = attr.count || (attr.stride ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
        attr.divisor = attr.instanced || 0;
        attr.needsUpdate = false;

        if (!attr.buffer) {
          attr.buffer = this.gl.createBuffer(); // Push data to buffer

          this.updateAttribute(attr);
        } // Update geometry counts. If indexed, ignore regular attributes


        if (attr.divisor) {
          this.isInstanced = true;

          if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
            console.warn('geometry has multiple instanced buffers of different length');
            return this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor);
          }

          this.instancedCount = attr.count * attr.divisor;
        } else if (key === 'index') {
          this.drawRange.count = attr.count;
        } else if (!this.attributes.index) {
          this.drawRange.count = Math.max(this.drawRange.count, attr.count);
        }
      }

      updateAttribute(attr) {
        if (this.glState.boundBuffer !== attr.buffer) {
          this.gl.bindBuffer(attr.target, attr.buffer);
          this.glState.boundBuffer = attr.buffer;
        }

        this.gl.bufferData(attr.target, attr.data, this.gl.STATIC_DRAW);
        attr.needsUpdate = false;
      }

      setIndex(value) {
        this.addAttribute('index', value);
      }

      setDrawRange(start, count) {
        this.drawRange.start = start;
        this.drawRange.count = count;
      }

      setInstancedCount(value) {
        this.instancedCount = value;
      }

      createVAO(program) {
        this.VAOs[program.attributeOrder] = this.gl.renderer.createVertexArray();
        this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
        this.bindAttributes(program);
      }

      bindAttributes(program) {
        // Link all attributes to program using gl.vertexAttribPointer
        program.attributeLocations.forEach((location, {
          name,
          type
        }) => {
          // If geometry missing a required shader attribute
          if (!this.attributes[name]) {
            console.warn(`active attribute ${name} not being supplied`);
            return;
          }

          const attr = this.attributes[name];
          this.gl.bindBuffer(attr.target, attr.buffer);
          this.glState.boundBuffer = attr.buffer; // For matrix attributes, buffer needs to be defined per column

          let numLoc = 1;
          if (type === 35674) numLoc = 2; // mat2

          if (type === 35675) numLoc = 3; // mat3

          if (type === 35676) numLoc = 4; // mat4

          const size = attr.size / numLoc;
          const stride = numLoc === 1 ? 0 : numLoc * numLoc * numLoc;
          const offset = numLoc === 1 ? 0 : numLoc * numLoc;

          for (let i = 0; i < numLoc; i++) {
            this.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
            this.gl.enableVertexAttribArray(location + i); // For instanced attributes, divisor needs to be set.
            // For firefox, need to set back to 0 if non-instanced drawn after instanced. Else won't render

            this.gl.renderer.vertexAttribDivisor(location + i, attr.divisor);
          }
        }); // Bind indices if geometry indexed

        if (this.attributes.index) this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
      }

      draw({
        program,
        mode = this.gl.TRIANGLES
      }) {
        if (this.gl.renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
          if (!this.VAOs[program.attributeOrder]) this.createVAO(program);
          this.gl.renderer.bindVertexArray(this.VAOs[program.attributeOrder]);
          this.gl.renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
        } // Check if any attributes need updating


        program.attributeLocations.forEach((location, {
          name
        }) => {
          const attr = this.attributes[name];
          if (attr.needsUpdate) this.updateAttribute(attr);
        });

        if (this.isInstanced) {
          if (this.attributes.index) {
            this.gl.renderer.drawElementsInstanced(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2, this.instancedCount);
          } else {
            this.gl.renderer.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
          }
        } else {
          if (this.attributes.index) {
            this.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2);
          } else {
            this.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
          }
        }
      }

      getPositionArray() {
        // Use position buffer, or min/max if available
        const attr = this.attributes.position; // if (attr.min) return [...attr.min, ...attr.max];

        if (attr.data) return attr.data;
        if (isBoundsWarned) return;
        console.warn('No position buffer data found to compute bounds');
        return isBoundsWarned = true;
      }

      computeBoundingBox(array = null) {
        if (!array) array = this.getPositionArray();

        if (!this.bounds) {
          this.bounds = {
            min: new Vec3(),
            max: new Vec3(),
            center: new Vec3(),
            scale: new Vec3(),
            radius: Infinity
          };
        }

        const min = this.bounds.min;
        const max = this.bounds.max;
        const center = this.bounds.center;
        const scale = this.bounds.scale;
        min.set(+Infinity);
        max.set(-Infinity); // TODO: use offset/stride if exists
        // TODO: check size of position (eg triangle with Vec2)

        for (let i = 0, l = array.length; i < l; i += 3) {
          const x = array[i];
          const y = array[i + 1];
          const z = array[i + 2];
          min.x = Math.min(x, min.x);
          min.y = Math.min(y, min.y);
          min.z = Math.min(z, min.z);
          max.x = Math.max(x, max.x);
          max.y = Math.max(y, max.y);
          max.z = Math.max(z, max.z);
        }

        scale.sub(max, min);
        center.add(min, max).divide(2);
      }

      computeBoundingSphere(array = null) {
        if (!array) array = this.getPositionArray();
        if (!this.bounds) this.computeBoundingBox(array);
        let maxRadiusSq = 0;

        for (let i = 0, l = array.length; i < l; i += 3) {
          tempVec3.fromArray(array, i);
          maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(tempVec3));
        }

        this.bounds.radius = Math.sqrt(maxRadiusSq);
      }

      computeVertexNormals() {
        const positionAttribute = this.attributes['position'];
        if (!positionAttribute) return;
        let normalAttribute = this.attributes['normal'];

        if (!normalAttribute) {
          this.addAttribute('normal', {
            size: 3,
            data: new Float32Array(positionAttribute.count * 3)
          });
          normalAttribute = this.attributes['normal'];
        } else {
          normalAttribute.data.fill(0);
        }

        const pA = new Vec3(),
              pB = new Vec3(),
              pC = new Vec3();
        const nA = new Vec3(),
              nB = new Vec3(),
              nC = new Vec3();
        const cb = new Vec3(),
              ab = new Vec3();
        const indexAttribute = this.attributes['index'];

        if (indexAttribute) {
          let iA, iB, iC;

          for (let i = 0, il = indexAttribute.count; i < il; i += 3) {
            iA = indexAttribute.data[i];
            iB = indexAttribute.data[i + 1];
            iC = indexAttribute.data[i + 2]; // copy points

            pA.fromArray(positionAttribute.data, iA * positionAttribute.size);
            pB.fromArray(positionAttribute.data, iB * positionAttribute.size);
            pC.fromArray(positionAttribute.data, iC * positionAttribute.size); // cross product two edges to get the face normal

            cb.sub(pC, pB);
            ab.sub(pA, pB);
            cb.cross(ab); // read vertex normals 

            nA.fromArray(normalAttribute.data, iA * normalAttribute.size);
            nB.fromArray(normalAttribute.data, iB * normalAttribute.size);
            nC.fromArray(normalAttribute.data, iC * normalAttribute.size); // add face normal

            nA.add(cb);
            nB.add(cb);
            nC.add(cb); // write back

            iA *= normalAttribute.size;
            normalAttribute.data[iA] = nA.x;
            normalAttribute.data[iA + 1] = nA.y;
            normalAttribute.data[iA + 2] = nA.z;
            iB *= normalAttribute.size;
            normalAttribute.data[iB] = nB.x;
            normalAttribute.data[iB + 1] = nB.y;
            normalAttribute.data[iB + 2] = nB.z;
            iC *= normalAttribute.size;
            normalAttribute.data[iC] = nC.x;
            normalAttribute.data[iC + 1] = nC.y;
            normalAttribute.data[iC + 2] = nC.z;
          }
        } else {
          // non-indexed elements (unconnected triangle soup)
          for (let i = 0, il = positionAttribute.count; i < il; i += 3) {
            pA.fromArray(positionAttribute.data, i * positionAttribute.size);
            pB.fromArray(positionAttribute.data, (i + 1) * positionAttribute.size);
            pC.fromArray(positionAttribute.data, (i + 2) * positionAttribute.size);
            cb.sub(pC, pB);
            ab.sub(pA, pB);
            cb.cross(ab);
            normalAttribute.data[i * normalAttribute.size] = cb.x;
            normalAttribute.data[i * normalAttribute.size + 1] = cb.y;
            normalAttribute.data[i * normalAttribute.size + 2] = cb.z;
            normalAttribute.data[(i + 1) * normalAttribute.size] = cb.x;
            normalAttribute.data[(i + 1) * normalAttribute.size + 1] = cb.y;
            normalAttribute.data[(i + 1) * normalAttribute.size + 2] = cb.z;
            normalAttribute.data[(i + 2) * normalAttribute.size] = cb.x;
            normalAttribute.data[(i + 2) * normalAttribute.size + 1] = cb.y;
            normalAttribute.data[(i + 2) * normalAttribute.size + 2] = cb.z;
          }
        }

        this.normalizeNormals();
        normalAttribute.needsUpdate = true;
      }

      normalizeNormals() {
        const normals = this.attributes.normal;

        for (let i = 0, il = normals.count; i < il; i++) {
          tempVec3.fromArray(normals.data, i * normals.size);
          tempVec3.normalize();
          normals.data[i * normals.size] = tempVec3.x;
          normals.data[i * normals.size + 1] = tempVec3.y;
          normals.data[i * normals.size + 2] = tempVec3.z;
        }
      }

      remove() {
        // if (this.vao) this.gl.renderer.deleteVertexArray(this.vao);
        for (let key in this.attributes) {
          this.gl.deleteBuffer(this.attributes[key].buffer);
          delete this.attributes[key];
        }
      }

    }

    // TODO: upload empty texture if null ? maybe not
    // TODO: upload identity matrix if null ?
    // TODO: sampler Cube
    let ID$1 = 1; // cache of typed arrays used to flatten uniform arrays

    const arrayCacheF32 = {};
    class Program {
      constructor(gl, {
        vertex,
        fragment,
        uniforms = {},
        transparent = false,
        cullFace = gl.BACK,
        frontFace = gl.CCW,
        depthTest = true,
        depthWrite = true,
        depthFunc = gl.LESS
      } = {}) {
        this.gl = void 0;
        this.uniforms = void 0;
        this.id = void 0;
        this.transparent = void 0;
        this.cullFace = void 0;
        this.frontFace = void 0;
        this.depthTest = void 0;
        this.depthWrite = void 0;
        this.depthFunc = void 0;
        this.blendFunc = void 0;
        this.blendEquation = void 0;
        this.program = void 0;
        this.uniformLocations = void 0;
        this.attributeLocations = void 0;
        this.attributeOrder = void 0;
        this.gltfMaterial = void 0;
        if (!gl.canvas) console.error('gl not passed as fist argument to Program');
        this.gl = gl;
        this.uniforms = uniforms;
        this.id = ID$1++;
        if (!vertex) console.warn('vertex shader not supplied');
        if (!fragment) console.warn('fragment shader not supplied'); // Store program state

        this.transparent = transparent;
        this.cullFace = cullFace;
        this.frontFace = frontFace;
        this.depthTest = depthTest;
        this.depthWrite = depthWrite;
        this.depthFunc = depthFunc;
        this.blendFunc = {};
        this.blendEquation = {}; // set default blendFunc if transparent flagged

        if (this.transparent && !this.blendFunc.src) {
          if (this.gl.renderer.premultipliedAlpha) this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);else this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        } // compile vertex shader and log errors


        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertex);
        gl.compileShader(vertexShader);

        if (gl.getShaderInfoLog(vertexShader) !== '') {
          console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
        } // compile fragment shader and log errors


        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragment);
        gl.compileShader(fragmentShader);

        if (gl.getShaderInfoLog(fragmentShader) !== '') {
          console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
        } // compile program and log errors


        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);

        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
          console.warn(gl.getProgramInfoLog(this.program));
          return;
        } // Remove shader once linked


        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader); // Get active uniform locations

        this.uniformLocations = new Map();
        let numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);

        for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
          let uniform = gl.getActiveUniform(this.program, uIndex);
          this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name)); // split uniforms' names to separate array and struct declarations

          const split = uniform.name.match(/(\w+)/g);
          uniform.uniformName = split[0];

          if (split.length === 3) {
            uniform.isStructArray = true;
            uniform.structIndex = Number(split[1]);
            uniform.structProperty = split[2];
          } else if (split.length === 2 && isNaN(Number(split[1]))) {
            uniform.isStruct = true;
            uniform.structProperty = split[1];
          }
        } // Get active attribute locations


        this.attributeLocations = new Map();
        const locations = [];
        const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);

        for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
          const attribute = gl.getActiveAttrib(this.program, aIndex);
          const location = gl.getAttribLocation(this.program, attribute.name);
          locations[location] = attribute.name;
          this.attributeLocations.set(attribute, location);
        }

        this.attributeOrder = locations.join('');
      }

      setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        this.blendFunc.src = src;
        this.blendFunc.dst = dst;
        this.blendFunc.srcAlpha = srcAlpha;
        this.blendFunc.dstAlpha = dstAlpha;
        if (src) this.transparent = true;
      }

      setBlendEquation(modeRGB, modeAlpha) {
        this.blendEquation.modeRGB = modeRGB;
        this.blendEquation.modeAlpha = modeAlpha;
      }

      applyState() {
        if (this.depthTest) this.gl.renderer.enable(this.gl.DEPTH_TEST);else this.gl.renderer.disable(this.gl.DEPTH_TEST);
        if (this.cullFace) this.gl.renderer.enable(this.gl.CULL_FACE);else this.gl.renderer.disable(this.gl.CULL_FACE);
        if (this.blendFunc.src) this.gl.renderer.enable(this.gl.BLEND);else this.gl.renderer.disable(this.gl.BLEND);
        if (this.cullFace) this.gl.renderer.setCullFace(this.cullFace);
        this.gl.renderer.setFrontFace(this.frontFace);
        this.gl.renderer.setDepthMask(this.depthWrite);
        this.gl.renderer.setDepthFunc(this.depthFunc);
        if (this.blendFunc.src) this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
        this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
      }

      use({
        flipFaces = false
      } = {}) {
        let textureUnit = -1;
        const programActive = this.gl.renderer.currentProgram === this.id; // Avoid gl call if program already in use

        if (!programActive) {
          this.gl.useProgram(this.program);
          this.gl.renderer.currentProgram = this.id;
        } // Set only the active uniforms found in the shader


        this.uniformLocations.forEach((location, activeUniform) => {
          let name = activeUniform.uniformName; // get supplied uniform

          let uniform = this.uniforms[name]; // For structs, get the specific property instead of the entire object

          if (activeUniform.isStruct) {
            uniform = uniform[activeUniform.structProperty];
            name += `.${activeUniform.structProperty}`;
          }

          if (activeUniform.isStructArray) {
            uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
            name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
          }

          if (!uniform) {
            return warn(`Active uniform ${name} has not been supplied`);
          }

          if (uniform && uniform.value === undefined) {
            return warn(`${name} uniform is missing a value parameter`);
          }

          if (uniform.value.texture) {
            textureUnit = textureUnit + 1; // Check if texture needs to be updated

            uniform.value.update(textureUnit);
            return setUniform(this.gl, activeUniform.type, location, textureUnit);
          } // For texture arrays, set uniform as an array of texture units instead of just one


          if (uniform.value.length && uniform.value[0].texture) {
            const textureUnits = [];
            uniform.value.forEach(value => {
              textureUnit = textureUnit + 1;
              value.update(textureUnit);
              textureUnits.push(textureUnit);
            });
            return setUniform(this.gl, activeUniform.type, location, textureUnits);
          }

          setUniform(this.gl, activeUniform.type, location, uniform.value);
        });
        this.applyState();
        if (flipFaces) this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
      }

      remove() {
        this.gl.deleteProgram(this.program);
      }

    }

    function setUniform(gl, type, location, value) {
      value = value.length ? flatten(value) : value;
      const setValue = gl.renderer.state.uniformLocations.get(location); // Avoid redundant uniform commands

      if (value.length) {
        if (setValue === undefined || setValue.length !== value.length) {
          // clone array to store as cache
          gl.renderer.state.uniformLocations.set(location, value.slice(0));
        } else {
          if (arraysEqual(setValue, value)) return; // Update cached array values

          setValue.set ? setValue.set(value) : setArray(setValue, value);
          gl.renderer.state.uniformLocations.set(location, setValue);
        }
      } else {
        if (setValue === value) return;
        gl.renderer.state.uniformLocations.set(location, value);
      }

      switch (type) {
        case 5126:
          return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value);
        // FLOAT

        case 35664:
          return gl.uniform2fv(location, value);
        // FLOAT_VEC2

        case 35665:
          return gl.uniform3fv(location, value);
        // FLOAT_VEC3

        case 35666:
          return gl.uniform4fv(location, value);
        // FLOAT_VEC4

        case 35670: // BOOL

        case 5124: // INT

        case 35678: // SAMPLER_2D

        case 35680:
          return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value);
        // SAMPLER_CUBE

        case 35671: // BOOL_VEC2

        case 35667:
          return gl.uniform2iv(location, value);
        // INT_VEC2

        case 35672: // BOOL_VEC3

        case 35668:
          return gl.uniform3iv(location, value);
        // INT_VEC3

        case 35673: // BOOL_VEC4

        case 35669:
          return gl.uniform4iv(location, value);
        // INT_VEC4

        case 35674:
          return gl.uniformMatrix2fv(location, false, value);
        // FLOAT_MAT2

        case 35675:
          return gl.uniformMatrix3fv(location, false, value);
        // FLOAT_MAT3

        case 35676:
          return gl.uniformMatrix4fv(location, false, value);
        // FLOAT_MAT4
      }
    }

    function addLineNumbers(string) {
      let lines = string.split('\n');

      for (let i = 0; i < lines.length; i++) {
        lines[i] = i + 1 + ': ' + lines[i];
      }

      return lines.join('\n');
    }

    function flatten(a) {
      const arrayLen = a.length;
      const valueLen = a[0].length;
      if (valueLen === undefined) return a;
      const length = arrayLen * valueLen;
      let value = arrayCacheF32[length];
      if (!value) arrayCacheF32[length] = value = new Float32Array(length);

      for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);

      return value;
    }

    function arraysEqual(a, b) {
      if (a.length !== b.length) return false;

      for (let i = 0, l = a.length; i < l; i++) {
        if (a[i] !== b[i]) return false;
      }

      return true;
    }

    function setArray(a, b) {
      for (let i = 0, l = a.length; i < l; i++) {
        a[i] = b[i];
      }
    }

    let warnCount = 0;

    function warn(message) {
      if (warnCount > 100) return;
      console.warn(message);
      warnCount++;
      if (warnCount > 100) console.warn('More than 100 program warnings - stopping logs.');
    }

    // Not automatic - devs to use these methods manually
    // gl.colorMask( colorMask, colorMask, colorMask, colorMask );
    // gl.clearColor( r, g, b, a );
    // gl.stencilMask( stencilMask );
    // gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
    // gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
    // gl.clearStencil( stencil );

    const tempVec3$1 = new Vec3();
    let ID$2 = 1;
    class Renderer {
      get id() {
        return this._id;
      }

      constructor({
        canvas = document.createElement('canvas'),
        width = 300,
        height = 150,
        dpr = 1,
        alpha = false,
        depth = true,
        stencil = false,
        antialias = false,
        premultipliedAlpha = false,
        preserveDrawingBuffer = false,
        powerPreference = 'default',
        autoClear = true,
        webgl = 2
      } = {}) {
        this.dpr = void 0;
        this.alpha = void 0;
        this.color = void 0;
        this.depth = void 0;
        this.stencil = void 0;
        this.premultipliedAlpha = void 0;
        this.autoClear = void 0;
        this.gl = void 0;
        this.isWebgl2 = void 0;
        this.width = void 0;
        this.height = void 0;
        this.parameters = void 0;
        this.state = void 0;
        this.extensions = void 0;
        this.vertexAttribDivisor = void 0;
        this.drawArraysInstanced = void 0;
        this.drawElementsInstanced = void 0;
        this.createVertexArray = void 0;
        this.bindVertexArray = void 0;
        this.deleteVertexArray = void 0;
        this.drawBuffers = void 0;
        this.currentProgram = void 0;
        this.currentGeometry = void 0;
        this._id = void 0;
        const attributes = {
          alpha,
          depth,
          stencil,
          antialias,
          premultipliedAlpha,
          preserveDrawingBuffer,
          powerPreference
        };
        this.dpr = dpr;
        this.alpha = alpha;
        this.color = true;
        this.depth = depth;
        this.stencil = stencil;
        this.premultipliedAlpha = premultipliedAlpha;
        this.autoClear = autoClear;
        this._id = ID$2++; // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1

        if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
        this.isWebgl2 = !!this.gl;

        if (!this.gl) {
          this.gl = canvas.getContext('webgl', attributes) || canvas.getContext('experimental-webgl', attributes);
        } // Attach renderer to gl so that all classes have access to internal state functions


        this.gl.renderer = this; // initialise size values

        this.setSize(width, height); // gl state stores to avoid redundant calls on methods used internally

        this.state = {};
        this.state.blendFunc = {
          src: this.gl.ONE,
          dst: this.gl.ZERO
        };
        this.state.blendEquation = {
          modeRGB: this.gl.FUNC_ADD
        };
        this.state.cullFace = null;
        this.state.frontFace = this.gl.CCW;
        this.state.depthMask = true;
        this.state.depthFunc = this.gl.LESS;
        this.state.premultiplyAlpha = false;
        this.state.flipY = false;
        this.state.unpackAlignment = 4;
        this.state.framebuffer = null;
        this.state.viewport = {
          width: null,
          height: null
        };
        this.state.textureUnits = [];
        this.state.activeTextureUnit = 0;
        this.state.boundBuffer = null;
        this.state.uniformLocations = new Map(); // store requested extensions

        this.extensions = {}; // Initialise extra format types

        if (this.isWebgl2) {
          this.getExtension('EXT_color_buffer_float');
          this.getExtension('OES_texture_float_linear');
        } else {
          this.getExtension('OES_texture_float');
          this.getExtension('OES_texture_float_linear');
          this.getExtension('OES_texture_half_float');
          this.getExtension('OES_texture_half_float_linear');
          this.getExtension('OES_element_index_uint');
          this.getExtension('OES_standard_derivatives');
          this.getExtension('EXT_sRGB');
          this.getExtension('WEBGL_depth_texture');
          this.getExtension('WEBGL_draw_buffers');
        } // Create method aliases using extension (WebGL1) or native if available (WebGL2)


        this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
        this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
        this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
        this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
        this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
        this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
        this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL'); // Store device parameters

        this.parameters = {};
        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic') ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
      }

      setSize(width, height) {
        this.width = width;
        this.height = height;
        this.gl.canvas.width = width * this.dpr;
        this.gl.canvas.height = height * this.dpr;
        Object.assign(this.gl.canvas.style, {
          width: width + 'px',
          height: height + 'px'
        });
      }

      setViewport(width, height) {
        if (this.state.viewport.width === width && this.state.viewport.height === height) return;
        this.state.viewport.width = width;
        this.state.viewport.height = height;
        this.gl.viewport(0, 0, width, height);
      }

      enable(id) {
        if (this.state[id] === true) return;
        this.gl.enable(id);
        this.state[id] = true;
      }

      disable(id) {
        if (this.state[id] === false) return;
        this.gl.disable(id);
        this.state[id] = false;
      }

      setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        if (this.state.blendFunc.src === src && this.state.blendFunc.dst === dst && this.state.blendFunc.srcAlpha === srcAlpha && this.state.blendFunc.dstAlpha === dstAlpha) return;
        this.state.blendFunc.src = src;
        this.state.blendFunc.dst = dst;
        this.state.blendFunc.srcAlpha = srcAlpha;
        this.state.blendFunc.dstAlpha = dstAlpha;
        if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);else this.gl.blendFunc(src, dst);
      }

      setBlendEquation(modeRGB, modeAlpha) {
        modeRGB = modeRGB || this.gl.FUNC_ADD;
        if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
        this.state.blendEquation.modeRGB = modeRGB;
        this.state.blendEquation.modeAlpha = modeAlpha;
        if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);else this.gl.blendEquation(modeRGB);
      }

      setCullFace(value) {
        if (this.state.cullFace === value) return;
        this.state.cullFace = value;
        this.gl.cullFace(value);
      }

      setFrontFace(value) {
        if (this.state.frontFace === value) return;
        this.state.frontFace = value;
        this.gl.frontFace(value);
      }

      setDepthMask(value) {
        if (this.state.depthMask === value) return;
        this.state.depthMask = value;
        this.gl.depthMask(value);
      }

      setDepthFunc(value) {
        if (this.state.depthFunc === value) return;
        this.state.depthFunc = value;
        this.gl.depthFunc(value);
      }

      activeTexture(value) {
        if (this.state.activeTextureUnit === value) return;
        this.state.activeTextureUnit = value;
        this.gl.activeTexture(this.gl.TEXTURE0 + value);
      }

      bindFramebuffer({
        target = this.gl.FRAMEBUFFER,
        buffer = null
      } = {}) {
        if (this.state.framebuffer === buffer) return;
        this.state.framebuffer = buffer;
        this.gl.bindFramebuffer(target, buffer);
      }

      getExtension(extension, webgl2Func, extFunc) {
        // if webgl2 function supported, return func bound to gl context
        if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl); // fetch extension once only

        if (!this.extensions[extension]) {
          this.extensions[extension] = this.gl.getExtension(extension);
        } // return extension if no function requested


        if (!webgl2Func) return this.extensions[extension]; // Return null if extension not supported

        if (!this.extensions[extension]) return null; // return extension function, bound to extension

        return this.extensions[extension][extFunc].bind(this.extensions[extension]);
      }

      sortOpaque(a, b) {
        if (a.renderOrder !== b.renderOrder) {
          return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
          return a.program.id - b.program.id;
        } else if (a.zDepth !== b.zDepth) {
          return a.zDepth - b.zDepth;
        } else {
          return b.id - a.id;
        }
      }

      sortTransparent(a, b) {
        if (a.renderOrder !== b.renderOrder) {
          return a.renderOrder - b.renderOrder;
        }

        if (a.zDepth !== b.zDepth) {
          return b.zDepth - a.zDepth;
        } else {
          return b.id - a.id;
        }
      }

      sortUI(a, b) {
        if (a.renderOrder !== b.renderOrder) {
          return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
          return a.program.id - b.program.id;
        } else {
          return b.id - a.id;
        }
      }

      getRenderList({
        scene,
        camera,
        frustumCull,
        sort
      }) {
        let renderList = [];
        if (camera && frustumCull) camera.updateFrustum(); // Get visible

        scene.traverse(node => {
          if (!node.visible) return true;
          if (!isMesh(node)) return; // if (!node.draw) return;

          if (frustumCull && node.frustumCulled && camera) {
            if (!camera.frustumIntersectsMesh(node)) return;
          }

          renderList.push(node);
        });

        if (sort) {
          const opaque = [];
          const transparent = []; // depthTest true

          const ui = []; // depthTest false

          renderList.forEach(node => {
            // Split into the 3 render groups
            if (!node.program.transparent) {
              opaque.push(node);
            } else if (node.program.depthTest) {
              transparent.push(node);
            } else {
              ui.push(node);
            }

            node.zDepth = 0; // Only calculate z-depth if renderOrder unset and depthTest is true

            if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return; // update z-depth

            node.worldMatrix.getTranslation(tempVec3$1);
            tempVec3$1.applyMatrix4(camera.projectionViewMatrix);
            node.zDepth = tempVec3$1.z;
          });
          opaque.sort(this.sortOpaque);
          transparent.sort(this.sortTransparent);
          ui.sort(this.sortUI);
          renderList = opaque.concat(transparent, ui);
        }

        return renderList;
      }

      render({
        scene,
        camera,
        target = null,
        update = true,
        sort = true,
        frustumCull = true,
        clear
      }) {
        if (target === null) {
          // make sure no render target bound so draws to canvas
          this.bindFramebuffer();
          this.setViewport(this.width * this.dpr, this.height * this.dpr);
        } else {
          // bind supplied render target and update viewport
          this.bindFramebuffer(target);
          this.setViewport(target.width, target.height);
        }

        if (clear || this.autoClear && clear !== false) {
          // Ensure depth buffer writing is enabled so it can be cleared
          if (this.depth && (!target || target.depth)) {
            this.enable(this.gl.DEPTH_TEST);
            this.setDepthMask(true);
          }

          this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
        } // updates all scene graph matrices


        if (update) scene.updateMatrixWorld(); // Update camera separately, in case not in scene graph

        if (camera) camera.updateMatrixWorld(); // Get render list - entails culling and sorting

        const renderList = this.getRenderList({
          scene,
          camera,
          frustumCull,
          sort
        });
        renderList.forEach(node => {
          node.draw({
            camera
          });
        });
      }

    }

    const EPSILON = 0.000001;
    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */

    function copy$1(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */

    function set$1(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }
    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */

    function identity(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */

    function invert(out, a) {
      let a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      let a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      let a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      let a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      let b00 = a00 * a11 - a01 * a10;
      let b01 = a00 * a12 - a02 * a10;
      let b02 = a00 * a13 - a03 * a10;
      let b03 = a01 * a12 - a02 * a11;
      let b04 = a01 * a13 - a03 * a11;
      let b05 = a02 * a13 - a03 * a12;
      let b06 = a20 * a31 - a21 * a30;
      let b07 = a20 * a32 - a22 * a30;
      let b08 = a20 * a33 - a23 * a30;
      let b09 = a21 * a32 - a22 * a31;
      let b10 = a21 * a33 - a23 * a31;
      let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

      let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
      return out;
    }
    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */

    function determinant(a) {
      let a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      let a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      let a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      let a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      let b00 = a00 * a11 - a01 * a10;
      let b01 = a00 * a12 - a02 * a10;
      let b02 = a00 * a13 - a03 * a10;
      let b03 = a01 * a12 - a02 * a11;
      let b04 = a01 * a13 - a03 * a11;
      let b05 = a02 * a13 - a03 * a12;
      let b06 = a20 * a31 - a21 * a30;
      let b07 = a20 * a32 - a22 * a30;
      let b08 = a20 * a33 - a23 * a30;
      let b09 = a21 * a32 - a22 * a31;
      let b10 = a21 * a33 - a23 * a31;
      let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

      return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }
    /**
     * Multiplies two mat4s
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */

    function multiply$1(out, a, b) {
      let a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      let a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      let a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      let a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15]; // Cache only the current line of the second matrix

      let b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[4];
      b1 = b[5];
      b2 = b[6];
      b3 = b[7];
      out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[8];
      b1 = b[9];
      b2 = b[10];
      b3 = b[11];
      out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[12];
      b1 = b[13];
      b2 = b[14];
      b3 = b[15];
      out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out;
    }
    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */

    function translate(out, a, v) {
      let x = v[0],
          y = v[1],
          z = v[2];
      let a00, a01, a02, a03;
      let a10, a11, a12, a13;
      let a20, a21, a22, a23;

      if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
      } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
      }

      return out;
    }
    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/

    function scale$1(out, a, v) {
      let x = v[0],
          y = v[1],
          z = v[2];
      out[0] = a[0] * x;
      out[1] = a[1] * x;
      out[2] = a[2] * x;
      out[3] = a[3] * x;
      out[4] = a[4] * y;
      out[5] = a[5] * y;
      out[6] = a[6] * y;
      out[7] = a[7] * y;
      out[8] = a[8] * z;
      out[9] = a[9] * z;
      out[10] = a[10] * z;
      out[11] = a[11] * z;
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */

    function rotate(out, a, rad, axis) {
      let x = axis[0],
          y = axis[1],
          z = axis[2];
      let len = Math.hypot(x, y, z);
      let s, c, t;
      let a00, a01, a02, a03;
      let a10, a11, a12, a13;
      let a20, a21, a22, a23;
      let b00, b01, b02;
      let b10, b11, b12;
      let b20, b21, b22;

      if (Math.abs(len) < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11]; // Construct the elements of the rotation matrix

      b00 = x * x * t + c;
      b01 = y * x * t + z * s;
      b02 = z * x * t - y * s;
      b10 = x * y * t - z * s;
      b11 = y * y * t + c;
      b12 = z * y * t + x * s;
      b20 = x * z * t + y * s;
      b21 = y * z * t - x * s;
      b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

      out[0] = a00 * b00 + a10 * b01 + a20 * b02;
      out[1] = a01 * b00 + a11 * b01 + a21 * b02;
      out[2] = a02 * b00 + a12 * b01 + a22 * b02;
      out[3] = a03 * b00 + a13 * b01 + a23 * b02;
      out[4] = a00 * b10 + a10 * b11 + a20 * b12;
      out[5] = a01 * b10 + a11 * b11 + a21 * b12;
      out[6] = a02 * b10 + a12 * b11 + a22 * b12;
      out[7] = a03 * b10 + a13 * b11 + a23 * b12;
      out[8] = a00 * b20 + a10 * b21 + a20 * b22;
      out[9] = a01 * b20 + a11 * b21 + a21 * b22;
      out[10] = a02 * b20 + a12 * b21 + a22 * b22;
      out[11] = a03 * b20 + a13 * b21 + a23 * b22;

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      return out;
    }
    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */

    function getTranslation(out, mat) {
      out[0] = mat[12];
      out[1] = mat[13];
      out[2] = mat[14];
      return out;
    }
    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */

    function getScaling(out, mat) {
      let m11 = mat[0];
      let m12 = mat[1];
      let m13 = mat[2];
      let m21 = mat[4];
      let m22 = mat[5];
      let m23 = mat[6];
      let m31 = mat[8];
      let m32 = mat[9];
      let m33 = mat[10];
      out[0] = Math.hypot(m11, m12, m13);
      out[1] = Math.hypot(m21, m22, m23);
      out[2] = Math.hypot(m31, m32, m33);
      return out;
    }
    function getMaxScaleOnAxis(mat) {
      let m11 = mat[0];
      let m12 = mat[1];
      let m13 = mat[2];
      let m21 = mat[4];
      let m22 = mat[5];
      let m23 = mat[6];
      let m31 = mat[8];
      let m32 = mat[9];
      let m33 = mat[10];
      const x = m11 * m11 + m12 * m12 + m13 * m13;
      const y = m21 * m21 + m22 * m22 + m23 * m23;
      const z = m31 * m31 + m32 * m32 + m33 * m33;
      return Math.sqrt(Math.max(x, y, z));
    }
    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */

    const getRotation = function () {
      const temp = [0, 0, 0];
      return function (out, mat) {
        let scaling = temp;
        getScaling(scaling, mat);
        let is1 = 1 / scaling[0];
        let is2 = 1 / scaling[1];
        let is3 = 1 / scaling[2];
        let sm11 = mat[0] * is1;
        let sm12 = mat[1] * is2;
        let sm13 = mat[2] * is3;
        let sm21 = mat[4] * is1;
        let sm22 = mat[5] * is2;
        let sm23 = mat[6] * is3;
        let sm31 = mat[8] * is1;
        let sm32 = mat[9] * is2;
        let sm33 = mat[10] * is3;
        let trace = sm11 + sm22 + sm33;
        let S = 0;

        if (trace > 0) {
          S = Math.sqrt(trace + 1.0) * 2;
          out[3] = 0.25 * S;
          out[0] = (sm23 - sm32) / S;
          out[1] = (sm31 - sm13) / S;
          out[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
          S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
          out[3] = (sm23 - sm32) / S;
          out[0] = 0.25 * S;
          out[1] = (sm12 + sm21) / S;
          out[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
          S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
          out[3] = (sm31 - sm13) / S;
          out[0] = (sm12 + sm21) / S;
          out[1] = 0.25 * S;
          out[2] = (sm23 + sm32) / S;
        } else {
          S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
          out[3] = (sm12 - sm21) / S;
          out[0] = (sm31 + sm13) / S;
          out[1] = (sm23 + sm32) / S;
          out[2] = 0.25 * S;
        }

        return out;
      };
    }();
    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @returns {mat4} out
     */

    function fromRotationTranslationScale(out, q, v, s) {
      // Quaternion math
      let x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      let x2 = x + x;
      let y2 = y + y;
      let z2 = z + z;
      let xx = x * x2;
      let xy = x * y2;
      let xz = x * z2;
      let yy = y * y2;
      let yz = y * z2;
      let zz = z * z2;
      let wx = w * x2;
      let wy = w * y2;
      let wz = w * z2;
      let sx = s[0];
      let sy = s[1];
      let sz = s[2];
      out[0] = (1 - (yy + zz)) * sx;
      out[1] = (xy + wz) * sx;
      out[2] = (xz - wy) * sx;
      out[3] = 0;
      out[4] = (xy - wz) * sy;
      out[5] = (1 - (xx + zz)) * sy;
      out[6] = (yz + wx) * sy;
      out[7] = 0;
      out[8] = (xz + wy) * sz;
      out[9] = (yz - wx) * sz;
      out[10] = (1 - (xx + yy)) * sz;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */

    function fromQuat(out, q) {
      let x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      let x2 = x + x;
      let y2 = y + y;
      let z2 = z + z;
      let xx = x * x2;
      let yx = y * x2;
      let yy = y * y2;
      let zx = z * x2;
      let zy = z * y2;
      let zz = z * z2;
      let wx = w * x2;
      let wy = w * y2;
      let wz = w * z2;
      out[0] = 1 - yy - zz;
      out[1] = yx + wz;
      out[2] = zx - wy;
      out[3] = 0;
      out[4] = yx - wz;
      out[5] = 1 - xx - zz;
      out[6] = zy + wx;
      out[7] = 0;
      out[8] = zx + wy;
      out[9] = zy - wx;
      out[10] = 1 - xx - yy;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    /**
     * Generates a perspective projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function perspective(out, fovy, aspect, near, far) {
      let f = 1.0 / Math.tan(fovy / 2);
      let nf = 1 / (near - far);
      out[0] = f / aspect;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = f;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = (far + near) * nf;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[14] = 2 * far * near * nf;
      out[15] = 0;
      return out;
    }
    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */

    function ortho(out, left, right, bottom, top, near, far) {
      let lr = 1 / (left - right);
      let bt = 1 / (bottom - top);
      let nf = 1 / (near - far);
      out[0] = -2 * lr;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = -2 * bt;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 2 * nf;
      out[11] = 0;
      out[12] = (left + right) * lr;
      out[13] = (top + bottom) * bt;
      out[14] = (far + near) * nf;
      out[15] = 1;
      return out;
    }
    /**
     * Generates a matrix that makes something look at something else.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} target Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */

    function targetTo(out, eye, target, up) {
      let eyex = eye[0],
          eyey = eye[1],
          eyez = eye[2],
          upx = up[0],
          upy = up[1],
          upz = up[2];
      let z0 = eyex - target[0],
          z1 = eyey - target[1],
          z2 = eyez - target[2];
      let len = z0 * z0 + z1 * z1 + z2 * z2;

      if (len === 0) {
        // eye and target are in the same position
        z2 = 1;
      } else {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
      }

      let x0 = upy * z2 - upz * z1,
          x1 = upz * z0 - upx * z2,
          x2 = upx * z1 - upy * z0;
      len = x0 * x0 + x1 * x1 + x2 * x2;

      if (len === 0) {
        // up and z are parallel
        if (upz) {
          upx += 1e-6;
        } else if (upy) {
          upz += 1e-6;
        } else {
          upy += 1e-6;
        }

        x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
        len = x0 * x0 + x1 * x1 + x2 * x2;
      }

      len = 1 / Math.sqrt(len);
      x0 *= len;
      x1 *= len;
      x2 *= len;
      out[0] = x0;
      out[1] = x1;
      out[2] = x2;
      out[3] = 0;
      out[4] = z1 * x2 - z2 * x1;
      out[5] = z2 * x0 - z0 * x2;
      out[6] = z0 * x1 - z1 * x0;
      out[7] = 0;
      out[8] = z0;
      out[9] = z1;
      out[10] = z2;
      out[11] = 0;
      out[12] = eyex;
      out[13] = eyey;
      out[14] = eyez;
      out[15] = 1;
      return out;
    }

    class Mat4 extends Array {
      constructor(m00 = 1, m01 = 0, m02 = 0, m03 = 0, m10 = 0, m11 = 1, m12 = 0, m13 = 0, m20 = 0, m21 = 0, m22 = 1, m23 = 0, m30 = 0, m31 = 0, m32 = 0, m33 = 1) {
        super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
      }

      get x() {
        return this[12];
      }

      get y() {
        return this[13];
      }

      get z() {
        return this[14];
      }

      get w() {
        return this[15];
      }

      set x(v) {
        this[12] = v;
      }

      set y(v) {
        this[13] = v;
      }

      set z(v) {
        this[14] = v;
      }

      set w(v) {
        this[15] = v;
      }

      set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00.length) return this.copy(m00);
        set$1(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
      }

      translate(v, m = this) {
        translate(this, m, v);
        return this;
      }

      rotate(v, axis, m = this) {
        rotate(this, m, v, axis);
        return this;
      }

      scale(v, m = this) {
        scale$1(this, m, typeof v === 'number' ? [v, v, v] : v);
        return this;
      }

      multiply(ma, mb) {
        if (mb) {
          multiply$1(this, ma, mb);
        } else {
          multiply$1(this, this, ma);
        }

        return this;
      }

      identity() {
        identity(this);
        return this;
      }

      copy(m) {
        copy$1(this, m);
        return this;
      }

      fromPerspective({
        fov,
        aspect,
        near,
        far
      } = {}) {
        perspective(this, fov, aspect, near, far);
        return this;
      }

      fromOrthogonal({
        left,
        right,
        bottom,
        top,
        near,
        far
      }) {
        ortho(this, left, right, bottom, top, near, far);
        return this;
      }

      fromQuaternion(q) {
        fromQuat(this, q);
        return this;
      }

      setPosition(v) {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this;
      }

      inverse(m = this) {
        invert(this, m);
        return this;
      }

      compose(q, pos, scale) {
        fromRotationTranslationScale(this, q, pos, scale);
        return this;
      }

      getRotation(q) {
        getRotation(q, this);
        return this;
      }

      getTranslation(pos) {
        getTranslation(pos, this);
        return this;
      }

      getScaling(scale) {
        getScaling(scale, this);
        return this;
      }

      getMaxScaleOnAxis() {
        return getMaxScaleOnAxis(this);
      }

      lookAt(eye, target, up) {
        targetTo(this, eye, target, up);
        return this;
      }

      determinant() {
        return determinant(this);
      }

      fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this[4] = a[o + 4];
        this[5] = a[o + 5];
        this[6] = a[o + 6];
        this[7] = a[o + 7];
        this[8] = a[o + 8];
        this[9] = a[o + 9];
        this[10] = a[o + 10];
        this[11] = a[o + 11];
        this[12] = a[o + 12];
        this[13] = a[o + 13];
        this[14] = a[o + 14];
        this[15] = a[o + 15];
        return this;
      }

      toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        a[o + 4] = this[4];
        a[o + 5] = this[5];
        a[o + 6] = this[6];
        a[o + 7] = this[7];
        a[o + 8] = this[8];
        a[o + 9] = this[9];
        a[o + 10] = this[10];
        a[o + 11] = this[11];
        a[o + 12] = this[12];
        a[o + 13] = this[13];
        a[o + 14] = this[14];
        a[o + 15] = this[15];
        return a;
      }

    }

    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */

    function copy$2(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */

    function set$2(out, x, y, z, w) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }
    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */

    function normalize$1(out, a) {
      let x = a[0];
      let y = a[1];
      let z = a[2];
      let w = a[3];
      let len = x * x + y * y + z * z + w * w;

      if (len > 0) {
        len = 1 / Math.sqrt(len);
      }

      out[0] = x * len;
      out[1] = y * len;
      out[2] = z * len;
      out[3] = w * len;
      return out;
    }
    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */

    function dot$1(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }

    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */

    function identity$1(out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    }
    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/

    function setAxisAngle(out, axis, rad) {
      rad = rad * 0.5;
      let s = Math.sin(rad);
      out[0] = s * axis[0];
      out[1] = s * axis[1];
      out[2] = s * axis[2];
      out[3] = Math.cos(rad);
      return out;
    }
    /**
     * Multiplies two quats
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     */

    function multiply$2(out, a, b) {
      let ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      let bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
      out[0] = ax * bw + aw * bx + ay * bz - az * by;
      out[1] = ay * bw + aw * by + az * bx - ax * bz;
      out[2] = az * bw + aw * bz + ax * by - ay * bx;
      out[3] = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateX(out, a, rad) {
      rad *= 0.5;
      let ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      let bx = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw + aw * bx;
      out[1] = ay * bw + az * bx;
      out[2] = az * bw - ay * bx;
      out[3] = aw * bw - ax * bx;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateY(out, a, rad) {
      rad *= 0.5;
      let ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      let by = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw - az * by;
      out[1] = ay * bw + aw * by;
      out[2] = az * bw + ax * by;
      out[3] = aw * bw - ay * by;
      return out;
    }
    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    function rotateZ(out, a, rad) {
      rad *= 0.5;
      let ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      let bz = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw + ay * bz;
      out[1] = ay * bw - ax * bz;
      out[2] = az * bw + aw * bz;
      out[3] = aw * bw - az * bz;
      return out;
    }
    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {quat} out
     */

    function slerp(out, a, b, t) {
      // benchmarks:
      //    http://jsperf.com/quaternion-slerp-implementations
      let ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      let bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
      let omega, cosom, sinom, scale0, scale1; // calc cosine

      cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

      if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
      } // calculate coefficients


      if (1.0 - cosom > 0.000001) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
      } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
      } // calculate final values


      out[0] = scale0 * ax + scale1 * bx;
      out[1] = scale0 * ay + scale1 * by;
      out[2] = scale0 * az + scale1 * bz;
      out[3] = scale0 * aw + scale1 * bw;
      return out;
    }
    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @returns {quat} out
     */

    function invert$1(out, a) {
      let a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
      let invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

      out[0] = -a0 * invDot;
      out[1] = -a1 * invDot;
      out[2] = -a2 * invDot;
      out[3] = a3 * invDot;
      return out;
    }
    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate conjugate of
     * @returns {quat} out
     */

    function conjugate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a[3];
      return out;
    }
    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {mat3} m rotation matrix
     * @returns {quat} out
     * @function
     */

    function fromMat3(out, m) {
      // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
      // article "Quaternion Calculus and Fast Animation".
      let fTrace = m[0] + m[4] + m[8];
      let fRoot;

      if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w

        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)

        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
      } else {
        // |w| <= 1/2
        let i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        let j = (i + 1) % 3;
        let k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
      }

      return out;
    }
    /**
     * Creates a quaternion from the given euler angle x, y, z.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} euler Angles to rotate around each axis in degrees.
     * @param {String} order detailing order of operations. Default 'XYZ'.
     * @returns {quat} out
     * @function
     */

    function fromEuler(out, euler, order = 'YXZ') {
      let sx = Math.sin(euler[0] * 0.5);
      let cx = Math.cos(euler[0] * 0.5);
      let sy = Math.sin(euler[1] * 0.5);
      let cy = Math.cos(euler[1] * 0.5);
      let sz = Math.sin(euler[2] * 0.5);
      let cz = Math.cos(euler[2] * 0.5);

      if (order === 'XYZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
      } else if (order === 'YXZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
      } else if (order === 'ZXY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
      } else if (order === 'ZYX') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
      } else if (order === 'YZX') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
      } else if (order === 'XZY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
      }

      return out;
    }
    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the source quaternion
     * @returns {quat} out
     * @function
     */

    const copy$3 = copy$2;
    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */

    const set$3 = set$2;
    /**
     * Calculates the dot product of two quat's
     *
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */

    const dot$2 = dot$1;
    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */

    const normalize$2 = normalize$1;

    class Quat extends Array {
      constructor(x = 0, y = 0, z = 0, w = 1) {
        super(x, y, z, w);
        this.onChange = void 0;

        this.onChange = () => {};

        return this;
      }

      get x() {
        return this[0];
      }

      get y() {
        return this[1];
      }

      get z() {
        return this[2];
      }

      get w() {
        return this[3];
      }

      set x(v) {
        this[0] = v;
        this.onChange();
      }

      set y(v) {
        this[1] = v;
        this.onChange();
      }

      set z(v) {
        this[2] = v;
        this.onChange();
      }

      set w(v) {
        this[3] = v;
        this.onChange();
      }

      identity() {
        identity$1(this);
        this.onChange();
        return this;
      }

      set(x, y, z, w) {
        if (x.length) return this.copy(x);
        set$3(this, x, y, z, w);
        this.onChange();
        return this;
      }

      rotateX(a) {
        rotateX(this, this, a);
        this.onChange();
        return this;
      }

      rotateY(a) {
        rotateY(this, this, a);
        this.onChange();
        return this;
      }

      rotateZ(a) {
        rotateZ(this, this, a);
        this.onChange();
        return this;
      }

      inverse(q = this) {
        invert$1(this, q);
        this.onChange();
        return this;
      }

      conjugate(q = this) {
        conjugate(this, q);
        this.onChange();
        return this;
      }

      copy(q) {
        copy$3(this, q);
        this.onChange();
        return this;
      }

      normalize(q = this) {
        normalize$2(this, q);
        this.onChange();
        return this;
      }

      multiply(qA, qB) {
        if (qB) {
          multiply$2(this, qA, qB);
        } else {
          multiply$2(this, this, qA);
        }

        this.onChange();
        return this;
      }

      dot(v) {
        return dot$2(this, v);
      }

      fromMatrix3(matrix3) {
        fromMat3(this, matrix3);
        this.onChange();
        return this;
      }

      fromEuler(euler) {
        fromEuler(this, euler, euler.order);
        return this;
      }

      fromAxisAngle(axis, a) {
        setAxisAngle(this, axis, a);
        return this;
      }

      slerp(q, t) {
        slerp(this, this, q, t);
        return this;
      }

      fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        return this;
      }

      toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
      }

    }

    // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
    function fromRotationMatrix(out, m, order = 'YXZ') {
      if (order === 'XYZ') {
        out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));

        if (Math.abs(m[8]) < 0.99999) {
          out[0] = Math.atan2(-m[9], m[10]);
          out[2] = Math.atan2(-m[4], m[0]);
        } else {
          out[0] = Math.atan2(m[6], m[5]);
          out[2] = 0;
        }
      } else if (order === 'YXZ') {
        out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));

        if (Math.abs(m[9]) < 0.99999) {
          out[1] = Math.atan2(m[8], m[10]);
          out[2] = Math.atan2(m[1], m[5]);
        } else {
          out[1] = Math.atan2(-m[2], m[0]);
          out[2] = 0;
        }
      } else if (order === 'ZXY') {
        out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));

        if (Math.abs(m[6]) < 0.99999) {
          out[1] = Math.atan2(-m[2], m[10]);
          out[2] = Math.atan2(-m[4], m[5]);
        } else {
          out[1] = 0;
          out[2] = Math.atan2(m[1], m[0]);
        }
      } else if (order === 'ZYX') {
        out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));

        if (Math.abs(m[2]) < 0.99999) {
          out[0] = Math.atan2(m[6], m[10]);
          out[2] = Math.atan2(m[1], m[0]);
        } else {
          out[0] = 0;
          out[2] = Math.atan2(-m[4], m[5]);
        }
      } else if (order === 'YZX') {
        out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));

        if (Math.abs(m[1]) < 0.99999) {
          out[0] = Math.atan2(-m[9], m[5]);
          out[1] = Math.atan2(-m[2], m[0]);
        } else {
          out[0] = 0;
          out[1] = Math.atan2(m[8], m[10]);
        }
      } else if (order === 'XZY') {
        out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));

        if (Math.abs(m[4]) < 0.99999) {
          out[0] = Math.atan2(m[6], m[5]);
          out[1] = Math.atan2(m[8], m[0]);
        } else {
          out[0] = Math.atan2(-m[9], m[10]);
          out[1] = 0;
        }
      }

      return out;
    }

    const tmpMat4 = new Mat4();
    class Euler extends Array {
      constructor(x = 0, y = x, z = x, order = 'YXZ') {
        super(x, y, z);
        this.onChange = void 0;
        this.order = void 0;
        this.order = order;

        this.onChange = () => {};

        return this;
      }

      get x() {
        return this[0];
      }

      get y() {
        return this[1];
      }

      get z() {
        return this[2];
      }

      set x(v) {
        this[0] = v;
        this.onChange();
      }

      set y(v) {
        this[1] = v;
        this.onChange();
      }

      set z(v) {
        this[2] = v;
        this.onChange();
      }

      set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        this[0] = x;
        this[1] = y;
        this[2] = z;
        this.onChange();
        return this;
      }

      copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        this.onChange();
        return this;
      }

      reorder(order) {
        this.order = order;
        this.onChange();
        return this;
      }

      fromRotationMatrix(m, order = this.order) {
        fromRotationMatrix(this, m, order);
        return this;
      }

      fromQuaternion(q, order = this.order) {
        tmpMat4.fromQuaternion(q);
        return this.fromRotationMatrix(tmpMat4, order);
      }

    }

    class Transform {
      constructor() {
        this.parent = void 0;
        this.children = void 0;
        this.visible = void 0;
        this.matrix = void 0;
        this.worldMatrix = void 0;
        this.matrixAutoUpdate = void 0;
        this.worldMatrixNeedsUpdate = void 0;
        this.position = void 0;
        this.scale = void 0;
        this.up = void 0;
        this.quaternion = void 0;
        this.rotation = void 0;
        this.parent = null;
        this.children = [];
        this.visible = true;
        this.matrix = new Mat4();
        this.worldMatrix = new Mat4();
        this.matrixAutoUpdate = true;
        this.up = new Vec3(0, 1, 0);
        this.position = new Vec3();
        this.scale = new Vec3(1);
        this.quaternion = new Quat();
        this.rotation = new Euler();

        this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);

        this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
      }

      setParent(parent, notifyParent = true) {
        if (notifyParent && this.parent && parent !== this.parent) this.parent.removeChild(this, false);
        this.parent = parent;
        if (notifyParent && parent) parent.addChild(this, false);
      }

      addChild(child, notifyChild = true) {
        if (!~this.children.indexOf(child)) this.children.push(child);
        if (notifyChild) child.setParent(this, false);
      }

      removeChild(child, notifyChild = true) {
        if (!!~this.children.indexOf(child)) this.children.splice(this.children.indexOf(child), 1);
        if (notifyChild) child.setParent(null, false);
      }

      updateMatrixWorld(force) {
        if (this.matrixAutoUpdate) this.updateMatrix();

        if (this.worldMatrixNeedsUpdate || force) {
          if (this.parent === null) this.worldMatrix.copy(this.matrix);else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
          this.worldMatrixNeedsUpdate = false;
          force = true;
        }

        for (let i = 0, l = this.children.length; i < l; i++) {
          this.children[i].updateMatrixWorld(force);
        }
      }

      updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale);
        this.worldMatrixNeedsUpdate = true;
      }

      traverse(callback) {
        // Return true in callback to stop traversing children
        if (callback(this)) return;

        for (let i = 0, l = this.children.length; i < l; i++) {
          this.children[i].traverse(callback);
        }
      }

      decompose() {
        this.matrix.getTranslation(this.position);
        this.matrix.getRotation(this.quaternion);
        this.matrix.getScaling(this.scale);
        this.rotation.fromQuaternion(this.quaternion);
      }

      lookAt(target, invert = false) {
        if (invert) this.matrix.lookAt(this.position, target, this.up);else this.matrix.lookAt(target, this.position, this.up);
        this.matrix.getRotation(this.quaternion);
        this.rotation.fromQuaternion(this.quaternion);
      }

    }

    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @param {mat3} out the receiving 3x3 matrix
     * @param {mat4} a   the source 4x4 matrix
     * @returns {mat3} out
     */

    function fromMat4(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[4];
      out[4] = a[5];
      out[5] = a[6];
      out[6] = a[8];
      out[7] = a[9];
      out[8] = a[10];
      return out;
    }
    /**
     * Calculates a 3x3 matrix from the given quaternion
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat3} out
     */

    function fromQuat$1(out, q) {
      let x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      let x2 = x + x;
      let y2 = y + y;
      let z2 = z + z;
      let xx = x * x2;
      let yx = y * x2;
      let yy = y * y2;
      let zx = z * x2;
      let zy = z * y2;
      let zz = z * z2;
      let wx = w * x2;
      let wy = w * y2;
      let wz = w * z2;
      out[0] = 1 - yy - zz;
      out[3] = yx - wz;
      out[6] = zx + wy;
      out[1] = yx + wz;
      out[4] = 1 - xx - zz;
      out[7] = zy - wx;
      out[2] = zx - wy;
      out[5] = zy + wx;
      out[8] = 1 - xx - yy;
      return out;
    }
    /**
     * Copy the values from one mat3 to another
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */

    function copy$4(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    }
    /**
     * Set the components of a mat3 to the given values
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */

    function set$4(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m10;
      out[4] = m11;
      out[5] = m12;
      out[6] = m20;
      out[7] = m21;
      out[8] = m22;
      return out;
    }
    /**
     * Set a mat3 to the identity matrix
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */

    function identity$2(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 1;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    }
    /**
     * Inverts a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */

    function invert$2(out, a) {
      let a00 = a[0],
          a01 = a[1],
          a02 = a[2];
      let a10 = a[3],
          a11 = a[4],
          a12 = a[5];
      let a20 = a[6],
          a21 = a[7],
          a22 = a[8];
      let b01 = a22 * a11 - a12 * a21;
      let b11 = -a22 * a10 + a12 * a20;
      let b21 = a21 * a10 - a11 * a20; // Calculate the determinant

      let det = a00 * b01 + a01 * b11 + a02 * b21;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = b01 * det;
      out[1] = (-a22 * a01 + a02 * a21) * det;
      out[2] = (a12 * a01 - a02 * a11) * det;
      out[3] = b11 * det;
      out[4] = (a22 * a00 - a02 * a20) * det;
      out[5] = (-a12 * a00 + a02 * a10) * det;
      out[6] = b21 * det;
      out[7] = (-a21 * a00 + a01 * a20) * det;
      out[8] = (a11 * a00 - a01 * a10) * det;
      return out;
    }
    /**
     * Multiplies two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */

    function multiply$3(out, a, b) {
      let a00 = a[0],
          a01 = a[1],
          a02 = a[2];
      let a10 = a[3],
          a11 = a[4],
          a12 = a[5];
      let a20 = a[6],
          a21 = a[7],
          a22 = a[8];
      let b00 = b[0],
          b01 = b[1],
          b02 = b[2];
      let b10 = b[3],
          b11 = b[4],
          b12 = b[5];
      let b20 = b[6],
          b21 = b[7],
          b22 = b[8];
      out[0] = b00 * a00 + b01 * a10 + b02 * a20;
      out[1] = b00 * a01 + b01 * a11 + b02 * a21;
      out[2] = b00 * a02 + b01 * a12 + b02 * a22;
      out[3] = b10 * a00 + b11 * a10 + b12 * a20;
      out[4] = b10 * a01 + b11 * a11 + b12 * a21;
      out[5] = b10 * a02 + b11 * a12 + b12 * a22;
      out[6] = b20 * a00 + b21 * a10 + b22 * a20;
      out[7] = b20 * a01 + b21 * a11 + b22 * a21;
      out[8] = b20 * a02 + b21 * a12 + b22 * a22;
      return out;
    }
    /**
     * Translate a mat3 by the given vector
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to translate
     * @param {vec2} v vector to translate by
     * @returns {mat3} out
     */

    function translate$1(out, a, v) {
      let a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          x = v[0],
          y = v[1];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a10;
      out[4] = a11;
      out[5] = a12;
      out[6] = x * a00 + y * a10 + a20;
      out[7] = x * a01 + y * a11 + a21;
      out[8] = x * a02 + y * a12 + a22;
      return out;
    }
    /**
     * Rotates a mat3 by the given angle
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */

    function rotate$1(out, a, rad) {
      let a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          s = Math.sin(rad),
          c = Math.cos(rad);
      out[0] = c * a00 + s * a10;
      out[1] = c * a01 + s * a11;
      out[2] = c * a02 + s * a12;
      out[3] = c * a10 - s * a00;
      out[4] = c * a11 - s * a01;
      out[5] = c * a12 - s * a02;
      out[6] = a20;
      out[7] = a21;
      out[8] = a22;
      return out;
    }
    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat3} out
     **/

    function scale$2(out, a, v) {
      let x = v[0],
          y = v[1];
      out[0] = x * a[0];
      out[1] = x * a[1];
      out[2] = x * a[2];
      out[3] = y * a[3];
      out[4] = y * a[4];
      out[5] = y * a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    }
    /**
     * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
     *
     * @param {mat3} out mat3 receiving operation result
     * @param {mat4} a Mat4 to derive the normal matrix from
     *
     * @returns {mat3} out
     */

    function normalFromMat4(out, a) {
      let a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      let a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      let a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      let a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      let b00 = a00 * a11 - a01 * a10;
      let b01 = a00 * a12 - a02 * a10;
      let b02 = a00 * a13 - a03 * a10;
      let b03 = a01 * a12 - a02 * a11;
      let b04 = a01 * a13 - a03 * a11;
      let b05 = a02 * a13 - a03 * a12;
      let b06 = a20 * a31 - a21 * a30;
      let b07 = a20 * a32 - a22 * a30;
      let b08 = a20 * a33 - a23 * a30;
      let b09 = a21 * a32 - a22 * a31;
      let b10 = a21 * a33 - a23 * a31;
      let b11 = a22 * a33 - a23 * a32; // Calculate the determinant

      let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      return out;
    }

    class Mat3 extends Array {
      constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
        super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
      }

      set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00.length) return this.copy(m00);
        set$4(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
      }

      translate(v, m = this) {
        translate$1(this, m, v);
        return this;
      }

      rotate(v, m = this) {
        rotate$1(this, m, v);
        return this;
      }

      scale(v, m = this) {
        scale$2(this, m, v);
        return this;
      }

      multiply(ma, mb) {
        if (mb) {
          multiply$3(this, ma, mb);
        } else {
          multiply$3(this, this, ma);
        }

        return this;
      }

      identity() {
        identity$2(this);
        return this;
      }

      copy(m) {
        copy$4(this, m);
        return this;
      }

      fromMatrix4(m) {
        fromMat4(this, m);
        return this;
      }

      fromQuaternion(q) {
        fromQuat$1(this, q);
        return this;
      }

      fromBasis(vec3a, vec3b, vec3c) {
        this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
        return this;
      }

      inverse(m = this) {
        invert$2(this, m);
        return this;
      }

      getNormalMatrix(m) {
        normalFromMat4(this, m);
        return this;
      }

    }

    let ID$3 = 0;
    class Mesh extends Transform {
      // raycast.ts
      constructor(gl, {
        geometry,
        program,
        mode = gl.TRIANGLES,
        frustumCulled = true,
        renderOrder = 0
      } = {}) {
        super();
        this.name = void 0;
        this.numInstances = void 0;
        this.gl = void 0;
        this.id = void 0;
        this.geometry = void 0;
        this.program = void 0;
        this.mode = void 0;
        this.frustumCulled = void 0;
        this.renderOrder = void 0;
        this.modelViewMatrix = void 0;
        this.normalMatrix = void 0;
        this.beforeRenderCallbacks = void 0;
        this.afterRenderCallbacks = void 0;
        this.hit = null;
        if (!gl.canvas) console.error('gl not passed as first argument to Mesh');
        this.gl = gl;
        this.id = ID$3++;
        this.geometry = geometry;
        this.program = program;
        this.mode = mode; // Used to skip frustum culling

        this.frustumCulled = frustumCulled; // Override sorting to force an order

        this.renderOrder = renderOrder;
        this.modelViewMatrix = new Mat4();
        this.normalMatrix = new Mat3();
        this.beforeRenderCallbacks = [];
        this.afterRenderCallbacks = [];
      }

      onBeforeRender(f) {
        this.beforeRenderCallbacks.push(f);
        return this;
      }

      onAfterRender(f) {
        this.afterRenderCallbacks.push(f);
        return this;
      }

      draw({
        camera
      } = {}) {
        this.beforeRenderCallbacks.forEach(f => f && f({
          mesh: this,
          camera
        })); // Set the matrix uniforms

        if (camera) {
          // Add empty matrix uniforms to program if unset
          if (!this.program.uniforms.modelMatrix) {
            Object.assign(this.program.uniforms, {
              modelMatrix: {
                value: null
              },
              viewMatrix: {
                value: null
              },
              modelViewMatrix: {
                value: null
              },
              normalMatrix: {
                value: null
              },
              projectionMatrix: {
                value: null
              },
              cameraPosition: {
                value: null
              }
            });
          } // Set the matrix uniforms


          this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
          this.program.uniforms.cameraPosition.value = camera.worldPosition;
          this.program.uniforms.viewMatrix.value = camera.viewMatrix;
          this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
          this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
          this.program.uniforms.modelMatrix.value = this.worldMatrix;
          this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
          this.program.uniforms.normalMatrix.value = this.normalMatrix;
        } // determine if faces need to be flipped - when mesh scaled negatively


        let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({
          flipFaces
        });
        this.geometry.draw({
          mode: this.mode,
          program: this.program
        });
        this.afterRenderCallbacks.forEach(f => f && f({
          mesh: this,
          camera
        }));
      }

    }

    const NAMES = {
      black: '#000000',
      white: '#ffffff',
      red: '#ff0000',
      green: '#00ff00',
      blue: '#0000ff',
      fuchsia: '#ff00ff',
      cyan: '#00ffff',
      yellow: '#ffff00',
      orange: '#ff8000'
    };
    function hexToRGB(hex) {
      if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
      const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!rgb) console.warn(`Unable to convert hex string ${hex} to rgb values`);
      return [parseInt(rgb[1], 16) / 255, parseInt(rgb[2], 16) / 255, parseInt(rgb[3], 16) / 255];
    }
    function numberToRGB(num) {
      num = parseInt(num);
      return [(num >> 16 & 255) / 255, (num >> 8 & 255) / 255, (num & 255) / 255];
    }
    function parseColor(color = null) {
      // Empty
      if (!color) return [0, 0, 0]; // Decimal

      if (arguments.length === 3) return arguments; // Number

      if (!isNaN(color)) return numberToRGB(color); // Hex

      if (color[0] === '#') return hexToRGB(color); // Names

      if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);
      console.warn('Color format not recognised');
      return [0, 0, 0];
    }

    // Constructor and set method accept following formats:
    // new Color() - Empty (defaults to black)
    // new Color([0.2, 0.4, 1.0]) - Decimal Array (or another Color instance)
    // new Color(0.7, 0.0, 0.1) - Decimal RGB values
    // new Color('#ff0000') - Hex string
    // new Color('#ccc') - Short-hand Hex string
    // new Color(0x4f27e8) - Number
    // new Color('red') - Color name string (short list in ColorFunc.js)

    class Color extends Array {
      constructor(color = null) {
        if (Array.isArray(color)) {
          super(...color);
        } else {
          super(...parseColor(...arguments));
        }
      }

      get r() {
        return this[0];
      }

      get g() {
        return this[1];
      }

      get b() {
        return this[2];
      }

      set r(v) {
        this[0] = v;
      }

      set g(v) {
        this[1] = v;
      }

      set b(v) {
        this[2] = v;
      }

      set(color) {
        if (Array.isArray(color)) return this.copy(color);
        return this.copy(parseColor(...arguments));
      }

      copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        return this;
      }

    }

    /**
     * Copy the values from one vec2 to another
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the source vector
     * @returns {vec2} out
     */

    function copy$5(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      return out;
    }
    /**
     * Set the components of a vec2 to the given values
     *
     * @param {vec2} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} out
     */

    function set$5(out, x, y) {
      out[0] = x;
      out[1] = y;
      return out;
    }
    /**
     * Adds two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */

    function add$1(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out;
    }
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */

    function subtract$1(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out;
    }
    /**
     * Multiplies two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */

    function multiply$4(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out;
    }
    /**
     * Divides two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */

    function divide$1(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out;
    }
    /**
     * Scales a vec2 by a scalar number
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec2} out
     */

    function scale$3(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      return out;
    }
    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} distance between a and b
     */

    function distance$1(a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1];
      return Math.sqrt(x * x + y * y);
    }
    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} squared distance between a and b
     */

    function squaredDistance$1(a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1];
      return x * x + y * y;
    }
    /**
     * Calculates the length of a vec2
     *
     * @param {vec2} a vector to calculate length of
     * @returns {Number} length of a
     */

    function length$1(a) {
      var x = a[0],
          y = a[1];
      return Math.sqrt(x * x + y * y);
    }
    /**
     * Calculates the squared length of a vec2
     *
     * @param {vec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */

    function squaredLength$1(a) {
      var x = a[0],
          y = a[1];
      return x * x + y * y;
    }
    /**
     * Negates the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */

    function negate$1(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      return out;
    }
    /**
     * Returns the inverse of the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to invert
     * @returns {vec2} out
     */

    function inverse$1(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      return out;
    }
    /**
     * Normalize a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to normalize
     * @returns {vec2} out
     */

    function normalize$3(out, a) {
      var x = a[0],
          y = a[1];
      var len = x * x + y * y;

      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
      }

      out[0] = a[0] * len;
      out[1] = a[1] * len;
      return out;
    }
    /**
     * Calculates the dot product of two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} dot product of a and b
     */

    function dot$3(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    }
    /**
     * Computes the cross product of two vec2's
     * Note that the cross product returns a scalar
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} cross product of a and b
     */

    function cross$1(a, b) {
      return a[0] * b[1] - a[1] * b[0];
    }
    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec2} out
     */

    function lerp$1(out, a, b, t) {
      var ax = a[0],
          ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out;
    }
    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat3} m matrix to transform with
     * @returns {vec2} out
     */

    function transformMat3(out, a, m) {
      var x = a[0],
          y = a[1];
      out[0] = m[0] * x + m[3] * y + m[6];
      out[1] = m[1] * x + m[4] * y + m[7];
      return out;
    }
    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec2} out
     */

    function transformMat4$1(out, a, m) {
      let x = a[0];
      let y = a[1];
      out[0] = m[0] * x + m[4] * y + m[12];
      out[1] = m[1] * x + m[5] * y + m[13];
      return out;
    }
    /**
     * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
     *
     * @param {vec2} a The first vector.
     * @param {vec2} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */

    function exactEquals$1(a, b) {
      return a[0] === b[0] && a[1] === b[1];
    }

    class Vec2 extends Array {
      constructor(x = 0, y = x) {
        super(x, y);
        return this;
      }

      get x() {
        return this[0];
      }

      get y() {
        return this[1];
      }

      set x(v) {
        this[0] = v;
      }

      set y(v) {
        this[1] = v;
      }

      set(x, y = x) {
        if (x.length) return this.copy(x);
        set$5(this, x, y);
        return this;
      }

      copy(v) {
        copy$5(this, v);
        return this;
      }

      add(va, vb) {
        if (vb) add$1(this, va, vb);else add$1(this, this, va);
        return this;
      }

      sub(va, vb) {
        if (vb) subtract$1(this, va, vb);else subtract$1(this, this, va);
        return this;
      }

      multiply(v) {
        if (v.length) multiply$4(this, this, v);else scale$3(this, this, v);
        return this;
      }

      divide(v) {
        if (v.length) divide$1(this, this, v);else scale$3(this, this, 1 / v);
        return this;
      }

      inverse(v = this) {
        inverse$1(this, v);
        return this;
      } // Can't use 'length' as Array.prototype uses it


      len() {
        return length$1(this);
      }

      distance(v) {
        if (v) return distance$1(this, v);else return length$1(this);
      }

      squaredLen() {
        return this.squaredDistance();
      }

      squaredDistance(v) {
        if (v) return squaredDistance$1(this, v);else return squaredLength$1(this);
      }

      negate(v = this) {
        negate$1(this, v);
        return this;
      }

      cross(va, vb) {
        if (vb) return cross$1(va, vb);
        return cross$1(this, va);
      }

      scale(v) {
        scale$3(this, this, v);
        return this;
      }

      normalize() {
        normalize$3(this, this);
        return this;
      }

      dot(v) {
        return dot$3(this, v);
      }

      equals(v) {
        return exactEquals$1(this, v);
      }

      applyMatrix3(mat3) {
        transformMat3(this, this, mat3);
        return this;
      }

      applyMatrix4(mat4) {
        transformMat4$1(this, this, mat4);
        return this;
      }

      lerp(v, a) {
        lerp$1(this, this, v, a);
      }

      clone() {
        return new Vec2(this[0], this[1]);
      }

      fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        return this;
      }

      toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        return a;
      }

    }

    const tmp = new Vec3();
    class Polyline {
      // uniforms
      constructor(gl, {
        points,
        // Array of Vec3s
        vertex = defaultVertex,
        fragment = defaultFragment,
        uniforms = {},
        attributes = {} // For passing in custom attribs

      }) {
        this.gl = void 0;
        this.points = void 0;
        this.count = void 0;
        this.position = void 0;
        this.prev = void 0;
        this.next = void 0;
        this.geometry = void 0;
        this.resolution = void 0;
        this.dpr = void 0;
        this.thickness = void 0;
        this.color = void 0;
        this.miter = void 0;
        this.program = void 0;
        this.mesh = void 0;
        this.gl = gl;
        this.points = points;
        this.count = points.length; // Create buffers

        this.position = new Float32Array(this.count * 3 * 2);
        this.prev = new Float32Array(this.count * 3 * 2);
        this.next = new Float32Array(this.count * 3 * 2);
        const side = new Float32Array(this.count * 1 * 2);
        const uv = new Float32Array(this.count * 2 * 2);
        const index = new Uint16Array((this.count - 1) * 3 * 2); // Set static buffers

        for (let i = 0; i < this.count; i++) {
          side.set([-1, 1], i * 2);
          const v = i / (this.count - 1);
          uv.set([0, v, 1, v], i * 4);
          if (i === this.count - 1) continue;
          const ind = i * 2;
          index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
          index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
        }

        const geometry = this.geometry = new Geometry(gl, Object.assign(attributes, {
          position: {
            size: 3,
            data: this.position
          },
          prev: {
            size: 3,
            data: this.prev
          },
          next: {
            size: 3,
            data: this.next
          },
          side: {
            size: 1,
            data: side
          },
          uv: {
            size: 2,
            data: uv
          },
          index: {
            size: 1,
            data: index
          }
        })); // Populate dynamic buffers

        this.updateGeometry();
        if (!uniforms.uResolution) this.resolution = uniforms.uResolution = {
          value: new Vec2()
        };
        if (!uniforms.uDPR) this.dpr = uniforms.uDPR = {
          value: 1
        };
        if (!uniforms.uThickness) this.thickness = uniforms.uThickness = {
          value: 1
        };
        if (!uniforms.uColor) this.color = uniforms.uColor = {
          value: new Color('#000')
        };
        if (!uniforms.uMiter) this.miter = uniforms.uMiter = {
          value: 1
        }; // Set size uniforms' values

        this.resize();
        const program = this.program = new Program(gl, {
          vertex,
          fragment,
          uniforms
        });
        this.mesh = new Mesh(gl, {
          geometry,
          program
        });
      }

      updateGeometry() {
        this.points.forEach((p, i) => {
          p.toArray(this.position, i * 3 * 2);
          p.toArray(this.position, i * 3 * 2 + 3);

          if (!i) {
            // If first point, calculate prev using the distance to 2nd point
            tmp.copy(p).sub(this.points[i + 1]).add(p);
            tmp.toArray(this.prev, i * 3 * 2);
            tmp.toArray(this.prev, i * 3 * 2 + 3);
          } else {
            p.toArray(this.next, (i - 1) * 3 * 2);
            p.toArray(this.next, (i - 1) * 3 * 2 + 3);
          }

          if (i === this.points.length - 1) {
            // If last point, calculate next using distance to 2nd last point
            tmp.copy(p).sub(this.points[i - 1]).add(p);
            tmp.toArray(this.next, i * 3 * 2);
            tmp.toArray(this.next, i * 3 * 2 + 3);
          } else {
            p.toArray(this.prev, (i + 1) * 3 * 2);
            p.toArray(this.prev, (i + 1) * 3 * 2 + 3);
          }
        });
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.prev.needsUpdate = true;
        this.geometry.attributes.next.needsUpdate = true;
      } // Only need to call if not handling resolution uniforms manually


      resize() {
        // Update automatic uniforms if not overridden
        if (this.resolution) this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height);
        if (this.dpr) this.dpr.value = this.gl.renderer.dpr;
      }

    }
    const defaultVertex =
    /* glsl */
`
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`    ;
    const defaultFragment =
    /* glsl */
`
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`    ;

    const vertex =
    /* glsl */
`
            precision highp float;

            attribute vec3 position;
            attribute vec3 next;
            attribute vec3 prev;
            attribute vec2 uv;
            attribute float side;

            uniform vec2 uResolution;
            uniform float uDPR;
            uniform float uThickness;

            vec4 getPosition() {
                vec4 current = vec4(position, 1);

                vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
                vec2 nextScreen = next.xy * aspect;
                vec2 prevScreen = prev.xy * aspect;
            
                // Calculate the tangent direction
                vec2 tangent = normalize(nextScreen - prevScreen);
            
                // Rotate 90 degrees to get the normal
                vec2 normal = vec2(-tangent.y, tangent.x);
                normal /= aspect;

                // Taper the line to be fatter in the middle, and skinny at the ends using the uv.y
                normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0) );

                // When the points are on top of each other, shrink the line to avoid artifacts.
                float dist = length(nextScreen - prevScreen);
                normal *= smoothstep(0.0, 0.02, dist);

                float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
                float pixelWidth = current.w * pixelWidthRatio;
                normal *= pixelWidth * uThickness;
                current.xy -= normal * side;
            
                return current;
            }

            void main() {
                gl_Position = getPosition();
            }
        `    ;
    const renderer = new Renderer({
      dpr: 2
    });
    const gl = renderer.gl;
    document.body.appendChild(gl.canvas);
    gl.clearColor(0.9, 0.9, 0.9, 1);
    const scene = new Transform();
    const lines = [];

    function resize() {
      renderer.setSize(window.innerWidth, window.innerHeight); // We call resize on the polylines to update their resolution uniforms

      lines.forEach(line => line.polyline.resize());
    }

    window.addEventListener('resize', resize, false); // Just a helper function to make the code neater

    function random(a, b) {
      const alpha = Math.random();
      return a * (1.0 - alpha) + b * alpha;
    } // If you're interested in learning about drawing lines with geometry, 
    // go through this detailed article by Matt DesLauriers 
    // https://mattdesl.svbtle.com/drawing-lines-is-hard
    // It's an excellent breakdown of the approaches and their pitfalls.
    // In this example, we're making screen-space polylines. Basically it
    // involves creating a geometry of vertices along a path - with two vertices
    // at each point. Then in the vertex shader, we push each pair apart to
    // give the line some width.
    // We're going to make a number of different coloured lines for fun.


    ['#e09f7d', '#ef5d60', '#ec4067', '#a01a7d', '#311847'].forEach((color, i) => {
      // Store a few values for each lines' spring movement
      const line = {
        spring: random(0.02, 0.1),
        friction: random(0.7, 0.95),
        mouseVelocity: new Vec3(),
        mouseOffset: new Vec3(random(-1, 1) * 0.02)
      }; // Create an array of Vec3s (eg [[0, 0, 0], ...])
      // Note: Only pass in one for each point on the line - the class will handle
      // the doubling of vertices for the polyline effect.

      const count = 20;
      const points = line.points = [];

      for (let i = 0; i < count; i++) points.push(new Vec3()); // Pass in the points, and any custom elements - for example here we've made
      // custom shaders, and accompanying uniforms.


      line.polyline = new Polyline(gl, {
        points,
        vertex,
        uniforms: {
          uColor: {
            value: new Color(color)
          },
          uThickness: {
            value: random(20, 50)
          }
        }
      });
      line.polyline.mesh.setParent(scene);
      lines.push(line);
    }); // Call initial resize after creating the polylines

    resize(); // Add handlers to get mouse position

    const mouse = new Vec3();

    if ('ontouchstart' in window) {
      window.addEventListener('touchstart', updateMouse, false);
      window.addEventListener('touchmove', updateMouse, false);
    } else {
      window.addEventListener('mousemove', updateMouse, false);
    }

    function updateMouse(e) {
      if (e.changedTouches && e.changedTouches.length) {
        e.x = e.changedTouches[0].pageX;
        e.y = e.changedTouches[0].pageY;
      }

      if (e.x === undefined) {
        e.x = e.pageX;
        e.y = e.pageY;
      } // Get mouse value in -1 to 1 range, with y flipped


      mouse.set(e.x / gl.renderer.width * 2 - 1, e.y / gl.renderer.height * -2 + 1, 0);
    }

    const tmp$1 = new Vec3();
    requestAnimationFrame(update);

    function update(t) {
      requestAnimationFrame(update);
      lines.forEach(line => {
        // Update polyline input points
        for (let i = line.points.length - 1; i >= 0; i--) {
          if (!i) {
            // For the first point, spring ease it to the mouse position
            tmp$1.copy(mouse).add(line.mouseOffset).sub(line.points[i]).multiply(line.spring);
            line.mouseVelocity.add(tmp$1).multiply(line.friction);
            line.points[i].add(line.mouseVelocity);
          } else {
            // The rest of the points ease to the point in front of them, making a line
            line.points[i].lerp(line.points[i - 1], 0.9);
          }
        }

        line.polyline.updateGeometry();
      });
      renderer.render({
        scene
      });
    }

    document.getElementsByClassName('Info')[0].innerHTML = 'Polylines';
    document.title = 'OGL • Polylines';

}());
